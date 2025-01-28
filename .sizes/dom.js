// size: 18063 (min) 6602 (brotli)
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
var pendingScopes = [];
function createScope($global) {
  let scope = { f: 1, $global: $global };
  return pendingScopes.push(scope), scope;
}
var emptyScope = createScope({});
function getEmptyScope(marker) {
  return (emptyScope.a = emptyScope.c = marker), emptyScope;
}
function destroyBranch(branch) {
  if (((branch.z = 1), branch.m?.forEach(destroyBranch), branch.n))
    for (let scope of branch.n) for (let id in scope.g) scope.g[id]?.abort();
}
function removeAndDestroyBranch(branch) {
  destroyBranch(branch);
  let current = branch.a,
    stop = branch.c.nextSibling;
  for (; current !== stop; ) {
    let next = current.nextSibling;
    current.remove(), (current = next);
  }
}
function insertBefore(scope, parent, nextSibling) {
  let current = scope.a,
    stop = scope.c.nextSibling;
  for (; current !== stop; ) {
    let next = current.nextSibling;
    parent.insertBefore(current, nextSibling), (current = next);
  }
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
  if (value2) return value2.content || value2.default || value2;
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
      for (; (target = target.parentNode) && !ev.cancelBubble; )
        handlersByElement.get(target)?.(ev, target);
  }
}
function stripSpacesAndPunctuation(str) {
  return str.replace(/[^\p{L}\p{N}]/gu, "");
}
var registeredValues = {},
  Render = class {
    o = [];
    p = {};
    A = { _: registeredValues };
    constructor(renders, runtimeId, renderId) {
      (this.B = renders),
        (this.C = runtimeId),
        (this.q = renderId),
        (this.s = renders[renderId]),
        this.t();
    }
    w() {
      this.s.w(), this.t();
    }
    t() {
      let data2 = this.s,
        serializeContext = this.A,
        scopeLookup = this.p,
        visits = data2.v,
        branchIds = new Set(),
        parentBranchIds = new Map();
      if (visits.length) {
        let commentPrefixLen = data2.i.length,
          closestBranchMarkers = new Map();
        data2.v = [];
        let branchEnd = (branchId, visit, curNode) => {
          let branch = (scopeLookup[branchId] ||= {}),
            endNode = curNode;
          for (; 8 === (endNode = endNode.previousSibling).nodeType; );
          (branch.c = endNode), (branch.a ||= endNode);
          for (let [markerScopeId, markerNode] of closestBranchMarkers)
            4 & branch.a.compareDocumentPosition(markerNode) &&
              2 & curNode.compareDocumentPosition(markerNode) &&
              (parentBranchIds.set(markerScopeId, branchId),
              closestBranchMarkers.delete(markerScopeId));
          return (
            branchIds.add(branchId),
            closestBranchMarkers.set(branchId, visit),
            branch
          );
        };
        for (let visit of visits) {
          let commentText = visit.data,
            dataIndex = commentText.indexOf(" ") + 1,
            scopeId = commentText.slice(
              commentPrefixLen + 1,
              dataIndex ? dataIndex - 1 : commentText.length,
            ),
            scope = (scopeLookup[scopeId] ||= {}),
            data3 = dataIndex ? commentText.slice(dataIndex) : "",
            token = commentText[commentPrefixLen];
          if ("*" === token) scope[data3] = visit.previousSibling;
          else if ("$" === token) closestBranchMarkers.set(scopeId, visit);
          else if ("[" === token)
            this.e &&
              (dataIndex && branchEnd(this.e, visit, visit),
              this.o.push(this.e)),
              (this.e = scopeId),
              (scope.a = visit);
          else if ("]" === token) {
            scope[data3] = visit;
            let curParent = visit.parentNode,
              startNode = branchEnd(this.e, visit, visit).a;
            curParent !== startNode.parentNode && curParent.prepend(startNode),
              (this.e = this.o.pop());
          } else if ("|" === token) {
            let next = data3.indexOf(" "),
              curNode = (scope[~next ? data3.slice(0, next) : data3] = visit);
            for (; ~next; ) {
              let start = next + 1;
              (next = data3.indexOf(" ", start)),
                (curNode = branchEnd(
                  data3.slice(start, ~next ? next : data3.length),
                  visit,
                  curNode,
                ).c);
            }
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
                ($global.runtimeId = this.C),
                ($global.renderId = this.q));
              for (let scopeId in scopes)
                if ("$" !== scopeId) {
                  let scope = scopes[scopeId],
                    prevScope = scopeLookup[scopeId];
                  (scope.$global = $global),
                    prevScope !== scope &&
                      (scopeLookup[scopeId] = Object.assign(scope, prevScope));
                  let parentBranchId = parentBranchIds.get(scopeId);
                  if (
                    (parentBranchId && (scope.b = scopes[parentBranchId]),
                    branchIds.has(scopeId))
                  ) {
                    let branch = scope,
                      parentBranch = branch.b;
                    (branch.h = +scopeId),
                      (scope.b = branch),
                      parentBranch &&
                        ((branch.D = parentBranch),
                        (parentBranch.m ||= new Set()).add(branch));
                  }
                }
            } else
              i === len || "string" != typeof resumes[i]
                ? delete this.B[this.q]
                : registeredValues[resumes[i++]](
                    scopeLookup[resumeData],
                    scopeLookup[resumeData],
                  );
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
  return register(id, signal.E), signal;
}
function nodeRef(id, key) {
  return register(id, (scope) => () => scope[key]);
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
    pendingEffects.unshift(scope, () =>
      setSelectOptions(scope[nodeAccessor], value2, valueChange),
    );
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
  let el = scope[nodeAccessor],
    hasChanged = () => el.open !== scope[nodeAccessor + ":"];
  syncControllable(
    el,
    "DIALOG" === el.tagName ? "close" : "toggle",
    hasChanged,
    () => {
      let openChange = scope[nodeAccessor + ";"];
      openChange &&
        hasChanged() &&
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
var fallback = new Text(),
  parser = document.createElement("template");
function parseHTML(html2) {
  return (parser.innerHTML = html2), parser.content;
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
  let normalizedValue = normalizeString(value2);
  node.data !== normalizedValue && (node.data = normalizedValue);
}
function textContent(node, value2) {
  let normalizedValue = normalizeString(value2);
  node.textContent !== normalizedValue && (node.textContent = normalizedValue);
}
function attrs(scope, nodeAccessor, nextAttrs) {
  let el = scope[nodeAccessor];
  for (let i = el.attributes.length; i--; ) {
    let { name: name } = el.attributes.item(i);
    (nextAttrs && (name in nextAttrs || hasAttrAlias(el, name, nextAttrs))) ||
      el.removeAttribute(name);
  }
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
  for (let i = el.attributes.length; i--; ) {
    let { name: name } = el.attributes.item(i);
    !skip[name] &&
      (!nextAttrs || !(name in nextAttrs)) &&
      el.removeAttribute(name);
  }
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
      case "content":
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
function normalizeString(value2) {
  return value2 || 0 === value2 ? value2 + "" : "‍";
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
    walkInternal(walkCodes, scope, 0),
    (walker.currentNode = document);
}
function walkInternal(walkCodes, scope, currentWalkIndex) {
  let value2,
    storedMultiplier = 0,
    currentMultiplier = 0,
    currentScopeIndex = 0;
  for (; (value2 = walkCodes.charCodeAt(currentWalkIndex++)); )
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
    else if (47 === value2) {
      let childScope = (scope[currentScopeIndex++] = createScope(
        scope.$global,
      ));
      (childScope.a = walker.currentNode),
        (childScope.b = scope.b),
        (currentWalkIndex = walkInternal(
          walkCodes,
          childScope,
          currentWalkIndex,
        ));
    } else {
      if (38 === value2) return currentWalkIndex;
      if (32 === value2) scope[currentScopeIndex++] = walker.currentNode;
      else {
        let newNode = (scope[currentScopeIndex++] = new Text()),
          current = walker.currentNode;
        current.parentNode.replaceChild(newNode, current),
          (walker.currentNode = newNode);
      }
    }
  return currentWalkIndex;
}
function createBranchScopeWithRenderer(renderer, $global, parentScope) {
  let branch = createBranch($global, renderer.u || parentScope, parentScope);
  return initRenderer(renderer, branch), branch;
}
function createBranchScopeWithTagNameOrRenderer(
  tagNameOrRenderer,
  $global,
  parentScope,
) {
  if ("string" != typeof tagNameOrRenderer)
    return createBranchScopeWithRenderer(
      tagNameOrRenderer,
      $global,
      parentScope,
    );
  let branch = createBranch($global, parentScope, parentScope);
  return (
    (branch[0] =
      branch.a =
      branch.c =
        document.createElement(tagNameOrRenderer)),
    branch
  );
}
function createBranch($global, ownerScope, parentScope) {
  let branch = createScope($global),
    parentBranch = parentScope.b;
  return (
    (branch._ = ownerScope),
    (branch.b = branch),
    parentBranch
      ? ((branch.h = parentBranch.h + 1),
        (branch.D = parentBranch),
        (parentBranch.m ||= new Set()).add(branch))
      : (branch.h = 1),
    branch
  );
}
function initRenderer(renderer, scope) {
  let dom = renderer.k();
  return (
    walk(11 === dom.nodeType ? dom.firstChild : dom, renderer.F, scope),
    (scope.a = 11 === dom.nodeType ? dom.firstChild : dom),
    (scope.c = 11 === dom.nodeType ? dom.lastChild : dom),
    renderer.x && queueRender(scope, renderer.x),
    dom
  );
}
function dynamicTagAttrs(nodeAccessor, getContent, inputIsArgs) {
  return (scope, attrsOrOp) => {
    let renderer = scope[nodeAccessor + "("];
    if (!renderer || attrsOrOp === DIRTY) return;
    let childScope = scope[nodeAccessor + "!"];
    if (attrsOrOp === MARK || attrsOrOp === CLEAN)
      return renderer.d?.(childScope, attrsOrOp);
    let content = getContent?.(scope);
    if ("string" == typeof renderer)
      setConditionalRendererOnlyChild(childScope, 0, content),
        attrs(childScope, 0, attrsOrOp());
    else if (renderer.d) {
      let attributes = attrsOrOp();
      renderer.d(
        childScope,
        inputIsArgs
          ? attributes
          : [content ? { ...attributes, content: content } : attributes],
      );
    }
  };
}
function createRendererWithOwner(template, rawWalks, setup, getArgs) {
  let args,
    id = {},
    walks = rawWalks ? trimWalkString(rawWalks) : " ";
  return (owner) => ({
    j: id,
    G: template,
    F: walks,
    x: setup,
    k: _clone,
    u: owner,
    H: void 0,
    get d() {
      return (args ||= getArgs?.());
    },
  });
}
function createRenderer(template, walks, setup, getArgs) {
  return createRendererWithOwner(template, walks, setup, getArgs)();
}
function _clone() {
  return (this.H ||= (function (html2) {
    let content = parseHTML(html2);
    if (content.firstChild) {
      if (
        content.firstChild === content.lastChild &&
        8 !== content.firstChild.nodeType
      )
        return content.firstChild;
      let fragment = new DocumentFragment();
      return fragment.appendChild(content), fragment;
    }
    return fallback;
  })(this.G)).cloneNode(!0);
}
var conditional = function (nodeAccessor, fn, getIntersection) {
  let rendererAccessor = nodeAccessor + "(",
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
        ? ((function (scope, nodeAccessor, newRenderer) {
            let newBranch = newRenderer
                ? createBranchScopeWithTagNameOrRenderer(
                    newRenderer,
                    scope.$global,
                    scope,
                  )
                : void 0,
              prevBranch =
                scope[nodeAccessor + "!"] || getEmptyScope(scope[nodeAccessor]);
            insertBefore(
              newBranch || getEmptyScope(scope[nodeAccessor]),
              prevBranch.a.parentNode,
              prevBranch.a,
            ),
              removeAndDestroyBranch(prevBranch),
              (scope[nodeAccessor + "("] = newRenderer),
              (scope[nodeAccessor + "!"] = newBranch);
          })(scope, nodeAccessor, normalizedRenderer),
          fn && fn(scope),
          (op = DIRTY))
        : (op = CLEAN);
    }
    intersection2?.(scope, op);
  };
};
var conditionalOnlyChild = function (nodeAccessor, fn, getIntersection) {
  let rendererAccessor = nodeAccessor + "(",
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
    intersection2?.(scope, op);
  };
};
function setConditionalRendererOnlyChild(scope, nodeAccessor, newRenderer) {
  let prevBranch = scope[nodeAccessor + "!"],
    referenceNode = scope[nodeAccessor],
    newBranch = newRenderer
      ? createBranchScopeWithTagNameOrRenderer(
          newRenderer,
          scope.$global,
          scope,
        )
      : void 0;
  (referenceNode.textContent = ""),
    newBranch && insertBefore(newBranch, referenceNode, null),
    prevBranch && destroyBranch(prevBranch),
    (scope[nodeAccessor + "!"] = newBranch);
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
    params = renderer.d;
  return (scope, valueOrOp) => {
    if (valueOrOp === DIRTY) return;
    if (valueOrOp === MARK || valueOrOp === CLEAN) {
      let loopBranches =
        scope[loopScopeAccessor] ?? scope[nodeAccessor + "("]?.values() ?? [];
      if (loopBranches !== emptyMarkerArray)
        for (let branch of loopBranches) params?.(branch, valueOrOp);
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
        let branch = oldMap.get(key);
        branch ||
          (branch = createBranchScopeWithRenderer(
            renderer,
            scope.$global,
            scope,
          )),
          params && params(branch, args),
          newMap
            ? (newMap.set(key, branch), newArray.push(branch))
            : ((newMap = new Map([[key, branch]])), (newArray = [branch]));
      }),
      newMap ||
        (referenceIsMarker
          ? ((newMap = emptyMarkerMap),
            (newArray = emptyMarkerArray),
            getEmptyScope(referenceNode))
          : (oldArray.forEach(destroyBranch),
            (referenceNode.textContent = ""),
            (newMap = emptyMap),
            (newArray = emptyArray),
            (needsReconciliation = !1))),
      needsReconciliation)
    ) {
      if (referenceIsMarker) {
        oldMap === emptyMarkerMap && getEmptyScope(referenceNode);
        let oldLastChild = oldArray[oldArray.length - 1];
        (afterReference = oldLastChild.c.nextSibling),
          (parentNode = oldLastChild.a.parentNode);
      } else (afterReference = null), (parentNode = referenceNode);
      !(function (parent, oldBranches, newBranches, afterReference) {
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
              (++oldStart, ++newStart, oldStart > oldEnd || newStart > newEnd)
            )
              break outer;
            (oldStartBranch = oldBranches[oldStart]),
              (newStartBranch = newBranches[newStart]);
          }
          for (; oldEndBranch === newEndBranch; ) {
            if ((--oldEnd, --newEnd, oldStart > oldEnd || newStart > newEnd))
              break outer;
            (oldEndBranch = oldBranches[oldEnd]),
              (newEndBranch = newBranches[newEnd]);
          }
        }
        if (oldStart > oldEnd) {
          if (newStart <= newEnd) {
            (k = newEnd + 1),
              (nextSibling =
                k < newBranches.length ? newBranches[k].a : afterReference);
            do {
              insertBefore(newBranches[newStart++], parent, nextSibling);
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
          for (j = newStart; j <= newEnd; ++j) keyIndex.set(newBranches[j], j);
          for (i = oldStart; i <= oldEnd && synced < newLength; ++i)
            (oldBranch = oldBranches[i]),
              (j = keyIndex.get(oldBranch)),
              void 0 !== j &&
                ((pos = pos > j ? 2147483647 : j),
                ++synced,
                (newBranch = newBranches[j]),
                (sources[j - newStart] = i),
                (aNullable[i] = null));
          if (oldLength === oldBranches.length && 0 === synced) {
            for (; newStart < newLength; ++newStart)
              insertBefore(newBranches[newStart], parent, afterReference);
            for (; oldStart < oldLength; ++oldStart)
              removeAndDestroyBranch(oldBranches[oldStart]);
          } else {
            for (i = oldLength - synced; i > 0; )
              (oldBranch = aNullable[oldStart++]),
                null !== oldBranch && (removeAndDestroyBranch(oldBranch), i--);
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
                j = seq.length - 1, k = newBranches.length, i = newLength - 1;
                i >= 0;
                --i
              )
                -1 === sources[i] || j < 0 || i !== seq[j]
                  ? ((pos = i + newStart),
                    (newBranch = newBranches[pos++]),
                    (nextSibling =
                      pos < k ? newBranches[pos].a : afterReference),
                    insertBefore(newBranch, parent, nextSibling))
                  : --j;
            } else if (synced !== newLength)
              for (k = newBranches.length, i = newLength - 1; i >= 0; --i)
                -1 === sources[i] &&
                  ((pos = i + newStart),
                  (newBranch = newBranches[pos++]),
                  (nextSibling = pos < k ? newBranches[pos].a : afterReference),
                  insertBefore(newBranch, parent, nextSibling));
          }
        }
      })(parentNode, oldArray, newArray, afterReference);
    }
    (scope[nodeAccessor + "("] = newMap),
      (scope[nodeAccessor + "!"] = newArray);
  };
}
function bySecondArg(_item, index) {
  return index;
}
function byFirstArg(name) {
  return name;
}
function isDifferentRenderer(a, b) {
  return a !== b && (a?.j || 0) !== b?.j;
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
        : queueSource(scope, valueSignal, valueOrOp),
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
function closure(fn, getIntersection) {
  let intersection2 =
    getIntersection &&
    ((scope, op) => (intersection2 = getIntersection())(scope, op));
  return (scope, valueOrOp) => {
    valueOrOp === MARK
      ? intersection2?.(scope, MARK)
      : (fn && fn(scope, valueOrOp), intersection2?.(scope, DIRTY));
  };
}
function loopClosure(ownerLoopNodeAccessor, fn, getIntersection) {
  let signal = closure(fn, getIntersection),
    loopScopeAccessor = ownerLoopNodeAccessor + "!",
    loopScopeMapAccessor = ownerLoopNodeAccessor + "(",
    helperSignal = (ownerScope, value2) => {
      let loopScopes =
        ownerScope[loopScopeAccessor] ??
        ownerScope[loopScopeMapAccessor]?.values() ??
        [];
      if (loopScopes !== emptyMarkerArray)
        for (let scope of loopScopes)
          scope.f || queueSource(scope, signal, value2);
    };
  return (helperSignal._ = signal), helperSignal;
}
function conditionalClosure(
  ownerConditionalNodeAccessor,
  getRenderer,
  fn,
  getIntersection,
) {
  let signal = closure(fn, getIntersection),
    scopeAccessor = ownerConditionalNodeAccessor + "!",
    rendererAccessor = ownerConditionalNodeAccessor + "(",
    helperSignal = (scope, value2) => {
      let conditionalScope = scope[scopeAccessor];
      conditionalScope &&
        !conditionalScope.f &&
        scope[rendererAccessor]?.j === getRenderer().j &&
        queueSource(conditionalScope, signal, value2);
    };
  return (helperSignal._ = signal), helperSignal;
}
var defaultGetOwnerScope = (scope) => scope._;
function dynamicClosure(
  ownerValueAccessor,
  fn,
  getOwnerScope = defaultGetOwnerScope,
  getIntersection,
) {
  let ownerSubscribersAccessor = ownerValueAccessor + "*",
    _signal = closure(fn, getIntersection),
    helperSignal = (ownerScope, value2) => {
      let subscribers = ownerScope[ownerSubscribersAccessor];
      if (subscribers)
        for (let subscriber of subscribers)
          subscriber.f || queueSource(subscriber, _signal, value2);
    },
    subscribe = (scope) => {
      (getOwnerScope(scope)[ownerSubscribersAccessor] ||= new Set()).add(scope),
        getAbortSignal(scope, -1).addEventListener("abort", () => {
          getOwnerScope(scope)[ownerSubscribersAccessor].delete(scope);
        });
    };
  return (
    (helperSignal._ = (scope, value2) => {
      _signal(scope, value2), subscribe(scope);
    }),
    (helperSignal.E = subscribe),
    helperSignal
  );
}
function setTagVar(scope, childAccessor, tagVarSignal2) {
  scope[childAccessor]["/"] = (valueOrOp) => tagVarSignal2(scope, valueOrOp);
}
var tagVarSignal = (scope, valueOrOp) => scope["/"]?.(valueOrOp);
function setTagVarChange(scope, changeHandler) {
  scope["@"] = changeHandler;
}
var tagVarSignalChange = (scope, value2) => scope["@"]?.(value2),
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
var pendingRenders = [],
  pendingEffects = [],
  rendering = !1;
function queueSource(scope, signal, value2) {
  isScheduled || ((isScheduled = !0), queueMicrotask(flushAndWaitFrame));
  let prevRendering = rendering;
  return (
    (rendering = !0),
    signal(scope, MARK),
    (rendering = prevRendering),
    queueRender(scope, signal, value2),
    value2
  );
}
function queueRender(scope, signal, value2) {
  let i = pendingRenders.length,
    render = { l: scope, I: signal, J: value2, y: i };
  for (pendingRenders.push(render); i; ) {
    let parentIndex = (i - 1) >> 1,
      parent = pendingRenders[parentIndex];
    if (comparePendingRenders(render, parent) >= 0) break;
    (pendingRenders[i] = parent), (i = parentIndex);
  }
  pendingRenders[i] = render;
}
function queueEffect(scope, fn) {
  pendingEffects.push(scope, fn);
}
function run() {
  let effects = pendingEffects;
  try {
    (rendering = !0), runRenders();
  } finally {
    (pendingRenders = []), (pendingEffects = []), (rendering = !1);
  }
  runEffects(effects);
}
function prepareEffects(fn) {
  let prevRenders = pendingRenders,
    prevEffects = pendingEffects,
    preparedEffects = (pendingEffects = []);
  pendingRenders = [];
  try {
    (rendering = !0), fn(), runRenders();
  } finally {
    (rendering = !1),
      (pendingRenders = prevRenders),
      (pendingEffects = prevEffects);
  }
  return preparedEffects;
}
function runEffects(effects = pendingEffects) {
  for (let i = 0; i < effects.length; i += 2) {
    let scope = effects[i];
    (0, effects[i + 1])(scope, scope);
  }
}
function runRenders() {
  for (; pendingRenders.length; ) {
    let render = pendingRenders[0],
      next = pendingRenders.pop();
    if (render !== next) {
      let i = 0,
        mid = pendingRenders.length >> 1,
        item = (pendingRenders[0] = next);
      for (; i < mid; ) {
        let bestChild = 1 + (i << 1),
          right = bestChild + 1;
        if (
          (right < pendingRenders.length &&
            comparePendingRenders(
              pendingRenders[right],
              pendingRenders[bestChild],
            ) < 0 &&
            (bestChild = right),
          comparePendingRenders(pendingRenders[bestChild], item) >= 0)
        )
          break;
        (pendingRenders[i] = pendingRenders[bestChild]), (i = bestChild);
      }
      pendingRenders[i] = item;
    }
    render.l.b?.z || render.I(render.l, render.J);
  }
  !(function () {
    for (let scope of pendingScopes) scope.f = 0;
    pendingScopes = [];
  })();
}
function comparePendingRenders(a, b) {
  return getBranchDepth(a) - getBranchDepth(b) || a.y - b.y;
}
function getBranchDepth(render) {
  return render.l.b?.h || 0;
}
function resetAbortSignal(scope, id) {
  let ctrl = scope.g?.[id];
  ctrl && (queueEffect(ctrl, abort), (scope.g[id] = void 0));
}
function getAbortSignal(scope, id) {
  return (
    scope.b && (scope.b.n ||= new Set()).add(scope),
    ((scope.g ||= {})[id] ||= new AbortController()).signal
  );
}
function abort(ctrl) {
  ctrl.abort();
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
      (scope.a = startNode), (scope.c = endNode);
    },
    runComponentEffects() {
      runEffects(this.effects);
    },
    runComponentDestroy() {
      this.scope && destroyBranch(this.scope);
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
              ]?.p[value2[1]],
          )
        : value2,
    createRenderer(setup, clone, args) {
      let renderer = createRenderer("", void 0, setup, args && (() => args));
      return (renderer.k = clone), renderer;
    },
    render(out, component, renderer, args) {
      let scope = component.scope;
      scope ||
        ((scope = classIdToScope.get(component.id)),
        scope &&
          ((component.scope = scope), classIdToScope.delete(component.id)));
      let applyArgs = renderer.d || noop,
        existing = !1;
      if ("object" == typeof args[0] && "renderBody" in args[0]) {
        let input = args[0],
          normalizedInput = (args[0] = {});
        for (let key in input)
          normalizedInput["renderBody" === key ? "content" : key] = input[key];
      }
      if (
        ((component.effects = prepareEffects(() => {
          scope
            ? (applyArgs(scope, MARK), (existing = !0))
            : ((scope = component.scope = createScope(out.global)),
              (scope._ = renderer.u),
              initRenderer(renderer, scope)),
            applyArgs(scope, args);
        })),
        !existing)
      )
        return scope.a === scope.c ? scope.a : scope.a.parentNode;
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
  let branch,
    dom,
    { $global: $global } = input;
  $global
    ? (({ $global: $global, ...input } = input),
      ($global = { runtimeId: "M", renderId: "_", ...$global }))
    : ($global = { runtimeId: "M", renderId: "_" });
  let args = this.d,
    effects = prepareEffects(() => {
      (branch = createScope($global)),
        (dom = initRenderer(this, branch)),
        args && args(branch, [input]);
    });
  switch (position) {
    case "beforebegin":
      reference.parentNode.insertBefore(dom, reference);
      break;
    case "afterbegin":
      reference.insertBefore(dom, reference.firstChild);
      break;
    case "afterend":
      reference.parentNode.insertBefore(dom, reference.nextSibling);
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
              args(branch, MARK), args(branch, [newInput]);
            }),
          );
      },
      destroy: () => {
        removeAndDestroyBranch(branch);
      },
    }
  );
}
