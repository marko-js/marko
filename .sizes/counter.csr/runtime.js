// size: 4082 (min) 1825 (brotli)
//#region packages/runtime-tags/dist/dom.mjs
let decodeAccessor = (num) =>
    (num + (num < 26 ? 10 : num < 962 ? 334 : 11998)).toString(36),
  defaultDelegator = /* @__PURE__ */ createDelegator(),
  parsers = {},
  nextScopeId = 1e6,
  destroyNestedScopes = function destroyNestedScopes(scope) {
    ((scope.I = 1),
      scope.D?.forEach(destroyNestedScopes),
      scope.B?.forEach(resetControllers));
  },
  isScheduled,
  channel,
  _var_change = (scope, value) => scope.U?.(value),
  walker = /* @__PURE__ */ document.createTreeWalker(document),
  walkInternal = function walkInternal(currentWalkIndex, walkCodes, scope) {
    let value,
      currentMultiplier,
      storedMultiplier = 0,
      currentScopeIndex = 0;
    for (; currentWalkIndex < walkCodes.length; )
      if (
        ((value = walkCodes.charCodeAt(currentWalkIndex++)),
        (currentMultiplier = storedMultiplier),
        (storedMultiplier = 0),
        value === 32)
      ) {
        let node = walker.currentNode;
        scope[decodeAccessor(currentScopeIndex++)] = node;
      } else if (value === 37 || value === 49)
        (walker.currentNode.replaceWith(
          (walker.currentNode = scope[decodeAccessor(currentScopeIndex++)] =
            new Text()),
        ),
          value === 49 &&
            (scope[decodeAccessor(currentScopeIndex++)] = skipScope()));
      else if (value === 38) return currentWalkIndex;
      else if (value === 47 || value === 48)
        ((currentWalkIndex = walkInternal(
          currentWalkIndex,
          walkCodes,
          (scope[decodeAccessor(currentScopeIndex++)] = createScope(
            scope.$,
            scope.F,
          )),
        )),
          value === 48 &&
            (scope[decodeAccessor(currentScopeIndex++)] = skipScope()));
      else if (value < 92)
        for (value = 20 * currentMultiplier + value - 67; value--; )
          walker.nextNode();
      else if (value < 107)
        for (value = 10 * currentMultiplier + value - 97; value--; )
          walker.nextSibling();
      else if (value < 117) {
        for (value = 10 * currentMultiplier + value - 107; value--; )
          walker.parentNode();
        walker.nextSibling();
      } else storedMultiplier = currentMultiplier * 10 + value - 117;
  },
  cloneCache = {},
  registeredValues = {},
  pendingRenders = [],
  pendingRendersLookup = /* @__PURE__ */ new Map(),
  asyncRendersLookup,
  pendingEffects = [],
  pendingScopes = [],
  rendering,
  runEffects = (effects) => {
    for (let i = 0; i < effects.length; ) effects[i++](effects[i++]);
  },
  runRender = (render) => render.c(render.b, render.d),
  _template = (id, template, walks, setup, inputSignal) => {
    let renderer = _content(id, template, walks, setup, inputSignal)();
    return (
      (renderer.mount = mount),
      (renderer._ = renderer),
      _resume(id, renderer)
    );
  };
function _on(element, type, handler) {
  (element["$" + type] === void 0 &&
    defaultDelegator(element, type, handleDelegated),
    (element["$" + type] = handler || null));
}
/* @__NO_SIDE_EFFECTS__ */
function createDelegator() {
  let kEvents = Symbol();
  return function (node, type, handler) {
    ((node = node.getRootNode())[kEvents] ||= {})[type] ||=
      (node.addEventListener(type, handler, !0), 1);
  };
}
function handleDelegated(ev) {
  let target = !rendering && ev.target;
  for (; target; )
    (target["$" + ev.type]?.(ev, target),
      (target = ev.bubbles && !ev.cancelBubble && target.parentNode));
}
function parseHTML(html, ns) {
  let parser = (parsers[ns] ||= document.createElementNS(ns, "template"));
  return ((parser.innerHTML = html), parser.content || parser);
}
function createScope($global, closestBranch) {
  let scope = {
    L: nextScopeId++,
    H: 1,
    F: closestBranch,
    $: $global,
  };
  return (pendingScopes.push(scope), scope);
}
function skipScope() {
  return nextScopeId++;
}
function destroyBranch(branch) {
  (branch.N?.D?.delete(branch), destroyNestedScopes(branch));
}
function resetControllers(scope) {
  for (let id in scope.A) $signalReset(scope, id);
}
function removeAndDestroyBranch(branch) {
  (destroyBranch(branch), removeChildNodes(branch.S, branch.K));
}
function schedule() {
  isScheduled || ((isScheduled = 1), queueMicrotask(flushAndWaitFrame));
}
function flushAndWaitFrame() {
  (run(), requestAnimationFrame(triggerMacroTask));
}
function triggerMacroTask() {
  (channel ||
    ((channel = new MessageChannel()),
    (channel.port1.onmessage = () => {
      ((isScheduled = 0), run());
    })),
    channel.port2.postMessage(0));
}
function _let(id, fn) {
  let valueAccessor = decodeAccessor(id),
    valueChangeAccessor = "M" + valueAccessor;
  return (scope, value, valueChange) => (
    rendering
      ? (((scope[valueChangeAccessor] = valueChange) &&
          scope[valueAccessor] !== value) ||
          scope.H) &&
        ((scope[valueAccessor] = value), fn?.(scope))
      : scope[valueChangeAccessor]
        ? scope[valueChangeAccessor](value)
        : scope[valueAccessor] !== (scope[valueAccessor] = value) &&
          fn &&
          (schedule(), queueRender(scope, fn, id)),
    value
  );
}
function _script(id, fn) {
  return (
    _resume(id, fn),
    (scope) => {
      queueEffect(scope, fn);
    }
  );
}
function walk(startNode, walkCodes, branch) {
  ((walker.currentNode = startNode), walkInternal(0, walkCodes, branch));
}
function createBranch($global, renderer, parentScope, parentNode) {
  let branch = createScope($global);
  return (
    (branch._ = renderer.e || parentScope),
    setParentBranch(branch, parentScope?.F),
    renderer.b?.(branch, parentNode.namespaceURI),
    branch
  );
}
function setParentBranch(branch, parentBranch) {
  (parentBranch &&
    ((branch.N = parentBranch),
    (parentBranch.D ||= /* @__PURE__ */ new Set()).add(branch)),
    (branch.F = branch));
}
function _content(id, template, walks, setup, params, dynamicScopesAccessor) {
  ((walks = walks ? walks.replace(/[^\0-1]+$/, "") : ""),
    (setup = setup ? setup._ || setup : void 0),
    (params ||= void 0));
  let clone = template
    ? (branch, ns) => {
        ((cloneCache[ns] ||= {})[template] ||= createCloneableHTML(
          template,
          ns,
        ))(branch, walks);
      }
    : (branch) => {
        walk((branch.S = branch.K = new Text()), walks, branch);
      };
  return (owner) => ({
    a: id,
    b: clone,
    e: owner,
    c: setup,
    d: params,
    f: dynamicScopesAccessor,
  });
}
function createCloneableHTML(html, ns) {
  let { firstChild, lastChild } = parseHTML(html, ns),
    parent = document.createElementNS(ns, "t");
  return (
    insertChildNodes(parent, null, firstChild, lastChild),
    firstChild === lastChild && firstChild.nodeType < 8
      ? (branch, walks) => {
          walk((branch.S = branch.K = firstChild.cloneNode(!0)), walks, branch);
        }
      : (branch, walks) => {
          let clone = parent.cloneNode(!0);
          (walk(clone.firstChild, walks, branch),
            (branch.S = clone.firstChild),
            (branch.K = clone.lastChild));
        }
  );
}
function _resume(id, obj) {
  return (registeredValues[id] = obj);
}
function _to_text(value) {
  return value || value === 0 ? value + "" : "";
}
function _text(node, value) {
  let normalizedValue = _to_text(value);
  node.data !== normalizedValue && (node.data = normalizedValue);
}
function removeChildNodes(startNode, endNode) {
  let stop = endNode.nextSibling,
    current = startNode;
  for (; current !== stop; ) {
    let next = current.nextSibling;
    (current.remove(), (current = next));
  }
}
function insertChildNodes(parentNode, referenceNode, startNode, endNode) {
  parentNode.insertBefore(toInsertNode(startNode, endNode), referenceNode);
}
function toInsertNode(startNode, endNode) {
  if (startNode === endNode) return startNode;
  let parent = new DocumentFragment(),
    stop = endNode.nextSibling,
    current = startNode;
  for (; current !== stop; ) {
    let next = current.nextSibling;
    (parent.appendChild(current), (current = next));
  }
  return parent;
}
function queueRender(scope, signal, signalKey, value, scopeKey = scope.L) {
  let key = scopeKey * 1e3 + signalKey,
    render = signalKey >= 0 && pendingRendersLookup.get(key);
  render
    ? (render.d = value)
    : (queuePendingRender(
        (render = {
          a: key,
          b: scope,
          c: signal,
          d: value,
        }),
      ),
      signalKey >= 0 && pendingRendersLookup.set(key, render));
}
function queuePendingRender(render) {
  let i = pendingRenders.push(render) - 1;
  for (; i; ) {
    let parentIndex = (i - 1) >> 1,
      parent = pendingRenders[parentIndex];
    if (render.a - parent.a >= 0) break;
    ((pendingRenders[i] = parent), (i = parentIndex));
  }
  pendingRenders[i] = render;
}
function queueEffect(scope, fn) {
  pendingEffects.push(fn, scope);
}
function run() {
  let effects = pendingEffects;
  asyncRendersLookup = /* @__PURE__ */ new Map();
  try {
    ((rendering = 1), runRenders());
  } finally {
    ((pendingRendersLookup = asyncRendersLookup),
      (asyncRendersLookup = rendering = 0),
      (pendingRenders = []),
      (pendingEffects = []));
  }
  runEffects(effects);
}
function prepareEffects(fn) {
  let prevRenders = pendingRenders,
    prevEffects = pendingEffects,
    prevLookup = asyncRendersLookup,
    preparedEffects = (pendingEffects = []);
  ((pendingRenders = []),
    (asyncRendersLookup = pendingRendersLookup),
    (pendingRendersLookup = /* @__PURE__ */ new Map()));
  try {
    ((rendering = 1), fn(), runRenders());
  } finally {
    ((rendering = 0),
      (pendingRendersLookup = asyncRendersLookup),
      (asyncRendersLookup = prevLookup),
      (pendingRenders = prevRenders),
      (pendingEffects = prevEffects));
  }
  return preparedEffects;
}
function runRenders() {
  for (; pendingRenders.length; ) {
    let render = pendingRenders[0],
      item = pendingRenders.pop();
    if (render !== item) {
      let i = 0,
        mid = pendingRenders.length >> 1,
        key = (pendingRenders[0] = item).a;
      for (; i < mid; ) {
        let bestChild = (i << 1) + 1,
          right = bestChild + 1;
        if (
          (right < pendingRenders.length &&
            pendingRenders[right].a - pendingRenders[bestChild].a < 0 &&
            (bestChild = right),
          pendingRenders[bestChild].a - key >= 0)
        )
          break;
        ((pendingRenders[i] = pendingRenders[bestChild]), (i = bestChild));
      }
      pendingRenders[i] = item;
    }
    render.b.F?.I || runRender(render);
  }
  for (let scope of pendingScopes) scope.H = 0;
  pendingScopes = [];
}
function $signalReset(scope, id) {
  let ctrl = scope.A?.[id];
  ctrl && (queueEffect(ctrl, abort), (scope.A[id] = void 0));
}
function abort(ctrl) {
  ctrl.abort();
}
function mount(input = {}, reference, position) {
  let branch,
    parentNode = reference,
    nextSibling = null,
    { $global } = input;
  switch (
    ($global
      ? (({ $global, ...input } = input),
        ($global = {
          runtimeId: "M",
          renderId: "_",
          ...$global,
        }))
      : ($global = {
          runtimeId: "M",
          renderId: "_",
        }),
    position)
  ) {
    case "beforebegin":
      ((parentNode = reference.parentNode), (nextSibling = reference));
      break;
    case "afterbegin":
      nextSibling = reference.firstChild;
      break;
    case "afterend":
      ((parentNode = reference.parentNode),
        (nextSibling = reference.nextSibling));
      break;
  }
  let curValue,
    args = this.d,
    effects = prepareEffects(() => {
      ((branch = createBranch($global, this, void 0, parentNode)),
        (branch.T = (newValue) => {
          curValue = newValue;
        }),
        this.c?.(branch),
        args?.(branch, input));
    });
  return (
    insertChildNodes(parentNode, nextSibling, branch.S, branch.K),
    runEffects(effects),
    {
      get value() {
        return curValue;
      },
      set value(newValue) {
        _var_change(branch, newValue);
      },
      update(newInput) {
        args &&
          runEffects(
            prepareEffects(() => {
              args(branch, newInput);
            }),
          );
      },
      destroy() {
        removeAndDestroyBranch(branch);
      },
    }
  );
}
//#endregion
