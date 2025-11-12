// size: 19635 (min) 7527 (brotli)
var empty = [],
  rest = Symbol();
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
  return value || 0 === value ? name + ":" + value : "";
}
function toDelimitedString(val, delimiter, stringify) {
  let part,
    str = "",
    sep = "";
  if (val)
    if ("object" != typeof val) str += val;
    else if (Array.isArray(val))
      for (let v of val)
        ((part = toDelimitedString(v, delimiter, stringify)),
          part && ((str += sep + part), (sep = delimiter)));
    else
      for (let name in val)
        ((part = stringify(name, val[name])),
          part && ((str += sep + part), (sep = delimiter)));
  return str;
}
function isEventHandler(name) {
  return /^on[A-Z-]/.test(name);
}
function getEventHandlerName(name) {
  return "-" === name[2] ? name.slice(3) : name.slice(2).toLowerCase();
}
function normalizeDynamicRenderer(value) {
  if (value) {
    if ("string" == typeof value) return value;
    let normalized = value.content || value.default || value;
    if ("e" in normalized) return normalized;
  }
}
var decodeAccessor = (num) =>
  (num + (num < 26 ? 10 : num < 962 ? 334 : 11998)).toString(36);
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
var defaultDelegator = createDelegator();
function _on(element, type, handler) {
  (void 0 === element["$" + type] &&
    defaultDelegator(element, type, handleDelegated),
    (element["$" + type] = handler || null));
}
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
function stripSpacesAndPunctuation(str) {
  return str.replace(/[^\p{L}\p{N}]/gu, "");
}
var nextScopeId = 1e6;
function createScope($global, closestBranch) {
  let scope = { L: nextScopeId++, H: 1, F: closestBranch, $: $global };
  return (pendingScopes.push(scope), scope);
}
function skipScope() {
  return nextScopeId++;
}
function findBranchWithKey(scope, key) {
  let branch = scope.F;
  for (; branch && !branch[key]; ) branch = branch.N;
  return branch;
}
function destroyBranch(branch) {
  (branch.N?.D?.delete(branch), destroyNestedBranches(branch));
}
function destroyNestedBranches(branch) {
  ((branch.I = 1),
    branch.D?.forEach(destroyNestedBranches),
    branch.B?.forEach((scope) => {
      for (let id in scope.A) $signalReset(scope, id);
    }));
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
var walker = document.createTreeWalker(document);
function walk(startNode, walkCodes, branch) {
  ((walker.currentNode = startNode), walkInternal(0, walkCodes, branch));
}
function walkInternal(currentWalkIndex, walkCodes, scope) {
  let value,
    id,
    storedMultiplier = 0,
    currentMultiplier = 0,
    currentScopeIndex = 0;
  for (; currentWalkIndex < walkCodes.length; )
    if (
      ((value = walkCodes.charCodeAt(currentWalkIndex++)),
      (currentMultiplier = storedMultiplier),
      (storedMultiplier = 0),
      32 === value)
    ) {
      let node = walker.currentNode;
      ((scope[(id = decodeAccessor(currentScopeIndex++))] = node),
        (scope["J" + id] = () => node));
    } else if (37 === value || 49 === value)
      (walker.currentNode.replaceWith(
        (walker.currentNode = scope[decodeAccessor(currentScopeIndex++)] =
          new Text()),
      ),
        49 === value &&
          (scope[decodeAccessor(currentScopeIndex++)] = skipScope()));
    else {
      if (38 === value) return currentWalkIndex;
      if (47 === value || 48 === value)
        ((currentWalkIndex = walkInternal(
          currentWalkIndex,
          walkCodes,
          (scope[decodeAccessor(currentScopeIndex++)] = createScope(
            scope.$,
            scope.F,
          )),
        )),
          48 === value &&
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
      } else storedMultiplier = 10 * currentMultiplier + value - 117;
    }
}
var branchesEnabled,
  isResuming,
  registeredValues = {};
function enableBranches() {
  branchesEnabled = 1;
}
function init(runtimeId = "M") {
  let resumeRender,
    renders = self[runtimeId],
    defineRuntime = (desc) => Object.defineProperty(self, runtimeId, desc),
    initRuntime = (renders2) => {
      defineRuntime({
        value: (resumeRender = (renderId) => {
          let $global,
            lastEffect,
            visits,
            resumes,
            visit,
            visitText,
            visitType,
            visitScope,
            lastToken,
            lastTokenIndex,
            render = (resumeRender[renderId] =
              renders2[renderId] || renders2(renderId)),
            walk2 = render.w,
            scopeLookup = (render.s = {}),
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
                  childBranch,
                  endedBranches,
                  accessor,
                  singleNode,
                  parent = visit.parentNode,
                  startVisit = visit,
                  i = orphanBranches.length,
                ) => {
                  for (
                    "[" !== visitType &&
                    ((visitScope["J" + nextToken()] = (
                      (node) => () =>
                        node
                    )(
                      (visitScope[lastToken] =
                        ")" === visitType || "}" === visitType
                          ? parent
                          : visit),
                    )),
                    (accessor = "A" + lastToken),
                    (singleNode = "]" !== visitType && ")" !== visitType),
                    nextToken());
                    (branchId = +lastToken);

                  ) {
                    if (
                      ((endedBranches ||= []).push(
                        (branch = scopeLookup[branchId] ||= { L: branchId }),
                      ),
                      (branch.F = branch),
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
                        "'" === visitType && (branch.a = startVisit));
                    } else
                      ((curBranchScopes = push(curBranchScopes, branch)),
                        accessor &&
                          ((visitScope[accessor] = curBranchScopes),
                          (curBranchScopes = branchScopesStack.pop())),
                        parent !==
                          (startVisit = branchStarts.pop()).parentNode &&
                          parent.prepend(startVisit),
                        (branch.S = startVisit),
                        (branch.K =
                          visit.previousSibling === startVisit
                            ? startVisit
                            : parent.insertBefore(new Text(), visit)));
                    for (; i && orphanBranches[--i].L > branchId; )
                      (((childBranch = orphanBranches.pop()).N = branch),
                        (branch.D ||= new Set()).add(childBranch));
                    nextToken();
                  }
                  (endedBranches &&
                    (orphanBranches.push(...endedBranches),
                    singleNode &&
                      (visitScope[accessor] =
                        endedBranches.length > 1
                          ? endedBranches.reverse()
                          : endedBranches[0])),
                    "[" === visitType &&
                      (endedBranches ||
                        (branchScopesStack.push(curBranchScopes),
                        (curBranchScopes = void 0)),
                      branchStarts.push(visit)));
                }
              )(),
            lastScopeId = 0,
            nextToken = () =>
              (lastToken = visitText.slice(
                lastTokenIndex,
                (lastTokenIndex = visitText.indexOf(" ", lastTokenIndex) + 1)
                  ? lastTokenIndex - 1
                  : visitText.length,
              ));
          return (
            (render.w = () => {
              try {
                (walk2(), (isResuming = 1));
                for (let serialized of (resumes = render.r || []))
                  if ("string" == typeof serialized) lastEffect = serialized;
                  else if ("number" == typeof serialized)
                    queueEffect(
                      (scopeLookup[serialized] ||= { L: serialized }),
                      registeredValues[lastEffect],
                    );
                  else
                    for (let scope of serialized(serializeContext))
                      $global
                        ? "number" == typeof scope
                          ? (lastScopeId += scope)
                          : ((scopeLookup[(scope.L = ++lastScopeId)] = scope),
                            (scope.$ = $global),
                            branchesEnabled && (scope.F = scopeLookup[scope.G]))
                        : (($global = scope || {}),
                          ($global.runtimeId = runtimeId),
                          ($global.renderId = renderId));
                for (visit of (visits = render.v))
                  ((lastTokenIndex = render.i.length),
                    (visitText = visit.data),
                    (visitType = visitText[lastTokenIndex++]),
                    (visitScope = scopeLookup[+nextToken()] ||=
                      { L: +lastToken }),
                    "*" === visitType
                      ? (visitScope["J" + nextToken()] = (
                          (node) => () =>
                            node
                        )((visitScope[lastToken] = visit.previousSibling)))
                      : branchesEnabled && visitBranches());
                run();
              } finally {
                isResuming = visits.length = resumes.length = 0;
              }
            }),
            render
          );
        }),
      });
    };
  if (renders) {
    initRuntime(renders);
    for (let renderId in renders) resumeRender(renderId).w();
  } else defineRuntime({ configurable: !0, set: initRuntime });
}
function _resume(id, obj) {
  return (registeredValues[id] = obj);
}
function _var_resume(id, signal) {
  return (_resume(id, (scope) => (value) => signal(scope, value)), signal);
}
function _el(id, accessor) {
  let getterAccessor = "J" + decodeAccessor(accessor);
  return _resume(id, (scope) => () => scope[getterAccessor]());
}
function _attr_input_checked(scope, nodeAccessor, checked, checkedChange) {
  setCheckboxValue(
    scope,
    nodeAccessor,
    0,
    normalizeBoolProp(checked),
    checkedChange,
  );
}
function _attr_input_checked_script(scope, nodeAccessor) {
  let el = scope[nodeAccessor];
  syncControllable(el, "input", hasCheckboxChanged, () => {
    let checkedChange = scope["E" + nodeAccessor];
    if (checkedChange) {
      let newValue = el.checked;
      ((el.checked = !newValue), checkedChange(newValue), run());
    }
  });
}
function _attr_input_checkedValue(
  scope,
  nodeAccessor,
  checkedValue,
  checkedValueChange,
  value,
) {
  ((scope["G" + nodeAccessor] = checkedValue),
    _attr(scope[nodeAccessor], "value", value),
    setCheckboxValue(
      scope,
      nodeAccessor,
      1,
      Array.isArray(checkedValue)
        ? checkedValue.includes(value)
        : checkedValue === value,
      checkedValueChange,
    ));
}
function _attr_input_checkedValue_script(scope, nodeAccessor) {
  let el = scope[nodeAccessor];
  syncControllable(el, "input", hasCheckboxChanged, () => {
    let checkedValueChange = scope["E" + nodeAccessor];
    if (checkedValueChange) {
      let oldValue = scope["G" + nodeAccessor],
        newValue = Array.isArray(oldValue)
          ? (function (arr, val, push2) {
              let index = arr.indexOf(val);
              return (
                (push2
                  ? !~index && [...arr, val]
                  : ~index &&
                    arr.slice(0, index).concat(arr.slice(index + 1))) || arr
              );
            })(oldValue, el.value, el.checked)
          : el.checked
            ? el.value
            : void 0;
      if (el.name && "r" === el.type[0])
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
  });
}
function _attr_input_value(scope, nodeAccessor, value, valueChange) {
  let el = scope[nodeAccessor],
    normalizedValue = normalizeStrProp(value);
  ((scope["E" + nodeAccessor] = valueChange),
    valueChange
      ? ((scope["F" + nodeAccessor] = 0),
        (scope["G" + nodeAccessor] = value),
        el.isConnected
          ? setValueAndUpdateSelection(el, normalizedValue)
          : (el.defaultValue = normalizedValue))
      : ((scope["F" + nodeAccessor] = 5), (el.defaultValue = normalizedValue)));
}
function _attr_input_value_script(scope, nodeAccessor) {
  let el = scope[nodeAccessor];
  (isResuming && (scope["G" + nodeAccessor] = el.defaultValue),
    syncControllable(el, "input", hasValueChanged, (ev) => {
      let valueChange = scope["E" + nodeAccessor];
      valueChange &&
        ((inputType = ev?.inputType),
        valueChange(el.value),
        run(),
        setValueAndUpdateSelection(el, scope["G" + nodeAccessor]),
        (inputType = ""));
    }));
}
function _attr_select_value(scope, nodeAccessor, value, valueChange) {
  ((scope["E" + nodeAccessor] = valueChange),
    valueChange
      ? ((scope["F" + nodeAccessor] = 3), (scope["G" + nodeAccessor] = value))
      : (scope["F" + nodeAccessor] = 5),
    pendingEffects.unshift(
      () => setSelectOptions(scope[nodeAccessor], value, valueChange),
      scope,
    ));
}
function _attr_select_value_script(scope, nodeAccessor) {
  let el = scope[nodeAccessor],
    onChange = () => {
      let valueChange = scope["E" + nodeAccessor];
      if (valueChange) {
        let newValue = Array.isArray(scope["G" + nodeAccessor])
          ? Array.from(el.selectedOptions, toValueProp)
          : el.value;
        (setSelectOptions(el, scope["G" + nodeAccessor], valueChange),
          valueChange(newValue),
          run());
      }
    };
  (el._ ||
    new MutationObserver(() => {
      let value = scope["G" + nodeAccessor];
      (Array.isArray(value)
        ? value.length !== el.selectedOptions.length ||
          value.some((value2, i) => value2 != el.selectedOptions[i].value)
        : el.value != value) && onChange();
    }).observe(el, { childList: !0, subtree: !0 }),
    syncControllable(el, "input", hasSelectChanged, onChange));
}
function setSelectOptions(el, value, valueChange) {
  if (Array.isArray(value))
    for (let opt of el.options) {
      let selected = value.includes(opt.value);
      valueChange
        ? (opt.selected = selected)
        : (opt.defaultSelected = selected);
    }
  else {
    let normalizedValue = normalizeStrProp(value);
    if (valueChange) el.value = normalizedValue;
    else
      for (let opt of el.options)
        opt.defaultSelected = opt.value === normalizedValue;
  }
}
function _attr_details_or_dialog_open(scope, nodeAccessor, open, openChange) {
  ((scope["E" + nodeAccessor] = openChange),
    (scope["F" + nodeAccessor] = openChange ? 4 : 5),
    (scope[nodeAccessor].open = scope["G" + nodeAccessor] =
      normalizeBoolProp(open)));
}
function _attr_details_or_dialog_open_script(scope, nodeAccessor) {
  let el = scope[nodeAccessor],
    hasChanged = () => el.open !== scope["G" + nodeAccessor];
  syncControllable(
    el,
    "DIALOG" === el.tagName ? "close" : "toggle",
    hasChanged,
    () => {
      let openChange = scope["E" + nodeAccessor];
      if (openChange && hasChanged()) {
        let newValue = el.open;
        ((el.open = !newValue), openChange(newValue), run());
      }
    },
  );
}
var inputType = "";
function setValueAndUpdateSelection(el, value) {
  if (el.value !== value) {
    let updatedPosition = (function (
      inputType2,
      initialPosition,
      initialValue,
      updatedValue,
    ) {
      if (
        (initialPosition || 0 === initialPosition) &&
        (initialPosition !== initialValue.length || /kw/.test(inputType2))
      ) {
        let before = initialValue.slice(0, initialPosition),
          after = initialValue.slice(initialPosition);
        if (updatedValue.startsWith(before)) return initialPosition;
        if (updatedValue.endsWith(after))
          return updatedValue.length - after.length;
        {
          let relevantChars = stripSpacesAndPunctuation(before).length,
            pos = 0,
            relevantIndex = 0;
          for (; relevantIndex < relevantChars; )
            (stripSpacesAndPunctuation(updatedValue[pos]) && relevantIndex++,
              pos++);
          return pos;
        }
      }
      return -1;
    })(
      inputType,
      el.getRootNode().activeElement === el && el.selectionStart,
      el.value,
      (el.value = value),
    );
    ~updatedPosition && el.setSelectionRange(updatedPosition, updatedPosition);
  }
}
function setCheckboxValue(scope, nodeAccessor, type, checked, checkedChange) {
  ((scope["E" + nodeAccessor] = checkedChange),
    checkedChange
      ? ((scope["F" + nodeAccessor] = type),
        (scope[nodeAccessor].checked = checked))
      : ((scope["F" + nodeAccessor] = 5),
        (scope[nodeAccessor].defaultChecked = checked)));
}
var controllableDelegate = createDelegator();
function syncControllable(el, event, hasChanged, onChange) {
  (el._ ||
    (controllableDelegate(el, event, handleChange),
    el.form && controllableDelegate(el.form, "reset", handleFormReset),
    isResuming && hasChanged(el) && queueMicrotask(onChange)),
    (el._ = onChange));
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
  return null != value && !1 !== value;
}
function toValueProp(it) {
  return it.value;
}
var isScheduled,
  channel,
  parsers = {};
function parseHTML(html, ns) {
  let parser = (parsers[ns] ||= document.createElementNS(ns, "template"));
  return ((parser.innerHTML = html), parser.content || parser);
}
function schedule() {
  isScheduled || ((isScheduled = 1), queueMicrotask(flushAndWaitFrame));
}
function flushAndWaitFrame() {
  (run(), requestAnimationFrame(triggerMacroTask));
}
function triggerMacroTask() {
  (channel ||
    ((channel = new MessageChannel()).port1.onmessage = () => {
      ((isScheduled = 0), run());
    }),
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
  return (scope) => {
    scope.H
      ? id in scope
        ? --scope[id] || fn(scope)
        : (scope[id] = defaultPending)
      : queueRender(scope, fn, id, 0, scope[scopeIdAccessor]);
  };
}
function _for_closure(ownerLoopNodeAccessor, fn) {
  let scopeAccessor =
      "A" + (ownerLoopNodeAccessor = decodeAccessor(ownerLoopNodeAccessor)),
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
  let scopeAccessor =
      "A" +
      (ownerConditionalNodeAccessor = decodeAccessor(
        ownerConditionalNodeAccessor,
      )),
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
  let subscribers = (ownerScope[accessor] ||= new Set());
  subscribers.has(scope) ||
    (subscribers.add(scope),
    $signal(scope, -1).addEventListener("abort", () =>
      ownerScope[accessor].delete(scope),
    ));
}
function _closure(...closureSignals) {
  let [{ j: ___scopeInstancesAccessor, k: ___signalIndexAccessor }] =
    closureSignals;
  for (let i = closureSignals.length; i--; ) closureSignals[i].n = i;
  return (scope) => {
    if (scope[___scopeInstancesAccessor])
      for (let childScope of scope[___scopeInstancesAccessor])
        childScope.H ||
          queueRender(
            childScope,
            closureSignals[childScope[___signalIndexAccessor]],
            -1,
          );
  };
}
function _closure_get(valueAccessor, fn, getOwnerScope) {
  valueAccessor = decodeAccessor(valueAccessor);
  let closureSignal = (scope) => {
    ((scope[closureSignal.k] = closureSignal.n),
      fn(scope),
      subscribeToScopeSet(
        getOwnerScope ? getOwnerScope(scope) : scope._,
        closureSignal.j,
        scope,
      ));
  };
  return (
    (closureSignal.j = "B" + valueAccessor),
    (closureSignal.k = "C" + valueAccessor),
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
var _return = (scope, value) => scope.T?.(value);
function _return_change(scope, changeHandler) {
  changeHandler && (scope.U = changeHandler);
}
var _var_change = (scope, value) => scope.U?.(value),
  tagIdsByGlobal = new WeakMap();
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
function* traverseAllHoisted(scope, path, curIndex = path.length - 1) {
  if (scope)
    if (Symbol.iterator in scope)
      for (let s of scope instanceof Map ? scope.values() : scope)
        yield* traverseAllHoisted(s, path, curIndex);
    else
      curIndex
        ? yield* traverseAllHoisted(scope[path[curIndex]], path, curIndex - 1)
        : yield scope[path[0]];
}
function _hoist(...path) {
  return (
    (path = path.map((p) => ("string" == typeof p ? p : decodeAccessor(p)))),
    (scope) => {
      let getOne = (...args) =>
          iterator()
            .next()
            .value?.(...args),
        iterator = (getOne[Symbol.iterator] = () =>
          traverseAllHoisted(scope, path));
      return getOne;
    }
  );
}
function createBranch($global, renderer, parentScope, parentNode) {
  let branch = createScope($global),
    parentBranch = parentScope?.F;
  return (
    (branch._ = renderer.c || parentScope),
    (branch.F = branch),
    parentBranch &&
      ((branch.N = parentBranch), (parentBranch.D ||= new Set()).add(branch)),
    renderer.f?.(branch, parentNode.namespaceURI),
    branch
  );
}
function createAndSetupBranch($global, renderer, parentScope, parentNode) {
  return setupBranch(
    renderer,
    createBranch($global, renderer, parentScope, parentNode),
  );
}
function setupBranch(renderer, branch) {
  return (renderer.g && queueRender(branch, renderer.g, -1), branch);
}
function _content(id, template, walks, setup, params, dynamicScopesAccessor) {
  ((walks = walks ? walks.replace(/[^\0-1]+$/, "") : ""),
    (setup = setup ? setup._ || setup : void 0),
    (params ||= void 0));
  let clone = template
    ? (branch, ns) => {
        ((cloneCache[ns] ||= {})[template] ||= (function (html, ns) {
          let { firstChild: firstChild, lastChild: lastChild } = parseHTML(
              html,
              ns,
            ),
            parent = document.createElementNS(ns, "t");
          return (
            insertChildNodes(parent, null, firstChild, lastChild),
            firstChild === lastChild && firstChild.nodeType < 8
              ? (branch, walks) => {
                  walk(
                    (branch.S = branch.K = firstChild.cloneNode(!0)),
                    walks,
                    branch,
                  );
                }
              : (branch, walks) => {
                  let clone = parent.cloneNode(!0);
                  (walk(clone.firstChild, walks, branch),
                    (branch.S = clone.firstChild),
                    (branch.K = clone.lastChild));
                }
          );
        })(template, ns))(branch, walks);
      }
    : (branch) => {
        walk((branch.S = branch.K = new Text()), walks, branch);
      };
  return (owner) => ({
    e: id,
    f: clone,
    c: owner,
    g: setup,
    a: params,
    b: dynamicScopesAccessor,
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
      (instance.l = closureSignals),
      (instance.o = closureValues),
      instance
    );
  };
}
var cloneCache = {};
function _attr(element, name, value) {
  setAttribute(element, name, normalizeAttrValue(value));
}
function setAttribute(element, name, value) {
  element.getAttribute(name) != value &&
    (void 0 === value
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
  element.style.setProperty(name, value || 0 === value ? value + "" : "");
}
function _text(node, value) {
  let normalizedValue = normalizeString(value);
  node.data !== normalizedValue && (node.data = normalizedValue);
}
function _text_content(node, value) {
  let normalizedValue = normalizeString(value);
  node.textContent !== normalizedValue && (node.textContent = normalizedValue);
}
function _attrs(scope, nodeAccessor, nextAttrs) {
  let el = scope[nodeAccessor];
  for (let i = el.attributes.length; i--; ) {
    let { name: name } = el.attributes.item(i);
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
    "checked" === attr &&
    "INPUT" === element.tagName &&
    "checkedValue" in nextAttrs
  );
}
function _attrs_partial(scope, nodeAccessor, nextAttrs, skip) {
  let el = scope[nodeAccessor],
    partial = {};
  for (let i = el.attributes.length; i--; ) {
    let { name: name } = el.attributes.item(i);
    !skip[name] &&
      (!nextAttrs || !(name in nextAttrs)) &&
      el.removeAttribute(name);
  }
  for (let key in nextAttrs) skip[key] || (partial[key] = nextAttrs[key]);
  attrsInternal(scope, nodeAccessor, partial);
}
function _attrs_partial_content(scope, nodeAccessor, nextAttrs, skip) {
  (_attrs_partial(scope, nodeAccessor, nextAttrs, skip),
    _attr_content(scope, nodeAccessor, nextAttrs?.content));
}
function attrsInternal(scope, nodeAccessor, nextAttrs) {
  let events,
    skip,
    el = scope[nodeAccessor];
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
      else {
        if (!("value" in nextAttrs) && !("valueChange" in nextAttrs)) break;
        _attr_input_value(
          scope,
          nodeAccessor,
          nextAttrs.value,
          nextAttrs.valueChange,
        );
      }
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
            ("content" === name && "META" !== el.tagName) ||
            _attr(el, name, value);
    }
  }
}
function _attr_content(scope, nodeAccessor, value) {
  let content = (function (value) {
      let renderer = normalizeDynamicRenderer(value);
      if (renderer && renderer.e) return renderer;
    })(value),
    rendererAccessor = "D" + nodeAccessor;
  scope[rendererAccessor] !== (scope[rendererAccessor] = content?.e) &&
    (setConditionalRenderer(scope, nodeAccessor, content, createAndSetupBranch),
    content?.b &&
      subscribeToScopeSet(content.c, content.b, scope["A" + nodeAccessor]));
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
  }
  for (let name in events) _on(el, name, events[name]);
}
function _html(scope, value, accessor) {
  let firstChild = scope[accessor],
    parentNode = firstChild.parentNode,
    lastChild = scope["H" + accessor] || firstChild,
    newContent = parseHTML(
      value || 0 === value ? value + "" : "",
      parentNode.namespaceURI,
    );
  (insertChildNodes(
    parentNode,
    firstChild,
    (scope[accessor] =
      newContent.firstChild || newContent.appendChild(new Text())),
    (scope["H" + accessor] = newContent.lastChild),
  ),
    removeChildNodes(firstChild, lastChild));
}
function normalizeAttrValue(value) {
  if (value || 0 === value) return !0 === value ? "" : value + "";
}
function normalizeString(value) {
  return value || 0 === value ? value + "" : "‍";
}
function _lifecycle(scope, index, thisObj) {
  let instance = scope[index];
  instance
    ? (Object.assign(instance, thisObj), instance.onUpdate?.())
    : ((scope[index] = thisObj),
      thisObj.onMount?.(),
      ($signal(scope, "K" + index).onabort = () => thisObj.onDestroy?.()));
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
function _await(nodeAccessor, template, walks, setup, params) {
  let promiseAccessor = "L" + (nodeAccessor = decodeAccessor(nodeAccessor)),
    branchAccessor = "A" + nodeAccessor,
    renderer = _content("", template, walks, setup)();
  return (
    enableBranches(),
    (scope, promise) => {
      let referenceNode = scope[nodeAccessor],
        tryWithPlaceholder = findBranchWithKey(scope, "Q"),
        awaitBranch = scope[branchAccessor];
      tryWithPlaceholder
        ? (placeholderShown.add(pendingEffects),
          !scope[promiseAccessor] &&
            1 === (tryWithPlaceholder.O = (tryWithPlaceholder.O || 0) + 1) &&
            requestAnimationFrame(
              () =>
                tryWithPlaceholder.O &&
                runEffects(
                  prepareEffects(() =>
                    queueRender(
                      tryWithPlaceholder,
                      () => {
                        (insertBranchBefore(
                          (tryWithPlaceholder.P = createAndSetupBranch(
                            scope.$,
                            tryWithPlaceholder.Q,
                            tryWithPlaceholder._,
                            tryWithPlaceholder.S.parentNode,
                          )),
                          tryWithPlaceholder.S.parentNode,
                          tryWithPlaceholder.S,
                        ),
                          tempDetachBranch(tryWithPlaceholder));
                      },
                      -1,
                    ),
                  ),
                ),
            ))
        : awaitBranch &&
          !scope[promiseAccessor] &&
          (awaitBranch.S.parentNode.insertBefore(referenceNode, awaitBranch.S),
          tempDetachBranch(awaitBranch));
      let thisPromise = (scope[promiseAccessor] = promise.then(
        (data) => {
          thisPromise === scope[promiseAccessor] &&
            ((scope[promiseAccessor] = 0),
            schedule(),
            queueRender(
              scope,
              () => {
                if (
                  (awaitBranch
                    ? tryWithPlaceholder ||
                      referenceNode.replaceWith(awaitBranch.S.parentNode)
                    : (insertBranchBefore(
                        (awaitBranch = scope[branchAccessor] =
                          createAndSetupBranch(
                            scope.$,
                            renderer,
                            scope,
                            referenceNode.parentNode,
                          )),
                        referenceNode.parentNode,
                        referenceNode,
                      ),
                      referenceNode.remove()),
                  params?.(awaitBranch, [data]),
                  tryWithPlaceholder &&
                    (placeholderShown.add(pendingEffects),
                    !--tryWithPlaceholder.O))
                ) {
                  let placeholderBranch = tryWithPlaceholder.P;
                  ((tryWithPlaceholder.P = 0),
                    placeholderBranch &&
                      (placeholderBranch.S.parentNode.insertBefore(
                        tryWithPlaceholder.S.parentNode,
                        placeholderBranch.S,
                      ),
                      removeAndDestroyBranch(placeholderBranch)),
                    queueEffect(tryWithPlaceholder, (scope2) => {
                      let pendingEffects2 = scope2.J;
                      pendingEffects2 &&
                        ((scope2.J = []), runEffects(pendingEffects2, !0));
                    }));
                }
              },
              -1,
            ));
        },
        (error) => {
          thisPromise === scope[promiseAccessor] &&
            (tryWithPlaceholder && (tryWithPlaceholder.O = 0),
            (scope[promiseAccessor] = 0),
            schedule(),
            queueRender(scope, renderCatch, -1, error));
        },
      ));
    }
  );
}
function _try(nodeAccessor, template, walks, setup) {
  let branchAccessor = "A" + (nodeAccessor = decodeAccessor(nodeAccessor)),
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
      (branch.E = normalizeDynamicRenderer(input.catch)),
      (branch.Q = normalizeDynamicRenderer(input.placeholder)));
  };
}
function renderCatch(scope, error) {
  let tryWithCatch = findBranchWithKey(scope, "E");
  if (!tryWithCatch) throw error;
  {
    let owner = tryWithCatch._,
      placeholderBranch = tryWithCatch.P;
    (placeholderBranch &&
      ((tryWithCatch.O = 0),
      (owner["A" + tryWithCatch.C] = placeholderBranch),
      destroyBranch(tryWithCatch)),
      caughtError.add(pendingEffects),
      setConditionalRenderer(
        owner,
        tryWithCatch.C,
        tryWithCatch.E,
        createAndSetupBranch,
      ),
      tryWithCatch.E.a?.(owner["A" + tryWithCatch.C], [error]));
  }
}
function _if(nodeAccessor, ...branchesArgs) {
  let branchAccessor = "D" + (nodeAccessor = decodeAccessor(nodeAccessor)),
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
var _dynamic_tag = function (nodeAccessor, getContent, getTagVar, inputIsArgs) {
  let childScopeAccessor = "A" + (nodeAccessor = decodeAccessor(nodeAccessor)),
    rendererAccessor = "D" + nodeAccessor;
  return (
    enableBranches(),
    (scope, newRenderer, getInput) => {
      let normalizedRenderer = normalizeDynamicRenderer(newRenderer);
      if (
        scope[rendererAccessor] !==
          (scope[rendererAccessor] =
            normalizedRenderer?.e || normalizedRenderer) ||
        (getContent && !normalizedRenderer && !scope[childScopeAccessor])
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
          "string" == typeof normalizedRenderer)
        ) {
          if (getContent) {
            let content = getContent(scope);
            (setConditionalRenderer(
              scope[childScopeAccessor],
              "a",
              content,
              createAndSetupBranch,
            ),
              content.b &&
                subscribeToScopeSet(
                  content.c,
                  content.b,
                  scope[childScopeAccessor].Aa,
                ));
          }
        } else
          normalizedRenderer?.b &&
            subscribeToScopeSet(
              normalizedRenderer.c,
              normalizedRenderer.b,
              scope[childScopeAccessor],
            );
      if (normalizedRenderer) {
        let childScope = scope[childScopeAccessor],
          args = getInput?.();
        if ("string" == typeof normalizedRenderer)
          ((getContent ? _attrs : _attrs_content)(
            childScope,
            "a",
            (inputIsArgs ? args[0] : args) || {},
          ),
            (childScope.Ia || childScope.Ea) &&
              queueEffect(childScope, dynamicTagScript));
        else {
          for (let accessor in normalizedRenderer.l)
            normalizedRenderer.l[accessor](
              childScope,
              normalizedRenderer.o[accessor],
            );
          if (normalizedRenderer.a)
            if (inputIsArgs)
              normalizedRenderer.a(
                childScope,
                normalizedRenderer._ ? args[0] : args,
              );
            else {
              let inputWithContent = getContent
                ? { ...args, content: getContent(scope) }
                : args || {};
              normalizedRenderer.a(
                childScope,
                normalizedRenderer._ ? inputWithContent : [inputWithContent],
              );
            }
        }
      }
    }
  );
};
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
  createBranch2,
) {
  let referenceNode = scope[nodeAccessor],
    prevBranch = scope["A" + nodeAccessor],
    parentNode =
      referenceNode.nodeType > 1
        ? (prevBranch?.S || referenceNode).parentNode
        : referenceNode,
    newBranch = (scope["A" + nodeAccessor] =
      newRenderer && createBranch2(scope.$, newRenderer, scope, parentNode));
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
var _for_of = loop(([all, by = bySecondArg], cb) => {
    forOf(
      all,
      "string" == typeof by
        ? (item, i) => cb(item[by], [item, i])
        : (item, i) => cb(by(item, i), [item, i]),
    );
  }),
  _for_in = loop(([obj, by = byFirstArg], cb) =>
    forIn(obj, (key, value) => cb(by(key, value), [key, value])),
  ),
  _for_to = loop(([to, from, step, by = byFirstArg], cb) =>
    forTo(to, from, step, (v) => cb(by(v), [v])),
  ),
  _for_until = loop(([until, from, step, by = byFirstArg], cb) =>
    forUntil(until, from, step, (v) => cb(by(v), [v])),
  );
function loop(forEach) {
  return (nodeAccessor, template, walks, setup, params) => {
    let scopesAccessor = "A" + (nodeAccessor = decodeAccessor(nodeAccessor)),
      scopesByKeyAccessor = "A" + scopesAccessor,
      renderer = _content("", template, walks, setup)();
    return (
      enableBranches(),
      (scope, value) => {
        let referenceNode = scope[nodeAccessor],
          oldScopes = toArray(scope[scopesAccessor]),
          oldScopesByKey =
            scope[scopesByKeyAccessor] ||
            oldScopes.reduce(
              (map, scope2, i) => map.set(scope2.M ?? i, scope2),
              new Map(),
            ),
          newScopes = (scope[scopesAccessor] = []),
          newScopesByKey = (scope[scopesByKeyAccessor] = new Map()),
          parentNode =
            referenceNode.nodeType > 1
              ? referenceNode.parentNode || oldScopes[0]?.S.parentNode
              : referenceNode;
        forEach(value, (key, args) => {
          let branch =
            oldScopesByKey.get(key) ||
            createAndSetupBranch(scope.$, renderer, scope, parentNode);
          (params?.(branch, args),
            newScopesByKey.set(key, branch),
            newScopes.push(branch));
        });
        let afterReference = null;
        (referenceNode !== parentNode &&
          (oldScopes.length
            ? ((afterReference = oldScopes[oldScopes.length - 1].K.nextSibling),
              newScopes.length ||
                parentNode.insertBefore(referenceNode, afterReference))
            : newScopes.length &&
              ((afterReference = referenceNode.nextSibling),
              referenceNode.remove())),
          (function (parent, oldBranches, newBranches, afterReference) {
            let i,
              j,
              k,
              nextSibling,
              oldBranch,
              newBranch,
              oldStart = 0,
              newStart = 0,
              oldEnd = oldBranches.length - 1,
              newEnd = newBranches.length - 1,
              oldStartBranch = oldBranches[oldStart],
              newStartBranch = newBranches[newStart],
              oldEndBranch = oldBranches[oldEnd],
              newEndBranch = newBranches[newEnd];
            outer: {
              for (; oldStartBranch === newStartBranch; ) {
                if (
                  (++oldStart,
                  ++newStart,
                  oldStart > oldEnd || newStart > newEnd)
                )
                  break outer;
                ((oldStartBranch = oldBranches[oldStart]),
                  (newStartBranch = newBranches[newStart]));
              }
              for (; oldEndBranch === newEndBranch; ) {
                if (
                  (--oldEnd, --newEnd, oldStart > oldEnd || newStart > newEnd)
                )
                  break outer;
                ((oldEndBranch = oldBranches[oldEnd]),
                  (newEndBranch = newBranches[newEnd]));
              }
            }
            if (oldStart > oldEnd) {
              if (newStart <= newEnd) {
                ((k = newEnd + 1),
                  (nextSibling =
                    k < newBranches.length
                      ? newBranches[k].S
                      : afterReference));
                do {
                  insertBranchBefore(
                    newBranches[newStart++],
                    parent,
                    nextSibling,
                  );
                } while (newStart <= newEnd);
              }
            } else if (newStart > newEnd)
              do {
                removeAndDestroyBranch(oldBranches[oldStart++]);
              } while (oldStart <= oldEnd);
            else {
              let oldLength = oldEnd - oldStart + 1,
                newLength = newEnd - newStart + 1,
                aNullable = oldBranches,
                sources = new Array(newLength);
              for (i = 0; i < newLength; ++i) sources[i] = -1;
              let pos = 0,
                synced = 0,
                keyIndex = new Map();
              for (j = newStart; j <= newEnd; ++j)
                keyIndex.set(newBranches[j], j);
              for (i = oldStart; i <= oldEnd && synced < newLength; ++i)
                ((oldBranch = oldBranches[i]),
                  (j = keyIndex.get(oldBranch)),
                  void 0 !== j &&
                    ((pos = pos > j ? 2147483647 : j),
                    ++synced,
                    (newBranch = newBranches[j]),
                    (sources[j - newStart] = i),
                    (aNullable[i] = null)));
              if (oldLength === oldBranches.length && 0 === synced) {
                for (; newStart < newLength; ++newStart)
                  insertBranchBefore(
                    newBranches[newStart],
                    parent,
                    afterReference,
                  );
                for (; oldStart < oldLength; ++oldStart)
                  removeAndDestroyBranch(oldBranches[oldStart]);
              } else {
                for (i = oldLength - synced; i > 0; )
                  ((oldBranch = aNullable[oldStart++]),
                    null !== oldBranch &&
                      (removeAndDestroyBranch(oldBranch), i--));
                if (2147483647 === pos) {
                  let seq = (function (a) {
                    let u,
                      v,
                      p = a.slice(),
                      result = [0];
                    for (let i = 0, il = a.length; i < il; ++i) {
                      if (-1 === a[i]) continue;
                      let j = result[result.length - 1];
                      if (a[j] < a[i]) ((p[i] = j), result.push(i));
                      else {
                        for (u = 0, v = result.length - 1; u < v; ) {
                          let c = ((u + v) / 2) | 0;
                          a[result[c]] < a[i] ? (u = c + 1) : (v = c);
                        }
                        a[i] < a[result[u]] &&
                          (u > 0 && (p[i] = result[u - 1]), (result[u] = i));
                      }
                    }
                    for (u = result.length, v = result[u - 1]; u-- > 0; )
                      ((result[u] = v), (v = p[v]));
                    return result;
                  })(sources);
                  for (
                    j = seq.length - 1,
                      k = newBranches.length,
                      i = newLength - 1;
                    i >= 0;
                    --i
                  )
                    -1 === sources[i] || j < 0 || i !== seq[j]
                      ? ((pos = i + newStart),
                        (newBranch = newBranches[pos++]),
                        (nextSibling =
                          pos < k ? newBranches[pos].S : afterReference),
                        insertBranchBefore(newBranch, parent, nextSibling))
                      : --j;
                } else if (synced !== newLength)
                  for (k = newBranches.length, i = newLength - 1; i >= 0; --i)
                    -1 === sources[i] &&
                      ((pos = i + newStart),
                      (newBranch = newBranches[pos++]),
                      (nextSibling =
                        pos < k ? newBranches[pos].S : afterReference),
                      insertBranchBefore(newBranch, parent, nextSibling));
              }
            }
          })(parentNode, oldScopes, newScopes, afterReference));
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
    "string" == typeof tagNameOrRenderer
      ? (branch.a =
          branch.S =
          branch.K =
            document.createElementNS(
              "svg" === tagNameOrRenderer
                ? "http://www.w3.org/2000/svg"
                : "math" === tagNameOrRenderer
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
var rendering,
  pendingRenders = [],
  pendingRendersLookup = new Map(),
  caughtError = new WeakSet(),
  placeholderShown = new WeakSet(),
  pendingEffects = [],
  pendingScopes = [],
  scopeKeyOffset = 1e3;
function queueRender(scope, signal, signalKey, value, scopeKey = scope.L) {
  let key = scopeKey * scopeKeyOffset + signalKey,
    existingRender = signalKey >= 0 && pendingRendersLookup.get(key);
  if (existingRender) existingRender.m = value;
  else {
    let render = { d: key, h: scope, p: signal, m: value },
      i = pendingRenders.push(render) - 1;
    for (; i; ) {
      let parentIndex = (i - 1) >> 1,
        parent = pendingRenders[parentIndex];
      if (key - parent.d >= 0) break;
      ((pendingRenders[i] = parent), (i = parentIndex));
    }
    (signalKey >= 0 && pendingRendersLookup.set(key, render),
      (pendingRenders[i] = render));
  }
}
function queueEffect(scope, fn) {
  pendingEffects.push(fn, scope);
}
function run() {
  let effects = pendingEffects;
  try {
    ((rendering = 1), runRenders());
  } finally {
    ((pendingRenders = []),
      (pendingRendersLookup = new Map()),
      (pendingEffects = []),
      (rendering = 0));
  }
  runEffects(effects);
}
function prepareEffects(fn) {
  let prevRenders = pendingRenders,
    prevRendersLookup = pendingRendersLookup,
    prevEffects = pendingEffects,
    preparedEffects = (pendingEffects = []);
  ((pendingRenders = []), (pendingRendersLookup = new Map()));
  try {
    ((rendering = 1), fn(), runRenders());
  } finally {
    ((rendering = 0),
      (pendingRenders = prevRenders),
      (pendingRendersLookup = prevRendersLookup),
      (pendingEffects = prevEffects));
  }
  return preparedEffects;
}
var runEffects = (effects) => {
  for (let i = 0; i < effects.length; ) effects[i++](effects[i++]);
};
function runRenders() {
  for (; pendingRenders.length; ) {
    let render = pendingRenders[0],
      item = pendingRenders.pop();
    if (render !== item) {
      let i = 0,
        mid = pendingRenders.length >> 1,
        key = (pendingRenders[0] = item).d;
      for (; i < mid; ) {
        let bestChild = 1 + (i << 1),
          right = bestChild + 1;
        if (
          (right < pendingRenders.length &&
            pendingRenders[right].d - pendingRenders[bestChild].d < 0 &&
            (bestChild = right),
          pendingRenders[bestChild].d - key >= 0)
        )
          break;
        ((pendingRenders[i] = pendingRenders[bestChild]), (i = bestChild));
      }
      pendingRenders[i] = item;
    }
    render.h.F?.I || runRender(render);
  }
  for (let scope of pendingScopes) scope.H = 0;
  pendingScopes = [];
}
var runRender = (render) => render.p(render.h, render.m),
  _enable_catch = () => {
    ((_enable_catch = () => {}), enableBranches());
    let handlePendingTry = (fn, scope, branch) => {
      for (; branch; ) {
        if (branch.O) return (branch.J ||= []).push(fn, scope);
        branch = branch.N;
      }
    };
    ((runEffects = (
      (runEffects2) =>
      (effects, checkPending = placeholderShown.has(effects)) => {
        if (checkPending || caughtError.has(effects)) {
          let fn,
            scope,
            branch,
            i = 0;
          for (; i < effects.length; )
            ((fn = effects[i++]),
              (scope = effects[i++]),
              (branch = scope.F),
              !branch?.I &&
                (!checkPending || !handlePendingTry(fn, scope, branch)) &&
                fn(scope));
        } else runEffects2(effects);
      }
    )(runEffects)),
      (runRender = ((runRender2) => (render) => {
        try {
          runRender2(render);
        } catch (error) {
          renderCatch(render.h, error);
        }
      })(runRender)));
  };
function $signalReset(scope, id) {
  let ctrl = scope.A?.[id];
  ctrl && (queueEffect(ctrl, abort), (scope.A[id] = void 0));
}
function $signal(scope, id) {
  return (
    scope.F && (scope.F.B ||= new Set()).add(scope),
    ((scope.A ||= {})[id] ||= new AbortController()).signal
  );
}
function abort(ctrl) {
  ctrl.abort();
}
var classIdToBranch = new Map(),
  compat = {
    patchDynamicTag: function (fn) {
      _dynamic_tag = fn(_dynamic_tag);
    },
    queueEffect: queueEffect,
    init(warp10Noop) {
      (_resume("$C_s", (branch) => {
        classIdToBranch.set(branch.m5c, branch);
      }),
        _resume("$C_b", warp10Noop));
    },
    registerRenderer(fn) {
      _resume("$C_r", fn);
    },
    isRenderer: (renderer) => renderer.f,
    getStartNode: (branch) => branch.S,
    setScopeNodes(branch, startNode, endNode) {
      ((branch.S = startNode), (branch.K = endNode));
    },
    runComponentEffects() {
      this.effects && runEffects(this.effects);
    },
    runComponentDestroy() {
      this.scope && destroyBranch(this.scope);
    },
    resolveRegistered: (value, $global) =>
      Array.isArray(value) && "string" == typeof value[0]
        ? (function (id, scope) {
            let val = registeredValues[id];
            return scope ? val(scope) : val;
          })(
            value[0],
            2 === value.length &&
              self[$global.runtimeId]?.[$global.renderId]?.s[value[1]],
          )
        : value,
    createRenderer(params, clone) {
      let renderer = _content("", 0, 0, 0, params)();
      return (
        (renderer.f = (branch) => {
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
        "object" == typeof args[0] && "renderBody" in args[0])
      ) {
        let input = args[0],
          normalizedInput = (args[0] = {});
        for (let key in input)
          normalizedInput["renderBody" === key ? "content" : key] = input[key];
      }
      if (
        ((component.effects = prepareEffects(() => {
          (branch ||
            ((created = 1),
            (branch = component.scope =
              createAndSetupBranch(
                out.global,
                renderer,
                renderer.c,
                document.body,
              ))),
            renderer.a?.(branch, renderer._ ? args[0] : args));
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
function mount(input = {}, reference, position) {
  let branch,
    parentNode = reference,
    nextSibling = null,
    { $global: $global } = input;
  switch (
    ($global
      ? (({ $global: $global, ...input } = input),
        ($global = { runtimeId: "M", renderId: "_", ...$global }))
      : ($global = { runtimeId: "M", renderId: "_" }),
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
  }
  let curValue,
    args = this.a,
    effects = prepareEffects(() => {
      ((branch = createBranch($global, this, void 0, parentNode)),
        (branch.T = (newValue) => {
          curValue = newValue;
        }),
        this.g?.(branch),
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
