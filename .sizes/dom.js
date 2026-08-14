// size: 27691 (min) 10231 (brotli)
//#region packages/runtime-tags/dist/dom.mjs
let unsafeStyleAttrReg = /[\\;]/g,
  replaceUnsafeStyleAttr = (c) => (c === ";" ? "\\3B " : "\\\\"),
  toDelimitedString = function toDelimitedString(val, delimiter, stringify) {
    let str = "",
      sep = "",
      part;
    if (val)
      if (typeof val != "object") str += val;
      else if (Array.isArray(val))
        for (let v of val)
          ((part = toDelimitedString(v, delimiter, stringify)),
            part && ((str += sep + part), (sep = delimiter)));
      else
        for (let name in val)
          ((part = stringify(name, val[name])), part && ((str += sep + part), (sep = delimiter)));
    return str;
  },
  decodeAccessor = (num) => (num + (num < 26 ? 10 : num < 962 ? 334 : 11998)).toString(36),
  branchesEnabled,
  rendering,
  runId = 2,
  caughtError = /* @__PURE__ */ new WeakSet(),
  placeholderShown = /* @__PURE__ */ new WeakSet(),
  pendingEffects = [],
  pendingRenders = [],
  runEffects = (effects) => {
    for (let i = 0; i < effects.length;) effects[i++](effects[i++]);
  },
  runRender = (render) => {
    (!branchesEnabled || render.b.F?.H !== 0) && render.c(render.b, render.d);
  },
  catchEnabled,
  delegate = (type, handler) =>
    (handler[1 + type] ||= (document.addEventListener(type, handler, !0), 1)),
  parsers = {},
  nextScopeId = 1e6,
  collectingScopes,
  destroyNestedScopes = function destroyNestedScopes(scope) {
    ((scope.H = 0), scope.D?.forEach(destroyNestedScopes), scope.B?.forEach(cleanupScope));
  },
  isScheduled,
  channel,
  patchFills = {},
  closureFillJoins = {},
  dynamicTagFills = /* @__PURE__ */ new Set(),
  _return = (scope, value) => scope.T?.(value),
  _var_change = (scope, value) => scope.U?.(value),
  tagIdsByGlobal = /* @__PURE__ */ new WeakMap(),
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
  patchers = {},
  kChanged = Symbol(),
  onPatchRecord,
  failPatch = () => {
    throw 0;
  },
  walkScope = (partial, live) => {
    for (let key in partial) (patchers[key[0]] || failPatch())(live, key, partial[key]);
  },
  curRenders,
  embedRenders,
  readyIds,
  patchRender = 0,
  patching = 0,
  patchId = 0,
  isResuming,
  cloneCache = {},
  R = /[\p{L}\p{N}]/gu,
  inputType = "",
  controllableScripts = {},
  controllableRenders = {},
  _if = /*@__PURE__*/ withBranches((nodeAccessor, ...branchesArgs) => {
    nodeAccessor = decodeAccessor(nodeAccessor);
    let branchAccessor = "D" + nodeAccessor,
      branches = [],
      i = 0;
    for (; i < branchesArgs.length;)
      branches.push(_content("", branchesArgs[i++], branchesArgs[i++], branchesArgs[i++])());
    return (scope, newBranch) => {
      newBranch !== (scope[branchAccessor] ?? (scope["A" + nodeAccessor] && 0)) &&
        setConditionalRenderer(
          scope,
          nodeAccessor,
          branches[(scope[branchAccessor] = newBranch)],
          createAndSetupBranch,
        );
    };
  }),
  _show = /*@__PURE__*/ withBranches((nodeAccessor, startNodeAccessor, endNodeAccessor) => {
    ((nodeAccessor = decodeAccessor(nodeAccessor)),
      startNodeAccessor !== void 0 && (startNodeAccessor = decodeAccessor(startNodeAccessor)),
      endNodeAccessor !== void 0 && (endNodeAccessor = decodeAccessor(endNodeAccessor)));
    let rangeAccessor = "A" + nodeAccessor;
    return (scope, display) => {
      let referenceNode = scope[nodeAccessor],
        onlyChild = referenceNode.nodeType === 1,
        parentNode = onlyChild ? referenceNode : referenceNode.parentNode,
        range = scope[rangeAccessor];
      range ||
        ((range = scope[rangeAccessor] = {}),
        (range.S = onlyChild ? parentNode.firstChild : scope[startNodeAccessor]),
        (range.K = onlyChild
          ? parentNode.lastChild
          : endNodeAccessor === void 0
            ? referenceNode.previousSibling
            : scope[endNodeAccessor]));
      let startNode = range.S;
      if (range.L && startNode === range.K && startNode.tagName === "T") {
        let wrapper = startNode;
        (wrapper.firstChild || wrapper.appendChild(new Text()),
          (range = scope[rangeAccessor] = {}),
          (range.S = startNode = wrapper.firstChild),
          (range.K = wrapper.lastChild),
          wrapper.replaceWith(...wrapper.childNodes));
      }
      let inDom = onlyChild ? !!parentNode.firstChild : startNode.parentNode === parentNode;
      display
        ? inDom || insertBranchBefore(range, parentNode, onlyChild ? null : referenceNode)
        : inDom &&
          (onlyChild && ((range.S = parentNode.firstChild), (range.K = parentNode.lastChild)),
          tempDetachBranch(range));
    };
  }),
  _dynamic_tag = /*@__PURE__*/ withBranches((nodeAccessor, getContent, getTagVar, inputIsArgs) => {
    nodeAccessor = decodeAccessor(nodeAccessor);
    let childScopeAccessor = "A" + nodeAccessor,
      rendererAccessor = "D" + nodeAccessor;
    return (scope, newRenderer, getInput) => {
      let normalizedRenderer = normalizeDynamicRenderer(newRenderer);
      if (
        scope[rendererAccessor] !== (scope[rendererAccessor] = rendererKey(normalizedRenderer)) ||
        (getContent && !(normalizedRenderer || scope[childScopeAccessor]))
      )
        if (
          (setConditionalRenderer(
            scope,
            nodeAccessor,
            normalizedRenderer || (getContent ? getContent(scope) : void 0),
            createBranchWithTagNameOrRenderer,
          ),
          getTagVar &&
            (scope[childScopeAccessor]
              ? ((scope[childScopeAccessor].T = (value) => getTagVar()(scope, value)),
                typeof normalizedRenderer == "string" &&
                  bindNativeTagVar?.(scope[childScopeAccessor]))
              : getTagVar()(scope, void 0)),
          typeof normalizedRenderer == "string")
        ) {
          if (getContent) {
            let content = getContent(scope);
            (setConditionalRenderer(scope[childScopeAccessor], "a", content, createAndSetupBranch),
              content.f && subscribeToScopeSet(content.e, content.f, scope[childScopeAccessor].Aa));
          }
        } else
          normalizedRenderer?.f &&
            subscribeToScopeSet(
              normalizedRenderer.e,
              normalizedRenderer.f,
              scope[childScopeAccessor],
            );
      if (normalizedRenderer) {
        let childScope = scope[childScopeAccessor],
          args = getInput?.();
        if (typeof normalizedRenderer == "string")
          ((getContent ? _attrs : _attrs_content)(
            childScope,
            "a",
            (inputIsArgs ? args[0] : args) || {},
            controllableRenders[childScope.a.tagName],
          ),
            (childScope.Ia || childScope.Ea) && queueEffect(childScope, dynamicTagScript));
        else {
          for (let accessor in normalizedRenderer.g)
            normalizedRenderer.g[accessor](childScope, normalizedRenderer.h[accessor]);
          if (normalizedRenderer.d)
            if (inputIsArgs)
              normalizedRenderer.d(childScope, normalizedRenderer._ ? args[0] : args);
            else {
              let inputWithContent = getContent
                ? {
                    ...args,
                    content: getContent(scope),
                  }
                : args || {};
              normalizedRenderer.d(
                childScope,
                normalizedRenderer._ ? inputWithContent : [inputWithContent],
              );
            }
        }
      }
    };
  }),
  _dynamic_tag_content = /*@__PURE__*/ withBranches((nodeAccessor) => {
    nodeAccessor = decodeAccessor(nodeAccessor);
    let childScopeAccessor = "A" + nodeAccessor,
      rendererAccessor = "D" + nodeAccessor;
    return (scope, renderer) => {
      if (
        (scope[rendererAccessor] !== (scope[rendererAccessor] = rendererKey(renderer)) &&
          (setConditionalRenderer(scope, nodeAccessor, renderer, createAndSetupBranch),
          renderer?.f && subscribeToScopeSet(renderer.e, renderer.f, scope[childScopeAccessor])),
        renderer)
      )
        for (let accessor in renderer.g)
          renderer.g[accessor](scope[childScopeAccessor], renderer.h[accessor]);
    };
  }),
  bindNativeTagVar,
  _resume_dynamic_tag = /*@__PURE__*/ withBranches(() => _resume("d", dynamicTagScript)),
  loop = /*@__PURE__*/ withBranches((forEach) => (nodeAccessor, template, walks, setup, params) => {
    nodeAccessor = decodeAccessor(nodeAccessor);
    let scopesAccessor = "A" + nodeAccessor,
      keyedScopesAccessor = "O" + nodeAccessor,
      renderer = _content("", template, walks, setup)();
    return (scope, value) => {
      let referenceNode = scope[nodeAccessor],
        oldScopes = toArray(scope[scopesAccessor]),
        newScopes = (scope[scopesAccessor] = []);
      scope[keyedScopesAccessor] = null;
      let oldLen = oldScopes.length,
        parentNode =
          referenceNode.nodeType > 1
            ? referenceNode.parentNode || oldScopes[0]?.S.parentNode
            : referenceNode,
        oldScopesByKey,
        hasPotentialMoves,
        start = 0;
      forEach(value, (key, args) => {
        let i = newScopes.length,
          oldScope = oldScopes[i],
          branch =
            oldLen &&
            (oldScopesByKey || key !== (oldScope?.M ?? i)
              ? (oldScopesByKey ||= oldScopes.reduce(
                  (map, scope, j) => (j < i ? map : ((scope.I = j), map.set(scope.M ?? j, scope))),
                  /* @__PURE__ */ new Map(),
                )).get(key)
              : oldScope && (start++, oldScope));
        (branch
          ? ((hasPotentialMoves = !0), oldScopesByKey?.delete(key))
          : (branch = createAndSetupBranch(scope.$, renderer, scope, parentNode)),
          (branch.M = key),
          newScopes.push(branch),
          params?.(branch, args));
      });
      let newLen = newScopes.length,
        hasSiblings = referenceNode !== parentNode,
        afterReference = null,
        oldEnd = oldLen - 1,
        newEnd = newLen - 1;
      if (
        (hasSiblings &&
          (oldLen
            ? ((afterReference = oldScopes[oldEnd].K.nextSibling),
              newLen || parentNode.insertBefore(referenceNode, afterReference))
            : newLen && ((afterReference = referenceNode.nextSibling), referenceNode.remove())),
        !hasPotentialMoves)
      ) {
        oldLen &&
          (oldScopes.forEach(hasSiblings ? removeAndDestroyBranch : destroyBranch),
          hasSiblings || (parentNode.textContent = ""));
        for (let newScope of newScopes) insertBranchBefore(newScope, parentNode, afterReference);
        return;
      }
      if (oldScopesByKey) oldScopesByKey.forEach(removeAndDestroyBranch);
      else for (let i = newLen; i < oldLen; i++) removeAndDestroyBranch(oldScopes[i]);
      for (; oldEnd >= start && newEnd >= start && oldScopes[oldEnd] === newScopes[newEnd];)
        (oldEnd--, newEnd--);
      if (
        (oldEnd + 1 < oldLen && (afterReference = oldScopes[oldEnd + 1].S),
        start > oldEnd || start > newEnd)
      ) {
        for (let i = start; i <= newEnd; i++)
          insertBranchBefore(newScopes[i], parentNode, afterReference);
        return;
      }
      let diffLen = newEnd - start + 1,
        sources = Array(diffLen),
        pred = Array(diffLen),
        tails = [],
        tail = -1,
        lo,
        hi,
        mid;
      for (let i = diffLen; i--;) sources[i] = newScopes[start + i].I ?? -1;
      for (let i = 0; i < diffLen; i++)
        if (~sources[i])
          if (tail < 0 || sources[tails[tail]] < sources[i])
            (~tail && (pred[i] = tails[tail]), (tails[++tail] = i));
          else {
            for (lo = 0, hi = tail; lo < hi;)
              ((mid = ((lo + hi) / 2) | 0),
                sources[tails[mid]] < sources[i] ? (lo = mid + 1) : (hi = mid));
            sources[i] < sources[tails[lo]] &&
              (lo > 0 && (pred[i] = tails[lo - 1]), (tails[lo] = i));
          }
      for (hi = tails[tail], lo = tail + 1; lo-- > 0;) ((tails[lo] = hi), (hi = pred[hi]));
      for (let i = diffLen; i--;)
        (~tail && i === tails[tail]
          ? tail--
          : insertBranchBefore(newScopes[start + i], parentNode, afterReference),
          (afterReference = newScopes[start + i].S));
    };
  }),
  _for_of = /*@__PURE__*/ loop(([all, by], cb) => {
    ((by ||= bySecondArg),
      typeof by == "string"
        ? forOf(all, (item, i) => cb(item[by], [item, i]))
        : forOf(all, (item, i) => cb(by(item, i), [item, i])));
  }),
  _for_in = /*@__PURE__*/ loop(([obj, by], cb) => {
    ((by ||= byFirstArg), forIn(obj, (key, value) => cb(by(key, value), [key, value])));
  }),
  _for_to = /*@__PURE__*/ loop(([to, from, step, by], cb) => {
    ((by ||= byFirstArg), forTo(to, from, step, (v) => cb(by(v), [v])));
  }),
  _for_until = /*@__PURE__*/ loop(([until, from, step, by], cb) => {
    ((by ||= byFirstArg), forUntil(until, from, step, (v) => cb(by(v), [v])));
  });
function _call(fn, v) {
  return (fn(v), v);
}
function stringifyClassObject(name, value) {
  return value ? name : "";
}
function stringifyStyleObject(name, value) {
  return value || value === 0 ? escapeStyleAttr(name) + ":" + escapeStyleAttr(value + "") : "";
}
function escapeStyleAttr(str) {
  return unsafeStyleAttrReg.test(str)
    ? str.replace(unsafeStyleAttrReg, replaceUnsafeStyleAttr)
    : str;
}
function escapeStyleValue(str) {
  let closers = "",
    result = str.replace(/[\\"'{};<>]|\/(?=\*)/g, (c) =>
      c === "<" ? "\\3C " : c === ";" ? "\\3B " : c === "{" ? "\\7B " : "\\" + c,
    );
  for (let c of result)
    c === "("
      ? (closers = ")" + closers)
      : c === "["
        ? (closers = "]" + closers)
        : c === closers[0] && (closers = closers.slice(1));
  return result + closers;
}
function isEventHandler(name) {
  return /^on[A-Z-]/.test(name);
}
function getEventHandlerName(name) {
  return name[2] === "-" ? name.slice(3) : name.slice(2).toLowerCase();
}
function isNotVoid(value) {
  return value != null && value !== !1;
}
function isPromise(value) {
  return value != null && typeof value.then == "function";
}
function normalizeDynamicRenderer(value) {
  if (value) {
    if (typeof value == "string") return value;
    let normalized = value.content || value.default || value;
    if ("a" in normalized) return normalized;
  }
}
function normalizeAttrValue(value) {
  if (isNotVoid(value)) return value === !0 ? "" : value + "";
}
function withBranches(runtime) {
  return ((branchesEnabled = 1), runtime);
}
function rendererKey(renderer) {
  return renderer?.e ? renderer.a + " " + renderer.e.L : renderer?.a || renderer;
}
function _assert_hoist(value) {}
function forIn(obj, cb) {
  for (let key in obj) cb(key, obj[key]);
}
function forOf(list, cb) {
  if (list) {
    let i = 0;
    for (let item of list) cb(item, i++);
  }
}
function forTo(to, from, step, cb) {
  let start = from || 0,
    delta = step || 1;
  for (let steps = (to - start) / delta, i = 0; i <= steps; i++) cb(start + i * delta);
}
function forUntil(until, from, step, cb) {
  let start = from || 0,
    delta = step || 1;
  for (let steps = (until - start) / delta, i = 0; i < steps; i++) cb(start + i * delta);
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
function abortRun() {
  (runId++, (pendingRenders = []), (pendingEffects = []));
}
function queueAsyncRender(scope, signal, value) {
  (queueRender(scope, signal, -1, value), queueMicrotask(run));
}
function prepareEffects(fn) {
  let prevRenders = pendingRenders,
    prevEffects = pendingEffects,
    preparedEffects = (pendingEffects = []);
  pendingRenders = [];
  try {
    ((rendering = 1), fn(), runRenders());
  } finally {
    (runId++, (rendering = 0), (pendingRenders = prevRenders), (pendingEffects = prevEffects));
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
function $signalReset(scope, id) {
  let ctrl = scope.A?.[id];
  ctrl && ((scope.A[id] = void 0), rendering ? queueEffect(ctrl, abort) : abort(ctrl));
}
function $signal(scope, id) {
  return (trackCleanup(scope), ((scope.A ||= {})[id] ||= new AbortController()).signal);
}
/** Enrols `scope` with its branch so destroying the branch cleans it up. */
function trackCleanup(scope, subscribers) {
  let branch = scope.F;
  (branch && (branch.B ||= /* @__PURE__ */ new Set()).add(scope),
    subscribers && (scope.Z ||= []).push(subscribers));
}
function abort(ctrl) {
  ctrl.abort();
}
function toArray(opt) {
  return opt ? (Array.isArray(opt) ? opt : [opt]) : [];
}
function forEach(opt, cb) {
  if (opt)
    if (Array.isArray(opt)) for (let item of opt) cb(item);
    else cb(opt);
}
function push(opt, item) {
  return opt ? (Array.isArray(opt) ? (opt.push(item), opt) : [opt, item]) : item;
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
  let scope = {
    L: nextScopeId++,
    H: runId,
    F: closestBranch,
    $: $global,
  };
  return (collectingScopes?.push(scope), scope);
}
function syncGen(scope) {
  scope.H = runId;
}
function _assert_init(scope, accessor) {
  return scope[accessor];
}
function collectScopes(fn) {
  let prev = collectingScopes;
  collectingScopes = [];
  try {
    return (fn(), collectingScopes);
  } finally {
    collectingScopes = prev;
  }
}
function skipScope() {
  return nextScopeId++;
}
function findBranchWithKey(scope, key) {
  let branch = scope.F;
  for (; branch && branch[key] == null;) branch = branch.N;
  return branch;
}
function destroyBranch(branch) {
  (branch.N?.D?.delete(branch), destroyNestedScopes(branch));
}
function destroyScope(scope) {
  scope.H && (destroyNestedScopes(scope), cleanupScope(scope));
}
function cleanupScope(scope) {
  scope.Z?.forEach(unsubscribe, scope);
  for (let id in scope.A) $signalReset(scope, id);
}
function unsubscribe(subscribers) {
  subscribers.delete(this);
}
function removeAndDestroyBranch(branch) {
  (destroyBranch(branch), removeChildNodes(branch.S, branch.K));
}
function insertBranchBefore(branch, parentNode, nextSibling) {
  insertChildNodes(parentNode, nextSibling, branch.S, branch.K);
}
function tempDetachBranch(branch) {
  let fragment = new DocumentFragment();
  ((fragment.namespaceURI = branch.S.parentNode.namespaceURI),
    insertChildNodes(fragment, null, branch.S, branch.K));
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
function _let_change(id, fn) {
  let valueAccessor = decodeAccessor(id),
    valueChangeAccessor = decodeAccessor(id + 1),
    base = _let(id, fn);
  return (scope, value, valueChange) => (
    rendering
      ? (scope[valueChangeAccessor] = valueChange) &&
        (scope[valueAccessor] !== value || !(valueAccessor in scope))
        ? ((scope[valueAccessor] = value), fn?.(scope))
        : base(scope, value)
      : scope[valueChangeAccessor]
        ? scope[valueChangeAccessor](value)
        : base(scope, value),
    value
  );
}
function _const(valueAccessor, fn) {
  return (
    (valueAccessor = decodeAccessor(valueAccessor)),
    (scope, value) => {
      (scope[valueAccessor] !== value || !(valueAccessor in scope)) &&
        ((scope[valueAccessor] = value), fn?.(scope));
    }
  );
}
function fillJoin(key, valueAccessor, join, dispatch) {
  let prev = patchFills[key],
    prevFn = prev?._;
  if (!prev || prevFn) {
    let fn = prevFn
      ? (scope) => {
          (prevFn(scope), dispatch(scope));
        }
      : dispatch;
    (patchFills[key] = _const(valueAccessor, fn))._ = fn;
  }
  return join;
}
function _fill_join(key, valueAccessor, join, buildDispatch) {
  return fillJoin(key, valueAccessor, join, buildDispatch ? buildDispatch(join) : join);
}
function _fill_join_if(key, valueAccessor, join, ...hops) {
  let dispatch = join;
  for (let i = hops.length; i > 0; i -= 2)
    dispatch = _if_closure(hops[i - 2], hops[i - 1], dispatch);
  return fillJoin(key, valueAccessor, join, dispatch);
}
function _fill_join_for(key, valueAccessor, join, ...hops) {
  let dispatch = join;
  for (let i = hops.length; i--;) dispatch = _for_closure(hops[i], dispatch);
  return fillJoin(key, valueAccessor, join, dispatch);
}
function _fill_join_closure(key, valueAccessor, join, index) {
  let signals = (closureFillJoins[key] ??= []),
    closureJoin = join;
  return (
    (signals[index] = join),
    (closureJoin.c = index),
    signals.d ||
      ((signals.d = 1),
      fillJoin(key, valueAccessor, join, (scope) => {
        let instances = scope[closureJoin.a];
        if (instances) {
          let signalIndex = closureJoin.b;
          for (let childScope of instances)
            if (childScope.H > 0 && childScope.H < runId) {
              let sig = signals[childScope[signalIndex] || 0];
              sig && queueRender(childScope, sig, -1);
            }
        }
      })),
    join
  );
}
function fill(key, signal) {
  return ((patchFills[key] = signal), signal);
}
function _fill_dynamic_tag(key, valueAccessor, signal) {
  let readAccessor = decodeAccessor(valueAccessor);
  return (
    dynamicTagFills.add(key),
    fillJoin(key, valueAccessor, signal, (scope) => signal(scope, scope[readAccessor])),
    signal
  );
}
function _fill_let(key, id, fn) {
  return fill(key, _let(id, fn));
}
function _fill_let_change(key, id, fn) {
  return fill(key, _let_change(id, fn));
}
function _fill_const(key, id, fn) {
  return fill(key, _const(id, fn));
}
function _or(id, fn, defaultPending = 1, scopeIdAccessor = "L") {
  return (
    scopeIdAccessor !== "L" && (scopeIdAccessor = decodeAccessor(scopeIdAccessor)),
    (scope) => {
      scope.H === runId
        ? (~id) in scope
          ? --scope[~id] || fn(scope)
          : (scope[~id] = defaultPending)
        : queueRender(scope, fn, id, 0, scope[scopeIdAccessor]);
    }
  );
}
function _for_closure(ownerLoopNodeAccessor, fn) {
  ownerLoopNodeAccessor = decodeAccessor(ownerLoopNodeAccessor);
  let scopeAccessor = "A" + ownerLoopNodeAccessor,
    ownerSignal = (ownerScope) => {
      let scopes = toArray(ownerScope[scopeAccessor]);
      scopes.length &&
        queueRender(
          ownerScope,
          () => {
            for (let scope of scopes) scope.H > 0 && scope.H < runId && fn(scope);
          },
          -1,
          0,
          scopes[0].L,
        );
    };
  return ((ownerSignal._ = fn), ownerSignal);
}
function _for_selector(ownerLoopNodeAccessor, ownerValueAccessor, keyValueAccessor, fn) {
  ((ownerLoopNodeAccessor = decodeAccessor(ownerLoopNodeAccessor)),
    (ownerValueAccessor = decodeAccessor(ownerValueAccessor)),
    keyValueAccessor !== "M" && (keyValueAccessor = decodeAccessor(keyValueAccessor)));
  let scopeAccessor = "A" + ownerLoopNodeAccessor,
    mapAccessor = "O" + ownerLoopNodeAccessor,
    prevKeyProp = `_${ownerValueAccessor}`,
    ownerSignal = (ownerScope) => {
      let scopes = toArray(ownerScope[scopeAccessor]);
      if (ownerScope.H < runId && scopes.length) {
        let nextKey = ownerScope[ownerValueAccessor];
        queueRender(
          ownerScope,
          () => {
            let map = keyedScopes(ownerScope, scopeAccessor, mapAccessor, keyValueAccessor);
            if (map && prevKeyProp in map) {
              let prevScope = map.get(map[prevKeyProp]),
                nextScope = map.get(nextKey);
              prevScope !== nextScope &&
                (runLiveBranch(prevScope, fn), runLiveBranch(nextScope, fn));
            } else for (let scope of toArray(ownerScope[scopeAccessor])) runLiveBranch(scope, fn);
            map && (map[prevKeyProp] = nextKey);
          },
          -1,
          0,
          scopes[0].L,
        );
      }
    };
  return ((ownerSignal._ = fn), ownerSignal);
}
function keyedScopes(ownerScope, scopeAccessor, mapAccessor, keyValueAccessor) {
  let map = (ownerScope[mapAccessor] ||= /* @__PURE__ */ new Map());
  if (!map.size)
    for (let scope of toArray(ownerScope[scopeAccessor])) {
      let key = scope.M ?? scope[keyValueAccessor];
      if (key === void 0) return (ownerScope[mapAccessor] = null);
      ((scope.M = key), map.set(key, scope));
    }
  return map;
}
function runLiveBranch(scope, fn) {
  scope && scope.H > 0 && scope.H < runId && fn(scope);
}
function _if_closure(ownerConditionalNodeAccessor, branch, fn) {
  ownerConditionalNodeAccessor = decodeAccessor(ownerConditionalNodeAccessor);
  let scopeAccessor = "A" + ownerConditionalNodeAccessor,
    branchAccessor = "D" + ownerConditionalNodeAccessor,
    ownerSignal = (scope) => {
      let ifScope = scope[scopeAccessor];
      ifScope &&
        ifScope.H > 0 &&
        ifScope.H < runId &&
        (scope[branchAccessor] || 0) === branch &&
        queueRender(ifScope, fn, -1);
    };
  return ((ownerSignal._ = fn), ownerSignal);
}
function subscribeToScopeSet(ownerScope, accessor, scope) {
  let subscribers = (ownerScope[accessor] ||= /* @__PURE__ */ new Set()),
    { size } = subscribers;
  subscribers.add(scope).size !== size && trackCleanup(scope, subscribers);
}
function _closure(...closureSignals) {
  let [firstSignal] = closureSignals,
    scopeInstances = firstSignal.a,
    signalIndex = firstSignal.b;
  for (let i = closureSignals.length; i--;) closureSignals[i].c = i;
  return (scope) => {
    if (scope[scopeInstances])
      for (let childScope of scope[scopeInstances])
        childScope.H > 0 &&
          childScope.H < runId &&
          queueRender(childScope, closureSignals[childScope[signalIndex] || 0], -1);
  };
}
function _closure_get(valueAccessor, fn, getOwnerScope, resumeId) {
  valueAccessor = decodeAccessor(valueAccessor);
  let closureSignal = (scope) => {
    ((scope[closureSignal.b] = closureSignal.c),
      fn(scope),
      subscribeToScopeSet(getOwnerScope ? getOwnerScope(scope) : scope._, closureSignal.a, scope));
  };
  return (
    (closureSignal.a = valueAccessor),
    (closureSignal.b = "C" + valueAccessor),
    resumeId && _resume(resumeId, closureSignal),
    closureSignal
  );
}
function _child_setup(setup) {
  return (
    (setup._ = (scope, owner) => {
      ((scope._ = owner), queueRender(scope, setup, -1));
    }),
    setup
  );
}
function _var(scope, childAccessor, signal) {
  scope[decodeAccessor(childAccessor)].T = (value) => signal(scope, value);
}
function _return_change(scope, changeHandler) {
  scope.U = changeHandler || void 0;
}
function _id(scope, accessor) {
  let id = accessor !== void 0 && scope[accessor];
  if (!id) {
    let $global = scope.$,
      n = tagIdsByGlobal.get($global) || 0;
    (tagIdsByGlobal.set($global, n + 1),
      (id = "c" + $global.runtimeId + $global.renderId + n.toString(36)),
      accessor !== void 0 && (scope[accessor] = id));
  }
  return id;
}
function _script(id, fn) {
  return (
    _resume(id, fn),
    (scope) => {
      queueEffect(scope, fn);
    }
  );
}
function _el_read(value) {
  return value;
}
function* traverse(scope, path, args, i = path.length - 1) {
  if (scope)
    if (Symbol.iterator in scope)
      for (let childScope of scope.values()) yield* traverse(childScope, path, args, i);
    else {
      let item = scope[path[i]];
      i
        ? yield* traverse(item, path, args, i - 1)
        : yield typeof item == "function" ? item(...args) : item;
    }
}
function _hoist(...path) {
  return (
    (path = path.map((p) => (typeof p == "string" ? p : decodeAccessor(p)))),
    (scope) => {
      let fn = (...args) => traverse(scope, path, args).next().value;
      return ((fn[Symbol.iterator] = () => traverse(scope, path, [])), fn);
    }
  );
}
function _hoist_resume(id, ...path) {
  return _resume(id, _hoist(...path));
}
/** Cloned templates are small, where a TreeWalker's per-step cost dominates. */
function walk(startNode, walkCodes, branch) {
  ((currentNode = startNode), walkInternal(0, walkCodes, branch));
}
function beginPatch(renderId) {
  let render = (patchRender = curRenders[renderId]);
  return ((patching = 1), patchId++, render);
}
function abortPatch() {
  patchRender = patching = 0;
}
function ready(readyId) {
  (readyIds ||= /* @__PURE__ */ new Set()).add(readyId);
  for (let renderId in curRenders) runResumeEffects(curRenders[renderId]);
}
function initEmbedded(readyId, runtimeId) {
  (embedRenders ||
    ((embedRenders = /* @__PURE__ */ new Map()),
    new MutationObserver(() => {
      for (let [anchor, [renderId, scopes]] of embedRenders)
        if (!anchor.isConnected) {
          (embedRenders.delete(anchor), delete curRenders[renderId]);
          for (let id in scopes) destroyScope(scopes[id]);
        }
    }).observe(document, {
      childList: !0,
      subtree: !0,
    })),
    ready(readyId),
    init(runtimeId));
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
            initScope = (scope) => (
              (scope.H = 1),
              (scope.$ = initGlobal()),
              branchesEnabled && scope.G && (scope.F = getScope(scope.G)),
              scope
            ),
            applyScopes = (partials) => {
              if (patching && patchRender === render) {
                let i = 0;
                for (; typeof partials[i] == "string";) onPatchRecord(partials[i++]);
                partials[i] && walkScope(partials[i], getScope(1));
                return;
              }
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
                  ? registeredValues[registryId](getScope(data))
                  : getScope(data)
                : applyScopes(data),
            createVisitBranches =
              (
                branchScopesStack = [],
                branchStarts = [],
                orphanBranches = [],
                deferredOwners = [],
                curBranchScopes,
              ) =>
              (
                branchId,
                branch,
                endedBranches,
                accessor,
                singleNode,
                parent = visit.parentNode,
                startVisit = visit,
                i = orphanBranches.length,
                j = deferredOwners.length,
              ) => {
                for (
                  visitType !== "[" &&
                  ((visitScope[nextToken()] =
                    visitType === ")" || visitType === "}" ? parent : visit),
                  (accessor = "A" + lastToken),
                  (singleNode = visitType !== "]" && visitType !== ")"),
                  nextToken());
                  (branchId = +lastToken);
                ) {
                  if (
                    ((endedBranches ||= []).push((branch = getScope(branchId))),
                    setParentBranch(branch, branch.F),
                    (branch.O = render.p?.[branchId]) && (branch.O.m = render.m),
                    singleNode)
                  ) {
                    for (
                      ;
                      startVisit.previousSibling &&
                      ~visits.indexOf((startVisit = startVisit.previousSibling));
                    );
                    ((branch._ ??= visitScope),
                      (branch.K = branch.S = startVisit),
                      visitType === "'" && (branch.a = startVisit));
                  } else
                    ((curBranchScopes = push(curBranchScopes, branch)),
                      accessor &&
                        ((visitScope[accessor] = curBranchScopes),
                        forEach(curBranchScopes, (scope) => (scope._ ??= visitScope)),
                        (curBranchScopes = branchScopesStack.pop())),
                      (startVisit = branchStarts.pop()),
                      parent !== startVisit.parentNode && parent.prepend(startVisit),
                      (branch.S = startVisit),
                      (branch.K =
                        visit.previousSibling === startVisit
                          ? startVisit
                          : parent.insertBefore(new Text(), visit)));
                  for (; i && orphanBranches[i - 1].L > branchId;)
                    (i--, setParentBranch(orphanBranches.pop(), branch));
                  for (; j && deferredOwners[j - 1].L > branchId;) {
                    j--;
                    let owner = deferredOwners.pop();
                    owner.F !== owner && (owner.F = branch);
                  }
                  nextToken();
                }
                if (endedBranches) {
                  for (let ended of endedBranches) orphanBranches.push(ended);
                  singleNode &&
                    (visitScope[accessor] =
                      endedBranches.length > 1 ? endedBranches.reverse() : endedBranches[0]);
                }
                visitType === "["
                  ? (endedBranches ||
                      (branchScopesStack.push(curBranchScopes), (curBranchScopes = void 0)),
                    branchStarts.push(visit))
                  : deferredOwners.push(visitScope);
              },
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
                      ? (lastEffect = registeredValues[lastToken])
                      : effects.push(lastEffect, getScope(lastToken));
                else if (Array.isArray(serialized)) {
                  if (
                    !(
                      readyIds &&
                      serialized.every((dep) => readyIds.has(dep) && !render.b[dep].length)
                    )
                  )
                    break;
                } else if (readyIds && typeof serialized == "number") break;
                else {
                  let scopes = serialized(serializeContext);
                  Array.isArray(scopes)
                    ? applyScopes(scopes)
                    : patching && patchRender === render && scopes && applyScopes([scopes]);
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
            lastTokenIndex,
            visitBranches,
            embedAnchor;
          return (
            (serializeContext._ = registeredValues),
            (render.m = (effects) => {
              if ((processResumes(render.r, effects), readyIds && render.b))
                for (let progress = 1; progress;) {
                  progress = 0;
                  for (let readyId of readyIds) {
                    let resumes = render.b[readyId];
                    resumes && processResumes(resumes, effects) && (progress = 1);
                  }
                }
              let retained = 0;
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
                } else
                  branchesEnabled
                    ? (visitBranches ||= createVisitBranches())()
                    : render.b && (visits[retained++] = visit);
              return (
                embedRenders &&
                  !embedAnchor &&
                  visit &&
                  embedRenders.set(
                    (embedAnchor = visit.parentNode.insertBefore(new Text(), visit.nextSibling)),
                    [renderId, scopeLookup],
                  ),
                (visits.length = retained),
                effects
              );
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
    ((isResuming = 1), runEffects(render.m([]), 1));
  } finally {
    isResuming = 0;
  }
}
function getRegisteredWithScope(id, scope) {
  let val = registeredValues[id];
  return scope ? val(scope) : val;
}
function _resume(id, obj) {
  return (registeredValues[id] = obj);
}
function _var_resume(id, signal) {
  return (_resume(id, (scope) => (value) => signal(scope, value)), signal);
}
function _el(id, accessor) {
  return ((accessor = decodeAccessor(accessor)), _resume(id, (scope) => () => scope[accessor]));
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
function createAndSetupBranch($global, renderer, parentScope, parentNode) {
  return setupBranch(renderer, createBranch($global, renderer, parentScope, parentNode));
}
function setupBranch(renderer, branch) {
  return (renderer.c && queueRender(branch, renderer.c, -1), branch);
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
function _content_resume(id, template, walks, setup, params, dynamicScopesAccessor) {
  return _resume(id, _content(id, template, walks, setup, params, dynamicScopesAccessor));
}
function _content_closures(renderer, closureFns) {
  let closureSignals = {};
  for (let key in closureFns) closureSignals[key] = _const(+key, closureFns[key]);
  return (owner, closureValues) => {
    let instance = renderer(owner);
    return ((instance.g = closureSignals), (instance.h = closureValues), instance);
  };
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
function _attr(element, name, value) {
  setAttribute(element, name, normalizeAttrValue(value));
}
function setAttribute(element, name, value) {
  element.getAttribute(name) != value &&
    (value === void 0 ? element.removeAttribute(name) : element.setAttribute(name, value));
}
function _attr_class(element, value) {
  setAttribute(element, "class", toDelimitedString(value, " ", stringifyClassObject) || void 0);
}
function _attr_class_items(element, items) {
  for (let key in items) _attr_class_item(element, key, items[key]);
}
function _attr_class_item(element, name, value) {
  element.classList.toggle(name, !!value);
}
function _attr_style(element, value) {
  setAttribute(element, "style", toDelimitedString(value, ";", stringifyStyleObject) || void 0);
}
function _attr_style_items(element, items) {
  for (let key in items) _attr_style_item(element, key, items[key]);
}
function _attr_style_item(element, name, value) {
  element.style.setProperty(name, _to_text(value));
}
function _style_shell(scope, nodeAccessor) {
  let element = scope[nodeAccessor],
    id = _id(scope);
  (_attr_nonce(scope, nodeAccessor),
    _attr(element, "class", id),
    _text_content(element, "." + id + "~*{}"));
}
function _style_rule_item(element, name, value) {
  let text = element.textContent,
    decl = name + ":" + escapeStyleValue(_to_text(value)) + ";",
    start = text.indexOf("{" + name + ":");
  (~start || (start = text.indexOf(";" + name + ":")),
    _text_content(
      element,
      ~start
        ? text.slice(0, ++start) + decl + text.slice(text.indexOf(";", start) + 1)
        : text.slice(0, -1) + decl + "}",
    ));
}
function _attr_nonce(scope, nodeAccessor) {
  _attr(scope[nodeAccessor], "nonce", scope.$.cspNonce);
}
function _text(node, value) {
  let normalizedValue = _to_text(value);
  node.data !== normalizedValue && (node.data = normalizedValue);
}
function _text_content(node, value) {
  let normalizedValue = _to_text(value);
  node.textContent !== normalizedValue && (node.textContent = normalizedValue);
}
function _attrs(scope, nodeAccessor, nextAttrs, controllable) {
  let el = scope[nodeAccessor];
  for (let i = el.attributes.length; i--;) {
    let { name } = el.attributes.item(i);
    (nextAttrs && (name in nextAttrs || hasAttrAlias(el, name, nextAttrs))) ||
      el.removeAttribute(name);
  }
  attrsInternal(scope, nodeAccessor, nextAttrs, controllable);
}
function _attrs_content(scope, nodeAccessor, nextAttrs, controllable) {
  (_attrs(scope, nodeAccessor, nextAttrs, controllable),
    _attr_content(scope, nodeAccessor, nextAttrs?.content));
}
function hasAttrAlias(element, attr, nextAttrs) {
  return attr === "checked" && element.tagName === "INPUT" && "checkedValue" in nextAttrs;
}
function _attrs_partial(scope, nodeAccessor, nextAttrs, skip, controllable) {
  let el = scope[nodeAccessor],
    partial = {};
  for (let i = el.attributes.length; i--;) {
    let { name } = el.attributes.item(i);
    !skip[name] &&
      !(nextAttrs && (name in nextAttrs || hasAttrAlias(el, name, nextAttrs))) &&
      el.removeAttribute(name);
  }
  for (let name in nextAttrs) {
    let key = isEventHandler(name) ? `on-${getEventHandlerName(name)}` : name;
    skip[key] || (partial[key] = nextAttrs[name]);
  }
  attrsInternal(scope, nodeAccessor, partial, controllable);
}
function _attrs_partial_content(scope, nodeAccessor, nextAttrs, skip, controllable) {
  (_attrs_partial(scope, nodeAccessor, nextAttrs, skip, controllable),
    _attr_content(scope, nodeAccessor, nextAttrs?.content));
}
function attrsInternal(scope, nodeAccessor, nextAttrs, controllable) {
  let el = scope[nodeAccessor],
    events = scope["I" + nodeAccessor],
    skip;
  for (let name in events) events[name] = 0;
  controllable &&
    ((scope["F" + nodeAccessor] = 5),
    (scope["E" + nodeAccessor] = 0),
    nextAttrs && (skip = controllable(scope, nodeAccessor, nextAttrs)));
  for (let name in nextAttrs) {
    let value = nextAttrs[name];
    switch (name) {
      case "class":
        _attr_class(el, value);
        break;
      case "style":
        _attr_style(el, value);
        break;
      default:
        isEventHandler(name)
          ? ((events ||= scope["I" + nodeAccessor] = {})[getEventHandlerName(name)] = value)
          : skip?.test(name) ||
            (name === "content" && el.tagName !== "META") ||
            _attr(el, name, value);
        break;
    }
  }
}
function _attr_content(scope, nodeAccessor, value) {
  let content = normalizeClientRender(value);
  scope["D" + nodeAccessor] !== (scope["D" + nodeAccessor] = rendererKey(content)) &&
    (setConditionalRenderer(scope, nodeAccessor, content, createAndSetupBranch),
    content?.f && subscribeToScopeSet(content.e, content.f, scope["A" + nodeAccessor]));
  for (let accessor in content?.g)
    content.g[accessor](scope["A" + nodeAccessor], content.h[accessor]);
}
function _attrs_script(scope, nodeAccessor) {
  let el = scope[nodeAccessor],
    events = scope["I" + nodeAccessor];
  controllableScripts[scope["F" + nodeAccessor]]?.(scope, nodeAccessor);
  for (let name in events) _on(el, name, events[name]);
}
function _html(scope, value, accessor) {
  let firstChild = scope[accessor],
    parentNode = firstChild.parentNode,
    lastChild = scope["H" + accessor] || firstChild,
    newContent = parseHTML(_to_text(value), parentNode.namespaceURI);
  (insertChildNodes(
    parentNode,
    firstChild,
    (scope[accessor] = newContent.firstChild || newContent.appendChild(new Text())),
    (scope["H" + accessor] = newContent.lastChild),
  ),
    removeChildNodes(firstChild, lastChild));
}
function normalizeClientRender(value) {
  let renderer = normalizeDynamicRenderer(value);
  if (renderer && renderer.a) return renderer;
}
function _lifecycle(scope, thisObj, index = 0) {
  let accessor = "K" + index,
    instance = scope[accessor];
  instance
    ? (Object.assign(instance, thisObj), instance.onUpdate?.())
    : ((scope[accessor] = thisObj),
      Object.assign(thisObj, thisObj.onMount?.()),
      ($signal(scope, accessor).onabort = () => thisObj.onDestroy?.()));
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
function resolveCursorPosition(inputType, initialPosition, initialValue, updatedValue) {
  if (
    (initialPosition || initialPosition === 0) &&
    (initialPosition !== initialValue.length || /kw/.test(inputType))
  ) {
    let before = initialValue.slice(0, initialPosition),
      after = initialValue.slice(initialPosition);
    if (updatedValue.startsWith(before)) return initialPosition;
    if (updatedValue.endsWith(after)) return updatedValue.length - after.length;
    let count = before.match(R)?.length;
    for (; count && R.test(updatedValue);) count--;
    return count ? updatedValue.length : R.lastIndex;
  }
  return -1;
}
function _attr_input_checked_default(scope, nodeAccessor, checked) {
  let el = scope[nodeAccessor],
    normalizedChecked = isNotVoid(checked);
  if (el.defaultChecked !== normalizedChecked) {
    let restoreValue = scope.H < runId ? el.checked : normalizedChecked;
    ((el.defaultChecked = normalizedChecked),
      restoreValue !== normalizedChecked && (el.checked = restoreValue));
  }
}
/** Filled by the `controllable-*.feat` modules a compiled page imports, so a
 * page carries only the control kinds its tags can be (`_attrs_script`
 * resolves the kind at run time). */
/** The render pass equivalent, for a tag whose name is only known at run time;
 * a statically named tag passes its claim to `_attrs` instead. */
function _attr_input_checked(scope, nodeAccessor, checked, checkedChange) {
  let el = scope[nodeAccessor],
    normalizedChecked = isNotVoid(checked);
  ((scope["E" + nodeAccessor] = checkedChange),
    (scope["F" + nodeAccessor] = checkedChange ? 0 : 5),
    checkedChange && scope.H < runId
      ? (el.checked = normalizedChecked)
      : _attr_input_checked_default(scope, nodeAccessor, normalizedChecked));
}
function _attr_input_checked_script(scope, nodeAccessor) {
  let el = scope[nodeAccessor];
  syncControllableFormInput(el, hasCheckboxChanged, () => {
    let checkedChange = scope["E" + nodeAccessor];
    if (checkedChange) {
      let newValue = el.checked;
      ((el.checked = !newValue), checkedChange(newValue), run());
    }
  });
}
function _attr_input_checkedValue_default(scope, nodeAccessor, checkedValue, value) {
  let multiple = Array.isArray(checkedValue),
    normalizedValue = normalizeStrProp(value),
    normalizedCheckedValue = multiple
      ? checkedValue.map(normalizeStrProp)
      : normalizeStrProp(checkedValue);
  (_attr(scope[nodeAccessor], "value", value),
    _attr_input_checked_default(
      scope,
      nodeAccessor,
      multiple
        ? normalizedCheckedValue.includes(normalizedValue)
        : normalizedValue === normalizedCheckedValue,
    ));
}
function _attr_input_checkedValue(scope, nodeAccessor, checkedValue, checkedValueChange, value) {
  let el = scope[nodeAccessor],
    multiple = Array.isArray(checkedValue),
    normalizedCheckedValue = (scope["G" + nodeAccessor] = multiple
      ? checkedValue.map(normalizeStrProp)
      : normalizeStrProp(checkedValue));
  ((scope["E" + nodeAccessor] = checkedValueChange),
    (scope["F" + nodeAccessor] = checkedValueChange ? 1 : 5),
    checkedValueChange && scope.H < runId
      ? ((el.checked = multiple
          ? normalizedCheckedValue.includes(normalizeStrProp(value))
          : normalizeStrProp(value) === normalizedCheckedValue),
        _attr(el, "value", value))
      : _attr_input_checkedValue_default(scope, nodeAccessor, checkedValue, value));
}
function _attr_input_checkedValue_script(scope, nodeAccessor) {
  let el = scope[nodeAccessor];
  (isResuming &&
    el.defaultChecked &&
    (scope["G" + nodeAccessor]
      ? scope["G" + nodeAccessor].push(el.value)
      : (scope["G" + nodeAccessor] = el.value)),
    syncControllableFormInput(el, hasCheckboxChanged, () => {
      let checkedValueChange = scope["E" + nodeAccessor];
      if (checkedValueChange) {
        let controlledValueKey = "G" + nodeAccessor,
          oldValue = scope[controlledValueKey],
          newValue = Array.isArray(oldValue)
            ? updateList(oldValue, el.value, el.checked)
            : el.checked
              ? el.value
              : void 0;
        if (el.name && el.type[0] === "r")
          for (let radio of document.querySelectorAll(`[type=radio][name=${CSS.escape(el.name)}]`))
            radio.form === el.form &&
              (newValue === void 0 && radio.defaultChecked && (newValue = radio.value),
              (radio.checked = Array.isArray(oldValue)
                ? oldValue.includes(radio.value)
                : controlledValueKey in scope
                  ? oldValue === radio.value
                  : radio.defaultChecked));
        else el.checked = !el.checked;
        (checkedValueChange(newValue), run());
      }
    }));
}
function _attr_input_value_default(scope, nodeAccessor, value) {
  let el = scope[nodeAccessor],
    normalizedValue = normalizeAttrValue(value) || "";
  if (el.defaultValue !== normalizedValue) {
    let restoreValue = scope.H < runId ? el.value : normalizedValue;
    ((el.defaultValue = normalizedValue), setInputValue(el, restoreValue));
  }
}
function _attr_input_value_dynamic_default(scope, nodeAccessor, value) {
  let el = scope[nodeAccessor];
  /i[ot]|e[cns]|^[bi]/.test(el.type)
    ? _attr(el, "value", value)
    : _attr_input_value_default(scope, nodeAccessor, value);
}
function _attr_input_value(
  scope,
  nodeAccessor,
  value,
  valueChange,
  setDefault = _attr_input_value_default,
) {
  let el = scope[nodeAccessor],
    normalizedValue = normalizeAttrValue(value) || "";
  ((scope["E" + nodeAccessor] = valueChange),
    (scope["G" + nodeAccessor] = normalizedValue),
    (scope["F" + nodeAccessor] = valueChange ? 2 : 5),
    valueChange && scope.H < runId
      ? setInputValue(el, normalizedValue)
      : setDefault(scope, nodeAccessor, value));
}
function _attr_input_value_attribute_default(scope, nodeAccessor, value) {
  _attr(scope[nodeAccessor], "value", value);
}
function _attr_input_value_script(scope, nodeAccessor) {
  let el = scope[nodeAccessor];
  (isResuming && (scope["G" + nodeAccessor] = el.defaultValue),
    syncControllableFormInput(el, hasValueChanged, (ev) => {
      let valueChange = scope["E" + nodeAccessor];
      valueChange &&
        ((inputType = ev?.inputType),
        valueChange(el.value),
        run(),
        setInputValue(el, scope["G" + nodeAccessor]),
        (inputType = ""));
    }));
}
function setInputValue(el, value) {
  if (el.value !== value) {
    let updatedPosition = resolveCursorPosition(
      inputType,
      document.activeElement === el && el.selectionStart,
      el.value,
      (el.value = value),
    );
    ~updatedPosition && el.setSelectionRange(updatedPosition, updatedPosition);
  }
}
function _attr_select_value_default(scope, nodeAccessor, value) {
  let restoreValue,
    el = scope[nodeAccessor],
    live = scope.H < runId,
    multiple = Array.isArray(value),
    normalizedValue = multiple ? value.map(normalizeStrProp) : normalizeStrProp(value);
  pendingEffects.unshift(() => {
    for (let opt of el.options) {
      let selected = multiple ? normalizedValue.includes(opt.value) : opt.value === normalizedValue;
      opt.defaultSelected !== selected &&
        (live && (restoreValue ??= getSelectValue(el, multiple)), (opt.defaultSelected = selected));
    }
    restoreValue !== void 0 && setSelectValue(el, restoreValue, multiple);
  }, scope);
}
function _attr_select_value(scope, nodeAccessor, value, valueChange) {
  let el = scope[nodeAccessor],
    existing = scope.H < runId,
    multiple = Array.isArray(value),
    normalizedValue = (scope["G" + nodeAccessor] = multiple
      ? value.map(normalizeStrProp)
      : normalizeStrProp(value));
  ((scope["E" + nodeAccessor] = valueChange),
    (scope["F" + nodeAccessor] = valueChange ? 3 : 5),
    valueChange && existing
      ? pendingEffects.unshift(() => setSelectValue(el, normalizedValue, multiple), scope)
      : _attr_select_value_default(scope, nodeAccessor, normalizedValue));
}
function _attr_select_value_script(scope, nodeAccessor) {
  let el = scope[nodeAccessor],
    onChange = () => {
      let valueChange = scope["E" + nodeAccessor];
      if (valueChange) {
        let oldValue = scope["G" + nodeAccessor],
          multiple = Array.isArray(oldValue),
          newValue = getSelectValue(el, multiple);
        (setSelectValue(el, oldValue, multiple), valueChange(newValue), run());
      }
    };
  if (isResuming)
    if (el.multiple) {
      scope["G" + nodeAccessor] = [];
      for (let opt of el.options) opt.defaultSelected && scope["G" + nodeAccessor].push(opt.value);
    } else {
      scope["G" + nodeAccessor] = "";
      for (let opt of el.options)
        if (opt.defaultSelected) {
          scope["G" + nodeAccessor] = opt.value;
          break;
        }
    }
  (syncControllableFormInput(el, hasSelectChanged, onChange),
    observeOnce(
      scope,
      nodeAccessor,
      {
        childList: !0,
        subtree: !0,
      },
      () => {
        let value = scope["G" + nodeAccessor];
        (Array.isArray(value)
          ? value.length !== el.selectedOptions.length ||
            value.some((_, i) => !value.includes(el.selectedOptions[i].value))
          : el.value !== value) && onChange();
      },
    ));
}
function setSelectValue(el, value, multiple) {
  if (multiple) for (let opt of el.options) opt.selected = value.includes(opt.value);
  else el.value = value;
}
function getSelectValue(el, multiple) {
  return multiple ? Array.from(el.selectedOptions, (opt) => opt.value) : el.value;
}
function _attr_details_or_dialog_open_default(scope, nodeAccessor, open) {
  scope.H === runId && (scope[nodeAccessor].open = isNotVoid(open));
}
function _attr_details_or_dialog_open(scope, nodeAccessor, open, openChange) {
  let normalizedOpen = (scope["G" + nodeAccessor] = isNotVoid(open));
  ((scope["E" + nodeAccessor] = openChange),
    (scope["F" + nodeAccessor] = openChange ? 4 : 5),
    openChange && scope.H < runId
      ? (scope[nodeAccessor].open = normalizedOpen)
      : _attr_details_or_dialog_open_default(scope, nodeAccessor, normalizedOpen));
}
function _attr_details_or_dialog_open_script(scope, nodeAccessor) {
  let el = scope[nodeAccessor];
  observeOnce(
    scope,
    nodeAccessor,
    {
      attributes: !0,
      attributeFilter: ["open"],
    },
    () => {
      let openChange = scope["E" + nodeAccessor];
      if (openChange && el.open === !scope["G" + nodeAccessor]) {
        let newValue = el.open;
        ((el.open = !newValue), openChange(newValue), run());
      }
    },
  );
}
function observeOnce(scope, nodeAccessor, init, callback) {
  (scope["N" + nodeAccessor] ||= new MutationObserver(callback)).observe(scope[nodeAccessor], init);
}
function syncControllableFormInput(el, hasChanged, onChange) {
  ((el._ = onChange),
    delegate("input", handleChange),
    el.form && delegate("reset", handleFormReset),
    isResuming && hasChanged(el) && queueMicrotask(onChange));
}
function handleChange(ev) {
  ev.target._?.(ev);
}
function handleFormReset(ev) {
  let handlers = [];
  for (let el of ev.target.elements) el._ && hasFormElementChanged(el) && handlers.push(el._);
  requestAnimationFrame(() => {
    if (!ev.defaultPrevented) for (let change of handlers) change();
  });
}
function hasValueChanged(el) {
  return el.value !== el.defaultValue;
}
function hasCheckboxChanged(el) {
  return el.checked !== el.defaultChecked;
}
function hasSelectChanged(el) {
  for (let opt of el.options) if (opt.selected !== opt.defaultSelected) return !0;
}
function hasFormElementChanged(el) {
  return el.options ? hasSelectChanged(el) : hasValueChanged(el) || hasCheckboxChanged(el);
}
function normalizeStrProp(value) {
  return normalizeAttrValue(value) || "";
}
function updateList(arr, val, push) {
  let index = arr.indexOf(val);
  return (
    (push
      ? !~index && [...arr, val]
      : ~index && arr.slice(0, index).concat(arr.slice(index + 1))) || arr
  );
}
function _controllable_input(scope, nodeAccessor, nextAttrs) {
  return "checked" in nextAttrs || "checkedChange" in nextAttrs
    ? (_attr_input_checked(scope, nodeAccessor, nextAttrs.checked, nextAttrs.checkedChange),
      /^checked(?:Value)?(?:Change)?$/)
    : "checkedValue" in nextAttrs || "checkedValueChange" in nextAttrs
      ? (_attr_input_checkedValue(
          scope,
          nodeAccessor,
          nextAttrs.checkedValue,
          nextAttrs.checkedValueChange,
          nextAttrs.value,
        ),
        /^(?:value|checked(?:Value)?)(?:Change)?$/)
      : _controllable_textarea(scope, nodeAccessor, nextAttrs, _attr_input_value_dynamic_default);
}
function _controllable_textarea(scope, nodeAccessor, nextAttrs, dynamicDefault) {
  if ("value" in nextAttrs || "valueChange" in nextAttrs)
    return (
      _attr_input_value(
        scope,
        nodeAccessor,
        nextAttrs.value,
        nextAttrs.valueChange,
        dynamicDefault,
      ),
      /^value(?:Change)?$/
    );
}
function _controllable_select(scope, nodeAccessor, nextAttrs) {
  if ("value" in nextAttrs || "valueChange" in nextAttrs)
    return (
      _attr_select_value(scope, nodeAccessor, nextAttrs.value, nextAttrs.valueChange),
      /^value(?:Change)?$/
    );
}
function _controllable_open(scope, nodeAccessor, nextAttrs) {
  if ("open" in nextAttrs || "openChange" in nextAttrs)
    return (
      _attr_details_or_dialog_open(scope, nodeAccessor, nextAttrs.open, nextAttrs.openChange),
      /^open(?:Change)?$/
    );
}
function _await_promise(nodeAccessor, params) {
  nodeAccessor = decodeAccessor(nodeAccessor);
  let promiseAccessor = "L" + nodeAccessor,
    branchAccessor = "A" + nodeAccessor,
    resolveAwait = (scope, referenceNode, value) => {
      let awaitBranch = scope[branchAccessor];
      return (
        awaitBranch.V &&
          ((awaitBranch.Y = awaitBranch.Y?.forEach(syncGen)),
          setupBranch(awaitBranch.V, awaitBranch),
          (awaitBranch.V = 0),
          insertBranchBefore(awaitBranch, scope[nodeAccessor].parentNode, scope[nodeAccessor]),
          referenceNode.remove()),
        params?.(awaitBranch, [value]),
        awaitBranch
      );
    },
    awaitPromise = (scope, promise) => {
      !isPromise(promise) && scope[promiseAccessor] && (promise = Promise.resolve(promise));
      let awaitBranch = scope[branchAccessor],
        tryPlaceholder = findBranchWithKey(scope, "Q"),
        tryBranch = tryPlaceholder || awaitBranch;
      if (!(isPromise(promise) ? tryBranch : awaitBranch)) {
        scope[promiseAccessor] = () => awaitPromise(scope, promise);
        return;
      }
      if (!isPromise(promise)) {
        resolveAwait(scope, scope[nodeAccessor], promise);
        return;
      }
      let awaitCounter = tryBranch.O;
      (placeholderShown.add(pendingEffects),
        !tryPlaceholder &&
          !awaitCounter?.i &&
          (awaitCounter = createAwaitCounter(tryBranch, () => {
            if (tryBranch === scope[branchAccessor]) {
              let anchor = scope[nodeAccessor];
              if (anchor.parentNode) {
                let detachedParent = scope[branchAccessor].S.parentNode;
                detachedParent === anchor.parentNode
                  ? anchor.remove()
                  : anchor.replaceWith(detachedParent);
              }
            } else dismissPlaceholder(tryBranch);
          })),
        scope[promiseAccessor] ||
          (awaitBranch && (awaitBranch.W ||= []),
          tryPlaceholder
            ? (awaitCounter = addAwaitCounter(scope, tryPlaceholder))
            : scheduleAwaitFrame(awaitCounter, scope, () => {
                awaitBranch.V ||
                  (awaitBranch.S.parentNode.insertBefore(scope[nodeAccessor], awaitBranch.S),
                  tempDetachBranch(tryBranch));
              })));
      let thisPromise = (scope[promiseAccessor] = promise.then(
        (data) => {
          if (thisPromise === scope[promiseAccessor]) {
            let referenceNode = scope[nodeAccessor];
            if (((scope[promiseAccessor] = 0), scope.F?.H === 0)) {
              (awaitCounter.c(), run());
              return;
            }
            queueAsyncRender(scope, () => {
              awaitBranch = resolveAwait(scope, referenceNode, data);
              let pendingRenders = awaitBranch.W;
              if (
                ((awaitBranch.W = 0),
                pendingRenders?.forEach(queuePendingRender),
                placeholderShown.add(pendingEffects),
                awaitCounter.c(),
                awaitCounter.m)
              ) {
                let fnScopes = /* @__PURE__ */ new Map(),
                  effects = awaitCounter.m([]);
                for (let i = 0; i < pendingEffects.length;) {
                  let fn = pendingEffects[i++],
                    scopes = fnScopes.get(fn);
                  (scopes || fnScopes.set(fn, (scopes = /* @__PURE__ */ new Set())),
                    scopes.add(pendingEffects[i++]));
                }
                for (let i = 0; i < effects.length;) {
                  let fn = effects[i++],
                    scope = effects[i++];
                  fnScopes.get(fn)?.has(scope) || queueEffect(scope, fn);
                }
              }
            });
          }
        },
        (error) => {
          thisPromise === scope[promiseAccessor] &&
            ((scope[promiseAccessor] = 0),
            tryPlaceholder && !awaitCounter.m ? awaitCounter.c() : (awaitCounter.i = 0),
            queueAsyncRender(scope, renderCatch, error));
        },
      ));
    };
  return awaitPromise;
}
function _await_content(nodeAccessor, template, walks, setup) {
  nodeAccessor = decodeAccessor(nodeAccessor);
  let branchAccessor = "A" + nodeAccessor,
    promiseAccessor = "L" + nodeAccessor,
    renderer = _content("", template, walks, setup)();
  return (scope) => {
    let pendingScopes = collectScopes(
      () =>
        ((scope[branchAccessor] = createBranch(
          scope.$,
          renderer,
          scope,
          scope[nodeAccessor].parentNode,
        )).V = renderer),
    );
    scope[branchAccessor].Y = pendingScopes;
    let resolveSync = scope[promiseAccessor];
    typeof resolveSync == "function" && ((scope[promiseAccessor] = 0), resolveSync());
  };
}
function addAwaitCounter(scope, tryBranch = findBranchWithKey(scope, "Q")) {
  if (!tryBranch) return;
  let awaitCounter = tryBranch.O;
  return (
    awaitCounter?.i ||
      (awaitCounter = createAwaitCounter(tryBranch, () => dismissPlaceholder(tryBranch))),
    placeholderShown.add(pendingEffects),
    scheduleAwaitFrame(awaitCounter, tryBranch, () => {
      (insertBranchBefore(
        (tryBranch.P = createAndSetupBranch(
          tryBranch.$,
          tryBranch.Q,
          tryBranch._,
          tryBranch.S.parentNode,
        )),
        tryBranch.S.parentNode,
        tryBranch.S,
      ),
        tempDetachBranch(tryBranch));
    }),
    awaitCounter
  );
}
function scheduleAwaitFrame(awaitCounter, scope, render) {
  awaitCounter.i++ ||
    requestAnimationFrame(
      () => awaitCounter.i && runEffects(prepareEffects(() => queueRender(scope, render, -1))),
    );
}
function createAwaitCounter(tryBranch, done) {
  let awaitCounter = (tryBranch.O = {
    i: 0,
    c() {
      if (--awaitCounter.i) return 1;
      (done(), queueEffect(tryBranch, runPendingEffects));
    },
  });
  return awaitCounter;
}
function runPendingEffects(scope) {
  let effects = scope.J;
  effects && ((scope.J = []), runEffects(effects, 1));
}
function dismissPlaceholder(tryBranch) {
  let placeholderBranch = tryBranch.P;
  placeholderBranch &&
    ((tryBranch.P = 0),
    placeholderBranch.S.parentNode.insertBefore(tryBranch.S.parentNode, placeholderBranch.S),
    removeAndDestroyBranch(placeholderBranch));
}
function _try(nodeAccessor, template, walks, setup) {
  nodeAccessor = decodeAccessor(nodeAccessor);
  let branchAccessor = "A" + nodeAccessor,
    renderer = _content("", template, walks, setup)();
  return (scope, input) => {
    scope[branchAccessor] ||
      setConditionalRenderer(scope, nodeAccessor, renderer, createAndSetupBranch);
    let branch = scope[branchAccessor];
    branch &&
      ((branch.C = nodeAccessor),
      (branch.E = input.catch && (normalizeDynamicRenderer(input.catch) || 0)),
      (branch.Q = normalizeDynamicRenderer(input.placeholder)));
  };
}
function renderCatch(scope, error) {
  let tryWithCatch = findBranchWithKey(scope, "E");
  if (tryWithCatch) {
    let owner = tryWithCatch._,
      placeholderBranch = tryWithCatch.P;
    (placeholderBranch &&
      (tryWithCatch.O && (tryWithCatch.O.i = 0),
      (owner["A" + tryWithCatch.C] = placeholderBranch),
      destroyBranch(tryWithCatch)),
      caughtError.add(pendingEffects),
      setConditionalRenderer(owner, tryWithCatch.C, tryWithCatch.E, createAndSetupBranch),
      tryWithCatch.E?.d?.(owner["A" + tryWithCatch.C], [error]));
  } else throw error;
}
function patchDynamicTag(fn) {
  _dynamic_tag = fn(_dynamic_tag);
}
function dynamicTagScript(branch) {
  _attrs_script(branch, "a");
}
function setConditionalRenderer(scope, nodeAccessor, newRenderer, createBranch) {
  let referenceNode = scope[nodeAccessor],
    prevBranch = scope["A" + nodeAccessor],
    parentNode =
      referenceNode.nodeType > 1 ? (prevBranch?.S || referenceNode).parentNode : referenceNode,
    newBranch = (scope["A" + nodeAccessor] =
      newRenderer && createBranch(scope.$, newRenderer, scope, parentNode));
  referenceNode === parentNode
    ? (prevBranch && (destroyBranch(prevBranch), (referenceNode.textContent = "")),
      newBranch && insertBranchBefore(newBranch, parentNode, null))
    : prevBranch
      ? (newBranch
          ? insertBranchBefore(newBranch, parentNode, prevBranch.S)
          : parentNode.insertBefore(referenceNode, prevBranch.S),
        removeAndDestroyBranch(prevBranch))
      : newBranch &&
        (insertBranchBefore(newBranch, parentNode, referenceNode), referenceNode.remove());
}
function createBranchWithTagNameOrRenderer($global, tagNameOrRenderer, parentScope, parentNode) {
  let branch = createBranch($global, tagNameOrRenderer, parentScope, parentNode);
  return (
    typeof tagNameOrRenderer == "string"
      ? (branch.a =
          branch.S =
          branch.K =
            document.createElementNS(
              tagNameOrRenderer === "svg"
                ? "http://www.w3.org/2000/svg"
                : tagNameOrRenderer === "math"
                  ? "http://www.w3.org/1998/Math/MathML"
                  : parentNode.namespaceURI,
              tagNameOrRenderer,
            ))
      : setupBranch(tagNameOrRenderer, branch),
    branch
  );
}
function bySecondArg(_item, index) {
  return index;
}
function byFirstArg(name) {
  return name;
}
//#endregion
//#region packages/runtime-tags/dist/dom.mjs
let patchGlobalsEntry = (live, _key, value) => {
    let globals = live.$;
    for (let key in value)
      if (globals[key] !== value[key]) {
        globals[key] = value[key];
        let marks = (globals[kChanged] ??= {});
        marks["." + key] = marks.$ = runId;
      }
  },
  frameChecks = [],
  frameVars = {};
function applyPatch(frame, renderId = "_", runtimeId = "M") {
  (init(runtimeId), (patchers.$ = patchGlobalsEntry));
  let render = beginPatch(renderId);
  try {
    let names = Object.keys(frameVars),
      fn = Function("_", "$", ...names, "return " + frame);
    ((render.r = [(ctx) => fn(ctx, void 0, ...names.map((name) => frameVars[name]))]),
      runEffects(render.m([]), 1),
      run());
    for (let check of frameChecks) check();
    return !0;
  } catch {
    return (abortRun(), !1);
  } finally {
    abortPatch();
  }
}
//#endregion
//#region packages/runtime-tags/dist/dom.mjs
let empty = [],
  rest = Symbol(),
  classIdToBranch = /* @__PURE__ */ new Map(),
  classEventResolver,
  scopesByRender = /* @__PURE__ */ new WeakMap(),
  getRenderScopes = ($global) => {
    init($global.runtimeId);
    let render = self[$global.runtimeId]?.[$global.renderId],
      scopes = render && scopesByRender.get(render);
    return (render && !scopes && scopesByRender.set(render, (scopes = {})), scopes);
  },
  compat = {
    patchDynamicTag,
    queueEffect,
    init(warp10Noop) {
      (_resume("$C_s", (scope) => {
        if (
          ((getRenderScopes(scope.$)[scope.L] = scope),
          scope.m5c && classIdToBranch.set(scope.m5c, scope),
          classEventResolver)
        )
          for (let key in scope) {
            let resolved = classEventResolver(scope[key], scope);
            resolved !== scope[key] && (scope[key] = resolved);
          }
      }),
        _resume("$C_b", warp10Noop));
    },
    setClassEventResolver(fn) {
      classEventResolver = fn;
    },
    getScope($global, scopeId) {
      return getRenderScopes($global)?.[scopeId];
    },
    setRendererId(renderer, id) {
      renderer.a = id;
    },
    isRenderer(renderer) {
      return renderer.b;
    },
    getStartNode(branch) {
      return branch.S;
    },
    getEndNode(branch) {
      return branch.K;
    },
    setScopeNodes(branch, startNode, endNode) {
      ((branch.S = startNode), (branch.K = endNode));
    },
    runComponentEffects() {
      this.effects && runEffects(this.effects);
    },
    runComponentDestroy() {
      this.scope && destroyBranch(this.scope);
    },
    resolveRegistered(value, $global) {
      return Array.isArray(value) && typeof value[0] == "string"
        ? getRegisteredWithScope(value[0], getRenderScopes($global)?.[value[1]])
        : value;
    },
    createRenderer(params, clone) {
      let renderer = _content("", 0, 0, 0, params)();
      return (
        (renderer.b = (branch) => {
          let cloned = clone();
          ((branch.S = cloned.startNode), (branch.K = cloned.endNode));
        }),
        renderer
      );
    },
    render(out, component, renderer, args) {
      init(out.global.runtimeId);
      let branch = component.scope,
        created = 0;
      if (
        (!branch &&
          (branch = classIdToBranch.get(component.id)) &&
          ((component.scope = branch), classIdToBranch.delete(component.id)),
        args[0] && typeof args[0] == "object" && "renderBody" in args[0])
      ) {
        let input = args[0],
          normalizedInput = (args[0] = {});
        for (let key in input) normalizedInput[key === "renderBody" ? "content" : key] = input[key];
      }
      if (
        ((component.effects = prepareEffects(() => {
          ((branch ||=
            ((created = 1),
            (component.scope = createAndSetupBranch(
              out.global,
              renderer,
              renderer.e,
              document.body,
            )))),
            renderer.d?.(branch, renderer._ ? args[0] : args));
        })),
        created)
      )
        return toInsertNode(branch.S, branch.K);
    },
  },
  _template = (id, template, walks, setup, inputSignal) => {
    let renderer = _content(id, template, walks, setup, inputSignal)();
    return ((renderer.mount = mount), (renderer._ = renderer), _resume(id, renderer));
  };
function attrTag(attrs) {
  return ((attrs[Symbol.iterator] = attrTagIterator), (attrs[rest] = empty), attrs);
}
function attrTags(first, attrs) {
  return first
    ? (first[rest] === empty ? (first[rest] = [attrs]) : first[rest].push(attrs), first)
    : attrTag(attrs);
}
function* attrTagIterator() {
  (yield this, yield* this[rest]);
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
function _load_template(id, load) {
  let pending,
    lazyTemplate = _template(
      id,
      0,
      0,
      (branch) => {
        let awaitCounter = addAwaitCounter(branch);
        ((branch.X ||= /* @__PURE__ */ new Map()),
          (pending ||= load()).then(
            (renderer) => {
              (Object.assign(lazyTemplate, renderer),
                queueAsyncRender(branch, (branch) =>
                  insertLoaded(renderer, branch, branch.S, awaitCounter),
                ));
            },
            loadFailed(branch, awaitCounter),
          ));
      },
      _load_signal(() => (pending ||= load()).then((r) => ({ _: r.d }))),
    );
  return lazyTemplate;
}
function _load_setup(nodeAccessor, childScopeAccessor, load) {
  ((nodeAccessor = decodeAccessor(nodeAccessor)),
    (childScopeAccessor = decodeAccessor(childScopeAccessor)));
  let pending, renderer;
  return (owner) => {
    let child = owner[childScopeAccessor];
    if (renderer) insertLoaded(renderer, child, owner[nodeAccessor]);
    else {
      let awaitCounter = addAwaitCounter(owner);
      ((child.X ||= /* @__PURE__ */ new Map()),
        (pending ||= load()).then(
          (mod) => {
            ((renderer = _content("", ...mod._)()),
              queueAsyncRender(child, (child) =>
                insertLoaded(renderer, child, owner[nodeAccessor], awaitCounter),
              ));
          },
          loadFailed(child, awaitCounter),
        ));
    }
  };
}
function insertLoaded(renderer, branch, marker, awaitCounter) {
  let parent = marker.parentNode,
    values = branch.X,
    insert = () => {
      (insertBranchBefore(branch, parent, marker), marker.remove(), awaitCounter?.c());
    },
    remaining;
  if (
    (syncGen(branch),
    renderer.b(branch, parent.namespaceURI),
    (branch.X = 0),
    (remaining = values?.size))
  ) {
    let fail = loadFailed(branch, awaitCounter);
    for (let [promise, entry] of values)
      promise.then(
        (signal) => {
          ((entry.b = signal),
            --remaining ||
              queueAsyncRender(branch, (branch) => {
                (syncGen(branch),
                  renderer.c?.(branch),
                  values.forEach((e) => e.b._(branch, e.a)),
                  insert());
              }));
        },
        (error) => remaining > 0 && ((remaining = 0), fail(error)),
      );
  } else (setupBranch(renderer, branch), insert());
}
function loadFailed(scope, awaitCounter) {
  return (error) => {
    (awaitCounter && (awaitCounter.m ? (awaitCounter.i = 0) : awaitCounter.c()),
      queueAsyncRender(scope, renderCatch, error));
  };
}
function _load_signal(load) {
  let pending, signal;
  return (scope, value) => {
    ((pending ||= load()),
      scope.X || (!("X" in scope) && scope.H === runId)
        ? (scope.X ||= /* @__PURE__ */ new Map()).set(pending, { a: value })
        : signal
          ? signal(scope, value)
          : pending.then(
              (mod) => queueAsyncRender(scope, (signal = mod._), value),
              () => 0,
            ));
  };
}
function _load_visible_trigger(selector, options) {
  let pending, el;
  return (load) => () =>
    (pending ||= new Promise(
      (resolve) =>
        (el = getSelectorOrResolve(selector, resolve)) &&
        new IntersectionObserver(
          (entries, io) =>
            entries.some((entry) => entry.isIntersecting) && resolve(io.disconnect()),
          options,
        ).observe(el),
    )).then(load);
}
function _load_idle_trigger(options) {
  let pending;
  return (load) => () =>
    (pending ||= new Promise((resolve) =>
      (self.requestIdleCallback || resolve)(resolve, options),
    )).then(load);
}
function _load_event_trigger(event, selector) {
  let pending;
  return (load) => () =>
    (pending ||= new Promise((resolve) =>
      getSelectorOrResolve(selector, resolve)?.addEventListener(event, resolve, { once: !0 }),
    )).then(load);
}
function _load_media_trigger(query) {
  let pending, mql;
  return (load) => () =>
    (pending ||= new Promise((resolve) =>
      (mql = matchMedia(query)).matches
        ? resolve()
        : mql.addEventListener("change", resolve, { once: !0 }),
    )).then(load);
}
function _load_race_trigger(...triggers) {
  let noop = () => Promise.resolve(),
    pending;
  return (load) => () => (pending ||= Promise.race(triggers.map((t) => t(noop)()))).then(load);
}
function getSelectorOrResolve(selector, resolve) {
  return document.querySelector(selector) || resolve();
}
//#endregion
