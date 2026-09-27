// Opening line for the contact form's message box, keyed by the `interest`
// query param. To prefill from a new page: add an entry here, then link to
// contactHref('<key>'). public/scripts/contact-prefill.js reads this map from
// the form's data-interests attribute and holds no copy of its own.
export const contactInterests = {
  rescue: "I'm interested in a website rescue.",
  'new-build': "I'm interested in a new website.",
  checkup: "I'm interested in a site checkup.",
  'care-plan': "I'm interested in a care plan.",
  'ai-consulting': "I'm interested in your AI consulting services.",
} as const;

export type ContactInterest = keyof typeof contactInterests;

export const contactHref = (interest: ContactInterest) => `/contact/?interest=${interest}`;
