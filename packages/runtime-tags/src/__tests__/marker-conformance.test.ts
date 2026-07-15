import assert from "node:assert/strict";

import { JSDOM } from "jsdom";

import {
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  ResumeSymbol,
  type Scope,
} from "../common/types";

// Enforces the "KEEP IN SYNC" contract between `createVisitBranches` (plus
// the surrounding Node-visit handling) in dom/resume.ts and its deliberate
// fork `walkFragment` in dom/update-fragment.ts: both consume the same
// resume-marker grammar and must produce identical scope trees. Each case
// below builds the same marker stream into two separate DOM containers,
// drives document resume over one and the fragment walker over the other,
// and asserts the normalized scope trees (Owner/ParentBranch/ClosestBranch
// links, StartNode/EndNode pairing by node position and kind, accessor
// bindings) are deep-equal.
//
// The resume path is driven through the real `init()` protocol: the harness
// plays the role of the inline walker runtime (`PERSISTED_WALKER_RUNTIME_CODE`
// in html/inlined-runtimes.ts) by pre-collecting the marker comments in
// document order and expanding `*` node-marker continuations exactly as that
// runtime does, then handing the render data to `self[runtimeId](renderId)`.
// Scopes are captured through the render's own effect machinery (the same
// trick `getUpdateRoot` uses).
//
// Known, intentional asymmetries (from the KEEP IN SYNC comments), asserted
// explicitly where they surface instead of being papered over:
// - deferred-owner linking: resume links a branch-owning scope's
//   ClosestBranch to the enclosing marker branch when that branch ends;
//   walkFragment leaves it for its callers (`applyFragment` and friends
//   default touched scopes to the inserted fragment's branch). The generic
//   comparison therefore checks ClosestBranch only on branch scopes.
// - the `!` placeholder accessor token is fragment-only: documents never
//   emit it, and resume reads it as a literal accessor.
// - await counters (`render.p`) are render-only and never exercised here.

const RUNTIME_ID = "CONFORMANCE";

describe("resume/walkFragment marker conformance", () => {
  const globals: Record<string, unknown> = {};
  let resume: typeof import("../dom/resume");
  let updateFragment: typeof import("../dom/update-fragment");
  let renders: Record<string, unknown>;
  let caseId = 0;

  before(() => {
    // The dom runtime reads DOM globals at call time; install them (and
    // `self`, which node lacks) before loading the modules so a future
    // import-time read cannot slip through either.
    const dom = new JSDOM("");
    for (const [key, value] of Object.entries({
      self: globalThis,
      document: dom.window.document,
      Text: dom.window.Text,
    })) {
      globals[key] = (globalThis as any)[key];
      (globalThis as any)[key] = value;
    }
    resume = require("../dom/resume");
    updateFragment = require("../dom/update-fragment");
    renders = (globalThis as any)[RUNTIME_ID] = {};
    resume.enableBranches();
    resume.init(RUNTIME_ID);
  });

  after(() => {
    for (const key of Object.keys(globals)) {
      if (globals[key] === undefined) delete (globalThis as any)[key];
      else (globalThis as any)[key] = globals[key];
    }
  });

  /** Runs BOTH paths over the same marker stream (`$P` is replaced with the
   * render's marker prefix) and asserts identical normalized scope trees. */
  function conform(html: string, ids: number[]) {
    const resumed = runResume(html, ids);
    const walked = runWalk(html, resumed.prefix);
    assert.deepEqual(
      snapshotScopes(walked.byId, ids, walked.container),
      snapshotScopes(resumed.byId, ids, resumed.container),
    );
    return { resumed, walked };
  }

  it("pairs a plain multi-node branch", () => {
    conform(
      `<div>x</div><!--$P[--><p>a</p><p>b</p><!--$P]1 g 2--><span>after</span>`,
      [1, 2],
    );
  });

  it("pairs an empty branch (end adjacent to start)", () => {
    // `visit.previousSibling === startVisit` makes the start comment double
    // as the end node instead of inserting a Text.
    conform(`<i>x</i><!--$P[--><!--$P]1 g 2-->`, [1, 2]);
  });

  it("back-scans single-node branches from a multi-id list", () => {
    // One `|` visit ends branches 4 and 2 (the `|1 ... 4 2` shape that
    // exposed the orphan-adoption off-by-one): 4 binds <b>, then the scan
    // continues to <i> for 2 -- and only 2's probe adopts the nested orphan
    // branch 3 (3 > 4 is false, 3 > 2 is true), which must survive 4's
    // rejection un-consumed.
    const { resumed } = conform(
      `<i><!--$P[--><q>q</q><!--$P]5 z 3--></i><b>b</b><!--$P|1 a 4 2-->`,
      [1, 2, 3, 4, 5],
    );
    const branch3 = resumed.byId.get(3)! as BranchScope;
    const branch2 = resumed.byId.get(2)! as BranchScope;
    assert.equal(branch3[AccessorProp.ParentBranch], branch2);
    // The reversed multi-id list lands ascending on the accessor.
    assert.deepEqual(
      (resumed.byId.get(1)![AccessorPrefix.BranchScopes + "a"] as Scope[]).map(
        (scope) => scope[AccessorProp.Id],
      ),
      [2, 4],
    );
  });

  it("skips visit comments while back-scanning", () => {
    // The node marker between the two elements is a visit and must be
    // skipped by the `~visits.indexOf` scan, not bound as a branch node.
    conform(
      `<i>one</i><!--$P*6 x--><em>two</em><!--$P|1 a 4 2-->`,
      [1, 2, 4, 6],
    );
  });

  it("adopts nested multi-node branches (orphan adoption)", () => {
    const { resumed, walked } = conform(
      `<!--$P[--><!--$P[--><p>inner</p><!--$P]3 a 4--><!--$P]1 b 2-->`,
      [1, 2, 3, 4],
    );
    const inner = resumed.byId.get(4)! as BranchScope;
    const outer = resumed.byId.get(2)! as BranchScope;
    assert.equal(inner[AccessorProp.ParentBranch], outer);

    // Documented asymmetry (not part of the shared grammar): resume's
    // deferred-owner pass links the branch-owning scope 3 to the enclosing
    // branch 2; walkFragment intentionally leaves that to its callers.
    assert.equal(resumed.byId.get(3)![AccessorProp.ClosestBranch], outer);
    assert.equal(walked.byId.get(3)![AccessorProp.ClosestBranch], undefined);
  });

  it("binds only-child end forms to the parent element", () => {
    conform(
      `<div><!--$P[--><p>a</p><p>b</p><!--$P)1 c 2--></div>` +
        `<section><span>only</span><!--$P}1 d 3--></section>` +
        `<article>x<!--$P)6 e--></article>`,
      [1, 2, 3, 6],
    );
  });

  it("binds native-tag single-node ends with their element key", () => {
    const { resumed } = conform(`<button>hi</button><!--$P'1 e 2-->`, [1, 2]);
    // The native-tag form additionally stashes the element under its debug
    // (tag-name) accessor key -- covered by the generic bindings compare,
    // pinned here so a grammar change cannot silently drop it.
    const branch = resumed.byId.get(2)!;
    assert.equal(
      (branch[MARKO_DEBUG ? "#button/0" : "a"] as Element).tagName,
      "BUTTON",
    );
  });

  it("binds node markers, continuations, and inserted texts", () => {
    conform(
      // `*8 b` binds the preceding text; the `* c` continuation reuses scope
      // 8 (the persisted walker rewrites it in place for resume; the
      // fragment walker tracks it natively). The empty <div> marker has no
      // previous sibling, so both sides insert a Text to bind; the doubled
      // markers in <p> bind an inserted Text and then the first marker
      // comment itself (a comment with data is a valid previous node).
      `<h2>hello<!--$P*3 a--></h2>` +
        `<li>x<!--$P*8 b-->y<!--$P* c--></li>` +
        `<div><!--$P*4 z--></div>` +
        `<p><!--$P*5 m--><!--$P*5 n--></p>`,
      [3, 8, 4, 5],
    );
  });

  it("resolves the ! placeholder accessor (fragment walker only)", () => {
    // Fragment-only grammar: a `<try>` placeholder branch inside a captured
    // fragment is bracketed with the literal `!` accessor token, which the
    // walker binds to the try branch's PlaceholderBranch slot (see
    // `applyBoundaryBody`). Documents never emit this token.
    const html = `<!--$P[--><!--$P[--><p>loading</p><!--$P]4 ! 5--><!--$P]3 b 4-->`;
    const walked = runWalk(html, RUNTIME_ID + "walkOnly");
    const tryBranch = walked.byId.get(4)! as BranchScope;
    const placeholder = walked.byId.get(5)! as BranchScope;
    assert.equal(tryBranch[AccessorProp.PlaceholderBranch], placeholder);
    assert.equal(placeholder[AccessorProp.Owner], tryBranch);
    assert.equal(placeholder[AccessorProp.ParentBranch], tryBranch);

    // Documented asymmetry: resume has no `!` carve-out and reads the token
    // as a literal accessor. If resume ever learns the token, this stops
    // holding and the case above should move into `conform`.
    const resumed = runResume(html, [3, 4, 5]);
    const resumedTry = resumed.byId.get(4)!;
    assert.equal(resumedTry[AccessorProp.PlaceholderBranch], undefined);
    assert.equal(
      resumedTry[AccessorPrefix.BranchScopes + "!"],
      resumed.byId.get(5),
    );
  });

  /** Parses `html` (with `$P` marker-prefix holes) into a detached tree. */
  function makeContainer(html: string, prefix: string) {
    const tpl = document.createElement("template");
    tpl.innerHTML = html.replaceAll("$P", prefix);
    return tpl.content;
  }

  /** The inline persisted walker's visit collection (see
   * `PERSISTED_WALKER_RUNTIME_CODE`): gathers prefix-matching marker
   * comments in document order and expands `*` continuations in place. */
  function collectVisits(root: ParentNode, prefix: string) {
    const visits: Comment[] = [];
    const walker = document.createTreeWalker(
      root,
      129 /* NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_ELEMENT */,
    );
    let lastNodeScope = "";
    let node: Node | null;
    while ((node = walker.nextNode())) {
      const data = (node as Comment).data as string | undefined;
      const op = data && !data.indexOf(prefix) && data[prefix.length];
      if (op === ResumeSymbol.Node) {
        const id = data!.slice(prefix.length + 1);
        if (id[0] === " ") {
          (node as Comment).data = prefix + "*" + lastNodeScope + id;
        } else {
          lastNodeScope = id.slice(0, id.indexOf(" "));
        }
      } else if (op) {
        lastNodeScope = "";
      }
      if (op && op > "#") visits.push(node as Comment);
    }
    return visits;
  }

  /** Document resume over the marker stream, through the real `init()`
   * render protocol; scopes are captured via a registered effect. */
  function runResume(html: string, ids: number[]) {
    const renderId = "c" + ++caseId;
    const prefix = RUNTIME_ID + renderId;
    const container = makeContainer(html, prefix);
    const byId = new Map<number, Scope>();
    const captureId = "conformance_capture_" + renderId;
    resume._resume(captureId, (scope: Scope) =>
      byId.set(scope[AccessorProp.Id], scope),
    );
    renders[renderId] = {
      i: prefix,
      v: collectVisits(container, prefix),
      w() {},
      r: [captureId + " " + ids.join(" ")],
    };
    ((globalThis as any)[RUNTIME_ID](renderId) as { w(): void }).w();
    return { container, prefix, byId };
  }

  /** The fragment walker over the same stream, with a minimal
   * FragmentContext (the id-keyed scope space `createUpdate` provides). */
  function runWalk(html: string, prefix: string) {
    const container = makeContainer(html, prefix);
    const scopes: Record<number, Scope> = {};
    const stamped = new Set<Scope>();
    const { touched, orphans } = updateFragment.walkFragment(
      container,
      prefix,
      {
        getScope: (id) => (scopes[id] ||= {} as Scope),
        stamp(scope, id) {
          if (stamped.has(scope)) return false;
          stamped.add(scope);
          scope[AccessorProp.Id] = id;
          return true;
        },
        adopt: (id, scope) => (scopes[id] = scope),
      },
    );
    // The callers' epilogue for returned (top-level) orphans is
    // `setParentBranch(orphan, <inserted branch>)`; a document has no
    // enclosing branch, so apply only its self-link half (resume gives
    // every ended branch the same self-link) to keep the trees comparable.
    for (const orphan of orphans) {
      (orphan as Scope)[AccessorProp.ClosestBranch] ??= orphan;
    }
    const byId = new Map<number, Scope>();
    for (const id in scopes) byId.set(+id, scopes[id]);
    return { container, byId, touched, orphans };
  }

  // ---- Scope-tree normalization -----------------------------------------

  // Scope bookkeeping handled structurally (or intentionally one-sided:
  // Gen/Global/AwaitCounter/ClosestBranchId are resume/render concerns) and
  // therefore excluded from the generic accessor-bindings sweep.
  const META_KEYS = new Set<string>([
    AccessorProp.Id,
    AccessorProp.Gen,
    AccessorProp.Global,
    AccessorProp.Owner,
    AccessorProp.ClosestBranch,
    AccessorProp.ClosestBranchId,
    AccessorProp.ParentBranch,
    AccessorProp.StartNode,
    AccessorProp.EndNode,
    AccessorProp.BranchScopes,
    AccessorProp.AwaitCounter,
    AccessorProp.PlaceholderBranch,
  ]);

  /** Normalizes each scope into plain data: node references become
   * position/kind paths (never identity -- the two sides walk separate
   * containers), scope references become ids. */
  function snapshotScopes(
    byId: Map<number, Scope>,
    ids: number[],
    root: ParentNode,
  ) {
    const out: Record<number, unknown> = {};
    for (const id of ids) {
      const scope = byId.get(id);
      if (!scope) {
        out[id] = undefined;
        continue;
      }
      const isBranch = AccessorProp.StartNode in scope;
      const bindings: Record<string, unknown> = {};
      for (const key of Object.keys(scope)) {
        if (!META_KEYS.has(key) && scope[key] !== undefined) {
          bindings[key] = encode(scope[key], root);
        }
      }
      out[id] = {
        owner: encode(scope[AccessorProp.Owner], root),
        parentBranch: encode(scope[AccessorProp.ParentBranch], root),
        // Deferred-owner linking is a documented resume-only concern, so
        // ClosestBranch is compared only where the shared grammar assigns
        // it: on branch scopes (self via setParentBranch/adoption).
        closestBranch: isBranch
          ? scope[AccessorProp.ClosestBranch] === scope
            ? "self"
            : encode(scope[AccessorProp.ClosestBranch], root)
          : undefined,
        start: encode(scope[AccessorProp.StartNode], root),
        end: encode(scope[AccessorProp.EndNode], root),
        branches: scope[AccessorProp.BranchScopes]
          ? [...(scope[AccessorProp.BranchScopes] as Set<BranchScope>)]
              .map((branch) => branch[AccessorProp.Id])
              .sort()
          : undefined,
        bindings,
      };
    }
    return out;
  }

  function encode(value: unknown, root: ParentNode): unknown {
    if (value == null) return undefined;
    if (Array.isArray(value)) return value.map((item) => encode(item, root));
    if (typeof value === "object") {
      if (typeof (value as Node).nodeType === "number") {
        return nodePath(value as Node, root);
      }
      if (typeof (value as Scope)[AccessorProp.Id] === "number") {
        return "scope:" + (value as Scope)[AccessorProp.Id];
      }
    }
    return value;
  }

  /** A node's kind plus its child-index path from the container root, so
   * inserted boundary Texts must land at identical positions on both
   * sides. */
  function nodePath(node: Node, root: ParentNode) {
    const path: number[] = [];
    let current: Node = node;
    while (current !== root) {
      const parent = current.parentNode;
      assert.ok(parent, "bound node must be attached to the container");
      path.unshift(
        ([] as Node[]).indexOf.call(parent.childNodes as unknown, current),
      );
      current = parent;
    }
    const kind =
      node.nodeType === 1
        ? (node as Element).tagName.toLowerCase()
        : node.nodeType === 3
          ? "text"
          : node.nodeType === 8
            ? "comment"
            : "node" + node.nodeType;
    return kind + "@" + path.join(".");
  }
});
