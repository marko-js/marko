// size: 33454 (min) 11926 (brotli)
//#region packages/runtime-tags/dist/dom.mjs
let empty = [],
  rest = Symbol(),
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
          ((part = stringify(name, val[name])),
            part && ((str += sep + part), (sep = delimiter)));
    return str;
  },
  decodeAccessor = (num) =>
    (num + (num < 26 ? 10 : num < 962 ? 334 : 11998)).toString(36),
  delegate = (type, handler) =>
    (handler[type] ||= (document.addEventListener(type, handler, !0), 1)),
  R = /[^\p{L}\p{N}]/gu,
  parsers = {},
  nextScopeId = 1e6,
  collectingScopes,
  destroyNestedScopes = function destroyNestedScopes(scope) {
    ((scope.H = 0),
      scope.D?.forEach(destroyNestedScopes),
      scope.B?.forEach(resetControllers));
  },
  isScheduled,
  channel,
  _return = (scope, value) => scope.T?.(value),
  _var_change = (scope, value) => scope.U?.(value),
  tagIdsByGlobal = /* @__PURE__ */ new WeakMap(),
  walker = /* @__PURE__ */ document.createTreeWalker(document),
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
        for (value = 20 * currentMultiplier + value - 67; value--;)
          walker.nextNode();
      else if (value < 107)
        for (value = 10 * currentMultiplier + value - 97; value--;)
          walker.nextSibling();
      else if (value < 117) {
        for (value = 10 * currentMultiplier + value - 107; value--;)
          walker.parentNode();
        walker.nextSibling();
      } else storedMultiplier = currentMultiplier * 10 + value - 117;
  },
  cloneCache = {},
  registeredValues = {},
  curRenders,
  branchesEnabled,
  embedRenders,
  readyIds,
  flushReadyUpdates = () => {},
  isResuming,
  inputType = "",
  _dynamic_tag = function (nodeAccessor, getContent, getTagVar, inputIsArgs) {
    nodeAccessor = decodeAccessor(nodeAccessor);
    let childScopeAccessor = "A" + nodeAccessor,
      rendererAccessor = "D" + nodeAccessor;
    return (
      enableBranches(),
      (scope, newRenderer, getInput) => {
        let normalizedRenderer = normalizeDynamicRenderer(newRenderer);
        if (
          scope[rendererAccessor] !==
            (scope[rendererAccessor] =
              normalizedRenderer?.a || normalizedRenderer) ||
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
              (scope[childScopeAccessor].T = (value) =>
                getTagVar()(scope, value)),
            typeof normalizedRenderer == "string")
          ) {
            if (getContent) {
              let content = getContent(scope);
              (setConditionalRenderer(
                scope[childScopeAccessor],
                "a",
                content,
                createAndSetupBranch,
              ),
                content.f &&
                  subscribeToScopeSet(
                    content.e,
                    content.f,
                    scope[childScopeAccessor].Aa,
                  ));
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
            ),
              (childScope.Ia || childScope.Ea) &&
                queueEffect(childScope, dynamicTagScript));
          else {
            for (let accessor in normalizedRenderer.g)
              normalizedRenderer.g[accessor](
                childScope,
                normalizedRenderer.h[accessor],
              );
            if (normalizedRenderer.d)
              if (inputIsArgs)
                normalizedRenderer.d(
                  childScope,
                  normalizedRenderer._ ? args[0] : args,
                );
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
      }
    );
  },
  _for_of = /* @__PURE__ */ loop(([all, by = bySecondArg], cb) => {
    typeof by == "string"
      ? forOf(all, (item, i) => cb(item[by], [item, i]))
      : forOf(all, (item, i) => cb(by(item, i), [item, i]));
  }),
  _for_in = /* @__PURE__ */ loop(([obj, by = byFirstArg], cb) =>
    forIn(obj, (key, value) => cb(by(key, value), [key, value])),
  ),
  _for_to = /* @__PURE__ */ loop(([to, from, step, by = byFirstArg], cb) =>
    forTo(to, from, step, (v) => cb(by(v), [v])),
  ),
  _for_until = /* @__PURE__ */ loop(
    ([until, from, step, by = byFirstArg], cb) =>
      forUntil(until, from, step, (v) => cb(by(v), [v])),
  ),
  rendering,
  updating,
  updatingGen = 0,
  refreshEffects = /* @__PURE__ */ new WeakSet(),
  runId = 2,
  caughtError = /* @__PURE__ */ new WeakSet(),
  placeholderShown = /* @__PURE__ */ new WeakSet(),
  pendingEffects = [],
  pendingRenders = [],
  runEffects = (effects) => {
    for (let i = 0; i < effects.length;) effects[i++](effects[i++]);
  },
  runRender = (render) => render.c(render.b, render.d),
  catchEnabled,
  classIdToBranch = /* @__PURE__ */ new Map(),
  classEventResolver,
  scopesByRender = /* @__PURE__ */ new WeakMap(),
  getRenderScopes = ($global) => {
    let render = self[$global.runtimeId]?.[$global.renderId],
      scopes = render && scopesByRender.get(render);
    return (
      render && !scopes && scopesByRender.set(render, (scopes = {})),
      scopes
    );
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
        for (let key in input)
          normalizedInput[key === "renderBody" ? "content" : key] = input[key];
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
    return (
      (renderer.mount = mount),
      (renderer._ = renderer),
      _resume(id, renderer)
    );
  },
  activePairs,
  activeUpdate,
  applyGen = 0,
  pendingLoadUpdates = [],
  flushPendingLoadUpdates = () => {
    for (let i = pendingLoadUpdates.length; i--;) {
      let [patch, live, mergeId] = pendingLoadUpdates[i],
        merge = registeredValues[mergeId];
      merge && live.H
        ? (pendingLoadUpdates.splice(i, 1), merge(patch, live))
        : live.H || pendingLoadUpdates.splice(i, 1);
    }
  },
  parkedReadyBatches = [],
  readyBatchDrained = (dep) =>
    isReady(dep) && !parkedReadyBatches.some((batch) => batch.id === dep),
  flushParkedReadyBatches = () => {
    for (let progress = 1; progress;) {
      progress = 0;
      for (let i = 0; i < parkedReadyBatches.length; i++) {
        let batch = parkedReadyBatches[i];
        if (!isReady(batch.id)) continue;
        let count = 0;
        for (; count < batch.fills.length; count++) {
          let fill = batch.fills[count];
          if (Array.isArray(fill)) {
            if (!fill.every(readyBatchDrained)) break;
          } else batch.apply(fill);
        }
        (count && ((progress = 1), batch.fills.splice(0, count)),
          batch.fills.length || parkedReadyBatches.splice(i--, 1));
      }
    }
  },
  readyUpdatesInstalled;
function attrTag(attrs) {
  return (
    (attrs[Symbol.iterator] = attrTagIterator),
    (attrs[rest] = empty),
    attrs
  );
}
function attrTags(first, attrs) {
  return first
    ? (first[rest] === empty
        ? (first[rest] = [attrs])
        : first[rest].push(attrs),
      first)
    : attrTag(attrs);
}
function* attrTagIterator() {
  (yield this, yield* this[rest]);
}
function _call(fn, v) {
  return (fn(v), v);
}
function stringifyClassObject(name, value) {
  return value ? name : "";
}
function stringifyStyleObject(name, value) {
  return value || value === 0 ? name + ":" + value : "";
}
function escapeStyleValue(str) {
  let closers = "",
    result = str.replace(/[\\"'{};<>]|\/(?=\*)/g, (c) =>
      c === "<"
        ? "\\3C "
        : c === ";"
          ? "\\3B "
          : c === "{"
            ? "\\7B "
            : "\\" + c,
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
  for (let steps = (to - start) / delta, i = 0; i <= steps; i++)
    cb(start + i * delta);
}
function forUntil(until, from, step, cb) {
  let start = from || 0,
    delta = step || 1;
  for (let steps = (until - start) / delta, i = 0; i < steps; i++)
    cb(start + i * delta);
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
  return opt
    ? Array.isArray(opt)
      ? (opt.push(item), opt)
      : [opt, item]
    : item;
}
function _on(element, type, handler) {
  (element["$" + type] === void 0 && delegate(type, handleDelegated),
    (element["$" + type] = handler || null));
}
function handleDelegated(ev) {
  let target = !rendering && ev.target;
  for (; target;)
    (target["$" + ev.type]?.(ev, target),
      (target = ev.bubbles && !ev.cancelBubble && target.parentNode));
}
function resolveCursorPosition(
  inputType,
  initialPosition,
  initialValue,
  updatedValue,
) {
  if (
    (initialPosition || initialPosition === 0) &&
    (initialPosition !== initialValue.length || /kw/.test(inputType))
  ) {
    let before = initialValue.slice(0, initialPosition),
      after = initialValue.slice(initialPosition);
    if (updatedValue.startsWith(before)) return initialPosition;
    if (updatedValue.endsWith(after)) return updatedValue.length - after.length;
    let count = before.replace(R, "").length,
      pos = 0;
    for (; count && updatedValue[pos];)
      updatedValue[pos++].replace(R, "") && count--;
    return pos;
  }
  return -1;
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
  scope.H && (destroyNestedScopes(scope), resetControllers(scope));
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
      ? scope.H === runId &&
        ((updating && valueAccessor in scope) || (scope[valueAccessor] = value),
        fn?.(scope))
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
      (scope[valueAccessor] !== value ||
        !(valueAccessor in scope) ||
        (updating && rendering && scope.H === runId)) &&
        ((scope[valueAccessor] = value), fn?.(scope));
    }
  );
}
function _or(id, fn, defaultPending = 1, scopeIdAccessor = "L") {
  return (
    scopeIdAccessor !== "L" &&
      (scopeIdAccessor = decodeAccessor(scopeIdAccessor)),
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
            for (let scope of scopes)
              scope.H > 0 && scope.H < runId && fn(scope);
          },
          -1,
          0,
          scopes[0].L,
        );
    };
  return ((ownerSignal._ = fn), ownerSignal);
}
function _for_selector(
  ownerLoopNodeAccessor,
  ownerValueAccessor,
  keyValueAccessor,
  fn,
) {
  ((ownerLoopNodeAccessor = decodeAccessor(ownerLoopNodeAccessor)),
    (ownerValueAccessor = decodeAccessor(ownerValueAccessor)),
    keyValueAccessor !== "M" &&
      (keyValueAccessor = decodeAccessor(keyValueAccessor)));
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
            let map = keyedScopes(
              ownerScope,
              scopeAccessor,
              mapAccessor,
              keyValueAccessor,
            );
            if (map && prevKeyProp in map) {
              let prevScope = map.get(map[prevKeyProp]),
                nextScope = map.get(nextKey);
              prevScope !== nextScope &&
                (runLiveBranch(prevScope, fn), runLiveBranch(nextScope, fn));
            } else
              for (let scope of toArray(ownerScope[scopeAccessor]))
                runLiveBranch(scope, fn);
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
  let subscribers = (ownerScope[accessor] ||= /* @__PURE__ */ new Set());
  subscribers.has(scope) ||
    (subscribers.add(scope),
    $signal(scope, -1).addEventListener("abort", () =>
      ownerScope[accessor].delete(scope),
    ));
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
          queueRender(
            childScope,
            closureSignals[childScope[signalIndex] || 0],
            -1,
          );
  };
}
function _closure_get(valueAccessor, fn, getOwnerScope, resumeId) {
  valueAccessor = decodeAccessor(valueAccessor);
  let closureSignal = (scope) => {
    ((scope[closureSignal.b] = closureSignal.c),
      fn(scope),
      subscribeToScopeSet(
        getOwnerScope ? getOwnerScope(scope) : scope._,
        closureSignal.a,
        scope,
      ));
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
  changeHandler && (scope.U = changeHandler);
}
function _id({ $: $global }) {
  let id = tagIdsByGlobal.get($global) || 0;
  return (
    tagIdsByGlobal.set($global, id + 1),
    "c" + $global.runtimeId + $global.renderId + id.toString(36)
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
function _el_read(value) {
  return value;
}
function* traverse(scope, path, i = path.length - 1) {
  if (scope)
    if (Symbol.iterator in scope)
      for (let childScope of scope.values())
        yield* traverse(childScope, path, i);
    else {
      let item = scope[path[i]];
      i
        ? yield* traverse(item, path, i - 1)
        : yield typeof item == "function" ? item() : item;
    }
}
function _hoist(...path) {
  return (
    (path = path.map((p) => (typeof p == "string" ? p : decodeAccessor(p)))),
    (scope) => {
      let fn = () => traverse(scope, path).next().value;
      return ((fn[Symbol.iterator] = () => traverse(scope, path)), fn);
    }
  );
}
function _hoist_resume(id, ...path) {
  return _resume(id, _hoist(...path));
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
function createAndSetupBranch($global, renderer, parentScope, parentNode) {
  return setupBranch(
    renderer,
    createBranch($global, renderer, parentScope, parentNode),
  );
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
function _content_resume(
  id,
  template,
  walks,
  setup,
  params,
  dynamicScopesAccessor,
) {
  return _resume(
    id,
    _content(id, template, walks, setup, params, dynamicScopesAccessor),
  );
}
function _content_closures(renderer, closureFns) {
  let closureSignals = {};
  for (let key in closureFns)
    closureSignals[key] = _const(+key, closureFns[key]);
  return (owner, closureValues) => {
    let instance = renderer(owner);
    return (
      (instance.g = closureSignals),
      (instance.h = closureValues),
      instance
    );
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
function enableBranches() {
  if (!branchesEnabled) {
    ((branchesEnabled = 1), skipDestroyedRenders());
    for (let renderId in curRenders) runResumeEffects(curRenders[renderId]);
  }
}
function ready(readyId) {
  (readyIds ||= /* @__PURE__ */ new Set()).add(readyId);
  for (let renderId in curRenders) runResumeEffects(curRenders[renderId]);
  flushReadyUpdates();
}
/** Flushes parked lazy-child patches (see dom/update.ts `_update_load`).
 * Called by `ready()` and the CSR lazy path (dom/load.ts `insertLoaded`);
 * the slot lives in this core module so neither the load runtime nor the
 * persisted applier imports the other. */
function enableReadyUpdates(hook) {
  flushReadyUpdates = hook;
}
/** Whether a lazy module has declared ready (its registrations are
 * present). Persisted updates gate parked keyed resume batches on this, as
 * `render.m` gates document `.b` batches. */
function isReady(readyId) {
  return !!readyIds?.has(readyId);
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
              branchesEnabled && scope.G && (scope.F = getScope(scope.G)),
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
                    (branch.O = render.p?.[branchId]) &&
                      (branch.O.m = render.m),
                    singleNode)
                  ) {
                    for (
                      ;
                      startVisit.previousSibling &&
                      ~visits.indexOf(
                        (startVisit = startVisit.previousSibling),
                      );
                    );
                    ((branch._ ??= visitScope),
                      (branch.K = branch.S = startVisit),
                      visitType === "'" && (branch.a = startVisit));
                  } else
                    ((curBranchScopes = push(curBranchScopes, branch)),
                      accessor &&
                        ((visitScope[accessor] = curBranchScopes),
                        forEach(
                          curBranchScopes,
                          (scope) => (scope._ ??= visitScope),
                        ),
                        (curBranchScopes = branchScopesStack.pop())),
                      (startVisit = branchStarts.pop()),
                      parent !== startVisit.parentNode &&
                        parent.prepend(startVisit),
                      (branch.S = startVisit),
                      (branch.K =
                        visit.previousSibling === startVisit
                          ? startVisit
                          : parent.insertBefore(new Text(), visit)));
                  for (; i && orphanBranches[--i].L > branchId;)
                    setParentBranch(orphanBranches.pop(), branch);
                  for (; j && deferredOwners[--j].L > branchId;) {
                    let owner = deferredOwners.pop();
                    owner.F !== owner && (owner.F = branch);
                  }
                  nextToken();
                }
                if (endedBranches) {
                  for (let ended of endedBranches) orphanBranches.push(ended);
                  singleNode &&
                    (visitScope[accessor] =
                      endedBranches.length > 1
                        ? endedBranches.reverse()
                        : endedBranches[0]);
                }
                visitType === "["
                  ? (endedBranches ||
                      (branchScopesStack.push(curBranchScopes),
                      (curBranchScopes = void 0)),
                    branchStarts.push(visit))
                  : deferredOwners.push(visitScope);
              },
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
                  for (lastTokenIndex = 0, visitText = serialized; nextToken();)
                    /\D/.test(lastToken)
                      ? (lastEffect = registeredValues[lastToken])
                      : effects.push(lastEffect, getScope(lastToken));
                else if (Array.isArray(serialized)) {
                  if (!(
                    readyIds &&
                    serialized.every(
                      (dep) => readyIds.has(dep) && !render.b[dep].length,
                    )
                  ))
                    break;
                } else if (readyIds && typeof serialized == "number") break;
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
                    resumes &&
                      processResumes(resumes, effects) &&
                      (progress = 1);
                  }
                }
              let retained = 0,
                lastNodeVisitScopeId = "";
              for (visit of (visits = render.v))
                if (
                  ((lastTokenIndex = render.i.length),
                  (visitText = visit.data),
                  (visitType = visitText[lastTokenIndex++]),
                  visitType === "*")
                ) {
                  let scopeId = nextToken();
                  visitScope = getScope(
                    scopeId
                      ? (lastNodeVisitScopeId = scopeId)
                      : lastNodeVisitScopeId,
                  );
                  let accessor = nextToken(),
                    prev = visit.previousSibling;
                  visitScope[accessor] =
                    prev && (prev.nodeType < 8 || prev.data)
                      ? prev
                      : visit.parentNode.insertBefore(new Text(), visit);
                } else
                  ((lastNodeVisitScopeId = ""),
                    (visitScope = getScope(nextToken())),
                    branchesEnabled
                      ? (visitBranches ||= createVisitBranches())()
                      : (visits[retained++] = visit));
              return (
                embedRenders &&
                  !embedAnchor &&
                  visit &&
                  embedRenders.set(
                    (embedAnchor = visit.parentNode.insertBefore(
                      new Text(),
                      visit.nextSibling,
                    )),
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
function getUpdateRoot(renderId) {
  let root;
  for (let id in curRenders)
    if (!renderId || id === renderId) {
      let render = curRenders[id];
      if (
        ((registeredValues.__update_root = (scope) => (root = scope)),
        (render.r ||= []).push("__update_root 1"),
        runResumeEffects(render),
        root)
      )
        return root;
    }
  return root;
}
/**
 * Bumped once per persisted apply attempt (`dom/update`'s `createUpdate`,
 * before any frame applies) onto every render on the page. The inline
 * `REORDER_RUNTIME_CODE` script shares each render's `self[runtimeId]` entry
 * (see `html/inlined-runtimes.ts`): it captures this value at its per-render
 * init and no-ops a placeholder swap once the value has advanced, gating a
 * reorder chunk for a boundary a navigation has since applied over (see
 * agent-feedback/bugs.md, "Pre-navigation streamed await body lands in a
 * post-navigation persisted page"). Only imported by `dom/update`, so plain
 * apps never pay for it, and ordinary streaming pages never advance it.
 */
function bumpNavEpoch() {
  for (let renderId in curRenders) {
    let render = curRenders[renderId];
    render.n = (render.n || 0) + 1;
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
  return (
    (accessor = decodeAccessor(accessor)),
    _resume(id, (scope) => () => scope[accessor])
  );
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
function _attr_input_checkedValue_default(
  scope,
  nodeAccessor,
  checkedValue,
  value,
) {
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
function _attr_input_checkedValue(
  scope,
  nodeAccessor,
  checkedValue,
  checkedValueChange,
  value,
) {
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
      : _attr_input_checkedValue_default(
          scope,
          nodeAccessor,
          checkedValue,
          value,
        ));
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
        let oldValue = scope["G" + nodeAccessor],
          newValue = Array.isArray(oldValue)
            ? updateList(oldValue, el.value, el.checked)
            : el.checked
              ? el.value
              : void 0;
        if (el.name && el.type[0] === "r")
          for (let radio of document.querySelectorAll(
            `[type=radio][name=${CSS.escape(el.name)}]`,
          ))
            radio.form === el.form &&
              (radio.checked = Array.isArray(oldValue)
                ? oldValue.includes(radio.value)
                : oldValue === radio.value);
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
function _attr_input_value(scope, nodeAccessor, value, valueChange) {
  let el = scope[nodeAccessor],
    normalizedValue = normalizeAttrValue(value) || "";
  ((scope["E" + nodeAccessor] = valueChange),
    (scope["G" + nodeAccessor] = normalizedValue),
    (scope["F" + nodeAccessor] = valueChange ? 2 : 5),
    valueChange && scope.H < runId
      ? setInputValue(el, normalizedValue)
      : _attr_input_value_default(scope, nodeAccessor, normalizedValue));
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
    normalizedValue = multiple
      ? value.map(normalizeStrProp)
      : normalizeStrProp(value);
  pendingEffects.unshift(() => {
    for (let opt of el.options) {
      let selected = multiple
        ? normalizedValue.includes(opt.value)
        : opt.value === normalizedValue;
      opt.defaultSelected !== selected &&
        (live && (restoreValue ??= getSelectValue(el, multiple)),
        (opt.defaultSelected = selected));
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
      ? pendingEffects.unshift(
          () => setSelectValue(el, normalizedValue, multiple),
          scope,
        )
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
      for (let opt of el.options)
        opt.defaultSelected && scope["G" + nodeAccessor].push(opt.value);
    } else {
      scope["G" + nodeAccessor] = "";
      for (let opt of el.options)
        if (opt.defaultSelected) {
          scope["G" + nodeAccessor] = opt.value;
          break;
        }
    }
  (syncControllableFormInput(el, hasSelectChanged, onChange),
    new MutationObserver(() => {
      let value = scope["G" + nodeAccessor];
      (Array.isArray(value)
        ? value.length !== el.selectedOptions.length ||
          value.some((value, i) => value != el.selectedOptions[i].value)
        : el.value !== value) && onChange();
    }).observe(el, {
      childList: !0,
      subtree: !0,
    }));
}
function setSelectValue(el, value, multiple) {
  if (multiple)
    for (let opt of el.options) opt.selected = value.includes(opt.value);
  else el.value = value;
}
function getSelectValue(el, multiple) {
  return multiple
    ? Array.from(el.selectedOptions, (opt) => opt.value)
    : el.value;
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
      : _attr_details_or_dialog_open_default(
          scope,
          nodeAccessor,
          normalizedOpen,
        ));
}
function _attr_details_or_dialog_open_script(scope, nodeAccessor) {
  let el = scope[nodeAccessor];
  new MutationObserver(() => {
    let openChange = scope["E" + nodeAccessor];
    if (openChange && el.open === !scope["G" + nodeAccessor]) {
      let newValue = el.open;
      ((el.open = !newValue), openChange(newValue), run());
    }
  }).observe(el, {
    attributes: !0,
    attributeFilter: ["open"],
  });
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
  for (let el of ev.target.elements)
    el._ && hasFormElementChanged(el) && handlers.push(el._);
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
  for (let opt of el.options)
    if (opt.selected !== opt.defaultSelected) return !0;
}
function hasFormElementChanged(el) {
  return el.options
    ? hasSelectChanged(el)
    : hasValueChanged(el) || hasCheckboxChanged(el);
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
function _attr_class(element, value) {
  setAttribute(
    element,
    "class",
    toDelimitedString(value, " ", stringifyClassObject) || void 0,
  );
}
function _attr_class_items(element, items) {
  for (let key in items) _attr_class_item(element, key, items[key]);
}
function _attr_class_item(element, name, value) {
  element.classList.toggle(name, !!value);
}
function _attr_style(element, value) {
  setAttribute(
    element,
    "style",
    toDelimitedString(value, ";", stringifyStyleObject) || void 0,
  );
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
    (element.className = id),
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
        ? text.slice(0, ++start) +
            decl +
            text.slice(text.indexOf(";", start) + 1)
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
function _attrs(scope, nodeAccessor, nextAttrs) {
  let el = scope[nodeAccessor];
  for (let i = el.attributes.length; i--;) {
    let { name } = el.attributes.item(i);
    (nextAttrs && (name in nextAttrs || hasAttrAlias(el, name, nextAttrs))) ||
      el.removeAttribute(name);
  }
  attrsInternal(scope, nodeAccessor, nextAttrs);
}
function _attrs_content(scope, nodeAccessor, nextAttrs) {
  (_attrs(scope, nodeAccessor, nextAttrs),
    _attr_content(scope, nodeAccessor, nextAttrs?.content));
}
function hasAttrAlias(element, attr, nextAttrs) {
  return (
    attr === "checked" &&
    element.tagName === "INPUT" &&
    "checkedValue" in nextAttrs
  );
}
function _attrs_partial(scope, nodeAccessor, nextAttrs, skip) {
  let el = scope[nodeAccessor],
    partial = {};
  for (let i = el.attributes.length; i--;) {
    let { name } = el.attributes.item(i);
    !skip[name] &&
      !(nextAttrs && name in nextAttrs) &&
      el.removeAttribute(name);
  }
  for (let name in nextAttrs) {
    let key = isEventHandler(name) ? `on-${getEventHandlerName(name)}` : name;
    skip[key] || (partial[key] = nextAttrs[name]);
  }
  attrsInternal(scope, nodeAccessor, partial);
}
function _attrs_partial_content(scope, nodeAccessor, nextAttrs, skip) {
  (_attrs_partial(scope, nodeAccessor, nextAttrs, skip),
    _attr_content(scope, nodeAccessor, nextAttrs?.content));
}
function attrsInternal(scope, nodeAccessor, nextAttrs) {
  let el = scope[nodeAccessor],
    events = scope["I" + nodeAccessor],
    skip;
  for (let name in events) events[name] = 0;
  switch (
    ((scope["F" + nodeAccessor] = 5),
    (scope["E" + nodeAccessor] = 0),
    el.tagName)
  ) {
    case "INPUT":
      if ("checked" in nextAttrs || "checkedChange" in nextAttrs)
        (_attr_input_checked(
          scope,
          nodeAccessor,
          nextAttrs.checked,
          nextAttrs.checkedChange,
        ),
          (skip = /^checked(?:Value)?(?:Change)?$/));
      else if ("checkedValue" in nextAttrs || "checkedValueChange" in nextAttrs)
        (_attr_input_checkedValue(
          scope,
          nodeAccessor,
          nextAttrs.checkedValue,
          nextAttrs.checkedValueChange,
          nextAttrs.value,
        ),
          (skip = /^(?:value|checked(?:Value)?)(?:Change)?$/));
      else if ("value" in nextAttrs || "valueChange" in nextAttrs)
        (_attr_input_value(
          scope,
          nodeAccessor,
          nextAttrs.value,
          nextAttrs.valueChange,
        ),
          (skip = /^value(?:Change)?$/));
      else break;
      break;
    case "SELECT":
      ("value" in nextAttrs || "valueChange" in nextAttrs) &&
        (_attr_select_value(
          scope,
          nodeAccessor,
          nextAttrs.value,
          nextAttrs.valueChange,
        ),
        (skip = /^value(?:Change)?$/));
      break;
    case "TEXTAREA":
      ("value" in nextAttrs || "valueChange" in nextAttrs) &&
        (_attr_input_value(
          scope,
          nodeAccessor,
          nextAttrs.value,
          nextAttrs.valueChange,
        ),
        (skip = /^value(?:Change)?$/));
      break;
    case "DETAILS":
    case "DIALOG":
      ("open" in nextAttrs || "openChange" in nextAttrs) &&
        (_attr_details_or_dialog_open(
          scope,
          nodeAccessor,
          nextAttrs.open,
          nextAttrs.openChange,
        ),
        (skip = /^open(?:Change)?$/));
      break;
  }
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
          ? ((events ||= scope["I" + nodeAccessor] = {})[
              getEventHandlerName(name)
            ] = value)
          : skip?.test(name) ||
            (name === "content" && el.tagName !== "META") ||
            _attr(el, name, value);
        break;
    }
  }
}
function _attr_content(scope, nodeAccessor, value) {
  let content = normalizeClientRender(value);
  scope["D" + nodeAccessor] !== (scope["D" + nodeAccessor] = content?.a) &&
    (setConditionalRenderer(scope, nodeAccessor, content, createAndSetupBranch),
    content?.f &&
      subscribeToScopeSet(content.e, content.f, scope["A" + nodeAccessor]));
  for (let accessor in content?.g)
    content.g[accessor](scope["A" + nodeAccessor], content.h[accessor]);
}
function _attrs_script(scope, nodeAccessor) {
  let el = scope[nodeAccessor],
    events = scope["I" + nodeAccessor];
  switch (scope["F" + nodeAccessor]) {
    case 0:
      _attr_input_checked_script(scope, nodeAccessor);
      break;
    case 1:
      _attr_input_checkedValue_script(scope, nodeAccessor);
      break;
    case 2:
      _attr_input_value_script(scope, nodeAccessor);
      break;
    case 3:
      _attr_select_value_script(scope, nodeAccessor);
      break;
    case 4:
      _attr_details_or_dialog_open_script(scope, nodeAccessor);
      break;
  }
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
    (scope[accessor] =
      newContent.firstChild || newContent.appendChild(new Text())),
    (scope["H" + accessor] = newContent.lastChild),
  ),
    removeChildNodes(firstChild, lastChild));
}
function normalizeClientRender(value) {
  let renderer = normalizeDynamicRenderer(value);
  if (renderer && renderer.a) return renderer;
}
function normalizeAttrValue(value) {
  if (isNotVoid(value)) return value === !0 ? "" : value + "";
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
  parentNode.insertBefore(toInsertNode(startNode, endNode), referenceNode);
}
function toInsertNode(startNode, endNode) {
  if (startNode === endNode) return startNode;
  let parent = new DocumentFragment(),
    stop = endNode.nextSibling;
  for (; startNode !== stop;) {
    let next = startNode.nextSibling;
    (parent.appendChild(startNode), (startNode = next));
  }
  return parent;
}
function _await_promise(nodeAccessor, params) {
  nodeAccessor = decodeAccessor(nodeAccessor);
  let promiseAccessor = "L" + nodeAccessor,
    branchAccessor = "A" + nodeAccessor;
  return (
    _enable_catch(),
    (scope, promise) => {
      if (!isPromise(promise)) {
        if (!scope[promiseAccessor]) {
          let resolve = () =>
            resolveAwait(
              scope,
              branchAccessor,
              nodeAccessor,
              scope[nodeAccessor],
              params,
              promise,
            );
          scope[branchAccessor]
            ? resolve()
            : (scope[promiseAccessor] = resolve);
          return;
        }
        promise = Promise.resolve(promise);
      }
      let awaitBranch = scope[branchAccessor],
        tryPlaceholder = findBranchWithKey(scope, "Q"),
        tryBranch = tryPlaceholder || awaitBranch,
        awaitCounter = tryBranch.O;
      (placeholderShown.add(pendingEffects),
        tryPlaceholder
          ? scope[promiseAccessor] ||
            (awaitBranch && (awaitBranch.W ||= []),
            (awaitCounter = addAwaitCounter(scope, tryPlaceholder)))
          : (awaitCounter?.i ||
              (awaitCounter = tryBranch.O =
                {
                  i: 0,
                  c() {
                    if (--awaitCounter.i) return 1;
                    if (tryBranch === scope[branchAccessor]) {
                      let anchor = scope[nodeAccessor];
                      if (anchor.parentNode) {
                        let detachedParent = scope[branchAccessor].S.parentNode;
                        detachedParent === anchor.parentNode
                          ? anchor.remove()
                          : anchor.replaceWith(detachedParent);
                      }
                    } else dismissPlaceholder(tryBranch);
                    queueEffect(tryBranch, runPendingEffects);
                  },
                }),
            scope[promiseAccessor] ||
              (awaitBranch && (awaitBranch.W ||= []),
              awaitCounter.i++ ||
                requestAnimationFrame(
                  () =>
                    awaitCounter.i &&
                    runEffects(
                      prepareEffects(() =>
                        queueRender(
                          scope,
                          () => {
                            awaitBranch.V ||
                              (awaitBranch.S.parentNode.insertBefore(
                                scope[nodeAccessor],
                                awaitBranch.S,
                              ),
                              tempDetachBranch(tryBranch));
                          },
                          -1,
                        ),
                      ),
                    ),
                ))));
      let thisPromise = (scope[promiseAccessor] = promise.then(
        (data) => {
          if (thisPromise === scope[promiseAccessor]) {
            let referenceNode = scope[nodeAccessor];
            ((scope[promiseAccessor] = 0),
              queueAsyncRender(scope, () => {
                awaitBranch = resolveAwait(
                  scope,
                  branchAccessor,
                  nodeAccessor,
                  referenceNode,
                  params,
                  data,
                );
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
                    (scopes ||
                      fnScopes.set(fn, (scopes = /* @__PURE__ */ new Set())),
                      scopes.add(pendingEffects[i++]));
                  }
                  for (let i = 0; i < effects.length;) {
                    let fn = effects[i++],
                      scope = effects[i++];
                    fnScopes.get(fn)?.has(scope) || queueEffect(scope, fn);
                  }
                }
              }));
          }
        },
        (error) => {
          thisPromise === scope[promiseAccessor] &&
            ((awaitCounter.i = scope[promiseAccessor] = 0),
            queueAsyncRender(scope, renderCatch, error));
        },
      ));
    }
  );
}
function resolveAwait(
  scope,
  branchAccessor,
  nodeAccessor,
  referenceNode,
  params,
  value,
) {
  let awaitBranch = scope[branchAccessor];
  return (
    awaitBranch.V &&
      (attachAwaitBranch(scope, nodeAccessor, awaitBranch),
      referenceNode.remove()),
    params?.(awaitBranch, [value]),
    awaitBranch
  );
}
/**
 * Sets up and inserts a detached (unresolved) await branch at its anchor.
 * Shared by promise resolution above and persisted update applies, where a
 * fresh subtree's await never ran its promise (compute is skipped while
 * updating) and the body's own frame is the resolution.
 */
function attachAwaitBranch(scope, nodeAccessor, awaitBranch) {
  ((awaitBranch.Y = awaitBranch.Y?.forEach(syncGen)),
    setupBranch(awaitBranch.V, awaitBranch),
    (awaitBranch.V = 0),
    insertBranchBefore(
      awaitBranch,
      scope[nodeAccessor].parentNode,
      scope[nodeAccessor],
    ));
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
    typeof resolveSync == "function" &&
      ((scope[promiseAccessor] = 0), resolveSync());
  };
}
function addAwaitCounter(scope, tryBranch = findBranchWithKey(scope, "Q")) {
  if (!tryBranch) return;
  let awaitCounter = tryBranch.O;
  return (
    awaitCounter?.i ||
      (awaitCounter = tryBranch.O =
        {
          i: 0,
          c() {
            if (--awaitCounter.i) return 1;
            (dismissPlaceholder(tryBranch),
              queueEffect(tryBranch, runPendingEffects));
          },
        }),
    placeholderShown.add(pendingEffects),
    awaitCounter.i++ ||
      requestAnimationFrame(
        () =>
          awaitCounter.i &&
          runEffects(
            prepareEffects(() =>
              queueRender(
                tryBranch,
                () => {
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
                },
                -1,
              ),
            ),
          ),
      ),
    awaitCounter
  );
}
function runPendingEffects(scope) {
  let effects = scope.J;
  effects && ((scope.J = []), runEffects(effects, 1));
}
function dismissPlaceholder(tryBranch) {
  let placeholderBranch = tryBranch.P;
  placeholderBranch &&
    ((tryBranch.P = 0),
    placeholderBranch.S.parentNode.insertBefore(
      tryBranch.S.parentNode,
      placeholderBranch.S,
    ),
    removeAndDestroyBranch(placeholderBranch));
}
function _try(nodeAccessor, template, walks, setup) {
  nodeAccessor = decodeAccessor(nodeAccessor);
  let branchAccessor = "A" + nodeAccessor,
    renderer = _content("", template, walks, setup)();
  return (scope, input) => {
    scope[branchAccessor] ||
      setConditionalRenderer(
        scope,
        nodeAccessor,
        renderer,
        createAndSetupBranch,
      );
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
      setConditionalRenderer(
        owner,
        tryWithCatch.C,
        tryWithCatch.E,
        createAndSetupBranch,
      ),
      tryWithCatch.E?.d?.(owner["A" + tryWithCatch.C], [error]));
  } else throw error;
}
function _if(nodeAccessor, ...branchesArgs) {
  nodeAccessor = decodeAccessor(nodeAccessor);
  let branchAccessor = "D" + nodeAccessor,
    branches = [],
    i = 0;
  for (; i < branchesArgs.length;)
    branches.push(
      _content("", branchesArgs[i++], branchesArgs[i++], branchesArgs[i++])(),
    );
  return (
    enableBranches(),
    (scope, newBranch) => {
      newBranch !==
        (scope[branchAccessor] ?? (scope["A" + nodeAccessor] && 0)) &&
        setConditionalRenderer(
          scope,
          nodeAccessor,
          branches[(scope[branchAccessor] = newBranch)],
          createAndSetupBranch,
        );
    }
  );
}
function _show(nodeAccessor, startNodeAccessor) {
  ((nodeAccessor = decodeAccessor(nodeAccessor)),
    startNodeAccessor !== void 0 &&
      (startNodeAccessor = decodeAccessor(startNodeAccessor)));
  let rangeAccessor = "A" + nodeAccessor;
  return (
    enableBranches(),
    (scope, display) => {
      let referenceNode = scope[nodeAccessor],
        onlyChild = referenceNode.nodeType === 1,
        parentNode = onlyChild ? referenceNode : referenceNode.parentNode,
        range = scope[rangeAccessor];
      range ||
        ((range = scope[rangeAccessor] = {}),
        (range.S = onlyChild
          ? parentNode.firstChild
          : scope[startNodeAccessor]),
        (range.K = onlyChild
          ? parentNode.lastChild
          : referenceNode.previousSibling));
      let startNode = range.S;
      if (range.L && startNode === range.K && startNode.tagName === "T") {
        let wrapper = startNode;
        (wrapper.firstChild || wrapper.appendChild(new Text()),
          (range = scope[rangeAccessor] = {}),
          (range.S = startNode = wrapper.firstChild),
          (range.K = wrapper.lastChild),
          wrapper.replaceWith(...wrapper.childNodes));
      }
      let inDom = startNode.parentNode === parentNode;
      display
        ? inDom ||
          insertBranchBefore(
            range,
            parentNode,
            onlyChild ? null : referenceNode,
          )
        : inDom && tempDetachBranch(range);
    }
  );
}
function patchDynamicTag(fn) {
  _dynamic_tag = fn(_dynamic_tag);
}
function _dynamic_tag_content(nodeAccessor) {
  nodeAccessor = decodeAccessor(nodeAccessor);
  let childScopeAccessor = "A" + nodeAccessor,
    rendererAccessor = "D" + nodeAccessor;
  return (
    enableBranches(),
    (scope, renderer) => {
      if (
        (scope[rendererAccessor] !==
          (scope[rendererAccessor] = renderer?.a || renderer) &&
          (setConditionalRenderer(
            scope,
            nodeAccessor,
            renderer,
            createAndSetupBranch,
          ),
          renderer?.f &&
            subscribeToScopeSet(
              renderer.e,
              renderer.f,
              scope[childScopeAccessor],
            )),
        renderer)
      )
        for (let accessor in renderer.g)
          renderer.g[accessor](scope[childScopeAccessor], renderer.h[accessor]);
    }
  );
}
function _resume_dynamic_tag() {
  _resume("d", dynamicTagScript);
}
function dynamicTagScript(branch) {
  _attrs_script(branch, "a");
}
function setConditionalRenderer(
  scope,
  nodeAccessor,
  newRenderer,
  createBranch,
) {
  let referenceNode = scope[nodeAccessor],
    prevBranch = scope["A" + nodeAccessor],
    parentNode =
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
/* @__NO_SIDE_EFFECTS__ */
function loop(forEach) {
  return (nodeAccessor, template, walks, setup, params) => {
    nodeAccessor = decodeAccessor(nodeAccessor);
    let scopesAccessor = "A" + nodeAccessor,
      keyedScopesAccessor = "O" + nodeAccessor,
      renderer = _content("", template, walks, setup)();
    return (
      enableBranches(),
      (scope, value) => {
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
          hasPotentialMoves;
        forEach(value, (key, args) => {
          let branch =
            oldLen &&
            (oldScopesByKey ||= oldScopes.reduce(
              (map, scope, i) => map.set(scope.M ?? i, scope),
              /* @__PURE__ */ new Map(),
            )).get(key);
          (branch
            ? (hasPotentialMoves = oldScopesByKey.delete(key))
            : (branch = createAndSetupBranch(
                scope.$,
                renderer,
                scope,
                parentNode,
              )),
            (branch.M = key),
            newScopes.push(branch),
            params?.(branch, args));
        });
        let newLen = newScopes.length,
          hasSiblings = referenceNode !== parentNode,
          afterReference = null,
          oldEnd = oldLen - 1,
          newEnd = newLen - 1,
          start = 0;
        if (
          (hasSiblings &&
            (oldLen
              ? ((afterReference = oldScopes[oldEnd].K.nextSibling),
                newLen ||
                  parentNode.insertBefore(referenceNode, afterReference))
              : newLen &&
                ((afterReference = referenceNode.nextSibling),
                referenceNode.remove())),
          !hasPotentialMoves)
        ) {
          oldLen &&
            (oldScopes.forEach(
              hasSiblings ? removeAndDestroyBranch : destroyBranch,
            ),
            hasSiblings || (parentNode.textContent = ""));
          for (let newScope of newScopes)
            insertBranchBefore(newScope, parentNode, afterReference);
          return;
        }
        for (let branch of oldScopesByKey.values())
          removeAndDestroyBranch(branch);
        for (
          ;
          start < oldLen &&
          start < newLen &&
          oldScopes[start] === newScopes[start];
        )
          start++;
        for (
          ;
          oldEnd >= start &&
          newEnd >= start &&
          oldScopes[oldEnd] === newScopes[newEnd];
        )
          (oldEnd--, newEnd--);
        if (
          (oldEnd + 1 < oldLen && (afterReference = oldScopes[oldEnd + 1].S),
          start > oldEnd)
        ) {
          if (start <= newEnd)
            for (let i = start; i <= newEnd; i++)
              insertBranchBefore(newScopes[i], parentNode, afterReference);
          return;
        } else if (start > newEnd) return;
        let diffLen = newEnd - start + 1,
          oldPos = /* @__PURE__ */ new Map(),
          sources = Array(diffLen),
          pred = Array(diffLen),
          tails = [],
          tail = -1,
          lo,
          hi,
          mid;
        for (let i = start; i <= oldEnd; i++) oldPos.set(oldScopes[i], i);
        for (let i = diffLen; i--;)
          sources[i] = oldPos.get(newScopes[start + i]) ?? -1;
        for (let i = 0; i < diffLen; i++)
          if (~sources[i])
            if (tail < 0 || sources[tails[tail]] < sources[i])
              (~tail && (pred[i] = tails[tail]), (tails[++tail] = i));
            else {
              for (lo = 0, hi = tail; lo < hi;)
                ((mid = ((lo + hi) / 2) | 0),
                  sources[tails[mid]] < sources[i]
                    ? (lo = mid + 1)
                    : (hi = mid));
              sources[i] < sources[tails[lo]] &&
                (lo > 0 && (pred[i] = tails[lo - 1]), (tails[lo] = i));
            }
        for (hi = tails[tail], lo = tail + 1; lo-- > 0;)
          ((tails[lo] = hi), (hi = pred[hi]));
        for (let i = diffLen; i--;)
          (~tail && i === tails[tail]
            ? tail--
            : insertBranchBefore(
                newScopes[start + i],
                parentNode,
                afterReference,
              ),
            (afterReference = newScopes[start + i].S));
      }
    );
  };
}
function createBranchWithTagNameOrRenderer(
  $global,
  tagNameOrRenderer,
  parentScope,
  parentNode,
) {
  let branch = createBranch(
    $global,
    tagNameOrRenderer,
    parentScope,
    parentNode,
  );
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
/**
 * Truthy while an update-render patch applies (set by `dom/update`).
 * Persisted builds guard state-free request-derived compute invocations
 * with `if (!_updating)`: their value comes from the patch payload
 * (client-side compute is redundant, or impossible when it lives behind a
 * `server import`), so the signal graph skips the compute and the merge
 * delivers the server value. Client-state and state-mixing computations are
 * unaffected. Lives here, not with the applier in `dom/update`, so main
 * persisted modules import it without dragging the applier graph into
 * hydration bundles.
 */
/** The apply's generation floor: scopes created during the apply carry
 * `Gen >= updatingGen` (see `applyGen` in dom/update). */
function setUpdating(value, gen) {
  ((updating = value), gen !== void 0 && (updatingGen = gen));
}
/**
 * Persisted builds' `_script`: setup skips queueing for scopes created
 * while an update patch applies — a fresh branch's wiring comes from the
 * payload's effect entries, and running both would double-bind. A matched
 * scope reaching this during an apply is a value-change invocation, so it
 * queues exactly as a client-side write would.
 */
function _script_update(id, fn) {
  return (_resume(id, fn), _script_shared(fn));
}
/**
 * `_script_update` for `$global`-referencing effects: marks the registered
 * copy so the applier re-queues it against matched scopes on every apply,
 * since the effect reads a request-derived source every navigation
 * refreshes.
 */
function _script_refresh(id, fn) {
  return (refreshEffects.add(fn), _script_update(id, fn));
}
/** Registered effect fns the applier re-queues for matched scopes too. */
/**
 * The register build's `_script_update`: the same wrapper without the
 * registration, since the main module already registered the id and payload
 * effect entries must keep resolving the main copies resume wired.
 */
function _script_shared(fn) {
  return (scope) => {
    (!updating || scope.H < updatingGen) && queueEffect(scope, fn);
  };
}
function queueRender(scope, signal, signalKey, value, scopeKey = scope.L) {
  let render;
  if (signalKey >= 0 && (render = scope[signalKey])) {
    if (((render.d = value), render.e === runId || (catchEnabled && render.f)))
      return;
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
    (runId++,
      (rendering = 0),
      (pendingRenders = prevRenders),
      (pendingEffects = prevEffects));
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
function skipDestroyedRenders() {
  runRender = ((runRender) => (render) => {
    render.b.F?.H !== 0 && runRender(render);
  })(runRender);
}
function _enable_catch() {
  if (!catchEnabled) {
    ((catchEnabled = 1), enableBranches());
    let handlePendingTry = (fn, scope, branch) => {
      for (; branch;) {
        if (branch.O?.i) return (branch.J ||= []).push(fn, scope);
        branch = branch.N;
      }
    };
    ((runEffects = (
      (runEffects) =>
      (effects, checkPending = placeholderShown.has(effects)) => {
        if (checkPending || caughtError.has(effects)) {
          let i = 0,
            fn,
            scope,
            branch;
          for (; i < effects.length;)
            ((fn = effects[i++]),
              (scope = effects[i++]),
              (branch = scope.F)?.H !== 0 &&
                !(checkPending && handlePendingTry(fn, scope, branch)) &&
                fn(scope));
        } else runEffects(effects);
      }
    )(runEffects)),
      (runRender = ((runRender) => (render) => {
        try {
          let branch = render.b.F;
          for (; branch;) {
            if (branch.W) return ((render.f = 1), branch.W.push(render));
            branch = branch.N;
          }
          ((render.f = 0), runRender(render));
        } catch (error) {
          renderCatch(render.b, error);
        }
      })(runRender)));
  }
}
function $signalReset(scope, id) {
  let ctrl = scope.A?.[id];
  ctrl && (queueEffect(ctrl, abort), (scope.A[id] = void 0));
}
function $signal(scope, id) {
  return (
    scope.F && (scope.F.B ||= /* @__PURE__ */ new Set()).add(scope),
    ((scope.A ||= {})[id] ||= new AbortController()).signal
  );
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
function _load_template(id, load) {
  _enable_catch();
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
/**
 * Registers a lazy child's loader under its asset/ready id (the compile
 * constant the server's `withLoadAssets` wrapper uses) so a persisted update
 * delivering the child's server-rendered markup can start the load without a
 * document script; the applier fires this when the child's keyed resume
 * batch arrives (see dom/update.ts). The loader resolves the child template
 * plus its `?update` merge, and declaring `ready` afterward replays the
 * parked batch against the inserted markup. Emitted by `?update` entry
 * compiles only, so plain builds never carry it.
 */
function _load_ready(readyId, load) {
  _resume(readyId, () => {
    load().then(
      () => ready(readyId),
      () => 0,
    );
  });
}
function _load_setup(nodeAccessor, childScopeAccessor, load) {
  ((nodeAccessor = decodeAccessor(nodeAccessor)),
    (childScopeAccessor = decodeAccessor(childScopeAccessor)));
  let pending, renderer;
  return (
    _enable_catch(),
    (owner) => {
      let child = owner[childScopeAccessor];
      if (renderer) insertLoaded(renderer, child, owner[nodeAccessor]);
      else {
        let awaitCounter = addAwaitCounter(owner);
        ((child.X ||= /* @__PURE__ */ new Map()),
          (pending ||= load()).then(
            (mod) => {
              ((renderer = _content("", ...mod._)()),
                queueAsyncRender(child, (child) =>
                  insertLoaded(
                    renderer,
                    child,
                    owner[nodeAccessor],
                    awaitCounter,
                  ),
                ));
            },
            loadFailed(child, awaitCounter),
          ));
      }
    }
  );
}
function insertLoaded(renderer, branch, marker, awaitCounter) {
  let parent = marker.parentNode,
    values = branch.X,
    insert = () => {
      (insertBranchBefore(branch, parent, marker),
        marker.remove(),
        awaitCounter?.c());
    },
    remaining;
  if (
    (syncGen(branch),
    renderer.b(branch, parent.namespaceURI),
    (branch.X = 0),
    (remaining = values?.size))
  )
    for (let [promise, entry] of values)
      promise.then(
        (signal) => {
          ((entry.b = signal),
            --remaining ||
              queueAsyncRender(branch, (branch) => {
                (syncGen(branch),
                  renderer.c?.(branch),
                  values.forEach((e) => e.b._(branch, e.a)),
                  insert(),
                  flushReadyUpdates());
              }));
        },
        () => 0,
      );
  else (setupBranch(renderer, branch), insert(), flushReadyUpdates());
}
function loadFailed(scope, awaitCounter) {
  return (error) => {
    (awaitCounter && (awaitCounter.i = 0),
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
            entries.some((entry) => entry.isIntersecting) &&
            resolve(io.disconnect()),
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
      getSelectorOrResolve(selector, resolve)?.addEventListener(
        event,
        resolve,
        { once: !0 },
      ),
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
  return (load) => () =>
    (pending ||= Promise.race(triggers.map((t) => t(noop)()))).then(load);
}
function getSelectorOrResolve(selector, resolve) {
  return document.querySelector(selector) || resolve();
}
/**
 * The possession echo (`x-marko-have`): what renderer the live page holds at
 * each dynamic-tag hop, so a same-route navigation whose update renders a
 * different renderer there ships a fragment for exactly that hop (see the html
 * writer's `possessed` / `_dynamic_tag`) instead of failing into a full
 * navigation. Walks the resumed scope tree collecting, per hop, a build-stable
 * site id -> renderer id from the string-valued `ConditionalRenderer:` keys --
 * dynamic tags serialize a renderer id string there, while `<if>`/loop
 * branches store a numeric branch index, so control flow is excluded for free.
 * The site id is read off a sibling key the html runtime stashed under
 * `HOP_SITE_PREFIX` ("Z"): the compiler's per-site register id, not the
 * runtime scope id -- document and update renders number scopes differently,
 * but the register id is a compile constant identical in both. A hop repeated
 * across a keyed `<for>` shares one site id, so the key appends the
 * iteration's loop key (`siteId + " " + loopKey`); positional loops expose no
 * loop key and still collide. Returns the map JSON-encoded, or "" when the
 * page holds no hops (header then omitted).
 *
 * The same walk also collects pending `<try>` boundaries: a matched boundary
 * whose placeholder shipped carries its site id under `BOUNDARY_SITE_PREFIX`
 * ("T"), tombstoned to `0` once the body resolves -- so a string value means
 * "still showing its placeholder". These echo into the same map under a
 * `"!"`-prefixed key (the reserved placeholder token, so it never collides
 * with a hop's site-id key) with sentinel `"1"`, and the server delivers the
 * matching try's body as a boundary-body entry instead of ordinary fills.
 *
 * `root` defaults to the resumed render's root; callers that already hold it
 * (the router pairs the root once for the apply) pass it to avoid re-pairing.
 */
function _have(root = getUpdateRoot()) {
  if (!root) return "";
  let possessed = {},
    seen = /* @__PURE__ */ new Set(),
    stack = [root],
    found;
  for (; stack.length;) {
    let scope = stack.pop();
    if (!seen.has(scope)) {
      seen.add(scope);
      for (let key in scope) {
        let value = scope[key];
        if (
          typeof value == "string" &&
          key.length > 1 &&
          key.slice(0, 1) === "D"
        ) {
          let siteId = scope["Z" + key.slice(1)];
          if (typeof siteId == "string") {
            found = 1;
            let loopKey = scope.M;
            possessed[loopKey === void 0 ? siteId : siteId + " " + loopKey] =
              value;
          }
        } else if (
          typeof value == "string" &&
          key.length > 1 &&
          key.slice(0, 1) === "T"
        ) {
          found = 1;
          let loopKey = scope.M;
          possessed["!" + value + (loopKey === void 0 ? "" : " " + loopKey)] =
            "1";
        } else if (
          typeof value == "string" &&
          key.length > 1 &&
          key.slice(0, 1) === "U"
        ) {
          found = 1;
          let sep = value.indexOf(" "),
            loopKey = scope.M,
            entryKey =
              "!" +
              value.slice(0, sep) +
              (loopKey === void 0 ? "" : " " + loopKey);
          possessed[entryKey] !== "1" &&
            (possessed[entryKey] = "=" + value.slice(sep + 1));
        } else if (value && typeof value == "object") {
          if (typeof value.L == "number") stack.push(value);
          else if (value instanceof Set || Array.isArray(value))
            for (let child of value)
              child && typeof child == "object" && stack.push(child);
        }
      }
    }
  }
  return found ? JSON.stringify(possessed) : "";
}
/**
 * Applies an update-render payload to a live (resumed) render.
 *
 * `merge` is the page template's compiled merge function (the `?update`
 * module's default export) and `liveRoot` the live scope it pairs with
 * (defaults to the first render's root). The patch root is scope 1 by
 * convention (the first scope the update render allocates -- the root
 * template's); patch scopes are plain objects in a patch-local id space, and
 * `_(id, registryId)` references resolve against them as resume fills do.
 * Scope 0 partials are the update's `$global` values and merge onto the live
 * `$global`.
 */
function applyUpdate(merge, fills, liveRoot = getUpdateRoot()) {
  createUpdate(merge, liveRoot)(fills);
}
/**
 * The per-navigation form of `applyUpdate`: update responses are a stream of
 * serializer frames, and the returned function applies one frame's fills at a
 * time against a shared patch-scope space, so early frames settle before slow
 * async boundaries resolve. Each call re-dispatches the root merge: sparse
 * presence checks pick up the keys the new frame added (later frames extend
 * earlier scopes, e.g. an `<await>` body's branch link), while already-applied
 * keys re-apply through value/DOM primitives that no-op on unchanged input.
 */
function createUpdate(merge, liveRoot = getUpdateRoot()) {
  bumpNavEpoch();
  let liveGlobal = liveRoot.$,
    patchScopes = { 0: liveGlobal },
    getScope = (id) => (patchScopes[id] ||= {}),
    applyScopes = (partials) => {
      let scopeId = partials[0];
      for (let i = 1; i < partials.length; i++) {
        let partial = partials[i];
        typeof partial == "number"
          ? (scopeId += partial)
          : (scopeId
              ? (patchScopes[scopeId] = Object.assign(
                  patchScopes[scopeId] || partial,
                  partial,
                ))
              : Object.assign(liveGlobal, partial),
            scopeId++);
      }
    },
    serializeContext = Object.assign(
      (data, registryId) =>
        typeof data == "number"
          ? registryId
            ? registryId in registeredValues
              ? getRegisteredWithScope(registryId, getScope(data))
              : void 0
            : getScope(data)
          : applyScopes(data),
      { _: registeredValues },
    ),
    pairs = /* @__PURE__ */ new Map(),
    stamp = (scope, id) =>
      scope.H
        ? !1
        : ((scope.L = id),
          (scope.H = runId),
          (scope.$ = liveGlobal),
          pairs.set(scope, scope),
          !0),
    processBatch = (entry, effectEntries) => {
      let batch = {
        id: entry[0],
        fills: entry.slice(1),
        apply: (fill) => {
          if (typeof fill == "string") {
            let effects = [],
              fn;
            for (let token of fill.split(" "))
              if (/\D/.test(token)) fn = registeredValues[token];
              else {
                let scope = patchScopes[+token];
                fn && scope && scope.H && effects.push(fn, scope);
              }
            runEffects(effects);
          } else {
            let scopes = fill(serializeContext);
            Array.isArray(scopes) && applyScopes(scopes);
          }
        },
      };
      if (isReady(batch.id)) {
        let count = 0;
        for (; count < batch.fills.length; count++) {
          let fill = batch.fills[count];
          if (Array.isArray(fill)) {
            if (!fill.every(readyBatchDrained)) break;
          } else if (typeof fill == "string") effectEntries.push(fill);
          else {
            let scopes = fill(serializeContext);
            Array.isArray(scopes) && applyScopes(scopes);
          }
        }
        if (count === batch.fills.length) return;
        (batch.fills.splice(0, count),
          installReadyUpdates(),
          parkedReadyBatches.push(batch));
      } else
        (installReadyUpdates(),
          parkedReadyBatches.push(batch),
          registeredValues[batch.id]?.());
    };
  return (fills) => {
    let effectEntries = [];
    for (let fill of Array.isArray(fills) ? fills : [fills])
      if (typeof fill == "string") effectEntries.push(fill);
      else if (Array.isArray(fill))
        typeof fill[0] == "string"
          ? processBatch(fill, effectEntries)
          : fill[1] === 0
            ? (getScope(fill[0])["!"] = fill)
            : fill[1] === 1
              ? (getScope(fill[0])["?"] = fill)
              : (getScope(fill[0])["P" + fill[1]] = fill);
      else {
        let scopes = fill(serializeContext);
        Array.isArray(scopes) && applyScopes(scopes);
      }
    (setUpdating(1, runId),
      (activePairs = pairs),
      (activeUpdate = {
        getScope,
        stamp,
        adopt: (id, scope) => (patchScopes[id] = scope),
      }),
      (applyGen = runId));
    try {
      if ((merge(getScope(1), liveRoot), effectEntries.length)) {
        let effects = [];
        for (let entry of effectEntries) {
          let fn;
          for (let token of entry.split(" "))
            if (/\D/.test(token)) fn = registeredValues[token];
            else {
              let live = pairs.get(patchScopes[+token]);
              fn &&
                live &&
                (live.H >= applyGen || (live.H && refreshEffects.has(fn))) &&
                effects.push(fn, live);
            }
        }
        runEffects(effects);
      }
      run();
    } finally {
      (setUpdating(0), (activePairs = void 0), (activeUpdate = void 0));
    }
  };
}
/**
 * Emitted at the top of compiled merge functions for sections with effects:
 * records the patch → live scope pairing so payload effect entries (which
 * carry patch-local scope ids) can resolve their live scope.
 */
function _update_pair(patch, live) {
  activePairs?.set(patch, live);
}
/**
 * Single-branch boundary (`<await>`/`<try>` body) dispatch. When the live
 * branch is a detached await -- a fresh subtree's await whose promise compute
 * was skipped while updating -- the body's frame is the resolution: attach it
 * at its anchor, then fill it. A stashed boundary-body entry (see
 * `createUpdate`/`PENDING_BODY_KEY`) applies instead of `bodyMerge` and is
 * consumed so a re-dispatch (a streamed frame re-applying, or this function's
 * own same-frame retry) never double-applies it. Otherwise attached (or
 * non-await) branches just fill; an absent live branch sparse-skips.
 */
function _update_branch(patch, live, accessor, bodyMerge) {
  let branchKey = "A" + accessor,
    patchBranch = patch[branchKey];
  if (!patchBranch) return;
  let liveBranch = live[branchKey];
  if (!liveBranch && (run(), (liveBranch = live[branchKey]), !liveBranch))
    return;
  liveBranch.V && attachAwaitBranch(live, accessor, liveBranch);
  let byKey = "U" + accessor;
  typeof patch[byKey] == "string" && (live[byKey] = patch[byKey]);
  let resetEntry = patchBranch["?"] || liveBranch["?"];
  if (resetEntry) {
    (delete patchBranch["?"],
      delete liveBranch["?"],
      applyPlaceholderReset(
        liveBranch,
        resetEntry[2],
        resetEntry[3],
        resetEntry[4],
        resetEntry[0],
      ));
    let by = live[byKey];
    by && (live["T" + accessor] = by.slice(0, by.indexOf(" ")));
  }
  let bodyEntry = patchBranch["!"] || liveBranch["!"];
  bodyEntry
    ? (delete patchBranch["!"],
      delete liveBranch["!"],
      applyBoundaryBody(
        liveBranch,
        bodyEntry[2],
        bodyEntry[3],
        bodyEntry[4],
        bodyEntry[0],
      ),
      (live["T" + accessor] = 0))
    : bodyMerge && bodyMerge(patchBranch, liveBranch);
}
function _update_content(contentId, merge) {
  _resume(contentId + "!", merge);
}
/**
 * `load=` lazy-child dispatch. The child's `?update` merge module rides its
 * lazy chunk, registered under a register id both sides compute
 * (`<childTemplateId>` + its root `update` key, a compile constant). Loaded
 * child: dispatch directly. Still loading: park the (patch, live, id) triple
 * and replay when a load completes (the `enableReadyUpdates` hook, installed
 * on first park) -- request-derived values ride every update, so the newest
 * parked patch per live scope is complete and supersedes earlier ones.
 */
function _update_load(patch, live, mergeId) {
  if (patch === live) return;
  let merge = registeredValues[mergeId];
  if (merge) merge(patch, live);
  else {
    for (let pending of pendingLoadUpdates)
      if (pending[1] === live) {
        pending[0] = patch;
        return;
      }
    (installReadyUpdates(), pendingLoadUpdates.push([patch, live, mergeId]));
  }
}
function installReadyUpdates() {
  readyUpdatesInstalled ||
    ((readyUpdatesInstalled = 1),
    enableReadyUpdates(() => {
      (flushParkedReadyBatches(), flushPendingLoadUpdates());
    }));
}
function _update_dynamic(patch, live, rendererKey, branchKey, replay) {
  let rendererId = patch[rendererKey];
  if (typeof rendererId != "string") return;
  let patchBranch = patch[branchKey],
    accessor = branchKey.slice(1),
    fragment = patch["P" + accessor];
  if (fragment && patchBranch && live[rendererKey] !== rendererId)
    (delete patch["P" + accessor],
      stampFragmentScopes(fragment[4]),
      applyFragment(live, accessor, patchBranch, fragment[2], fragment[3]),
      (live[rendererKey] = rendererId));
  else if (replay && live[rendererKey] !== rendererId) {
    let renderer = getRegisteredWithScope(
      rendererId,
      patchBranch?._ || live._ || live,
    );
    if (!renderer) return;
    replay(live, renderer);
  } else if (live[rendererKey] !== rendererId) {
    if (live[branchKey]) throw Error("update diverged");
    return;
  }
  let merge = getRegisteredWithScope(rendererId + "!"),
    liveBranch = live[branchKey];
  if (patchBranch && liveBranch)
    if (merge) merge(patchBranch, liveBranch);
    else {
      _update_scope(patchBranch, liveBranch);
      for (let key in patchBranch)
        key.length > 1 &&
          key.slice(0, 1) === "D" &&
          typeof patchBranch[key] == "string" &&
          _update_dynamic(patchBranch, liveBranch, key, "A" + key.slice(1), 0);
    }
}
function stampFragmentScopes(ids) {
  if (ids) {
    let { getScope, stamp } = activeUpdate;
    for (let id of ids) stamp(getScope(id), id);
  }
}
function applyFragment(live, accessor, branch, markerPrefix, html) {
  let { stamp } = activeUpdate,
    marker = live[accessor],
    old = live["A" + accessor],
    tpl = document.createElement("template");
  tpl.innerHTML = html;
  let { touched, orphans } = walkFragment(tpl.content, markerPrefix),
    first = tpl.content.insertBefore(new Text(), tpl.content.firstChild),
    last = tpl.content.appendChild(new Text());
  (marker.parentNode.insertBefore(tpl.content, marker),
    old && removeAndDestroyBranch(old),
    stamp(branch, 0),
    (branch.S = first),
    (branch.K = last),
    (branch._ ||= live),
    setParentBranch(branch, live.F),
    (live["A" + accessor] = branch));
  for (let orphan of orphans) orphan.N || setParentBranch(orphan, branch);
  for (let scope of touched) scope.F ||= branch;
}
/**
 * Applies a boundary-body entry: a `<try>` placeholder boundary's resolved
 * body. Two shapes reach here (see `_update_branch`):
 *
 * - **Fragment-created**: the body arrives after the fragment frame that
 *   shipped the placeholder, bracketed as a dedicated `PlaceholderBranch` (the
 *   reserved "!" accessor token). The new markup swaps in where that
 *   placeholder branch sits, which is then destroyed.
 * - **Matched (document-resumed)**: no separate placeholder branch exists -- a
 *   document render's placeholder resumes as the try's own branch, so the
 *   still-pending try's own Start/EndNode range shows the placeholder. The new
 *   markup replaces that range's contents wholesale, keeping the branch's own
 *   boundary nodes so its identity survives the swap.
 *
 * In both cases the body's markup walks like a fragment (its scope data
 * already landed through this frame's fills). No-ops if the try branch is gone
 * or destroyed; `_update_branch` already resolved a live, paired branch, so
 * that only guards a race within the same apply.
 */
function applyBoundaryBody(
  tryBranch,
  markerPrefix,
  html,
  scopeIds,
  patchBranchId,
) {
  if (!tryBranch.H) return;
  let placeholderBranch = tryBranch.P;
  (patchBranchId && activeUpdate.adopt(patchBranchId, tryBranch),
    stampFragmentScopes(scopeIds));
  let tpl = document.createElement("template");
  tpl.innerHTML = html;
  let { touched, orphans } = walkFragment(tpl.content, markerPrefix);
  if (placeholderBranch)
    ((tryBranch.P = 0),
      placeholderBranch.S.parentNode.insertBefore(
        tpl.content,
        placeholderBranch.S,
      ),
      removeAndDestroyBranch(placeholderBranch));
  else {
    let start = tryBranch.S,
      end = tryBranch.K;
    (start !== end &&
      start.nextSibling !== end &&
      removeChildNodes(start.nextSibling, end.previousSibling),
      end.parentNode.insertBefore(tpl.content, end));
  }
  for (let orphan of orphans) orphan.N || setParentBranch(orphan, tryBranch);
  for (let scope of touched) scope.F ||= tryBranch;
}
/**
 * Applies a `<@placeholder by=>` recede: the matched try's identity changed
 * and its new body is still pending, so the stale body is replaced by the
 * boundary's placeholder ahead of the body's own entry. The markup is
 * bracketed like a fragment-shipped pending boundary's placeholder (the
 * reserved "!" accessor token), so the walk binds it to `PlaceholderBranch` on
 * the adopted live try branch -- the body entry then swaps it out through
 * `applyBoundaryBody`'s placeholder path with no new machinery. Content
 * replacement keeps the try branch's own boundary nodes (its identity
 * survives); `by=` is also the author's declaration that state inside the
 * boundary does not survive a key change.
 */
function applyPlaceholderReset(
  tryBranch,
  markerPrefix,
  html,
  scopeIds,
  patchBranchId,
) {
  if (!tryBranch.H) return;
  (patchBranchId && activeUpdate.adopt(patchBranchId, tryBranch),
    stampFragmentScopes(scopeIds));
  let tpl = document.createElement("template");
  tpl.innerHTML = html;
  let { touched, orphans } = walkFragment(tpl.content, markerPrefix),
    start = tryBranch.S,
    end = tryBranch.K;
  (start !== end &&
    start.nextSibling !== end &&
    removeChildNodes(start.nextSibling, end.previousSibling),
    end.parentNode.insertBefore(tpl.content, end));
  for (let orphan of orphans) orphan.N || setParentBranch(orphan, tryBranch);
  for (let scope of touched) scope.F ||= tryBranch;
}
function walkFragment(root, prefix) {
  let { getScope, stamp } = activeUpdate,
    visits = [],
    treeWalker = document.createTreeWalker(root, 128);
  for (let node; (node = treeWalker.nextNode());)
    node.data.startsWith(prefix) && visits.push(node);
  let touched = [],
    scopeOf = (id) => {
      let scope = getScope(+id);
      return (stamp(scope, +id) && touched.push(scope), scope);
    },
    branchStarts = [],
    branchScopesStack = [],
    orphanBranches = [],
    curBranchScopes,
    lastNodeScopeId = "",
    visitText = "",
    tokenIndex = 0,
    lastToken = "",
    nextToken = () =>
      (lastToken = visitText.slice(
        tokenIndex,
        (tokenIndex =
          visitText.indexOf(" ", tokenIndex) + 1 || visitText.length + 1) - 1,
      ));
  for (let visit of visits) {
    ((visitText = visit.data), (tokenIndex = prefix.length));
    let visitType = visitText[tokenIndex++];
    if (visitType === "*") {
      let scopeId = nextToken(),
        scope = scopeOf(
          scopeId ? (lastNodeScopeId = scopeId) : lastNodeScopeId,
        ),
        accessor = nextToken(),
        prev = visit.previousSibling;
      scope[accessor] =
        prev && (prev.nodeType < 8 || prev.data)
          ? prev
          : visit.parentNode.insertBefore(new Text(), visit);
      continue;
    }
    lastNodeScopeId = "";
    let visitScope,
      accessor,
      singleNode = !1,
      endedBranches,
      startVisit = visit,
      parent = visit.parentNode;
    visitType === "["
      ? nextToken()
      : ((visitScope = scopeOf(nextToken())),
        nextToken() === "!"
          ? (accessor = "P")
          : ((visitScope[lastToken] =
              visitType === ")" || visitType === "}" ? parent : visit),
            (accessor = "A" + lastToken)),
        (singleNode = visitType !== "]" && visitType !== ")"),
        nextToken());
    let i = orphanBranches.length,
      branchId;
    for (; (branchId = +lastToken);) {
      let branch = scopeOf(lastToken);
      if (((endedBranches ||= []).push(branch), singleNode)) {
        for (
          ;
          startVisit.previousSibling &&
          ~visits.indexOf((startVisit = startVisit.previousSibling));
        );
        ((branch._ ??= visitScope),
          (branch.K = branch.S = startVisit),
          visitType === "'" && (branch.a = startVisit));
      } else {
        if (
          ((curBranchScopes = curBranchScopes
            ? (curBranchScopes.push(branch), curBranchScopes)
            : [branch]),
          accessor)
        ) {
          visitScope[accessor] =
            curBranchScopes.length > 1 ? curBranchScopes : curBranchScopes[0];
          for (let scope of curBranchScopes) scope._ ??= visitScope;
          curBranchScopes = branchScopesStack.pop();
        }
        ((startVisit = branchStarts.pop()),
          parent !== startVisit.parentNode && parent.prepend(startVisit),
          (branch.S = startVisit),
          (branch.K =
            visit.previousSibling === startVisit
              ? startVisit
              : parent.insertBefore(new Text(), visit)));
      }
      for (; i && orphanBranches[--i].L > branchId;)
        setParentBranch(orphanBranches.pop(), branch);
      nextToken();
    }
    if (endedBranches) {
      for (let ended of endedBranches) orphanBranches.push(ended);
      singleNode &&
        (visitScope[accessor] =
          endedBranches.length > 1
            ? endedBranches.reverse()
            : endedBranches[0]);
    }
    visitType === "[" &&
      (endedBranches ||
        (branchScopesStack.push(curBranchScopes), (curBranchScopes = void 0)),
      branchStarts.push(visit));
  }
  return {
    touched,
    orphans: orphanBranches,
  };
}
/**
 * The generic hole applier: places every typed hole capture a patch scope
 * carries against its paired live scope -- text holes (`UpdateHole:`),
 * unsafe-html holes (`UpdateHtml:`), attr holes/controllables
 * (`UpdateAttr:<name>:<accessor>`) -- and descends into update-generic child
 * scopes through their typed links (`UpdateChild:<accessor>`, serialized by
 * `_update_child` in update renders only), so server-only compositions need no
 * compiled dispatch at any level. Controllable semantics are recovered from
 * the live element: on their tags the controllable names always route through
 * the controllable carve-out, so `value` on an input is never a plain attr
 * hole. Fragment subtrees are inert here: their captures and child links are
 * suppressed server-side (values baked into the markup), so the shared
 * patch/live object carries no prefixed keys.
 */
function _update_scope(patch, live) {
  for (let key in patch)
    if (key.length > 1) {
      if (key.startsWith("Q")) _text(live[key.slice(1)], patch[key]);
      else if (key.startsWith("R"))
        _update_html(live, patch, key, key.slice(1));
      else if (key.startsWith("S"))
        _update_scope(patch[key], live[key.slice(1)]);
      else if (key.startsWith("N")) {
        let sep = key.indexOf(":", 1),
          name = key.slice(1, sep),
          accessor = key.slice(sep + 1),
          value = patch[key];
        if (name === "class") _attr_class(live[accessor], value);
        else if (name === "style") _attr_style(live[accessor], value);
        else if (name === "textContent") _text_content(live[accessor], value);
        else {
          let tag = live[accessor].tagName;
          name === "value" && (tag === "INPUT" || tag === "TEXTAREA")
            ? _attr_input_value_default(live, accessor, value)
            : name === "value" && tag === "SELECT"
              ? _attr_select_value_default(live, accessor, value)
              : name === "checked" && tag === "INPUT"
                ? _attr_input_checked_default(live, accessor, value)
                : name === "open" && (tag === "DETAILS" || tag === "DIALOG")
                  ? _attr_details_or_dialog_open_default(live, accessor, value)
                  : _attr(live[accessor], name, value);
        }
      }
    }
}
function _update_html(live, patch, key, accessor) {
  (_html(live, patch[key], accessor), delete patch[key]);
}
/**
 * Applies a seed-mode state value, only into scopes created during this apply
 * (fresh subtrees cannot compute state whose initializers live behind
 * server-only expressions -- the seed IS the initial value), through the
 * binding's registered signal so downstream derivations recompute. Matched
 * (pre-existing) scopes keep their live state untouched.
 */
function _update_seed(live, signal, value) {
  live.H >= applyGen && signal(live, value);
}
function _update_signal(id) {
  return (scope, value) => getRegisteredWithScope(id, scope)(value);
}
function _update_for(nodeAccessor, contentId, merge) {
  let signal;
  return (scope, value) => {
    if (!signal) {
      let content = getRegisteredWithScope(contentId);
      signal = _for_of(nodeAccessor, content[0], content[1], content[2], merge);
    }
    let branches = value[0];
    (branches && !Array.isArray(branches) && (branches = value[0] = [branches]),
      !branches?.[0]?.S && signal(scope, value));
  };
}
//#endregion
