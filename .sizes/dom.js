// size: 21163 (min) 7934 (brotli)
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
  defaultDelegator = /* @__PURE__ */ createDelegator(),
  R = /[^\p{L}\p{N}]/gu,
  parsers = {},
  nextScopeId = 1e6,
  destroyNestedScopes = function destroyNestedScopes(scope) {
    ((scope.I = 1),
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
  curRuntimeId,
  readyLookup,
  branchesEnabled,
  embedEnabled,
  ready = /* @__PURE__ */ ((_) => (id) => {
    (readyLookup[id]?.(), (readyLookup[id] = 1));
  })((readyLookup = {})),
  isResuming,
  inputType = "",
  controllableDelegate = /* @__PURE__ */ createDelegator(),
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
  pendingRenders = [],
  pendingRendersLookup = /* @__PURE__ */ new Map(),
  asyncRendersLookup,
  caughtError = /* @__PURE__ */ new WeakSet(),
  placeholderShown = /* @__PURE__ */ new WeakSet(),
  pendingEffects = [],
  pendingScopes = [],
  rendering,
  runEffects = (effects) => {
    for (let i = 0; i < effects.length; ) effects[i++](effects[i++]);
  },
  runRender = (render) => render.c(render.b, render.d),
  catchEnabled,
  classIdToBranch = /* @__PURE__ */ new Map(),
  compat = {
    patchDynamicTag,
    queueEffect,
    init(warp10Noop) {
      (_resume("$C_s", (branch) => {
        classIdToBranch.set(branch.m5c, branch);
      }),
        _resume("$C_b", warp10Noop));
    },
    registerRenderer(fn) {
      _resume("$C_r", fn);
    },
    isRenderer(renderer) {
      return renderer.b;
    },
    getStartNode(branch) {
      return branch.S;
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
        ? getRegisteredWithScope(
            value[0],
            value.length === 2 &&
              self[$global.runtimeId]?.[$global.renderId]?.s[value[1]],
          )
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
        typeof args[0] == "object" && "renderBody" in args[0])
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
  };
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
function _assert_hoist(value) {}
function _assert_init(scope, accessor) {
  return scope[accessor];
}
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
function _call(fn, v) {
  return (fn(v), v);
}
function stringifyClassObject(name, value) {
  return value ? name : "";
}
function stringifyStyleObject(name, value) {
  return value || value === 0 ? name + ":" + value : "";
}
function isEventHandler(name) {
  return /^on[A-Z-]/.test(name);
}
function getEventHandlerName(name) {
  return name[2] === "-" ? name.slice(3) : name.slice(2).toLowerCase();
}
function normalizeDynamicRenderer(value) {
  if (value) {
    if (typeof value == "string") return value;
    let normalized = value.content || value.default || value;
    if ("a" in normalized) return normalized;
  }
}
function toArray(opt) {
  return opt ? (Array.isArray(opt) ? opt : [opt]) : [];
}
function push(opt, item) {
  return opt
    ? Array.isArray(opt)
      ? (opt.push(item), opt)
      : [opt, item]
    : item;
}
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
    for (; count && updatedValue[pos]; )
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
    H: 1,
    F: closestBranch,
    $: $global,
  };
  return (pendingScopes.push(scope), scope);
}
function skipScope() {
  return nextScopeId++;
}
function findBranchWithKey(scope, key) {
  let branch = scope.F;
  for (; branch && branch[key] == null; ) branch = branch.N;
  return branch;
}
function destroyBranch(branch) {
  (branch.N?.D?.delete(branch), destroyNestedScopes(branch));
}
function destroyScope(scope) {
  scope.I || (destroyNestedScopes(scope), resetControllers(scope));
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
function _const(valueAccessor, fn) {
  return (
    (valueAccessor = decodeAccessor(valueAccessor)),
    (scope, value) => {
      (!(valueAccessor in scope) || scope[valueAccessor] !== value) &&
        ((scope[valueAccessor] = value), fn?.(scope));
    }
  );
}
function _or(id, fn, defaultPending = 1, scopeIdAccessor = "L") {
  return (
    scopeIdAccessor !== "L" &&
      (scopeIdAccessor = decodeAccessor(scopeIdAccessor)),
    (scope) => {
      scope.H
        ? id in scope
          ? --scope[id] || fn(scope)
          : (scope[id] = defaultPending)
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
            for (let scope of scopes) !scope.H && !scope.I && fn(scope);
          },
          -1,
          0,
          scopes[0].L,
        );
    };
  return ((ownerSignal._ = fn), ownerSignal);
}
function _if_closure(ownerConditionalNodeAccessor, branch, fn) {
  ownerConditionalNodeAccessor = decodeAccessor(ownerConditionalNodeAccessor);
  let scopeAccessor = "A" + ownerConditionalNodeAccessor,
    branchAccessor = "D" + ownerConditionalNodeAccessor,
    ownerSignal = (scope) => {
      let ifScope = scope[scopeAccessor];
      ifScope &&
        !ifScope.H &&
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
  for (let i = closureSignals.length; i--; ) closureSignals[i].c = i;
  return (scope) => {
    if (scope[scopeInstances])
      for (let childScope of scope[scopeInstances])
        childScope.H ||
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
    (closureSignal.a = "B" + valueAccessor),
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
  branchesEnabled = 1;
}
function initEmbedded(readyId, runtimeId) {
  ((embedEnabled = 1),
    ready(readyId),
    init(runtimeId),
    new MutationObserver(() => {
      let renders = self[curRuntimeId];
      for (let renderId in renders) {
        let { s, n } = renders[renderId];
        if (n && !n.isConnected) {
          delete renders[renderId];
          for (let id in s) destroyScope(s[id]);
        }
      }
    }).observe(document.body, {
      childList: !0,
      subtree: !0,
    }));
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
            visitBranches =
              branchesEnabled &&
              (
                (
                  branchScopesStack = [],
                  branchStarts = [],
                  orphanBranches = [],
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
                      ((endedBranches ||= []).push(
                        (branch = getScope(branchId)),
                      ),
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
                      ((branch.K = branch.S = startVisit),
                        visitType === "'" && (branch.a = startVisit));
                    } else
                      ((curBranchScopes = push(curBranchScopes, branch)),
                        accessor &&
                          ((visitScope[accessor] = curBranchScopes),
                          (curBranchScopes = branchScopesStack.pop())),
                        (startVisit = branchStarts.pop()),
                        parent !== startVisit.parentNode &&
                          parent.prepend(startVisit),
                        (branch.S = startVisit),
                        (branch.K =
                          visit.previousSibling === startVisit
                            ? startVisit
                            : parent.insertBefore(new Text(), visit)));
                    for (; i && orphanBranches[--i].L > branchId; )
                      setParentBranch(orphanBranches.pop(), branch);
                    nextToken();
                  }
                  (endedBranches &&
                    (orphanBranches.push(...endedBranches),
                    singleNode &&
                      (visitScope[accessor] =
                        endedBranches.length > 1
                          ? endedBranches.reverse()
                          : endedBranches[0])),
                    visitType === "[" &&
                      (endedBranches ||
                        (branchScopesStack.push(curBranchScopes),
                        (curBranchScopes = void 0)),
                      branchStarts.push(visit)));
                }
              )(),
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
                          (scope.$ = $global),
                          branchesEnabled && (scope.F = getScope(scope.G)))
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
                } else branchesEnabled && visitBranches();
              return (
                embedEnabled &&
                  (render.n ||= visit?.parentNode.insertBefore(
                    new Text(),
                    visit.nextSibling,
                  )),
                (visits.length = resumes.length = 0),
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
    for (let renderId in renders) runResumeEffects(resumeRender(renderId));
  } else
    defineRuntime({
      configurable: !0,
      set: initRuntime,
    });
}
function runResumeEffects(render) {
  try {
    ((isResuming = 1), runEffects(render.m(), 1));
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
  return (
    (accessor = decodeAccessor(accessor)),
    _resume(id, (scope) => () => scope[accessor])
  );
}
function _attr_input_checked_default(scope, nodeAccessor, checked) {
  let el = scope[nodeAccessor],
    normalizedChecked = normalizeBoolProp(checked);
  if (el.defaultChecked !== normalizedChecked) {
    let restoreValue = scope.H ? normalizedChecked : el.checked;
    ((el.defaultChecked = normalizedChecked),
      restoreValue !== normalizedChecked && (el.checked = restoreValue));
  }
}
function _attr_input_checked(scope, nodeAccessor, checked, checkedChange) {
  let el = scope[nodeAccessor],
    normalizedChecked = normalizeBoolProp(checked);
  ((scope["E" + nodeAccessor] = checkedChange),
    (scope["F" + nodeAccessor] = checkedChange ? 0 : 5),
    checkedChange && !scope.H
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
  (_attr(scope[nodeAccessor], "value", normalizedValue),
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
    normalizedValue = normalizeStrProp(value),
    normalizedCheckedValue = (scope["G" + nodeAccessor] = multiple
      ? checkedValue.map(normalizeStrProp)
      : normalizeStrProp(checkedValue));
  (_attr(el, "value", normalizedValue),
    (scope["E" + nodeAccessor] = checkedValueChange),
    (scope["F" + nodeAccessor] = checkedValueChange ? 1 : 5),
    checkedValueChange && !scope.H
      ? (el.checked = multiple
          ? normalizedCheckedValue.includes(normalizedValue)
          : normalizedValue === normalizedCheckedValue)
      : _attr_input_checkedValue_default(
          scope,
          nodeAccessor,
          normalizedCheckedValue,
          normalizedValue,
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
          for (let radio of el
            .getRootNode()
            .querySelectorAll(`[type=radio][name=${CSS.escape(el.name)}]`))
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
    normalizedValue = normalizeStrProp(value);
  if (el.defaultValue !== normalizedValue) {
    let restoreValue = scope.H ? normalizedValue : el.value;
    ((el.defaultValue = normalizedValue), setInputValue(el, restoreValue));
  }
}
function _attr_input_value(scope, nodeAccessor, value, valueChange) {
  let el = scope[nodeAccessor],
    normalizedValue = normalizeStrProp(value);
  ((scope["E" + nodeAccessor] = valueChange),
    (scope["G" + nodeAccessor] = normalizedValue),
    (scope["F" + nodeAccessor] = valueChange ? 2 : 5),
    valueChange && !scope.H
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
      el.getRootNode().activeElement === el && el.selectionStart,
      el.value,
      (el.value = value),
    );
    ~updatedPosition && el.setSelectionRange(updatedPosition, updatedPosition);
  }
}
function _attr_select_value_default(scope, nodeAccessor, value) {
  let restoreValue,
    el = scope[nodeAccessor],
    existing = !scope.H,
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
        (existing && (restoreValue ??= getSelectValue(el, multiple)),
        (opt.defaultSelected = selected));
    }
    restoreValue !== void 0 && setSelectValue(el, restoreValue, multiple);
  }, scope);
}
function _attr_select_value(scope, nodeAccessor, value, valueChange) {
  let el = scope[nodeAccessor],
    existing = !scope.H,
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
  scope.H && (scope[nodeAccessor].open = normalizeBoolProp(open));
}
function _attr_details_or_dialog_open(scope, nodeAccessor, open, openChange) {
  let normalizedOpen = (scope["G" + nodeAccessor] = normalizeBoolProp(open));
  ((scope["E" + nodeAccessor] = openChange),
    (scope["F" + nodeAccessor] = openChange ? 4 : 5),
    openChange && !scope.H
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
    controllableDelegate(el, "input", handleChange),
    el.form && controllableDelegate(el.form, "reset", handleFormReset),
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
function normalizeBoolProp(value) {
  return value != null && value !== !1;
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
  for (let i = el.attributes.length; i--; ) {
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
  for (let i = el.attributes.length; i--; ) {
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
    events,
    skip;
  switch (el.tagName) {
    case "INPUT":
      if ("checked" in nextAttrs || "checkedChange" in nextAttrs)
        _attr_input_checked(
          scope,
          nodeAccessor,
          nextAttrs.checked,
          nextAttrs.checkedChange,
        );
      else if ("checkedValue" in nextAttrs || "checkedValueChange" in nextAttrs)
        _attr_input_checkedValue(
          scope,
          nodeAccessor,
          nextAttrs.checkedValue,
          nextAttrs.checkedValueChange,
          nextAttrs.value,
        );
      else if ("value" in nextAttrs || "valueChange" in nextAttrs)
        _attr_input_value(
          scope,
          nodeAccessor,
          nextAttrs.value,
          nextAttrs.valueChange,
        );
      else break;
      skip = /^(?:value|checked(?:Value)?)(?:Change)?$/;
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
  if (value || value === 0) return value === !0 ? "" : value + "";
}
function _lifecycle(scope, thisObj, index = 0) {
  let accessor = "K" + index,
    instance = scope[accessor];
  instance
    ? (Object.assign(instance, thisObj), instance.onUpdate?.())
    : ((scope[accessor] = thisObj),
      thisObj.onMount?.(),
      ($signal(scope, accessor).onabort = () => thisObj.onDestroy?.()));
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
function _await_promise(nodeAccessor, params) {
  nodeAccessor = decodeAccessor(nodeAccessor);
  let promiseAccessor = "L" + nodeAccessor,
    branchAccessor = "A" + nodeAccessor;
  return (
    _enable_catch(),
    (scope, promise) => {
      let awaitBranch = scope[branchAccessor],
        tryBranch = findBranchWithKey(scope, "Q") || awaitBranch,
        awaitCounter = tryBranch.O;
      (awaitCounter?.i ||
        (awaitCounter = tryBranch.O =
          {
            i: 0,
            c() {
              if (--awaitCounter.i) return 1;
              if (tryBranch === scope[branchAccessor])
                scope[nodeAccessor].parentNode &&
                  scope[nodeAccessor].replaceWith(
                    scope[branchAccessor].S.parentNode,
                  );
              else {
                let placeholderBranch = tryBranch.P;
                placeholderBranch &&
                  ((tryBranch.P = 0),
                  placeholderBranch.S.parentNode.insertBefore(
                    tryBranch.S.parentNode,
                    placeholderBranch.S,
                  ),
                  removeAndDestroyBranch(placeholderBranch));
              }
              queueEffect(tryBranch, (scope) => {
                let pendingEffects = scope.J;
                pendingEffects &&
                  ((scope.J = []), runEffects(pendingEffects, 1));
              });
            },
          }),
        placeholderShown.add(pendingEffects),
        scope[promiseAccessor] ||
          (awaitBranch && (awaitBranch.W ||= []),
          awaitCounter.i++ ||
            requestAnimationFrame(
              () =>
                awaitCounter.i &&
                runEffects(
                  prepareEffects(() =>
                    queueRender(
                      tryBranch === awaitBranch ? scope : tryBranch,
                      () => {
                        tryBranch.Q
                          ? (insertBranchBefore(
                              (tryBranch.P = createAndSetupBranch(
                                scope.$,
                                tryBranch.Q,
                                tryBranch._,
                                tryBranch.S.parentNode,
                              )),
                              tryBranch.S.parentNode,
                              tryBranch.S,
                            ),
                            tempDetachBranch(tryBranch))
                          : awaitBranch.V ||
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
            )));
      let thisPromise = (scope[promiseAccessor] = promise.then(
        (data) => {
          if (thisPromise === scope[promiseAccessor]) {
            let referenceNode = scope[nodeAccessor];
            ((scope[promiseAccessor] = 0),
              queueMicrotask(run),
              queueRender(
                scope,
                () => {
                  ((awaitBranch = scope[branchAccessor]).V &&
                    (pendingScopes.push(awaitBranch),
                    setupBranch(awaitBranch.V, awaitBranch),
                    (awaitBranch.V = 0),
                    insertBranchBefore(
                      awaitBranch,
                      scope[nodeAccessor].parentNode,
                      scope[nodeAccessor],
                    ),
                    referenceNode.remove()),
                    params?.(awaitBranch, [data]));
                  let pendingRenders = awaitBranch.W;
                  if (
                    ((awaitBranch.W = 0),
                    pendingRenders?.forEach(queuePendingRender),
                    placeholderShown.add(pendingEffects),
                    awaitCounter.c(),
                    awaitCounter.m)
                  ) {
                    let fnScopes = /* @__PURE__ */ new Map(),
                      effects = awaitCounter.m();
                    for (let i = 0; i < pendingEffects.length; ) {
                      let fn = pendingEffects[i++],
                        scopes = fnScopes.get(fn);
                      (scopes ||
                        fnScopes.set(fn, (scopes = /* @__PURE__ */ new Set())),
                        scopes.add(pendingEffects[i++]));
                    }
                    for (let i = 0; i < effects.length; ) {
                      let fn = effects[i++],
                        scope = effects[i++];
                      fnScopes.get(fn)?.has(scope) || queueEffect(scope, fn);
                    }
                  }
                },
                -1,
              ));
          }
        },
        (error) => {
          thisPromise === scope[promiseAccessor] &&
            ((awaitCounter.i = scope[promiseAccessor] = 0),
            schedule(),
            queueRender(scope, renderCatch, -1, error));
        },
      ));
    }
  );
}
function _await_content(nodeAccessor, template, walks, setup) {
  nodeAccessor = decodeAccessor(nodeAccessor);
  let branchAccessor = "A" + nodeAccessor,
    renderer = _content("", template, walks, setup)();
  return (scope) => {
    (((scope[branchAccessor] = createBranch(
      scope.$,
      renderer,
      scope,
      scope[nodeAccessor].parentNode,
    )).V = renderer),
      pendingScopes.pop());
  };
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
  for (; i < branchesArgs.length; )
    branches.push(
      _content("", branchesArgs[i++], branchesArgs[i++], branchesArgs[i++])(),
    );
  return (
    enableBranches(),
    (scope, newBranch) => {
      newBranch !== scope[branchAccessor] &&
        setConditionalRenderer(
          scope,
          nodeAccessor,
          branches[(scope[branchAccessor] = newBranch)],
          createAndSetupBranch,
        );
    }
  );
}
function patchDynamicTag(fn) {
  _dynamic_tag = fn(_dynamic_tag);
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
      renderer = _content("", template, walks, setup)();
    return (
      enableBranches(),
      (scope, value) => {
        let referenceNode = scope[nodeAccessor],
          oldScopes = toArray(scope[scopesAccessor]),
          newScopes = (scope[scopesAccessor] = []),
          oldLen = oldScopes.length,
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
        for (let i = diffLen; i--; )
          sources[i] = oldPos.get(newScopes[start + i]) ?? -1;
        for (let i = 0; i < diffLen; i++)
          if (~sources[i])
            if (tail < 0 || sources[tails[tail]] < sources[i])
              (~tail && (pred[i] = tails[tail]), (tails[++tail] = i));
            else {
              for (lo = 0, hi = tail; lo < hi; )
                ((mid = ((lo + hi) / 2) | 0),
                  sources[tails[mid]] < sources[i]
                    ? (lo = mid + 1)
                    : (hi = mid));
              sources[i] < sources[tails[lo]] &&
                (lo > 0 && (pred[i] = tails[lo - 1]), (tails[lo] = i));
            }
        for (hi = tails[tail], lo = tail + 1; lo-- > 0; )
          ((tails[lo] = hi), (hi = pred[hi]));
        for (let i = diffLen; i--; )
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
function _enable_catch() {
  if (!catchEnabled) {
    ((catchEnabled = 1), enableBranches());
    let handlePendingTry = (fn, scope, branch) => {
      for (; branch; ) {
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
          for (; i < effects.length; )
            ((fn = effects[i++]),
              (scope = effects[i++]),
              (branch = scope.F),
              !branch?.I &&
                !(checkPending && handlePendingTry(fn, scope, branch)) &&
                fn(scope));
        } else runEffects(effects);
      }
    )(runEffects)),
      (runRender = ((runRender) => (render) => {
        try {
          let branch = render.b.F;
          for (; branch; ) {
            if (branch.W)
              return (
                asyncRendersLookup.set(render.a, render),
                branch.W.push(render)
              );
            branch = branch.N;
          }
          runRender(render);
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
//#endregion
