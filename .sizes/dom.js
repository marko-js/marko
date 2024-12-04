// size: 17931 (min) 6479 (brotli)
var empty = [],
  rest = Symbol();
function attrTag(attrs2) {
  return (
    (attrs2[Symbol.iterator] = attrTagIterator), (attrs2[rest] = empty), attrs2
  );
}
function attrTags(first, attrs2) {
  return first
    ? (first[rest] === empty
        ? (first[rest] = [attrs2])
        : first[rest].push(attrs2),
      first)
    : attrTag(attrs2);
}
function* attrTagIterator() {
  yield this, yield* this[rest];
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
var isScheduled,
  port2 = (() => {
    let { port1: port1, port2: port22 } = new MessageChannel();
    return (
      (port1.onmessage = () => {
        (isScheduled = !1), run();
      }),
      port22
    );
  })();
function flushAndWaitFrame() {
  run(), requestAnimationFrame(triggerMacroTask);
}
function triggerMacroTask() {
  port2.postMessage(0);
}
function createScope($global) {
  return { u: 1, $global: $global };
}
var emptyScope = createScope({});
function getEmptyScope(marker) {
  return (emptyScope.a = emptyScope.b = marker), emptyScope;
}
function destroyScope(scope) {
  _destroyScope(scope), scope.d?.h?.delete(scope);
  let closureSignals = scope.x?.c;
  if (closureSignals) for (let signal of closureSignals) signal.j?.(scope);
  return scope;
}
function _destroyScope(scope) {
  scope.h?.forEach(_destroyScope);
  let controllers = scope.l;
  if (controllers) for (let ctrl of controllers.values()) ctrl.abort();
}
function onDestroy(scope) {
  let parentScope = scope.d;
  for (; parentScope && !parentScope.h?.has(scope); )
    (parentScope.h ||= new Set()).add(scope),
      (parentScope = (scope = parentScope).d);
}
function removeAndDestroyScope(scope) {
  destroyScope(scope);
  let current = scope.a,
    stop = scope.b.nextSibling;
  for (; current !== stop; ) {
    let next = current.nextSibling;
    current.remove(), (current = next);
  }
}
function insertBefore(scope, parent, nextSibling) {
  let current = scope.a,
    stop = scope.b.nextSibling;
  for (; current !== stop; ) {
    let next = current.nextSibling;
    parent.insertBefore(current, nextSibling), (current = next);
  }
}
var registeredValues = {},
  Render = class {
    m = [];
    n = {};
    y = { _: registeredValues };
    constructor(renders, runtimeId, renderId) {
      (this.z = renders),
        (this.A = runtimeId),
        (this.o = renderId),
        (this.p = renders[renderId]),
        this.q();
    }
    w() {
      this.p.w(), this.q();
    }
    q() {
      let data2 = this.p,
        serializeContext = this.y,
        scopeLookup = this.n,
        visits = data2.v,
        cleanupOwners = new Map();
      if (visits.length) {
        let commentPrefixLen = data2.i.length,
          cleanupMarkers = new Map();
        data2.v = [];
        let sectionEnd = (visit, scopeId = this.f, curNode = visit) => {
          let scope = (scopeLookup[scopeId] ||= {}),
            endNode = curNode;
          for (; 8 === (endNode = endNode.previousSibling).nodeType; );
          scope.b = endNode;
          let startNode = (scope.a ||= endNode),
            len = cleanupMarkers.size;
          for (let [markerScopeId, markerNode] of cleanupMarkers) {
            if (!len--) break;
            markerScopeId !== scopeId &&
              4 & startNode.compareDocumentPosition(markerNode) &&
              2 & curNode.compareDocumentPosition(markerNode) &&
              (cleanupOwners.set("" + markerScopeId, scopeId),
              cleanupMarkers.delete(markerScopeId));
          }
          return cleanupMarkers.set(scopeId, visit), scope;
        };
        for (let visit of visits) {
          let commentText = visit.data,
            token = commentText[commentPrefixLen],
            scopeId = parseInt(commentText.slice(commentPrefixLen + 1)),
            scope = (scopeLookup[scopeId] ||= {}),
            dataIndex = commentText.indexOf(" ") + 1,
            data3 = dataIndex ? commentText.slice(dataIndex) : "";
          if ("*" === token) scope[data3] = visit.previousSibling;
          else if ("$" === token) cleanupMarkers.set(scopeId, visit);
          else if ("[" === token)
            this.f && (data3 && sectionEnd(visit), this.m.push(this.f)),
              (this.f = scopeId),
              (scope.a = visit);
          else if ("]" === token) {
            if (((scope[data3] = visit), scopeId < this.f)) {
              let currParent = visit.parentNode,
                startNode = sectionEnd(visit).a;
              currParent &&
                currParent !== startNode.parentNode &&
                currParent.prepend(startNode),
                (this.f = this.m.pop());
            }
          } else if ("|" === token) {
            scope[parseInt(data3)] = visit;
            let childScopeIds = JSON.parse(
                "[" + data3.slice(data3.indexOf(" ") + 1) + "]",
              ),
              curNode = visit;
            for (let i = childScopeIds.length - 1; i >= 0; i--)
              curNode = sectionEnd(visit, childScopeIds[i], curNode).b;
          }
        }
      }
      let resumes = data2.r;
      if (resumes) {
        data2.r = [];
        let len = resumes.length,
          i = 0;
        try {
          for (isResuming = !0; i < len; ) {
            let resumeData = resumes[i++];
            if ("function" == typeof resumeData) {
              let scopes = resumeData(serializeContext),
                { $global: $global } = scopeLookup;
              $global ||
                ((scopeLookup.$global = $global = scopes.$ || {}),
                ($global.runtimeId = this.A),
                ($global.renderId = this.o));
              for (let scopeId in scopes)
                if ("$" !== scopeId) {
                  let scope = scopes[scopeId],
                    prevScope = scopeLookup[scopeId];
                  (scope.$global = $global),
                    prevScope !== scope &&
                      (scopeLookup[scopeId] = Object.assign(scope, prevScope));
                  let cleanupOwnerId = cleanupOwners.get(scopeId);
                  cleanupOwnerId &&
                    ((scope.d = scopes[cleanupOwnerId]), onDestroy(scope));
                }
            } else
              i === len || "string" != typeof resumes[i]
                ? delete this.z[this.o]
                : registeredValues[resumes[i++]](scopeLookup[resumeData]);
          }
        } finally {
          isResuming = !1;
        }
      }
    }
  },
  isResuming = !1;
function register(id, obj) {
  return (registeredValues[id] = obj), obj;
}
function registerBoundSignal(id, signal) {
  return (
    (registeredValues[id] = (scope) => (valueOrOp) => signal(scope, valueOrOp)),
    signal
  );
}
function init(runtimeId = "M") {
  let renders,
    resumeRender = (renderId) =>
      (resumeRender[renderId] = renders[renderId] =
        new Render(renders, runtimeId, renderId));
  function setRenders(v) {
    renders = v;
    for (let renderId in v) resumeRender(renderId);
    Object.defineProperty(window, runtimeId, {
      configurable: !0,
      value: resumeRender,
    });
  }
  window[runtimeId]
    ? setRenders(window[runtimeId])
    : Object.defineProperty(window, runtimeId, {
        configurable: !0,
        set: setRenders,
      });
}
function registerSubscriber(id, signal) {
  return register(id, signal.g), signal;
}
function nodeRef(id, key) {
  return register(id, (scope) => () => scope[key]);
}
var MARK = {},
  CLEAN = {},
  DIRTY = {};
function state(valueAccessor, fn, getIntersection) {
  let valueSignal = value(valueAccessor, fn, getIntersection),
    markAccessor = valueAccessor + "#",
    valueChangeAccessor = valueAccessor + "@";
  return (scope, valueOrOp, valueChange) => (
    rendering
      ? valueSignal(
          scope,
          valueOrOp === MARK ||
            valueOrOp === CLEAN ||
            valueOrOp === DIRTY ||
            (scope[valueChangeAccessor] = valueChange) ||
            void 0 === scope[markAccessor]
            ? valueOrOp
            : CLEAN,
        )
      : scope[valueChangeAccessor]
        ? scope[valueChangeAccessor](valueOrOp)
        : (function (scope, signal, value2) {
            isScheduled ||
              ((isScheduled = !0), queueMicrotask(flushAndWaitFrame)),
              (rendering = !0),
              signal(scope, MARK),
              (rendering = !1),
              pendingSignals.push(scope, signal, value2);
          })(scope, valueSignal, valueOrOp),
    valueOrOp
  );
}
function value(valueAccessor, fn, getIntersection) {
  let markAccessor = valueAccessor + "#",
    intersection2 =
      getIntersection &&
      ((scope, op) => (intersection2 = getIntersection())(scope, op));
  return (scope, valueOrOp) => {
    if (valueOrOp === MARK)
      1 === (scope[markAccessor] = (scope[markAccessor] ?? 0) + 1) &&
        intersection2?.(scope, MARK);
    else if (valueOrOp !== DIRTY) {
      let existing = void 0 !== scope[markAccessor];
      1 === (scope[markAccessor] ||= 1) &&
        (valueOrOp === CLEAN || (existing && scope[valueAccessor] === valueOrOp)
          ? intersection2?.(scope, CLEAN)
          : ((scope[valueAccessor] = valueOrOp),
            fn && fn(scope, valueOrOp),
            intersection2?.(scope, DIRTY))),
        scope[markAccessor]--;
    }
  };
}
var accessorId = 0;
function intersection(count, fn, getIntersection) {
  let dirtyAccessor = "?" + accessorId++,
    markAccessor = dirtyAccessor + "#",
    intersection2 =
      getIntersection &&
      ((scope, op) => (intersection2 = getIntersection())(scope, op));
  return (scope, op) => {
    op === MARK
      ? 1 === (scope[markAccessor] = (scope[markAccessor] ?? 0) + 1) &&
        intersection2?.(scope, MARK)
      : void 0 === scope[markAccessor]
        ? ((scope[markAccessor] = count - 1), (scope[dirtyAccessor] = !0))
        : 0 == --scope[markAccessor]
          ? op === DIRTY || scope[dirtyAccessor]
            ? ((scope[dirtyAccessor] = !1),
              fn(scope, 0),
              intersection2?.(scope, DIRTY))
            : intersection2?.(scope, CLEAN)
          : (scope[dirtyAccessor] ||= op === DIRTY);
  };
}
var defaultGetOwnerScope = (scope) => scope._;
function closure(
  ownerValueAccessor,
  fn,
  getOwnerScope = defaultGetOwnerScope,
  getIntersection,
) {
  let dirtyAccessor = "?" + accessorId++,
    markAccessor = dirtyAccessor + 1,
    getOwnerValueAccessor =
      "function" == typeof ownerValueAccessor
        ? ownerValueAccessor
        : () => ownerValueAccessor,
    intersection2 =
      getIntersection &&
      ((scope, op) => (intersection2 = getIntersection())(scope, op));
  return (scope, op) => {
    if (op === MARK)
      1 === (scope[markAccessor] = (scope[markAccessor] ?? 0) + 1) &&
        intersection2?.(scope, MARK);
    else {
      let ownerScope, ownerValueAccessor2;
      if (void 0 === scope[markAccessor]) {
        (ownerScope = getOwnerScope(scope)),
          (ownerValueAccessor2 = getOwnerValueAccessor(scope));
        let ownerMark = ownerScope[ownerValueAccessor2 + "#"],
          ownerHasRun = void 0 === ownerMark ? !ownerScope.u : 0 === ownerMark;
        (scope[markAccessor] = ownerHasRun ? 1 : 2), (op = DIRTY);
      }
      0 == --scope[markAccessor]
        ? op === DIRTY || scope[dirtyAccessor]
          ? ((scope[dirtyAccessor] = !1),
            (ownerScope ||= getOwnerScope(scope)),
            (ownerValueAccessor2 ||= getOwnerValueAccessor(scope)),
            fn && fn(scope, ownerScope[ownerValueAccessor2]),
            intersection2?.(scope, DIRTY))
          : intersection2?.(scope, CLEAN)
        : (scope[dirtyAccessor] ||= op === DIRTY);
    }
  };
}
function dynamicClosure(
  ownerValueAccessor,
  fn,
  getOwnerScope = defaultGetOwnerScope,
  getIntersection,
) {
  let getOwnerValueAccessor =
      "function" == typeof ownerValueAccessor
        ? ownerValueAccessor
        : () => ownerValueAccessor,
    signalFn = closure(
      getOwnerValueAccessor,
      fn,
      getOwnerScope,
      getIntersection,
    ),
    subscribeFns = new WeakMap();
  return (
    (signalFn.g = (scope) => {
      let subscribeFn = (value2) => signalFn(scope, value2),
        ownerScope = getOwnerScope(scope),
        providerSubscriptionsAccessor = getOwnerValueAccessor(scope) + "*";
      subscribeFns.set(scope, subscribeFn),
        (ownerScope[providerSubscriptionsAccessor] ||= new Set()).add(
          subscribeFn,
        );
    }),
    (signalFn.j = (scope) => {
      let ownerScope = getOwnerScope(scope),
        providerSubscriptionsAccessor = getOwnerValueAccessor(scope) + "*";
      ownerScope[providerSubscriptionsAccessor]?.delete(
        subscribeFns.get(scope),
      ),
        subscribeFns.delete(scope);
    }),
    signalFn
  );
}
function childClosures(closureSignals, childAccessor) {
  let signal = (scope, op) => {
    let childScope = scope[childAccessor];
    for (let closureSignal of closureSignals) closureSignal(childScope, op);
  };
  return (
    (signal.g = (scope) => {
      let childScope = scope[childAccessor];
      for (let closureSignal of closureSignals) closureSignal.g?.(childScope);
    }),
    (signal.j = (scope) => {
      let childScope = scope[childAccessor];
      for (let closureSignal of closureSignals) closureSignal.j?.(childScope);
    }),
    signal
  );
}
function dynamicSubscribers(valueAccessor) {
  let subscribersAccessor = valueAccessor + "*";
  return (scope, op) => {
    let subscribers = scope[subscribersAccessor];
    if (subscribers) for (let subscriber of subscribers) subscriber(op);
  };
}
function setTagVar(scope, childAccessor, tagVarSignal2) {
  scope[childAccessor]["/"] = (valueOrOp) => tagVarSignal2(scope, valueOrOp);
}
var tagVarSignal = (scope, valueOrOp) => scope["/"]?.(valueOrOp);
function setTagVarChange(scope, changeHandler) {
  scope["@"] = changeHandler;
}
var tagVarSignalChange = (scope, value2) => scope["@"]?.(value2),
  renderBodyClosures = (renderBody, childScope, op) => {
    let signals = renderBody?.c;
    if (signals) for (let signal of signals) signal(childScope, op);
  },
  tagIdsByGlobal = new WeakMap();
function nextTagId({ $global: $global }) {
  let id = tagIdsByGlobal.get($global) || 0;
  return (
    tagIdsByGlobal.set($global, id + 1),
    "c" + $global.runtimeId + $global.renderId + id.toString(36)
  );
}
function inChild(childAccessor, signal) {
  return (scope, valueOrOp) => {
    signal(scope[childAccessor], valueOrOp);
  };
}
function intersections(signals) {
  return (scope, op) => {
    for (let signal of signals) signal(scope, op);
  };
}
function effect(id, fn) {
  return (
    register(id, fn),
    (scope) => {
      queueEffect(scope, fn);
    }
  );
}
var pendingSignals = [],
  pendingEffects = [],
  rendering = !1;
function queueEffect(scope, fn) {
  pendingEffects.push(scope, fn);
}
function run() {
  let signals = pendingSignals,
    effects = pendingEffects;
  try {
    (rendering = !0), (pendingSignals = []), runSignals(signals);
  } finally {
    rendering = !1;
  }
  (pendingEffects = []), runEffects(effects);
}
function prepareEffects(fn) {
  let prevSignals = pendingSignals,
    prevEffects = pendingEffects,
    preparedEffects = (pendingEffects = []),
    preparedSignals = (pendingSignals = []);
  try {
    (rendering = !0),
      fn(),
      (pendingSignals = prevSignals),
      runSignals(preparedSignals);
  } finally {
    (rendering = !1),
      (pendingSignals = prevSignals),
      (pendingEffects = prevEffects);
  }
  return preparedEffects;
}
function runEffects(effects = pendingEffects) {
  for (let i = 0; i < effects.length; i += 2) {
    let scope = effects[i];
    (0, effects[i + 1])(scope);
  }
}
function runSignals(signals) {
  for (let i = 0; i < signals.length; i += 3) {
    let scope = signals[i + 0];
    (0, signals[i + 1])(scope, signals[i + 2]);
  }
}
function resetAbortSignal(scope, id) {
  let controllers = scope.l;
  if (controllers) {
    let ctrl = controllers.get(id);
    ctrl && (queueEffect(null, () => ctrl.abort()), controllers.delete(id));
  }
}
function getAbortSignal(scope, id) {
  let controllers = (scope.l ||= new Map()),
    controller = controllers.get(id);
  return (
    controller ||
      (onDestroy(scope),
      controllers.set(id, (controller = new AbortController()))),
    controller.signal
  );
}
function stringifyClassObject(name, value2) {
  return value2 ? name : "";
}
var NON_DIMENSIONAL = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function stringifyStyleObject(name, value2) {
  return value2 || 0 === value2
    ? `${name}:${"number" == typeof value2 && value2 && !NON_DIMENSIONAL.test(name) ? value2 + "px" : value2}`
    : "";
}
function toDelimitedString(val, delimiter, stringify) {
  switch (typeof val) {
    case "string":
      return val;
    case "object":
      if (null !== val) {
        let result = "",
          curDelimiter = "";
        if (Array.isArray(val))
          for (let v of val) {
            let part = toDelimitedString(v, delimiter, stringify);
            "" !== part &&
              ((result += curDelimiter + part), (curDelimiter = delimiter));
          }
        else
          for (let name in val) {
            let part = stringify(name, val[name]);
            "" !== part &&
              ((result += curDelimiter + part), (curDelimiter = delimiter));
          }
        return result;
      }
  }
  return "";
}
function isEventHandler(name) {
  return /^on[A-Z-]/.test(name);
}
function getEventHandlerName(name) {
  return "-" === name[2] ? name.slice(3) : name.slice(2).toLowerCase();
}
function normalizeDynamicRenderer(value2) {
  if (value2) return value2.renderBody || value2.default || value2;
}
var elementHandlersByEvent = new Map(),
  defaultDelegator = createDelegator();
function on(element, type, handler) {
  let handlersByElement = elementHandlersByEvent.get(type);
  handlersByElement ||
    elementHandlersByEvent.set(type, (handlersByElement = new WeakMap())),
    handlersByElement.has(element) ||
      defaultDelegator(element, type, handleDelegated),
    handlersByElement.set(element, handler || void 0);
}
function createDelegator() {
  let delegatedEventsByRoot = new WeakMap();
  return function (node, type, handler) {
    let root = node.getRootNode(),
      delegatedEvents = delegatedEventsByRoot.get(root);
    delegatedEvents ||
      delegatedEventsByRoot.set(root, (delegatedEvents = new Set())),
      delegatedEvents.has(type) ||
        (delegatedEvents.add(type), root.addEventListener(type, handler, !0));
  };
}
function handleDelegated(ev) {
  let target = ev.target;
  if (target) {
    let handlersByElement = elementHandlersByEvent.get(ev.type);
    if ((handlersByElement.get(target)?.(ev, target), ev.bubbles))
      for (; (target = target.parentElement) && !ev.cancelBubble; )
        handlersByElement.get(target)?.(ev, target);
  }
}
function stripSpacesAndPunctuation(str) {
  return str.replace(/[^\p{L}\p{N}]/gu, "");
}
function controllable_input_checked(
  scope,
  nodeAccessor,
  checked,
  checkedChange,
) {
  setCheckboxValue(
    scope,
    nodeAccessor,
    0,
    normalizeBoolProp(checked),
    checkedChange,
  );
}
function controllable_input_checked_effect(scope, nodeAccessor) {
  let el = scope[nodeAccessor];
  syncControllable(el, "input", hasCheckboxChanged, () => {
    let checkedChange = scope[nodeAccessor + ";"];
    checkedChange &&
      ((scope[nodeAccessor + "="] = 6),
      checkedChange(el.checked),
      run(),
      6 === scope[nodeAccessor + "="] && (el.checked = !el.checked));
  });
}
function controllable_input_checkedValue(
  scope,
  nodeAccessor,
  checkedValue,
  checkedValueChange,
  value2,
) {
  (scope[nodeAccessor + ":"] = checkedValue),
    attr(scope[nodeAccessor], "value", value2),
    setCheckboxValue(
      scope,
      nodeAccessor,
      1,
      Array.isArray(checkedValue)
        ? checkedValue.includes(value2)
        : checkedValue === value2,
      checkedValueChange,
    );
}
function controllable_input_checkedValue_effect(scope, nodeAccessor) {
  let el = scope[nodeAccessor];
  syncControllable(el, "input", hasCheckboxChanged, () => {
    let checkedValueChange = scope[nodeAccessor + ";"];
    if (checkedValueChange) {
      let oldValue = scope[nodeAccessor + ":"];
      (scope[nodeAccessor + "="] = 6),
        checkedValueChange(
          Array.isArray(oldValue)
            ? (function (arr, val, push) {
                let index = arr.indexOf(val);
                return (
                  (push
                    ? !~index && [...arr, val]
                    : ~index &&
                      arr.slice(0, index).concat(arr.slice(index + 1))) || arr
                );
              })(oldValue, el.value, el.checked)
            : el.checked
              ? el.value
              : void 0,
        ),
        run(),
        6 === scope[nodeAccessor + "="] && (el.checked = !el.checked);
    }
  });
}
function controllable_input_value(scope, nodeAccessor, value2, valueChange) {
  let el = scope[nodeAccessor],
    normalizedValue = normalizeStrProp(value2);
  (scope[nodeAccessor + ";"] = valueChange),
    valueChange
      ? ((scope[nodeAccessor + "="] = 0),
        (scope[nodeAccessor + ":"] = value2),
        el.isConnected
          ? setValueAndUpdateSelection(el, normalizedValue)
          : (el.defaultValue = normalizedValue))
      : ((scope[nodeAccessor + "="] = 5), (el.defaultValue = normalizedValue));
}
function controllable_input_value_effect(scope, nodeAccessor) {
  let el = scope[nodeAccessor];
  isResuming && (scope[nodeAccessor + ":"] = el.defaultValue),
    syncControllable(el, "input", hasValueChanged, (ev) => {
      let valueChange = scope[nodeAccessor + ";"];
      valueChange &&
        ((scope[nodeAccessor + "="] = 6),
        ev && (inputType = ev.inputType),
        valueChange(el.value),
        run(),
        6 === scope[nodeAccessor + "="] &&
          setValueAndUpdateSelection(el, scope[nodeAccessor + ":"]),
        (inputType = ""));
    });
}
function controllable_select_value(scope, nodeAccessor, value2, valueChange) {
  (scope[nodeAccessor + ";"] = valueChange),
    valueChange
      ? ((scope[nodeAccessor + "="] = 3), (scope[nodeAccessor + ":"] = value2))
      : (scope[nodeAccessor + "="] = 5),
    setSelectOptions(scope[nodeAccessor], value2, valueChange);
}
function controllable_select_value_effect(scope, nodeAccessor) {
  let el = scope[nodeAccessor];
  syncControllable(el, "input", hasSelectChanged, () => {
    let valueChange = scope[nodeAccessor + ";"];
    valueChange &&
      ((scope[nodeAccessor + "="] = 6),
      valueChange(
        Array.isArray(scope[nodeAccessor + ":"])
          ? Array.from(el.selectedOptions, toValueProp)
          : el.value,
      ),
      run(),
      6 === scope[nodeAccessor + "="] &&
        setSelectOptions(el, scope[nodeAccessor + ":"], valueChange));
  });
}
function setSelectOptions(el, value2, valueChange) {
  if (Array.isArray(value2))
    for (let opt of el.options) {
      let selected = value2.includes(opt.value);
      valueChange
        ? (opt.selected = selected)
        : (opt.defaultSelected = selected);
    }
  else {
    let normalizedValue = normalizeStrProp(value2);
    if (valueChange) el.value = normalizedValue;
    else
      for (let opt of el.options)
        opt.defaultSelected = opt.value === normalizedValue;
  }
}
function controllable_detailsOrDialog_open(
  scope,
  nodeAccessor,
  open,
  openChange,
) {
  (scope[nodeAccessor + ";"] = openChange),
    (scope[nodeAccessor + "="] = openChange ? 4 : 5),
    (scope[nodeAccessor].open = normalizeBoolProp(open));
}
function controllable_detailsOrDialog_open_effect(scope, nodeAccessor) {
  let el = scope[nodeAccessor];
  syncControllable(
    el,
    "DIALOG" === el.tagName ? "close" : "toggle",
    () => scope[nodeAccessor + ";"] && el.open !== scope[nodeAccessor + ":"],
    () => {
      let openChange = scope[nodeAccessor + ";"];
      openChange &&
        ((scope[nodeAccessor + "="] = 6),
        openChange(el.open),
        run(),
        6 === scope[nodeAccessor + "="] && (el.open = !el.open));
    },
  );
}
var inputType = "";
function setValueAndUpdateSelection(el, value2) {
  let initialValue = el.value;
  if (initialValue !== value2)
    if (el.getRootNode().activeElement === el) {
      let initialPosition = el.selectionStart;
      el.value = value2;
      let updatedPosition = (function (
        updatedValue,
        initialValue,
        initialPosition,
        inputType2,
      ) {
        if (initialPosition !== initialValue.length || /kw/.test(inputType2)) {
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
              stripSpacesAndPunctuation(updatedValue[pos]) && relevantIndex++,
                pos++;
            return pos;
          }
        }
        return -1;
      })(el.value, initialValue, initialPosition, inputType);
      ~updatedPosition &&
        el.setSelectionRange(updatedPosition, updatedPosition);
    } else el.value = value2;
}
function setCheckboxValue(scope, nodeAccessor, type, checked, checkedChange) {
  (scope[nodeAccessor + ";"] = checkedChange),
    checkedChange
      ? ((scope[nodeAccessor + "="] = type),
        (scope[nodeAccessor].checked = checked))
      : ((scope[nodeAccessor + "="] = 5),
        (scope[nodeAccessor].defaultChecked = checked));
}
var delegateFormControl = createDelegator(),
  formChangeHandlers = new WeakMap();
function syncControllable(el, event, hasChanged, onChange) {
  formChangeHandlers.set(el, onChange),
    delegateFormControl(el, event, onFormChange),
    el.form && delegateFormControl(el.form, "reset", onFormReset),
    isResuming && hasChanged(el) && queueMicrotask(onChange);
}
function onFormChange(ev) {
  formChangeHandlers.get(ev.target)?.(ev);
}
function onFormReset(ev) {
  let handlers = [];
  for (let el of ev.target.elements) {
    let handler = formChangeHandlers.get(el);
    handler && hasFormElementChanged(el) && handlers.push(handler);
  }
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
function normalizeStrProp(value2) {
  return normalizeAttrValue(value2) || "";
}
function normalizeBoolProp(value2) {
  return null != value2 && !1 !== value2;
}
function toValueProp(it) {
  return it.value;
}
var fallback = document.createTextNode(""),
  parser = new Range();
function parseHTML(html2) {
  return parser.createContextualFragment(html2);
}
function attr(element, name, value2) {
  setAttribute(element, name, normalizeAttrValue(value2));
}
function setAttribute(element, name, value2) {
  element.getAttribute(name) != value2 &&
    (void 0 === value2
      ? element.removeAttribute(name)
      : element.setAttribute(name, value2));
}
function classAttr(element, value2) {
  setAttribute(
    element,
    "class",
    (function (value2) {
      return toDelimitedString(value2, " ", stringifyClassObject);
    })(value2) || void 0,
  );
}
function styleAttr(element, value2) {
  setAttribute(
    element,
    "style",
    (function (value2) {
      return toDelimitedString(value2, ";", stringifyStyleObject);
    })(value2) || void 0,
  );
}
function data(node, value2) {
  let normalizedValue = (function (value2) {
    return value2 || 0 === value2 ? value2 + "" : "‍";
  })(value2);
  node.data !== normalizedValue && (node.data = normalizedValue);
}
function attrs(scope, nodeAccessor, nextAttrs) {
  let el = scope[nodeAccessor];
  for (let { name: name } of el.attributes)
    (nextAttrs && (name in nextAttrs || hasAttrAlias(el, name, nextAttrs))) ||
      el.removeAttribute(name);
  attrsInternal(scope, nodeAccessor, nextAttrs);
}
function hasAttrAlias(element, attr2, nextAttrs) {
  return (
    "checked" === attr2 &&
    "INPUT" === element.tagName &&
    "checkedValue" in nextAttrs
  );
}
function partialAttrs(scope, nodeAccessor, nextAttrs, skip) {
  let el = scope[nodeAccessor],
    partial = {};
  for (let { name: name } of el.attributes)
    !skip[name] &&
      (!nextAttrs || !(name in nextAttrs)) &&
      el.removeAttribute(name);
  for (let key in nextAttrs) skip[key] || (partial[key] = nextAttrs[key]);
  attrsInternal(scope, nodeAccessor, partial);
}
function attrsInternal(scope, nodeAccessor, nextAttrs) {
  let events,
    skip,
    el = scope[nodeAccessor];
  switch (el.tagName) {
    case "INPUT":
      if ("checked" in nextAttrs || "checkedChange" in nextAttrs)
        controllable_input_checked(
          scope,
          nodeAccessor,
          nextAttrs.checked,
          nextAttrs.checkedChange,
        );
      else if ("checkedValue" in nextAttrs || "checkedValueChange" in nextAttrs)
        controllable_input_checkedValue(
          scope,
          nodeAccessor,
          nextAttrs.checkedValue,
          nextAttrs.checkedValueChange,
          nextAttrs.value,
        );
      else {
        if (!("value" in nextAttrs) && !("valueChange" in nextAttrs)) break;
        controllable_input_value(
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
        (controllable_select_value(
          scope,
          nodeAccessor,
          nextAttrs.value,
          nextAttrs.valueChange,
        ),
        (skip = /^value(?:Change)?$/));
      break;
    case "TEXTAREA":
      ("value" in nextAttrs || "valueChange" in nextAttrs) &&
        (controllable_input_value(
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
        (controllable_detailsOrDialog_open(
          scope,
          nodeAccessor,
          nextAttrs.open,
          nextAttrs.openChange,
        ),
        (skip = /^open(?:Change)?$/));
  }
  for (let name in nextAttrs) {
    let value2 = nextAttrs[name];
    switch (name) {
      case "class":
        classAttr(el, value2);
        break;
      case "style":
        styleAttr(el, value2);
        break;
      case "renderBody":
        break;
      default:
        isEventHandler(name)
          ? ((events ||= scope[nodeAccessor + "~"] = {})[
              getEventHandlerName(name)
            ] = value2)
          : skip?.test(name) || attr(el, name, value2);
    }
  }
}
function attrsEvents(scope, nodeAccessor) {
  let el = scope[nodeAccessor],
    events = scope[nodeAccessor + "~"];
  switch (scope[nodeAccessor + "="]) {
    case 0:
      controllable_input_checked_effect(scope, nodeAccessor);
      break;
    case 1:
      controllable_input_checkedValue_effect(scope, nodeAccessor);
      break;
    case 2:
      controllable_input_value_effect(scope, nodeAccessor);
      break;
    case 3:
      controllable_select_value_effect(scope, nodeAccessor);
      break;
    case 4:
      controllable_detailsOrDialog_open_effect(scope, nodeAccessor);
  }
  for (let name in events) on(el, name, events[name]);
}
function html(scope, value2, index) {
  let firstChild = scope[index],
    lastChild = scope[index + "-"] || firstChild,
    parentNode = firstChild.parentNode,
    afterReference = lastChild.nextSibling,
    newContent = parseHTML(value2 || 0 === value2 ? value2 + "" : "<!>");
  (scope[index] = newContent.firstChild),
    (scope[index + "-"] = newContent.lastChild),
    parentNode.insertBefore(newContent, firstChild);
  let current = firstChild;
  for (; current !== afterReference; ) {
    let next = current.nextSibling;
    current.remove(), (current = next);
  }
}
function props(scope, nodeIndex, index) {
  let nextProps = scope[index],
    prevProps = scope[index + "-"],
    node = scope[nodeIndex];
  if (prevProps)
    for (let name in prevProps) name in nextProps || (node[name] = void 0);
  for (let name in nextProps) node[name] = nextProps[name];
  scope[index + "-"] = nextProps;
}
function normalizeAttrValue(value2) {
  if (value2 || 0 === value2) return !0 === value2 ? "" : value2 + "";
}
function lifecycle(scope, index, thisObj) {
  let instance = scope[index];
  instance
    ? (Object.assign(instance, thisObj), instance.onUpdate?.())
    : ((scope[index] = thisObj),
      thisObj.onMount?.(),
      (getAbortSignal(scope, "-" + index).onabort = () =>
        thisObj.onDestroy?.()));
}
var walker = document.createTreeWalker(document);
function trimWalkString(walkString) {
  let end = walkString.length;
  for (; walkString.charCodeAt(--end) > 47; );
  return walkString.slice(0, end + 1);
}
function walk(startNode, walkCodes, scope) {
  (walker.currentNode = startNode),
    walkInternal(walkCodes, scope, scope, 0),
    (walker.currentNode = document.documentElement);
}
function walkInternal(walkCodes, scope, cleanupOwnerScope, currentWalkIndex) {
  let value2,
    storedMultiplier = 0,
    currentMultiplier = 0,
    currentScopeIndex = 0;
  for (
    cleanupOwnerScope !== scope && (scope.d = cleanupOwnerScope);
    (value2 = walkCodes.charCodeAt(currentWalkIndex++));

  )
    if (
      ((currentMultiplier = storedMultiplier),
      (storedMultiplier = 0),
      value2 >= 117)
    )
      storedMultiplier = 10 * currentMultiplier + value2 - 117;
    else if (value2 >= 107) {
      for (value2 = 10 * currentMultiplier + value2 - 107; value2--; )
        walker.parentNode();
      walker.nextSibling();
    } else if (value2 >= 97)
      for (value2 = 10 * currentMultiplier + value2 - 97; value2--; )
        walker.nextSibling();
    else if (value2 >= 67)
      for (value2 = 20 * currentMultiplier + value2 - 67; value2--; )
        walker.nextNode();
    else if (47 === value2)
      currentWalkIndex = walkInternal(
        walkCodes,
        (scope[currentScopeIndex++] = createScope(scope.$global)),
        cleanupOwnerScope,
        currentWalkIndex,
      );
    else {
      if (38 === value2) return currentWalkIndex;
      if (32 === value2) scope[currentScopeIndex++] = walker.currentNode;
      else {
        let newNode = (scope[currentScopeIndex++] =
            document.createTextNode("")),
          current = walker.currentNode;
        current.parentNode.replaceChild(newNode, current),
          (walker.currentNode = newNode);
      }
    }
  return currentWalkIndex;
}
function createScopeWithRenderer(renderer, $global, ownerScope) {
  let newScope = createScope($global);
  if (
    ((newScope._ = newScope.d = renderer.B || ownerScope),
    (newScope.x = renderer),
    initRenderer(renderer, newScope),
    renderer.c)
  )
    for (let signal of renderer.c) signal.g?.(newScope);
  return newScope;
}
function createScopeWithTagNameOrRenderer(
  tagNameOrRenderer,
  $global,
  ownerScope,
) {
  if ("string" != typeof tagNameOrRenderer)
    return createScopeWithRenderer(tagNameOrRenderer, $global, ownerScope);
  let newScope = createScope($global);
  return (
    (newScope._ = newScope.d = ownerScope),
    (newScope[0] =
      newScope.a =
      newScope.b =
        document.createElement(tagNameOrRenderer)),
    newScope
  );
}
function initRenderer(renderer, scope) {
  let dom = renderer.k();
  return (
    walk(11 === dom.nodeType ? dom.firstChild : dom, renderer.C, scope),
    (scope.a = 11 === dom.nodeType ? dom.firstChild : dom),
    (scope.b = 11 === dom.nodeType ? dom.lastChild : dom),
    renderer.s && renderer.s(scope),
    dom
  );
}
function dynamicTagAttrs(nodeAccessor, getRenderBody, inputIsArgs) {
  return (scope, attrsOrOp) => {
    let renderer = scope[nodeAccessor + "("];
    if (!renderer || attrsOrOp === DIRTY) return;
    let childScope = scope[nodeAccessor + "!"];
    if (attrsOrOp === MARK || attrsOrOp === CLEAN)
      return renderer.e?.(childScope, attrsOrOp);
    let renderBody = getRenderBody?.(scope);
    if ("string" == typeof renderer)
      setConditionalRendererOnlyChild(childScope, 0, renderBody),
        attrs(childScope, 0, attrsOrOp());
    else if (renderer.e) {
      let attributes = attrsOrOp();
      renderer.e(
        childScope,
        inputIsArgs
          ? attributes
          : [
              renderBody
                ? { ...attributes, renderBody: renderBody }
                : attributes,
            ],
      );
    }
  };
}
function createRendererWithOwner(
  template,
  rawWalks,
  setup,
  getClosureSignals,
  getArgs,
) {
  let args,
    closureSignals,
    id = {},
    walks = rawWalks ? trimWalkString(rawWalks) : " ";
  return (owner) => ({
    t: id,
    D: template,
    C: walks,
    s: setup,
    k: _clone,
    B: owner,
    E: void 0,
    get e() {
      return (args ||= getArgs?.());
    },
    get c() {
      return (closureSignals ||= new Set(getClosureSignals?.()));
    },
  });
}
function createRenderer(template, walks, setup, getClosureSignals, getArgs) {
  return createRendererWithOwner(
    template,
    walks,
    setup,
    getClosureSignals,
    getArgs,
  )();
}
function _clone() {
  return (this.E ||= (function (html2) {
    let content = parseHTML(html2);
    return content.firstChild === content.lastChild
      ? content.firstChild || fallback
      : content;
  })(this.D)).cloneNode(!0);
}
var conditional = function (nodeAccessor, fn, getIntersection) {
  let rendererAccessor = nodeAccessor + "(",
    childScopeAccessor = nodeAccessor + "!",
    intersection2 =
      getIntersection &&
      ((scope, op) => (intersection2 = getIntersection())(scope, op));
  return (scope, newRendererOrOp) => {
    if (newRendererOrOp === DIRTY) return;
    let currentRenderer = scope[rendererAccessor],
      op = newRendererOrOp;
    if (newRendererOrOp !== MARK && newRendererOrOp !== CLEAN) {
      let normalizedRenderer = normalizeDynamicRenderer(newRendererOrOp);
      isDifferentRenderer(normalizedRenderer, currentRenderer)
        ? ((currentRenderer = scope[rendererAccessor] = normalizedRenderer),
          (function (scope, nodeAccessor, newRenderer) {
            let newScope,
              prevScope = scope[nodeAccessor + "!"];
            newRenderer
              ? ((newScope = scope[nodeAccessor + "!"] =
                  createScopeWithTagNameOrRenderer(
                    newRenderer,
                    scope.$global,
                    scope,
                  )),
                (prevScope = prevScope || getEmptyScope(scope[nodeAccessor])))
              : ((newScope = getEmptyScope(scope[nodeAccessor])),
                (scope[nodeAccessor + "!"] = void 0)),
              insertBefore(newScope, prevScope.a.parentNode, prevScope.a),
              removeAndDestroyScope(prevScope);
          })(scope, nodeAccessor, normalizedRenderer),
          fn && fn(scope),
          (op = DIRTY))
        : (op = CLEAN);
    }
    intersection2?.(scope, op),
      renderBodyClosures(currentRenderer, scope[childScopeAccessor], op);
  };
};
function inConditionalScope(signal, nodeAccessor) {
  let scopeAccessor = nodeAccessor + "!",
    rendererAccessor = nodeAccessor + "(";
  return (scope, op) => {
    let conditionalScope = scope[scopeAccessor];
    if (conditionalScope) {
      let conditionalRenderer = scope[rendererAccessor];
      (!conditionalRenderer?.c || conditionalRenderer.c.has(signal)) &&
        signal(conditionalScope, op);
    }
  };
}
var conditionalOnlyChild = function (nodeAccessor, fn, getIntersection) {
  let rendererAccessor = nodeAccessor + "(",
    childScopeAccessor = nodeAccessor + "!",
    intersection2 =
      getIntersection &&
      ((scope, op) => (intersection2 = getIntersection())(scope, op));
  return (scope, newRendererOrOp) => {
    if (newRendererOrOp === DIRTY) return;
    let currentRenderer = scope[rendererAccessor],
      op = newRendererOrOp;
    if (newRendererOrOp !== MARK && newRendererOrOp !== CLEAN) {
      let normalizedRenderer = normalizeDynamicRenderer(newRendererOrOp);
      isDifferentRenderer(normalizedRenderer, currentRenderer)
        ? ((currentRenderer = scope[rendererAccessor] = normalizedRenderer),
          setConditionalRendererOnlyChild(
            scope,
            nodeAccessor,
            normalizedRenderer,
          ),
          fn && fn(scope),
          (op = DIRTY))
        : (op = CLEAN);
    }
    intersection2?.(scope, op),
      renderBodyClosures(currentRenderer, scope[childScopeAccessor], op);
  };
};
function setConditionalRendererOnlyChild(scope, nodeAccessor, newRenderer) {
  let prevScope = scope[nodeAccessor + "!"],
    referenceNode = scope[nodeAccessor];
  if (((referenceNode.textContent = ""), newRenderer)) {
    insertBefore(
      (scope[nodeAccessor + "!"] = createScopeWithTagNameOrRenderer(
        newRenderer,
        scope.$global,
        scope,
      )),
      referenceNode,
      null,
    );
  }
  prevScope && destroyScope(prevScope);
}
var emptyMarkerMap = new Map([[Symbol(), getEmptyScope(void 0)]]),
  emptyMarkerArray = [getEmptyScope(void 0)],
  emptyMap = new Map(),
  emptyArray = [];
function loopOf(nodeAccessor, renderer) {
  return loop(nodeAccessor, renderer, ([all, by = bySecondArg], cb) => {
    forOf(
      all,
      "string" == typeof by
        ? (item, i) => cb(item[by], [item, i])
        : (item, i) => cb(by(item, i), [item, i]),
    );
  });
}
function loopIn(nodeAccessor, renderer) {
  return loop(nodeAccessor, renderer, ([obj, by = byFirstArg], cb) =>
    forIn(obj, (key, value2) => cb(by(key, value2), [key, value2])),
  );
}
function loopTo(nodeAccessor, renderer) {
  return loop(nodeAccessor, renderer, ([to, from, step, by = byFirstArg], cb) =>
    forTo(to, from, step, (v) => cb(by(v), [v])),
  );
}
function loop(nodeAccessor, renderer, forEach) {
  let loopScopeAccessor = nodeAccessor + "!",
    closureSignals = renderer.c,
    params = renderer.e;
  return (scope, valueOrOp) => {
    if (valueOrOp === DIRTY) return;
    if (valueOrOp === MARK || valueOrOp === CLEAN) {
      let loopScopes =
        scope[loopScopeAccessor] ?? scope[nodeAccessor + "("]?.values() ?? [];
      if (loopScopes !== emptyMarkerArray)
        for (let childScope of loopScopes) {
          params?.(childScope, valueOrOp);
          for (let signal of closureSignals) signal(childScope, valueOrOp);
        }
      return;
    }
    let newMap,
      newArray,
      afterReference,
      parentNode,
      referenceNode = scope[nodeAccessor],
      referenceIsMarker =
        8 === referenceNode.nodeType || 3 === referenceNode.nodeType,
      oldMap =
        scope[nodeAccessor + "("] ||
        (referenceIsMarker ? emptyMarkerMap : emptyMap),
      oldArray = scope[nodeAccessor + "!"] || Array.from(oldMap.values()),
      needsReconciliation = !0;
    if (
      (forEach(valueOrOp, (key, args) => {
        let childScope = oldMap.get(key),
          closureOp = CLEAN;
        if (
          (childScope ||
            ((childScope = createScopeWithRenderer(
              renderer,
              scope.$global,
              scope,
            )),
            (closureOp = DIRTY)),
          params && params(childScope, args),
          closureSignals)
        )
          for (let signal of closureSignals) signal(childScope, closureOp);
        newMap
          ? (newMap.set(key, childScope), newArray.push(childScope))
          : ((newMap = new Map([[key, childScope]])),
            (newArray = [childScope]));
      }),
      newMap ||
        (referenceIsMarker
          ? ((newMap = emptyMarkerMap),
            (newArray = emptyMarkerArray),
            getEmptyScope(referenceNode))
          : (oldArray.forEach(destroyScope),
            (referenceNode.textContent = ""),
            (newMap = emptyMap),
            (newArray = emptyArray),
            (needsReconciliation = !1))),
      needsReconciliation)
    ) {
      if (referenceIsMarker) {
        oldMap === emptyMarkerMap && getEmptyScope(referenceNode);
        let oldLastChild = oldArray[oldArray.length - 1];
        (afterReference = oldLastChild.b.nextSibling),
          (parentNode = oldLastChild.a.parentNode);
      } else (afterReference = null), (parentNode = referenceNode);
      !(function (parent, oldScopes, newScopes, afterReference) {
        let i,
          j,
          k,
          nextSibling,
          oldScope,
          newScope,
          oldStart = 0,
          newStart = 0,
          oldEnd = oldScopes.length - 1,
          newEnd = newScopes.length - 1,
          oldStartScope = oldScopes[oldStart],
          newStartScope = newScopes[newStart],
          oldEndScope = oldScopes[oldEnd],
          newEndScope = newScopes[newEnd];
        outer: {
          for (; oldStartScope === newStartScope; ) {
            if (
              (++oldStart, ++newStart, oldStart > oldEnd || newStart > newEnd)
            )
              break outer;
            (oldStartScope = oldScopes[oldStart]),
              (newStartScope = newScopes[newStart]);
          }
          for (; oldEndScope === newEndScope; ) {
            if ((--oldEnd, --newEnd, oldStart > oldEnd || newStart > newEnd))
              break outer;
            (oldEndScope = oldScopes[oldEnd]),
              (newEndScope = newScopes[newEnd]);
          }
        }
        if (oldStart > oldEnd) {
          if (newStart <= newEnd) {
            (k = newEnd + 1),
              (nextSibling =
                k < newScopes.length ? newScopes[k].a : afterReference);
            do {
              insertBefore(newScopes[newStart++], parent, nextSibling);
            } while (newStart <= newEnd);
          }
        } else if (newStart > newEnd)
          do {
            removeAndDestroyScope(oldScopes[oldStart++]);
          } while (oldStart <= oldEnd);
        else {
          let oldLength = oldEnd - oldStart + 1,
            newLength = newEnd - newStart + 1,
            aNullable = oldScopes,
            sources = new Array(newLength);
          for (i = 0; i < newLength; ++i) sources[i] = -1;
          let pos = 0,
            synced = 0,
            keyIndex = new Map();
          for (j = newStart; j <= newEnd; ++j) keyIndex.set(newScopes[j], j);
          for (i = oldStart; i <= oldEnd && synced < newLength; ++i)
            (oldScope = oldScopes[i]),
              (j = keyIndex.get(oldScope)),
              void 0 !== j &&
                ((pos = pos > j ? 2147483647 : j),
                ++synced,
                (newScope = newScopes[j]),
                (sources[j - newStart] = i),
                (aNullable[i] = null));
          if (oldLength === oldScopes.length && 0 === synced) {
            for (; newStart < newLength; ++newStart)
              insertBefore(newScopes[newStart], parent, afterReference);
            for (; oldStart < oldLength; ++oldStart)
              removeAndDestroyScope(oldScopes[oldStart]);
          } else {
            for (i = oldLength - synced; i > 0; )
              (oldScope = aNullable[oldStart++]),
                null !== oldScope && (removeAndDestroyScope(oldScope), i--);
            if (2147483647 === pos) {
              let seq = (function (a) {
                let u,
                  v,
                  p = a.slice(),
                  result = [];
                result.push(0);
                for (let i = 0, il = a.length; i < il; ++i) {
                  if (-1 === a[i]) continue;
                  let j = result[result.length - 1];
                  if (a[j] < a[i]) (p[i] = j), result.push(i);
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
                  (result[u] = v), (v = p[v]);
                return result;
              })(sources);
              for (
                j = seq.length - 1, k = newScopes.length, i = newLength - 1;
                i >= 0;
                --i
              )
                -1 === sources[i] || j < 0 || i !== seq[j]
                  ? ((pos = i + newStart),
                    (newScope = newScopes[pos++]),
                    (nextSibling = pos < k ? newScopes[pos].a : afterReference),
                    insertBefore(newScope, parent, nextSibling))
                  : --j;
            } else if (synced !== newLength)
              for (k = newScopes.length, i = newLength - 1; i >= 0; --i)
                -1 === sources[i] &&
                  ((pos = i + newStart),
                  (newScope = newScopes[pos++]),
                  (nextSibling = pos < k ? newScopes[pos].a : afterReference),
                  insertBefore(newScope, parent, nextSibling));
          }
        }
      })(parentNode, oldArray, newArray, afterReference);
    }
    (scope[nodeAccessor + "("] = newMap),
      (scope[nodeAccessor + "!"] = newArray);
  };
}
function inLoopScope(signal, loopNodeAccessor) {
  let loopScopeAccessor = loopNodeAccessor + "!";
  return (scope, op) => {
    let loopScopes =
      scope[loopScopeAccessor] ?? scope[loopNodeAccessor + "("]?.values() ?? [];
    if (loopScopes !== emptyMarkerArray)
      for (let scope2 of loopScopes) signal(scope2, op);
  };
}
function bySecondArg(_item, index) {
  return index;
}
function byFirstArg(name) {
  return name;
}
function isDifferentRenderer(a, b) {
  return a !== b && (a?.t || 0) !== b?.t;
}
var classIdToScope = new Map(),
  compat = {
    patchConditionals: function (fn) {
      (conditional = fn(conditional)),
        (conditionalOnlyChild = fn(conditionalOnlyChild));
    },
    queueEffect: queueEffect,
    init() {
      register("$C_s", (scope) => {
        classIdToScope.set(scope.m5c, scope);
      });
    },
    registerRenderer(fn) {
      register("$C_r", fn);
    },
    isOp: (value2) => value2 === MARK || value2 === CLEAN || value2 === DIRTY,
    isRenderer: (renderer) => void 0 !== renderer.k,
    getStartNode: (scope) => scope.a,
    setScopeNodes(scope, startNode, endNode) {
      (scope.a = startNode), (scope.b = endNode);
    },
    runComponentEffects() {
      runEffects(this.effects);
    },
    resolveRegistered: (
      value2,
      { runtimeId: runtimeId, componentIdPrefix: componentIdPrefix },
    ) =>
      Array.isArray(value2) && "string" == typeof value2[0]
        ? (function (id, scope) {
            let val = registeredValues[id];
            return scope ? val(scope) : val;
          })(
            value2[0],
            2 === value2.length &&
              window[runtimeId]?.[
                "s" === componentIdPrefix ? "_" : componentIdPrefix
              ]?.n[value2[1]],
          )
        : value2,
    createRenderer(setup, clone, args) {
      let renderer = createRenderer(
        "",
        void 0,
        setup,
        void 0,
        args && (() => args),
      );
      return (renderer.k = clone), renderer;
    },
    render(out, component, renderer, input) {
      let scope = component.scope;
      scope ||
        ((scope = classIdToScope.get(component.id)),
        scope &&
          ((component.scope = scope), classIdToScope.delete(component.id)));
      let args = renderer.e || noop,
        existing = !1;
      if (
        ((component.effects = prepareEffects(() => {
          if (scope) args(scope, MARK), (existing = !0);
          else {
            scope = component.scope = createScopeWithRenderer(
              renderer,
              out.global,
            );
            let closures = renderer.c;
            if (closures)
              for (let signal of closures) signal(component.scope, CLEAN);
          }
          args(scope, input);
        })),
        !existing)
      )
        return scope.a === scope.b ? scope.a : scope.a.parentNode;
    },
  };
function noop() {}
var createTemplate = (templateId, ...rendererArgs) => {
  let renderer = createRenderer(...rendererArgs);
  return (
    (renderer.mount = mount),
    (renderer._ = renderer),
    register(templateId, renderer)
  );
};
function mount(input = {}, reference, position) {
  let scope,
    dom,
    { $global: $global } = input;
  $global
    ? (({ $global: $global, ...input } = input),
      ($global = { runtimeId: "M", renderId: "_", ...$global }))
    : ($global = { runtimeId: "M", renderId: "_" });
  let args = this.e,
    effects = prepareEffects(() => {
      (scope = createScope($global)),
        (dom = initRenderer(this, scope)),
        args && args(scope, [input]);
    });
  switch (position) {
    case "afterbegin":
      reference.insertBefore(dom, reference.firstChild);
      break;
    case "afterend":
      reference.parentElement.insertBefore(dom, reference.nextSibling);
      break;
    case "beforebegin":
      reference.parentElement.insertBefore(dom, reference);
      break;
    default:
      reference.appendChild(dom);
  }
  return (
    runEffects(effects),
    {
      update: (newInput) => {
        args &&
          runEffects(
            prepareEffects(() => {
              args(scope, MARK), args(scope, [newInput]);
            }),
          );
      },
      destroy: () => {
        removeAndDestroyScope(scope);
      },
    }
  );
}
