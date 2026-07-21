import assert from "node:assert/strict";

import { JSDOM } from "jsdom";

type TestScope = import("../common/types").Scope & Record<PropertyKey, any>;

let queue: typeof import("../dom/queue");
let scopeId: string;
let nextScopeId = 1;

describe("runtime-tags/dom render effect transitions", () => {
  // The dom runtime's import graph touches `document` while modules
  // initialize (e.g. the tree walker), so install a jsdom global before
  // loading it — and only for this suite; a lingering global would make
  // other suites' server-side runs look like a browser.
  before(() => {
    (globalThis as any).document = new JSDOM("").window.document;
    queue = require("../dom/queue");
    scopeId = (require("../common/types") as typeof import("../common/types"))
      .AccessorProp.Id;
    queue._enable_transition();
  });

  after(() => {
    delete (globalThis as any).document;
  });

  // Each case builds a minimal hand-wired template: a stateful value `v`
  // whose signal records its write and queues a render effect (like `<let>`
  // output), an "await" signal that entangles the flush's transition, and a
  // draft-style value `d` queued through `queueEagerRender`.
  function setup() {
    const log: string[] = [];
    const scope = {
      [scopeId]: nextScopeId++,
      v: "old",
    } as unknown as TestScope;
    const vRender = queue._render((s) => log.push(`v:${s.v}`));
    const vSignal = (s: TestScope, value: unknown) => {
      queue.recordWrite(s, "v", s.v);
      s.v = value;
      vRender(s);
    };
    let transition: ReturnType<typeof queue.entangleTransition>;
    const awaitSignal = () => {
      transition = queue.entangleTransition(0);
    };
    // Settles one participant in its own flush (like a promise settlement).
    const settle = (apply?: () => void) => {
      queue.queueRender(
        scope,
        () => queue.settleTransition(transition, apply),
        -1,
      );
      queue.run();
    };
    const commit = (onCommit?: () => void) => settle(() => onCommit?.());
    return {
      log,
      scope,
      vRender,
      vSignal,
      awaitSignal,
      commit,
      settle,
      getTransition: () => transition,
    };
  }

  it("holds a flush's render effects and plain effects until commit", () => {
    const { log, scope, vSignal, awaitSignal, commit } = setup();

    queue.queueRender(scope, vSignal, 1, "new");
    queue.queueRender(scope, awaitSignal, 2);
    queue.queueEffect(scope, () => log.push("effect"));
    queue.run();
    assert.deepEqual(log, [] as string[]);

    // The displayed value rests on the property between flushes: event
    // handlers (and anything else outside a render phase) observe what the
    // document shows, not the pending value.
    assert.equal(scope.v, "old");

    // Resolve callbacks run while committing (the render phase); the held
    // output re-applies at the flush's drain, before plain effects replay.
    commit(() => log.push("resolve"));
    assert.deepEqual(log, ["resolve", "v:new", "effect"]);
    assert.equal(scope.v, "new");
  });

  it("a write while pending is visible in its own tick, then rests back on the displayed value until commit", () => {
    const { log, scope, vSignal, awaitSignal, commit } = setup();

    queue.queueRender(scope, vSignal, 1, "new");
    queue.queueRender(scope, awaitSignal, 2);
    queue.run();
    assert.equal(scope.v, "old");

    // A handler-style write lands on the property for read-your-writes
    // within its tick, and its queued render re-establishes it during the
    // next render phase; afterwards the displayed value rests again.
    scope.v = "newer";
    queue.queueRender(scope, vSignal, 1, "newer");
    assert.equal(scope.v, "newer");
    queue.run();
    assert.equal(scope.v, "old");
    assert.deepEqual(log, [] as string[]);

    commit();
    assert.deepEqual(log, ["v:newer"]);
    assert.equal(scope.v, "newer");
  });

  it("applies eager renders and their plain effects while the same flush's other output is held", () => {
    const { log, scope, vSignal, awaitSignal, commit } = setup();
    const draftRender = queue._render((s) => log.push(`draft:${s.d}`));
    const draftSignal = (s: TestScope, value: unknown) => {
      // Records like `_let`, but eager runs suppress recording — the draft
      // value must not be marked, or its output would show the old value.
      queue.recordWrite(s, "d", s.d);
      s.d = value;
      draftRender(s);
      queue.queueEffect(s, () => log.push("draft effect"));
    };

    queue.queueRender(scope, vSignal, 1, "new");
    queue.queueRender(scope, awaitSignal, 2);
    queue.queueEagerRender(scope, draftSignal, 3, "guess");
    queue.run();
    assert.deepEqual(log, ["draft:guess", "draft effect"]);

    // The draft effect ran while the entangled value was swapped, so the
    // commit's replay log re-applies it (an idempotent rewrite) after the
    // held output.
    commit();
    assert.deepEqual(log, [
      "draft:guess",
      "draft effect",
      "v:new",
      "draft:guess",
    ]);
  });

  it("an eager re-queue of a held effect applies now (with displayed values) and stays held", () => {
    const { log, scope, vRender, vSignal, awaitSignal, commit } = setup();

    queue.queueRender(scope, vSignal, 1, "new");
    queue.queueRender(scope, awaitSignal, 2);
    queue.run();
    assert.deepEqual(log, [] as string[]);

    // Re-queueing the held `v` effect eagerly applies it immediately; the
    // entangled value reads as what the document still displays, and the
    // hold stays in place for commit.
    queue.queueEagerRender(scope, (s: TestScope) => vRender(s), 3);
    queue.run();
    assert.deepEqual(log, ["v:old"]);

    commit(() => log.push("resolve"));
    assert.deepEqual(log, ["v:old", "resolve", "v:new"]);
  });

  it("gives eager render effects the displayed value of entangled state, re-running them at commit", () => {
    const { log, scope, vSignal, awaitSignal, commit } = setup();
    const mixedRender = queue._render((s) => log.push(`mixed:${s.d}/${s.v}`));
    const mixedSignal = (s: TestScope, value: unknown) => {
      s.d = value;
      // Eager computation (outside a render effect) sees the latest value.
      s.latestSeen = s.v;
      mixedRender(s);
    };

    queue.queueRender(scope, vSignal, 1, "new");
    queue.queueRender(scope, awaitSignal, 2);
    queue.run();

    queue.queueEagerRender(scope, mixedSignal, 3, "guess");
    queue.run();
    assert.equal(scope.latestSeen, "new");
    assert.deepEqual(log, ["mixed:guess/old"]);

    commit(() => log.push("resolve"));
    assert.deepEqual(log, [
      "mixed:guess/old",
      "resolve",
      "v:new",
      "mixed:guess/new",
    ]);
  });

  it("plain effects observe displayed values while pending; held effects read the latest at commit", () => {
    const { log, scope, vSignal, awaitSignal, commit } = setup();
    const draftSignal = (s: TestScope, value: unknown) => {
      s.d = value;
      queue.queueEffect(s, () => log.push(`eager effect:${s.d}/${s.v}`));
    };

    queue.queueRender(scope, vSignal, 1, "new");
    queue.queueRender(scope, awaitSignal, 2);
    queue.queueEffect(scope, () => log.push(`held effect:${scope.v}`));
    queue.run();
    assert.deepEqual(log, [] as string[]);

    // A fresh-mount style effect from an unrelated flush runs now, but
    // observes the value the document still displays.
    queue.queueEffect(scope, () => log.push(`fresh effect:${scope.v}`));
    queue.run();
    assert.deepEqual(log, ["fresh effect:old"]);

    // An eager effect likewise sees the displayed entangled value next to
    // the latest draft value.
    queue.queueEagerRender(scope, draftSignal, 3, "guess");
    queue.run();
    assert.deepEqual(log, ["fresh effect:old", "eager effect:guess/old"]);

    // Handler-style reads between flushes also rest on the displayed value.
    assert.equal(scope.v, "old");

    commit();
    assert.deepEqual(log, [
      "fresh effect:old",
      "eager effect:guess/old",
      "v:new",
      "held effect:new",
    ]);
  });

  it("inherits eagerness through renders queued by an eager render", () => {
    const { log, scope, awaitSignal, commit } = setup();
    const childRender = queue._render((s) => log.push(`child:${s.c}`));
    const childSignal = (s: TestScope, value: unknown) => {
      s.c = value;
      childRender(s);
    };
    const parentSignal = (s: TestScope, value: unknown) => {
      queue.queueRender(s, childSignal, 5, value);
    };

    queue.queueRender(scope, awaitSignal, 2);
    queue.queueEagerRender(scope, parentSignal, 4, "x");
    queue.run();
    assert.deepEqual(log, ["child:x"]);

    commit();
    assert.deepEqual(log, ["child:x"]);

    // With the transition settled the same render is no longer eager and
    // applies with the rest of its flush.
    queue.queueRender(scope, childSignal, 5, "y");
    queue.run();
    assert.deepEqual(log, ["child:x", "child:y"]);
  });

  it("a shared transition commits only after every participant settles, running callbacks in settlement order", () => {
    const { log, scope, vSignal, awaitSignal, settle } = setup();
    // Two awaits entangled by one flush.
    queue.queueRender(scope, vSignal, 1, "new");
    queue.queueRender(scope, awaitSignal, 2);
    queue.queueRender(
      scope,
      () => {
        queue.entangleTransition(0);
      },
      3,
    );
    queue.run();
    assert.deepEqual(log, [] as string[]);

    // The first settlement (a rejection-style catch callback here) defers.
    settle(() => log.push("catch"));
    assert.deepEqual(log, [] as string[]);
    assert.equal(scope.v, "old");

    // The final settlement commits: held output first, then callbacks in
    // settlement order.
    settle(() => log.push("resolve"));
    assert.deepEqual(log, ["catch", "resolve", "v:new"]);
    assert.equal(scope.v, "new");
  });

  it("removing one participant does not release the rest; removing the final one commits", () => {
    const { log, scope, vSignal, awaitSignal, settle } = setup();
    queue.queueRender(scope, vSignal, 1, "new");
    queue.queueRender(scope, awaitSignal, 2);
    queue.queueRender(
      scope,
      () => {
        queue.entangleTransition(0);
      },
      3,
    );
    queue.run();

    // Removal settles with no callback.
    settle();
    assert.deepEqual(log, [] as string[]);
    assert.equal(scope.v, "old");

    settle();
    assert.deepEqual(log, ["v:new"]);
    assert.equal(scope.v, "new");
  });

  it("merged transitions sum their participants and commit once", () => {
    const { log, scope, vSignal, awaitSignal, settle, getTransition } = setup();
    // Flush A: await 1 entangles.
    queue.queueRender(scope, awaitSignal, 2);
    queue.run();
    const first = getTransition();

    // Flush B: a second await entangles, then await 1 re-fires with its
    // existing transition — the two merge.
    queue.queueRender(scope, vSignal, 1, "new");
    queue.queueRender(scope, awaitSignal, 2);
    queue.queueRender(
      scope,
      () => {
        queue.entangleTransition(first);
      },
      3,
    );
    queue.run();
    assert.deepEqual(log, [] as string[]);

    settle();
    assert.deepEqual(log, [] as string[]);
    settle(() => log.push("resolve"));
    assert.deepEqual(log, ["resolve", "v:new"]);
  });

  it("late settlement after commit runs its callback immediately without re-holding", () => {
    const { log, scope, vSignal, awaitSignal, commit, settle } = setup();
    queue.queueRender(scope, vSignal, 1, "new");
    queue.queueRender(scope, awaitSignal, 2);
    queue.run();

    commit(() => log.push("resolve"));
    assert.deepEqual(log, ["resolve", "v:new"]);

    // A participant settling after the commit (e.g. its region was removed
    // and its promise resolved later) applies directly; nothing re-holds.
    settle(() => log.push("late"));
    queue.queueRender(scope, vSignal, 1, "newer");
    queue.run();
    assert.deepEqual(log, ["resolve", "v:new", "late", "v:newer"]);
  });
});
