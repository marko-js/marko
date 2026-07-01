// size: 3620 (min) 1678 (brotli)
//#region packages/runtime-tags/dist/dom.mjs
let decodeAccessor = (num) =>
    (num + (num < 26 ? 10 : num < 962 ? 334 : 11998)).toString(36),
  delegate = (type, handler) =>
    (handler[type] ||= (document.addEventListener(type, handler, !0), 1)),
  destroyNestedScopes = function destroyNestedScopes(scope) {
    ((scope.H = 0),
      scope.D?.forEach(destroyNestedScopes),
      scope.B?.forEach(resetControllers));
  },
  isScheduled,
  channel,
  registeredValues = {},
  curRenders,
  readyIds,
  rendering,
  runId = 2,
  pendingEffects = [],
  pendingRenders = [],
  scopeKeyOffset = 1e3,
  runEffects = (effects) => {
    for (let i = 0; i < effects.length; ) effects[i++](effects[i++]);
  },
  runRender = (render) => render.c(render.b, render.d),
  catchEnabled;
function isNotVoid(value) {
  return value != null && value !== !1;
}
function _on(element, type, handler) {
  (element["$" + type] === void 0 && delegate(type, handleDelegated),
    (element["$" + type] = handler || null));
}
function handleDelegated(ev) {
  let target = !rendering && ev.target;
  for (; target; )
    (target["$" + ev.type]?.(ev, target),
      (target = ev.bubbles && !ev.cancelBubble && target.parentNode));
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
function insertBranchBefore(branch, parentNode, nextSibling) {
  insertChildNodes(parentNode, nextSibling, branch.S, branch.K);
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
function init(runtimeId = "M") {
  if (curRenders) return;
  let renders = self[runtimeId],
    defineRuntime = (desc) => Object.defineProperty(self, runtimeId, desc),
    initRuntime = (renders) => {
      defineRuntime({
        value: (curRenders = (renderId) => {
          let render = (curRenders[renderId] =
              renders[renderId] || renders(renderId)),
            walk = render.w,
            scopeLookup = {},
            getScope = (id) =>
              scopeLookup[id] ||
              (+id ? initScope((scopeLookup[id] = { L: +id })) : initGlobal()),
            initGlobal = () =>
              (scopeLookup[0] ||= {
                runtimeId,
                renderId,
              }),
            initScope = (scope) => (
              (scope.H = 1),
              (scope.$ = initGlobal()),
              scope
            ),
            applyScopes = (partials) => {
              let scopeId = partials[0];
              for (let i = 1; i < partials.length; i++) {
                let partial = partials[i];
                typeof partial == "number"
                  ? (scopeId += partial)
                  : (scopeId
                      ? initScope(
                          Object.assign(
                            (scopeLookup[scopeId] ||=
                              ((partial.L = scopeId), partial)),
                            partial,
                          ),
                        )
                      : Object.assign(initGlobal(), partial),
                    scopeId++);
              }
            },
            serializeContext = (data, registryId) =>
              typeof data == "number"
                ? registryId
                  ? registeredValues[registryId](getScope(data))
                  : getScope(data)
                : applyScopes(data),
            nextToken = () =>
              (lastToken = visitText.slice(
                lastTokenIndex,
                (lastTokenIndex =
                  visitText.indexOf(" ", lastTokenIndex) + 1 ||
                  visitText.length + 1) - 1,
              )),
            processResumes = (resumes = [], effects) => {
              let i = 0;
              for (; i < resumes.length; i++) {
                let serialized = resumes[i];
                if (typeof serialized == "string")
                  for (
                    lastTokenIndex = 0, visitText = serialized;
                    nextToken();
                  )
                    /\D/.test(lastToken)
                      ? (lastEffect = registeredValues[lastToken])
                      : effects.push(lastEffect, getScope(lastToken));
                else if (Array.isArray(serialized)) break;
                else {
                  let scopes = serialized(serializeContext);
                  Array.isArray(scopes) && applyScopes(scopes);
                }
              }
              return (resumes.splice(0, i), i);
            },
            lastEffect,
            visits,
            visit,
            visitText,
            visitType,
            visitScope,
            lastToken,
            lastTokenIndex;
          return (
            (serializeContext._ = registeredValues),
            (render.m = (effects) => {
              if ((processResumes(render.r, effects), readyIds));
              let retained = 0;
              for (visit of (visits = render.v))
                if (
                  ((lastTokenIndex = render.i.length),
                  (visitText = visit.data),
                  (visitType = visitText[lastTokenIndex++]),
                  (visitScope = getScope(nextToken())),
                  visitType === "*")
                ) {
                  let prev = visit.previousSibling,
                    nodeAccessor = nextToken();
                  ((visitScope[nodeAccessor] =
                    prev && (prev.nodeType < 8 || prev.data)
                      ? prev
                      : visit.parentNode.insertBefore(new Text(), visit)),
                    flushResumedRender(visitScope, nodeAccessor));
                } else render.b && (visits[retained++] = visit);
              return ((visits.length = retained), effects);
            }),
            (render.w = () => {
              (walk(), runResumeEffects(render));
            }),
            render
          );
        }),
      });
    };
  if (renders) {
    initRuntime(renders);
    for (let renderId in renders) runResumeEffects(curRenders(renderId));
  } else
    defineRuntime({
      configurable: !0,
      set: initRuntime,
    });
}
function flushResumedRender(scope, nodeAccessor) {
  let accessor = "N" + nodeAccessor,
    replay = scope[accessor];
  replay && ((scope[accessor] = void 0), replay());
}
function runResumeEffects(render) {
  try {
    runEffects(render.m([]), 1);
  } finally {
  }
}
function _resume(id, obj) {
  return (registeredValues[id] = obj);
}
function _to_text(value) {
  return value || value === 0 ? value + "" : "";
}
function _attr(element, name, value) {
  setAttribute(element, name, normalizeAttrValue(value));
}
function setAttribute(element, name, value) {
  element.getAttribute(name) != value &&
    (value === void 0
      ? element.removeAttribute(name)
      : element.setAttribute(name, value));
}
function _text(node, value) {
  let normalizedValue = _to_text(value);
  node.data !== normalizedValue && (node.data = normalizedValue);
}
function normalizeAttrValue(value) {
  if (isNotVoid(value)) return value === !0 ? "" : value + "";
}
function removeChildNodes(startNode, endNode) {
  let stop = endNode.nextSibling;
  for (; startNode !== stop; ) {
    let next = startNode.nextSibling;
    (startNode.remove(), (startNode = next));
  }
}
function insertChildNodes(parentNode, referenceNode, startNode, endNode) {
  parentNode.insertBefore(toInsertNode(startNode, endNode), referenceNode);
}
function toInsertNode(startNode, endNode) {
  if (startNode === endNode) return startNode;
  let parent = new DocumentFragment(),
    stop = endNode.nextSibling;
  for (; startNode !== stop; ) {
    let next = startNode.nextSibling;
    (parent.appendChild(startNode), (startNode = next));
  }
  return parent;
}
function setConditionalRenderer(
  scope,
  nodeAccessor,
  newRenderer,
  createBranch,
) {
  let referenceNode = scope[nodeAccessor],
    prevBranch = scope["A" + nodeAccessor];
  if (referenceNode === void 0) {
    scope["N" + nodeAccessor] = () =>
      queueAsyncRender(scope, () =>
        setConditionalRenderer(scope, nodeAccessor, newRenderer, createBranch),
      );
    return;
  }
  let parentNode =
      referenceNode.nodeType > 1
        ? (prevBranch?.S || referenceNode).parentNode
        : referenceNode,
    newBranch = (scope["A" + nodeAccessor] =
      newRenderer && createBranch(scope.$, newRenderer, scope, parentNode));
  referenceNode === parentNode
    ? (prevBranch &&
        (destroyBranch(prevBranch), (referenceNode.textContent = "")),
      newBranch && insertBranchBefore(newBranch, parentNode, null))
    : prevBranch
      ? (newBranch
          ? insertBranchBefore(newBranch, parentNode, prevBranch.S)
          : parentNode.insertBefore(referenceNode, prevBranch.S),
        removeAndDestroyBranch(prevBranch))
      : newBranch &&
        (insertBranchBefore(newBranch, parentNode, referenceNode),
        referenceNode.remove());
}
function queueRender(scope, signal, signalKey, value, scopeKey = scope.L) {
  let render;
  if (signalKey >= 0 && (render = scope[signalKey + scopeKeyOffset])) {
    if (((render.d = value), render.e === runId || catchEnabled)) return;
    render.e = runId;
  } else
    ((render = {
      a: scopeKey * scopeKeyOffset + signalKey,
      b: scope,
      c: signal,
      d: value,
      e: runId,
    }),
      signalKey >= 0 && (scope[signalKey + scopeKeyOffset] = render));
  queuePendingRender(render);
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
  try {
    ((rendering = 1), runRenders());
  } finally {
    (runId++, (rendering = 0), (pendingRenders = []), (pendingEffects = []));
  }
  runEffects(effects);
}
function queueAsyncRender(scope, signal, value) {
  (queueRender(scope, signal, -1, value), queueMicrotask(run));
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
    runRender(render);
  }
}
function $signalReset(scope, id) {
  let ctrl = scope.A?.[id];
  ctrl && (queueEffect(ctrl, abort), (scope.A[id] = void 0));
}
function abort(ctrl) {
  ctrl.abort();
}
//#endregion
