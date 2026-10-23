// Wraps markdown tables in a keyboard-focusable region. On small screens the
// wrapper scrolls sideways (see `.table-scroll` in global.css), and a scroll
// container with no focusable content is unreachable without a mouse (WCAG 2.1.1).
const HEADING = /^h[1-6]$/;

function textOf(node) {
  if (node.type === 'text') return node.value;
  return (node.children ?? []).map(textOf).join('');
}

function elements(node, tagName) {
  return (node?.children ?? []).filter((child) => child.type === 'element' && child.tagName === tagName);
}

// Copies each column's header text onto its body cells as `data-label`, so a
// table stacked into blocks on small screens (`.prose-stack-tables`) can still
// say which column each cell came from.
function labelCells(table) {
  const [head] = elements(table, 'thead');
  const [headRow] = elements(head, 'tr');
  const labels = elements(headRow, 'th').map((th) => textOf(th).trim());
  for (const body of elements(table, 'tbody')) {
    for (const row of elements(body, 'tr')) {
      elements(row, 'td').forEach((td, index) => {
        if (labels[index]) td.properties = { ...td.properties, dataLabel: labels[index] };
      });
    }
  }
}

function wrapTables(parent) {
  let heading = null;
  parent.children = parent.children.map((child) => {
    if (child.type !== 'element') return child;
    if (HEADING.test(child.tagName)) heading = textOf(child).trim();
    if (child.tagName !== 'table') {
      wrapTables(child);
      return child;
    }
    labelCells(child);
    return {
      type: 'element',
      tagName: 'div',
      properties: {
        className: ['table-scroll'],
        role: 'region',
        tabIndex: 0,
        ariaLabel: heading ? `${heading} table` : 'Table',
      },
      children: [child],
    };
  });
}

export default function rehypeScrollableTables() {
  return (tree) => wrapTables(tree);
}
