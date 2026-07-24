// Buffers observable DOM updates so a state-derived await can hold them past the
// render flush. Value writes are keyed by their target node, so a later render
// supersedes the earlier pending value in place (last-value-wins, matching the
// render queue's own dedup) with no per-write closure. They drain before the
// structural commits — branch attach/detach that runs as one atomic step — so
// existing nodes reach their final values before branches are inserted or moved.
// Everything tree-shakes away until `_enable_hold` runs (see queue.ts).
export let holding: 0 | 1 | undefined;
// Stays set once holding has run, so paths only a superseding render can reach
// fold away with the rest of the feature (`holding` is 0 during the drain).
export let holdEnabled: 1 | undefined;

type HeldNode = {
  data?: string;
  text?: string;
  attrs?: { [name: string]: string | undefined };
  classes?: { [name: string]: boolean };
  styles?: { [name: string]: string };
};

type HeldTarget = Record<string, any>;
type HeldCommit = {
  scope: HeldTarget;
  key: string;
  from: any;
  to: any;
  apply(from: any, to: any): void;
};

let heldNodes: Map<Node, HeldNode> | undefined;
let heldCommits: HeldCommit[] | undefined;

export function holdData(node: Text | Comment, value: string) {
  heldNode(node).data = value;
}

export function holdText(node: Node, value: string) {
  heldNode(node).text = value;
}

export function holdAttr(el: Element, name: string, value: string | undefined) {
  (heldNode(el).attrs ||= {})[name] = value;
}

export function holdClass(el: Element, name: string, value: boolean) {
  (heldNode(el).classes ||= {})[name] = value;
}

export function holdStyle(el: HTMLElement, name: string, value: string) {
  (heldNode(el).styles ||= {})[name] = value;
}

// A one-shot commit with no construct to supersede it (the `<await>` state
// machine's own transitions), ordered with the keyed commits below.
const unkeyed: HeldTarget = {};
export function _hold(commit: () => void) {
  (heldCommits ||= []).push({
    scope: unkeyed,
    key: "",
    from: 0,
    to: 0,
    apply: commit,
  });
}

// Hold a construct's visible commit, keyed per construct instance. The first
// hold captures the state that is actually committed to the DOM; a later render
// supersedes only the target, so the drain performs a single swap from what is
// on screen to the latest value instead of replaying every intermediate step.
// `drop` releases the state the superseded target had built but never showed.
export function holdCommit<F, T>(
  scope: HeldTarget,
  key: string,
  from: F,
  to: T,
  apply: (from: F, to: T) => void,
  drop?: (superseded: T, to: T, from: F) => void,
) {
  const held = scope[key] as HeldCommit | undefined;
  if (held) {
    drop?.(held.to, to, held.from);
    held.to = to;
  } else {
    (heldCommits ||= []).push(
      (scope[key] = { scope, key, from, to, apply } as HeldCommit),
    );
  }
}

// The pending text for a node, for helpers that read their own last write back
// (the live DOM lags while holding).
export function heldText(node: Node) {
  return heldNodes?.get(node)?.text;
}

// Wraps the render flush: hold observable updates while rendering, then apply the
// value writes, then the structural commits, before effects run.
export function holdRenders(runRenders: () => void) {
  holdEnabled = holding = 1;
  runRenders();
  holding = 0;
  if (heldNodes) {
    const nodes = heldNodes;
    heldNodes = undefined;
    nodes.forEach(applyHeldNode);
  }
  if (heldCommits) {
    const commits = heldCommits;
    heldCommits = undefined;
    for (const commit of commits) {
      commit.scope[commit.key] = 0;
      commit.apply(commit.from, commit.to);
    }
  }
}

function heldNode(node: Node) {
  const nodes = (heldNodes ||= new Map());
  let held = nodes.get(node);
  if (!held) nodes.set(node, (held = {}));
  return held;
}

// Re-check against the live node so a value that ends up unchanged (or was
// reverted before the drain) costs no DOM write.
function applyHeldNode(held: HeldNode, node: Node) {
  if (held.data !== undefined && (node as CharacterData).data !== held.data) {
    (node as CharacterData).data = held.data;
  }
  if (
    held.text !== undefined &&
    (node as ChildNode).textContent !== held.text
  ) {
    (node as ChildNode).textContent = held.text;
  }
  for (const name in held.attrs) {
    const value = held.attrs[name];
    if ((node as Element).getAttribute(name) != value) {
      if (value === undefined) {
        (node as Element).removeAttribute(name);
      } else {
        (node as Element).setAttribute(name, value);
      }
    }
  }
  for (const name in held.classes) {
    (node as Element).classList.toggle(name, held.classes[name]);
  }
  for (const name in held.styles) {
    (node as HTMLElement).style.setProperty(name, held.styles[name]);
  }
}
