// size: 2643 (min) 1288 (brotli)
//#region packages/runtime-tags/dist/dom.mjs
let decodeAccessor = (num) => (num + (num < 26 ? 10 : num < 962 ? 334 : 11998)).toString(36),
  rendering,
  runId = 2,
  pendingEffects = [],
  pendingRenders = [],
  renderIndex = 0,
  runEffects = (effects) => {
    for (let i = 0; i < effects.length;) effects[i++](effects[i++]);
  },
  runRender = (render) => {
    render.c(render.b, render.d);
  },
  catchEnabled,
  delegate = (type, handler) =>
    (handler[1 + type] ||= (document.addEventListener(type, handler, !0), 1)),
  isScheduled,
  channel,
  _resumed = {},
  curRenders,
  readyIds;
function isNotVoid(value) {
  return value != null && value !== !1;
}
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
  let lo = renderIndex,
    hi = pendingRenders.length;
  for (; lo < hi;) {
    let mid = (lo + hi) >> 1;
    pendingRenders[mid].a > render.a ? (hi = mid) : (lo = mid + 1);
  }
  lo < pendingRenders.length ? pendingRenders.splice(lo, 0, render) : pendingRenders.push(render);
}
function queueEffect(scope, fn) {
  pendingEffects.push(fn, scope);
}
function run() {
  let effects = pendingEffects;
  try {
    ((rendering = 1), runRenders());
  } finally {
    (runId++, (rendering = 0), (pendingRenders = []), (renderIndex = 0), (pendingEffects = []));
  }
  runEffects(effects);
}
function runRenders() {
  for (; renderIndex < pendingRenders.length;) runRender(pendingRenders[renderIndex++]);
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
    (_resumed[id] = fn),
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
          let render = (curRenders[renderId] = renders[renderId] || renders(renderId)),
            walk = render.w,
            scopeLookup = {},
            getScope = (id) =>
              scopeLookup[id] || (+id ? initScope((scopeLookup[id] = { L: +id })) : initGlobal()),
            initGlobal = () =>
              (scopeLookup[0] ||= {
                runtimeId,
                renderId,
              }),
            initScope = (scope) => ((scope.H ??= 1), (scope.$ = initGlobal()), scope),
            applyScopes = (partials) => {
              let scopeId = partials[0];
              for (let i = 1; i < partials.length; i++) {
                let partial = partials[i];
                typeof partial == "number"
                  ? (scopeId += partial)
                  : (scopeId
                      ? initScope(
                          Object.assign(
                            (scopeLookup[scopeId] ||= ((partial.L = scopeId), partial)),
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
                  ? _resumed[registryId](getScope(data))
                  : getScope(data)
                : applyScopes(data),
            nextToken = () =>
              (lastToken = visitText.slice(
                lastTokenIndex,
                (lastTokenIndex =
                  visitText.indexOf(" ", lastTokenIndex) + 1 || visitText.length + 1) - 1,
              )),
            processResumes = (resumes = [], effects) => {
              let i = 0;
              for (; i < resumes.length; i++) {
                let serialized = resumes[i];
                if (typeof serialized == "string")
                  for (lastTokenIndex = 0, visitText = serialized; nextToken();)
                    /\D/.test(lastToken)
                      ? (lastEffect = _resumed[lastToken])
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
            (serializeContext._ = _resumed),
            (render.m = (effects) => {
              if ((processResumes(render.r, effects), readyIds));
              let retained = 0;
              for (visit of (visits = render.v))
                ((lastTokenIndex = render.i.length),
                  (visitText = visit.data),
                  (visitType = visitText[lastTokenIndex++]),
                  (visitScope = getScope(nextToken())),
                  (visitScope[nextToken()] =
                    visitType === "%"
                      ? visit.parentNode.insertBefore(new Text(), visit)
                      : visit.previousSibling));
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
function runResumeEffects(render) {
  try {
    runEffects(render.m([]), 1);
  } finally {
  }
}
function _to_text(value) {
  return value || value === 0 ? value + "" : "";
}
function _attr(element, name, value) {
  setAttribute(element, name, normalizeAttrValue(value));
}
function setAttribute(element, name, value) {
  element.getAttribute(name) != value &&
    (value === void 0 ? element.removeAttribute(name) : element.setAttribute(name, value));
}
function _text(node, value) {
  let normalizedValue = _to_text(value);
  node.data !== normalizedValue && (node.data = normalizedValue);
}
function normalizeAttrValue(value) {
  if (isNotVoid(value)) return value === !0 ? "" : value + "";
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
