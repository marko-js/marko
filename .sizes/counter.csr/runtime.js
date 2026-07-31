// size: 3905 (min) 1750 (brotli)
//#region packages/runtime-tags/dist/dom.mjs
let decodeAccessor = (num) => (num + (num < 26 ? 10 : num < 962 ? 334 : 11998)).toString(36),
  rendering,
  runId = 2,
  pendingEffects = [],
  pendingRenders = [],
  pendingRenderEffects = 0,
  runEffects = (effects) => {
    for (let i = 0; i < effects.length;) effects[i++](effects[i++]);
  },
  runRender = (render) => {
    render.c(render.b, render.d);
  },
  catchEnabled,
  delegate = (type, handler) =>
    (handler[1 + type] ||= (document.addEventListener(type, handler, !0), 1)),
  parsers = {},
  nextScopeId = 1e6,
  destroyNestedScopes = function destroyNestedScopes(scope) {
    ((scope.H = 0), scope.D?.forEach(destroyNestedScopes), scope.B?.forEach(cleanupScope));
  },
  isScheduled,
  channel,
  _var_change = (scope, value) => scope.U?.(value),
  currentNode,
  walkInternal = function walkInternal(currentWalkIndex, walkCodes, scope) {
    let value,
      currentMultiplier,
      storedMultiplier = 0,
      currentScopeIndex = 0;
    for (; currentWalkIndex < walkCodes.length;)
      if (
        ((value = walkCodes.charCodeAt(currentWalkIndex++)),
        (currentMultiplier = storedMultiplier),
        (storedMultiplier = 0),
        value === 32)
      )
        scope[decodeAccessor(currentScopeIndex++)] = currentNode;
      else if (value === 37 || value === 49)
        (currentNode.replaceWith(
          (currentNode = scope[decodeAccessor(currentScopeIndex++)] = new Text()),
        ),
          value === 49 && (scope[decodeAccessor(currentScopeIndex++)] = skipScope()));
      else if (value === 38) return currentWalkIndex;
      else if (value === 47 || value === 48)
        ((currentWalkIndex = walkInternal(
          currentWalkIndex,
          walkCodes,
          (scope[decodeAccessor(currentScopeIndex++)] = createScope(scope.$, scope.F)),
        )),
          value === 48 && (scope[decodeAccessor(currentScopeIndex++)] = skipScope()));
      else if (value < 92)
        for (value = 25 * currentMultiplier + value - 67; value--;) walkNextNode();
      else if (value < 107)
        for (value = 10 * currentMultiplier + value - 97; value--;) walkNextSibling();
      else if (value < 117) {
        for (value = 10 * currentMultiplier + value - 107; value--;)
          currentNode = currentNode.parentNode || currentNode;
        walkNextSibling();
      } else storedMultiplier = currentMultiplier * 10 + value - 117;
  },
  walkNextNode = () => {
    if (currentNode.firstChild) return (currentNode = currentNode.firstChild);
    for (; !currentNode.nextSibling && currentNode.parentNode;)
      currentNode = currentNode.parentNode;
    walkNextSibling();
  },
  walkNextSibling = () => (currentNode = currentNode.nextSibling || currentNode),
  registeredValues = {},
  cloneCache = {},
  _text = text;
function queueRender(scope, signal, signalKey, value, scopeKey = scope.L) {
  let render;
  if (signalKey >= 0 && (render = scope[signalKey])) {
    if (((render.d = value), render.e === runId || catchEnabled)) return;
    render.e = runId;
  } else
    ((render = {
      a: scopeKey * 1e6 + signalKey,
      b: scope,
      c: signal,
      d: value,
      e: runId,
    }),
      signalKey >= 0 && (scope[signalKey] = render));
  queuePendingRender(render);
}
function queuePendingRender(render) {
  let i = pendingRenders.push(render) - 1;
  for (; i;) {
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
  try {
    ((rendering = 1), runRenders());
  } finally {
    (runId++, (rendering = 0), (pendingRenders = []), (pendingEffects = []));
  }
  runEffects(effects);
}
function prepareEffects(fn) {
  let prevRenders = pendingRenders,
    prevEffects = pendingEffects,
    prevRenderEffects = pendingRenderEffects,
    preparedEffects = (pendingEffects = []);
  ((pendingRenders = []), (pendingRenderEffects = 0));
  try {
    ((rendering = 1), fn(), runRenders());
  } finally {
    (runId++,
      (rendering = 0),
      (pendingRenders = prevRenders),
      (pendingEffects = prevEffects),
      (pendingRenderEffects = prevRenderEffects));
  }
  return preparedEffects;
}
function runRenders() {
  for (; pendingRenders.length;) {
    let render = pendingRenders[0],
      item = pendingRenders.pop();
    if (render !== item) {
      let i = 0,
        mid = pendingRenders.length >> 1,
        key = (pendingRenders[0] = item).a;
      for (; i < mid;) {
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
    runRender(render);
  }
}
function _on(element, type, handler) {
  (element[1 + type] === void 0 && delegate(type, handleDelegated),
    (element[1 + type] = handler || null));
}
function handleDelegated(ev) {
  let target = !rendering && ev.target;
  for (; target;)
    (target[1 + ev.type]?.(ev, target),
      (target = ev.bubbles && !ev.cancelBubble && target.parentNode));
}
function parseHTML(html, ns) {
  let parser = (parsers[ns] ||= document.createElementNS(ns, "template"));
  return ((parser.innerHTML = html), parser.content || parser);
}
function createScope($global, closestBranch) {
  return {
    L: nextScopeId++,
    H: runId,
    F: closestBranch,
    $: $global,
  };
}
function skipScope() {
  return nextScopeId++;
}
function destroyBranch(branch) {
  (branch.N?.D?.delete(branch), destroyNestedScopes(branch));
}
function cleanupScope(scope) {}
function removeAndDestroyBranch(branch) {
  (destroyBranch(branch), removeChildNodes(branch.S, branch.K));
}
function schedule() {
  isScheduled || ((isScheduled = 1), queueMicrotask(flushAndWaitFrame));
}
function flushAndWaitFrame() {
  (requestAnimationFrame(triggerMacroTask), run());
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
  let valueAccessor = decodeAccessor(id);
  return (scope, value) => (
    rendering
      ? scope.H === runId && ((scope[valueAccessor] = value), fn?.(scope))
      : (scope[valueAccessor] !== value || !(valueAccessor in scope)) &&
        ((scope[valueAccessor] = value), fn) &&
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
/** Cloned templates are small, where a TreeWalker's per-step cost dominates. */
function walk(startNode, walkCodes, branch) {
  ((currentNode = startNode), walkInternal(0, walkCodes, branch));
}
function _resume(id, obj) {
  return (registeredValues[id] = obj);
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
    ((branch.N = parentBranch), (parentBranch.D ||= /* @__PURE__ */ new Set()).add(branch)),
    (branch.F = branch));
}
function _content(id, template, walks, setup, params, dynamicScopesAccessor) {
  ((walks = walks ? walks.replace(/[^\0-1]+$/, "") : ""),
    (setup = setup ? setup._ || setup : void 0),
    (params ||= void 0));
  let clone = template
    ? (branch, ns) => {
        ((cloneCache[ns] ||= {})[1 + template] ||= createCloneableHTML(template, ns))(
          branch,
          walks,
        );
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
function _to_text(value) {
  return value || value === 0 ? value + "" : "";
}
function text(scope, nodeAccessor, value) {
  let node = scope[nodeAccessor],
    normalizedValue = _to_text(value);
  node.data !== normalizedValue && (node.data = normalizedValue);
}
function removeChildNodes(startNode, endNode) {
  let stop = endNode.nextSibling;
  for (; startNode !== stop;) {
    let next = startNode.nextSibling;
    (startNode.remove(), (startNode = next));
  }
}
function insertChildNodes(parentNode, referenceNode, startNode, endNode) {
  if (parentNode.isConnected)
    parentNode.insertBefore(toInsertNode(startNode, endNode), referenceNode);
  else {
    let stop = endNode.nextSibling;
    for (; startNode !== stop;) {
      let next = startNode.nextSibling;
      (parentNode.insertBefore(startNode, referenceNode), (startNode = next));
    }
  }
  return parentNode;
}
function toInsertNode(startNode, endNode) {
  return startNode === endNode
    ? startNode
    : insertChildNodes(new DocumentFragment(), null, startNode, endNode);
}
//#endregion
//#region packages/runtime-tags/dist/dom.mjs
let _template = (id, template, walks, setup, inputSignal) => {
  let renderer = _content(id, template, walks, setup, inputSignal)();
  return ((renderer.mount = mount), (renderer._ = renderer), _resume(id, renderer));
};
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
      ((parentNode = reference.parentNode), (nextSibling = reference.nextSibling));
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
      update(newInput = {}) {
        args &&
          (newInput.$global && ({ $global, ...newInput } = newInput),
          runEffects(
            prepareEffects(() => {
              args(branch, newInput);
            }),
          ));
      },
      destroy() {
        removeAndDestroyBranch(branch);
      },
    }
  );
}
//#endregion
