// size: 2377 (min) 1236 (brotli)
//#region packages/runtime-tags/dist/dom.mjs
let decodeAccessor = (num) =>
    (num + (num < 26 ? 10 : num < 962 ? 334 : 11998)).toString(36),
  defaultDelegator = /* @__PURE__ */ createDelegator(),
  isScheduled,
  channel,
  registeredValues = {},
  curRuntimeId,
  readyLookup = {},
  pendingRenders = [],
  pendingRendersLookup = /* @__PURE__ */ new Map(),
  asyncRendersLookup,
  pendingEffects = [],
  pendingScopes = [],
  rendering,
  runEffects = (effects) => {
    for (let i = 0; i < effects.length; ) effects[i++](effects[i++]);
  },
  runRender = (render) => render.c(render.b, render.d);
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
function init(runtimeId = "M") {
  if (curRuntimeId) return;
  curRuntimeId = runtimeId;
  let resumeRender,
    renders = self[runtimeId],
    defineRuntime = (desc) => Object.defineProperty(self, runtimeId, desc),
    initRuntime = (renders) => {
      defineRuntime({
        value: (resumeRender = (renderId) => {
          let render = (resumeRender[renderId] =
              renders[renderId] || renders(renderId)),
            walk = render.w,
            scopeLookup = (render.s = {}),
            getScope = (id) => (scopeLookup[id] ||= { L: +id }),
            serializeContext = { _: registeredValues },
            nextToken = () =>
              (lastToken = visitText.slice(
                lastTokenIndex,
                (lastTokenIndex =
                  visitText.indexOf(" ", lastTokenIndex) + 1 ||
                  visitText.length + 1) - 1,
              )),
            $global,
            lastEffect,
            visits,
            resumes,
            visit,
            visitText,
            visitType,
            visitScope,
            lastToken,
            lastTokenIndex,
            lastScopeId = 0;
          return (
            (render.m = (effects = []) => {
              if (readyLookup) {
                for (let readyId in render.b)
                  if (readyLookup[readyId] !== 1)
                    return (
                      (readyLookup[readyId] = ((prev) => () => {
                        (render.m(), prev?.());
                      })(readyLookup[readyId])),
                      effects
                    );
                render.b = 0;
              }
              for (let serialized of (resumes = render.r || []))
                if (typeof serialized == "string")
                  for (
                    lastTokenIndex = 0, visitText = serialized;
                    nextToken();
                  )
                    /\D/.test(lastToken)
                      ? (lastEffect = registeredValues[lastToken])
                      : effects.push(lastEffect, getScope(lastToken));
                else
                  for (let scope of serialized(serializeContext))
                    $global
                      ? typeof scope == "number"
                        ? (lastScopeId += scope)
                        : ((scopeLookup[(scope.L = ++lastScopeId)] = scope),
                          (scope.$ = $global))
                      : (($global = scope || {}),
                        ($global.runtimeId = runtimeId),
                        ($global.renderId = renderId));
              for (visit of (visits = render.v))
                if (
                  ((lastTokenIndex = render.i.length),
                  (visitText = visit.data),
                  (visitType = visitText[lastTokenIndex++]),
                  (visitScope = getScope(nextToken())),
                  visitType === "*")
                ) {
                  let prev = visit.previousSibling;
                  visitScope[nextToken()] =
                    prev && (prev.nodeType < 8 || prev.data)
                      ? prev
                      : visit.parentNode.insertBefore(new Text(), visit);
                }
              return ((visits.length = resumes.length = 0), effects);
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
    for (let renderId in renders) runResumeEffects(resumeRender(renderId));
  } else
    defineRuntime({
      configurable: !0,
      set: initRuntime,
    });
}
function runResumeEffects(render) {
  try {
    runEffects(render.m(), 1);
  } finally {
  }
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
//#endregion
