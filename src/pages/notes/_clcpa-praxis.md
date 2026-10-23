## The short version

Your plan says what the app is built from. It says almost nothing about how a change gets from an idea to merged code when an agent is writing most of it. That part is where all of my lessons came from. The stack choices are fine. What I'd add:

- **Two human gates per change, and only two.** You approve a written brief before any code exists, and you approve the PR before it posts. Everything between runs without you.
- **Research before code, and it's allowed to say no.** Somebody (an agent is fine) opens the code and checks that the plan applies. "This doesn't work as written, here's the proof" is a successful result.
- **Tests you've watched fail.** Agents write green tests that prove nothing. Every test has to fail for the right reason before the fix goes in.
- **Evidence attached, never narrated.** Before and after Playwright captures on the PR, real command output in the agent's report, and an explicit list of what wasn't verified.
- **Rules that are enforced, not asked for.** A deny list and hooks that stop the dangerous commands, because prose in a prompt holds for a thousand runs and not the next one.
- **Review lenses built from your own misses,** with every finding checked before anyone acts on it.

## What the plan covers and what it leaves open

| Covered | Open |
|---|---|
| Framework, UI library, persistence, logging | What a change looks like from request to merged PR |
| "Follow TDD" | How you know a test is real, and which test type a change gets |
| Tenant isolation "enforced by the API" | How you stop the Blazor host from going around the API |
| Isolated Postgres for integration tests | Isolation for parallel agents, not just parallel tests |
| xUnit, bUnit, WebApplicationFactory, Playwright | What counts as proof on a PR |
| Reuse LightningWare's standards | Where those standards are written down so an agent can read them |
| Fork of LightningWare | Whether you track upstream, and how you record where you diverge |
| | Who approves what, and what an agent may never do |

None of the open column is a stack decision. All of it is the stuff that decides whether agent-written code survives review.

## The pipeline, phase by phase

I've run this on two very different codebases (a Rails and React marketplace with five repos, and a TypeScript game app). They were written months apart and ended up with the same nine phases. I'd expect it to fit yours with little change.

| Phase | What happens | Gate |
|---|---|---|
| 0 · Intake | Gather the ticket, the design, prior work, what else is in flight on the same files. Then ask only what's left: what's in scope, and more importantly what's out | Hard stop if scope isn't confirmed |
| 1 · Claim | Mark the ticket as taken, cut the branch, set up the isolated environment, open a working-notes file for this change | |
| 2 · Research | One agent traces the plan through the actual code and returns an implementation plan with `file:line` anchors, the test decision, and risks | May end the pipeline |
| 3 · Brief | Write the instructions the dev agent will follow. Check that every file path in it resolves ("13 of 13") | **Gate 1: you approve the brief** |
| 4 · Dev | Agent does TDD against the brief. Commits only. It does not push and does not open the PR | |
| 5 · Verify | A separate agent drives the browser and captures before and after with the same flow | |
| 5.5 · Review | Several reviewers in parallel, each finding checked, only the unambiguous ones applied | |
| 6 · PR | Body follows your template, required checks named one by one, escalated findings in front of you | **Gate 2: you approve the PR body** |
| 7 · Close | Log what shipped, what stayed unverified, and the refs it was built on. The same day | |

A few rules sit across all of it.

**The main session orchestrates and doesn't do the reading.** It holds the plan, the phase state, and the judgment. Agents do the volume (reading a design, tracing code, running tests) and come back with a short report. If a diff, a test log, or a whole file lands in the main session, it's spending the context the decisions need.

**State lives in a file, not the conversation.** Each change gets a working-notes doc with a dated log. Every phase writes its result there before the next one starts. When a session dies, re-running reads the last log entry and picks up. A repo file or a ticket comment works as well as anything fancier.

**Pin the ref.** Every phase that reads code reports the branch and commit it read. I caught a checkout sitting 53 commits behind main once, which would have made everything read from it wrong. A finding with no ref can't be re-checked later.

**The orchestrator owns the branch and the push.** The dev agent commits. The orchestrator reads its report, checks the diff against the brief, checks commit messages for anything you don't want in them, and then pushes. That turns the agent's self-report into an actual check.

**Blockers mean report and stop.** Never let an agent route around a refusal. A blocked agent that's allowed to improvise will find the same command inside a container.

## What every brief carries

This is the single most useful thing to copy. A dispatched agent knows nothing you didn't write down.

- **Intent.** What done looks like, in your terms.
- **Context it can't see.** Anything from your head or the conversation.
- **Already ruled out, with dates.** Say plainly that the agent may falsify any of it. An undated premise you tell an agent not to test becomes its blind spot.
- **Out of scope.** The more valuable half.
- **Acceptance.** A falsifiable done-when. A plausible answer with no confirmed mechanism counts as a failure.
- **Stop condition.** What ends it if the answer isn't found. Decide this before it starts, not after it stalls.
- **The check command it's allowed to run,** and the assertions any rewrite has to keep.
- **Reference files by path, never pasted.** Pasting conventions into each brief is how they drift.

And every report back carries what it did, every verification command with its real output, and an explicit list of what it didn't verify. "Should work" and "appears correct" count as failures.

## Before the first agent run on a fork

A fork has a trap a greenfield app doesn't. Agents copy whatever pattern sits nearest. Every ERP module you keep but don't use is an example an agent will happily follow.

**Write LightningWare's standards into the repo.** An `AGENTS.md` at the root (with `CLAUDE.md` pointing at it if you use Claude Code) that says how code is laid out, which wrapper components to use, how API calls are made, how tests are named and run. Keep it short, a few KB. Agents read it every session; your head doesn't travel. One trap: a subagent spawned from somewhere else doesn't load the repo's file. If you dispatch agents, either launch them from inside the repo or pass the file's path in the brief.

**Decide whether you track upstream.** If LightningWare keeps moving and you want its fixes, every change you make to a shared file is a future merge conflict. Either way, keep a short record of each place Praxis deliberately diverges (an ADR per divergence is plenty), because "we changed this on purpose" and "an agent changed this" look the same six months later. If the codebase already has ADRs or a docs folder, extend that rather than starting a second doc tree beside it.

**Quarantine or delete the ERP modules Praxis doesn't need,** for the copying reason above.

**Name your protected paths now.** Tenant isolation, auth and permissions, EF migrations, anything that touches money or personal data. Any change touching these gets a human reader no matter how small. Write the list into the repo so a script can check it later.

**Make the isolation rule something the build checks.** "Tenant isolation enforced by the API" holds only if the Blazor host can't reach the database without going through it. Blazor Server runs on the server, so injecting a `DbContext` straight into a component is one line and an agent will do it the first time it's convenient. I'd add an architecture test that fails if the Blazor host project references the persistence project. Same idea for tenant filters: if they're EF global query filters, a grep for `IgnoreQueryFilters` belongs in the review checks, and every endpoint gets a test that asks for another tenant's record and expects to be refused.

## TDD with agents: how tests lie

Your plan says follow TDD. Agents will produce something that looks exactly like TDD and proves nothing. Every rule here came from a test that passed when it shouldn't have.

- **Confirm the test fails for the right reason** before the fix. A test that fails because of a typo in the setup isn't red for the reason you care about.
- **Prove the guard can fail.** Revert the fix, or change the threshold, and watch the test go red. I had a timing assertion that could never fail.
- **A suite that stays green after you delete code is a coverage hole,** not a pass.
- **Claim green only from a full, unfiltered run.** A filtered run (`dotnet test --filter` in your world) silently skips the test you just wrote if the filter misses it, and the output still says "passed."
- **A red run only counts as evidence if it can go green.** A test that's red for an environmental reason proves nothing about the code.
- **Assert the thing, not its shadow.** One of ours asserted placement by DOM order, which passes for the right layout and the wrong one. Assert the transition, or the containment.
- **Races and absence get tested with the real condition, not a stub.** And one clean repro of a flaky or timing bug is not a negative result.
- **Committed tests stay on behavior.** Check styling once, by eye or by a one-off script. Specs asserting colors and pixels break on every design change and catch nothing.

**Pick the test type per change, and write the rule down.** You have four (xUnit, bUnit, WebApplicationFactory, Playwright). Without a rule, an agent picks whichever it saw last. Mine would read roughly like this. Domain logic gets xUnit, a component's rendering and events get bUnit, anything crossing the API boundary gets WebApplicationFactory against a real Postgres, and Playwright is for journeys across pages, not for things a cheaper test can prove.

**Isolate per agent, not just per test.** Isolated Postgres for integration tests is the right call. When you run two or three agents at once, each also needs its own git worktree, its own database, and its own ports. At work the queue was never the coding. It was one shared checkout and one shared environment that every change waited on.

## Proving it works

**Before and after, same flow, same data, attached to the PR.** Playwright makes this cheap: one script, run on main and on the branch.

**Decide what "before" means.** For a bug, before is the bug reproduced. For a feature, before is the world without it (flag off, or the entry point missing). Get this wrong and you get two identical screenshots that prove nothing.

**Compare against the design, not just against before.** A before and after pair proves something changed. It doesn't prove it matches the mock.

**Seed to realistic data.** Empty states read as bugs, and reviewers waste time on them.

**Never have an agent type a password.** Generate a logged-in browser state per role once (Playwright's `storageState`), and hand the agent the file.

**Watch for Blazor Server's prerender.** I haven't run Playwright against Blazor myself, but from how it works, a page can render before its circuit is interactive, so a click can land on a page that isn't listening yet. Wait for whatever marks the page interactive before acting, or the flakes will look like bugs.

**Name what wasn't verified.** Real devices, other browsers, anything emulated. Emulated mobile isn't mobile.

## Review

My review step runs four lenses in parallel. Each one comes from a post-mortem, not from a persona ("act as a security expert" produces generic findings):

1. **Test validity.** For every test in the diff, name the code change that would make it fail. If you can't, it isn't a test.
2. **Silent failure.** When this breaks in production, does it fail visibly, and does anyone find out?
3. **Evidence vs narrative.** Does every claim in the PR name its evidence, and was that evidence observed rather than inferred?
4. **Scope and noise.** Is the diff exactly the ticket, with nothing a reader has to skip past?

Then a second pass checks every finding before anyone acts on it. In one review most of the automated findings were false. Only the mechanically unambiguous ones get applied automatically. The rest come to you. Aim for precision over recall: a reviewer that cries wolf gets ignored.

If a review fix changes what renders, the screenshots are stale. Re-run verification. The last change in a task is always the least verified thing in it.

Some numbers, for calibration. I replayed 25 merged PRs where we already knew the bug (18 caught in human review, 7 that shipped and got reverted). A two-reviewer setup on a strong model caught 14 fully and 3 partially, at about $3 a review. The built-in GitHub reviewer, on the 14 it had commented on, caught none fully and 2 partially. Two of its suggestions were the actual cause of the bug. So build your own reviewer and don't trust the default one.

**Size review depth by risk.** Change size times blast radius. Small and low-blast can get a lighter read. Anything on a protected path gets a human no matter how small. Start by labelling PRs this way without changing anything, and only lighten review once the labels have a track record.

## Guardrails

**Enforced beats instructed.** Agents aren't malicious. They're confidently wrong, and they act on whatever they read, including a README or a dependency's install script. So I run three layers, each covering the last one's blind spot:

- **Permission rules** judge the command text. They stop `git reset --hard` before it runs, and they miss anything spelled differently.
- **Hooks that parse the command** close that gap. Mine tokenize, split on `;` and `&&`, and unwrap `sudo`, `env`, and `sh -c` before checking. They're plain Python with unit tests, which is why they travel better than settings do.
- **A sandbox and scoped tokens** judge what the process and the server allow. The permission you never granted catches the rule you forgot to write.

For Praxis, the deny list would at least cover: history rewriting and force pushes, pushes to main, merging and releasing, reading secrets (`~/.ssh`, cloud credentials, user secrets, any production `appsettings`), `dotnet ef database update` against anything that isn't the agent's own database, and package publishing. Use a fine-grained GitHub token with no admin, Actions, or secrets scope.

**Turn the first refusal into a stop.** When I dispatch an agent headless, the first guardrail denial halts the whole run. Without that, a blocked agent reasons its way to another route.

**Log every block.** When a real workflow gets stopped, loosen the narrowest rule that caused it, based on the log and not on a hunch.

**No secret sauce in a prompt.** Every step an agent runs should be a script or command you could run by hand if the agent were down. Skills and prompts orchestrate. The logic lives in scripts in the repo.

## Lessons with the failure attached

The short list, each from something that went wrong:

- **The ticket is wrong more often than the code.** Check the premise at intake. One refactor ticket asserted that one hook should converge on another. It was wrong and cost weeks.
- **Check design criteria against the mock before building.** Two of ours flipped after the PR opened, which cost a commit, a rewrite, new screenshots, and a re-review.
- **Look for other in-flight work on the same files,** not just open PRs. Two plans that don't name each other ship conflicting behavior.
- **Price work after writing the implementation plan against the code,** not before. Our first epic estimate ran about 40% high. Hold about 15% as a named discovered-scope bucket so an overrun is visible instead of embarrassing.
- **Verify every claim an agent hands you** before acting on it or passing it on, including review findings and "I checked, it's fine."
- **Check that a gate reaches what it claims to cover.** A CI path filter that misses a directory the build imports will skip a deploy silently.
- **Audit every place a new field is read,** not just the one you added it for. A new state field once leaked into a view that was supposed to hide it.
- **Open the PR when the scope is done.** I once had about ten commits and no PR.
- **Write the close-out the day it closes.** A week later the reasoning is gone and all that's left is a link.
- **Write down what you ruled out, not just what you concluded,** with the command and its output. Otherwise the next session re-checks the same paths.
- **Stagger heavy parallel agents and have them write results to disk as they go.** Usage limits kill agents mid-write.

## Where I'd start

1. `AGENTS.md` with LightningWare's standards, the protected-path list, and the test-type rule.
2. The deny list, the hooks, and a scoped token, before any agent runs unattended.
3. The architecture test and the cross-tenant tests, so isolation is checked by the build from day one.
4. Worktree-plus-database isolation so two changes can run at once.
5. Run the pipeline by hand on two or three small changes. Write the brief yourself, review it, watch where it breaks.
6. Only then turn the repeated parts into skills or scripts, and add the review lenses once you have your own misses to build them from.

Under all of it is one idea. An agent gets to claim it knows something only when it can show you how it knows. Most of my rules are versions of that.
