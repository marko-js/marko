// size: 17441 (min) 6584 (brotli)
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
function stringifyClassObject(name, value2) {
  return value2 ? name : "";
}
function stringifyStyleObject(name, value2) {
  return value2 || 0 === value2
    ? `${name}:${"number" == typeof value2 && value2 && !/^(--|ta|or|li|z)|cou|nk|it|ag|we|do|w$/.test(name) ? value2 + "px" : value2}`
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
var defaultDelegator = createDelegator();
function on(element, type, handler) {
  void 0 === element["$" + type] &&
    defaultDelegator(element, type, handleDelegated),
    (element["$" + type] = handler || null);
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
    target["$" + ev.type]?.(ev, target),
      (target = ev.bubbles && !ev.cancelBubble && target.parentNode);
}
function stripSpacesAndPunctuation(str) {
  return str.replace(/[^\p{L}\p{N}]/gu, "");
}
var registeredValues = {},
  Render = class {
    l = [];
    m = {};
    z = { _: registeredValues };
    constructor(renders, runtimeId, renderId) {
      (this.A = renders),
        (this.B = runtimeId),
        (this.n = renderId),
        (this.o = renders[renderId]),
        this.p();
    }
    w() {
      this.o.w(), this.p();
    }
    p() {
      let data2 = this.o,
        serializeContext = this.z,
        scopeLookup = this.m,
        visits = data2.v,
        branchIds = new Set(),
        parentBranchIds = new Map();
      if (visits.length) {
        let lastEndNode,
          commentPrefixLen = data2.i.length,
          closestBranchMarkers = new Map(),
          visitNodes = new Set(visits);
        data2.v = [];
        let branchEnd = (branchId, visit, reference) => {
          let branch = (scopeLookup[branchId] ||= {}),
            endNode = reference;
          for (; visitNodes.has((endNode = endNode.previousSibling)); );
          endNode === lastEndNode &&
            (endNode = reference.parentNode.insertBefore(
              new Text(),
              reference,
            )),
            (branch.b = lastEndNode = endNode),
            (branch.a ||= endNode);
          for (let [markerScopeId, markerNode] of closestBranchMarkers)
            4 & branch.a.compareDocumentPosition(markerNode) &&
              2 & reference.compareDocumentPosition(markerNode) &&
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
            scope = (scopeLookup[scopeId] ||= { d: +scopeId }),
            data3 = dataIndex ? commentText.slice(dataIndex) : "",
            token = commentText[commentPrefixLen];
          if ("*" === token) scope[data3] = visit.previousSibling;
          else if ("$" === token) closestBranchMarkers.set(scopeId, visit);
          else if ("[" === token)
            this.e &&
              (dataIndex && branchEnd(this.e, visit, visit),
              this.l.push(this.e)),
              (this.e = scopeId),
              (scope.a = visit);
          else if ("]" === token) {
            scope[data3] = visit;
            let curParent = visit.parentNode,
              startNode = branchEnd(this.e, visit, visit).a;
            curParent !== startNode.parentNode && curParent.prepend(startNode),
              (this.e = this.l.pop());
          } else if ("|" === token || "=" === token) {
            let next = data3.indexOf(" "),
              curNode = visit;
            for (
              scope[~next ? data3.slice(0, next) : data3] =
                "=" === token ? visit.parentNode : visit;
              ~next;

            ) {
              let start = next + 1;
              (next = data3.indexOf(" ", start)),
                (curNode = branchEnd(
                  data3.slice(start, ~next ? next : data3.length),
                  visit,
                  curNode,
                ).b);
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
                ($global.runtimeId = this.B),
                ($global.renderId = this.n));
              for (let scopeId in scopes)
                if ("$" !== scopeId) {
                  let scope = scopes[scopeId],
                    prevScope = scopeLookup[scopeId];
                  (scope.$global = $global),
                    (scope.d = +scopeId),
                    prevScope !== scope &&
                      (scopeLookup[scopeId] = Object.assign(scope, prevScope));
                  let parentBranchId = parentBranchIds.get(scopeId);
                  if (
                    (parentBranchId && (scope.c = scopes[parentBranchId]),
                    branchIds.has(scopeId))
                  ) {
                    let branch = scope,
                      parentBranch = branch.c;
                    (scope.c = branch),
                      parentBranch &&
                        ((branch.q = parentBranch),
                        (parentBranch.j ||= new Set()).add(branch));
                  }
                }
            } else
              i === len || "string" != typeof resumes[i]
                ? delete this.A[this.n]
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
    (registeredValues[id] = (scope) => (value2) => signal(scope, value2)),
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
    if (checkedChange) {
      let newValue = el.checked;
      (el.checked = !newValue), checkedChange(newValue), run();
    }
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
      let oldValue = scope[nodeAccessor + ":"],
        newValue = Array.isArray(oldValue)
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
      checkedValueChange(newValue), run();
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
      if (valueChange) {
        let newValue = el.value;
        (inputType = ev?.inputType),
          setValueAndUpdateSelection(el, scope[nodeAccessor + ":"]),
          valueChange(newValue),
          run(),
          (inputType = "");
      }
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
  let el = scope[nodeAccessor],
    onChange = () => {
      let valueChange = scope[nodeAccessor + ";"];
      if (valueChange) {
        let newValue = Array.isArray(scope[nodeAccessor + ":"])
          ? Array.from(el.selectedOptions, toValueProp)
          : el.value;
        setSelectOptions(el, scope[nodeAccessor + ":"], valueChange),
          valueChange(newValue),
          run();
      }
    };
  el._ ||
    new MutationObserver(() => {
      let value2 = scope[nodeAccessor + ":"];
      (Array.isArray(value2)
        ? value2.length !== el.selectedOptions.length ||
          value2.some((value3, i) => value3 != el.selectedOptions[i].value)
        : el.value != value2) && onChange();
    }).observe(el, { childList: !0, subtree: !0 }),
    syncControllable(el, "input", hasSelectChanged, onChange);
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
    (scope[nodeAccessor].open = scope[nodeAccessor + ":"] =
      normalizeBoolProp(open));
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
      if (openChange && hasChanged()) {
        let newValue = el.open;
        (el.open = !newValue), openChange(newValue), run();
      }
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
var controllableDelegate = createDelegator();
function syncControllable(el, event, hasChanged, onChange) {
  el._ ||
    (controllableDelegate(el, event, handleChange),
    el.form && controllableDelegate(el.form, "reset", handleFormReset),
    isResuming && hasChanged(el) && queueMicrotask(onChange)),
    (el._ = onChange);
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
function normalizeStrProp(value2) {
  return normalizeAttrValue(value2) || "";
}
function normalizeBoolProp(value2) {
  return null != value2 && !1 !== value2;
}
function toValueProp(it) {
  return it.value;
}
var parsers = {};
function parseHTML(html2, ns) {
  let parser = (parsers[ns] ||= document.createElementNS(ns, "template"));
  return (parser.innerHTML = html2), parser.content || parser;
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
function html(scope, value2, accessor) {
  let firstChild = scope[accessor],
    parentNode = firstChild.parentNode,
    lastChild = scope[accessor + "-"] || firstChild,
    newContent = parseHTML(
      value2 || 0 === value2 ? value2 + "" : "",
      parentNode.namespaceURI,
    );
  insertChildNodes(
    parentNode,
    firstChild,
    (scope[accessor] =
      newContent.firstChild || newContent.appendChild(new Text())),
    (scope[accessor + "-"] = newContent.lastChild),
  ),
    removeChildNodes(firstChild, lastChild);
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
function removeChildNodes(startNode, endNode) {
  let stop = endNode.nextSibling,
    current = startNode;
  for (; current !== stop; ) {
    let next = current.nextSibling;
    current.remove(), (current = next);
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
    parent.appendChild(current), (current = next);
  }
  return parent;
}
var pendingScopes = [],
  nextID = 2 ** 32;
function createScope($global, closestBranch) {
  let scope = { d: nextID++, f: 1, c: closestBranch, $global: $global };
  return pendingScopes.push(scope), scope;
}
function skipScope() {
  return nextID++;
}
function destroyBranch(branch) {
  branch.q?.j?.delete(branch), destroyNestedBranches(branch);
}
function destroyNestedBranches(branch) {
  (branch.C = 1),
    branch.j?.forEach(destroyNestedBranches),
    branch.D?.forEach((scope) => {
      for (let id in scope.g) scope.g[id]?.abort();
    });
}
function removeAndDestroyBranch(branch) {
  destroyBranch(branch), removeChildNodes(branch.a, branch.b);
}
function insertBranchBefore(branch, parentNode, nextSibling) {
  insertChildNodes(parentNode, nextSibling, branch.a, branch.b);
}
var pendingRenders = [],
  pendingRendersLookup = new Map(),
  pendingEffects = [],
  rendering = !1;
function queueRender(scope, signal, signalKey, value2, scopeKey = scope.d) {
  let key = 1024 * scopeKey + signalKey,
    existingRender = -1 !== signalKey && pendingRendersLookup.get(key);
  if (existingRender) existingRender.s = value2;
  else {
    let i = pendingRenders.length,
      render = { t: scope, E: signal, s: value2, u: key };
    for (
      pendingRendersLookup.set(key, render), pendingRenders.push(render);
      i;

    ) {
      let parentIndex = (i - 1) >> 1,
        parent = pendingRenders[parentIndex];
      if (comparePendingRenders(render, parent) >= 0) break;
      (pendingRenders[i] = parent), (i = parentIndex);
    }
    pendingRenders[i] = render;
  }
}
function queueEffect(scope, fn) {
  pendingEffects.push(scope, fn);
}
function run() {
  let effects = pendingEffects;
  try {
    (rendering = !0), runRenders();
  } finally {
    (pendingRenders = []),
      (pendingRendersLookup = new Map()),
      (pendingEffects = []),
      (rendering = !1);
  }
  runEffects(effects);
}
function prepareEffects(fn) {
  let prevRenders = pendingRenders,
    prevRendersLookup = pendingRendersLookup,
    prevEffects = pendingEffects,
    preparedEffects = (pendingEffects = []);
  (pendingRenders = []), (pendingRendersLookup = new Map());
  try {
    (rendering = !0), fn(), runRenders();
  } finally {
    (rendering = !1),
      (pendingRenders = prevRenders),
      (pendingRendersLookup = prevRendersLookup),
      (pendingEffects = prevEffects);
  }
  return preparedEffects;
}
function runEffects(effects) {
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
    render.t.c?.C || render.E(render.t, render.s);
  }
  !(function () {
    for (let scope of pendingScopes) scope.f = 0;
    pendingScopes = [];
  })();
}
function comparePendingRenders(a, b) {
  return a.u - b.u;
}
function resetAbortSignal(scope, id) {
  let ctrl = scope.g?.[id];
  ctrl && (queueEffect(ctrl, abort), (scope.g[id] = void 0));
}
function getAbortSignal(scope, id) {
  return (
    scope.c && (scope.c.D ||= new Set()).add(scope),
    ((scope.g ||= {})[id] ||= new AbortController()).signal
  );
}
function abort(ctrl) {
  ctrl.abort();
}
var walker = document.createTreeWalker(document);
function trimWalkString(walkString) {
  let end = walkString.length;
  for (; walkString.charCodeAt(--end) > 47; );
  return walkString.slice(0, end + 1);
}
function walk(startNode, walkCodes, branch) {
  (walker.currentNode = startNode), walkInternal(0, walkCodes, branch);
}
function walkInternal(currentWalkIndex, walkCodes, scope) {
  let value2,
    storedMultiplier = 0,
    currentMultiplier = 0,
    currentScopeIndex = 0;
  for (; currentWalkIndex < walkCodes.length; )
    if (
      ((value2 = walkCodes.charCodeAt(currentWalkIndex++)),
      (currentMultiplier = storedMultiplier),
      (storedMultiplier = 0),
      32 === value2)
    )
      scope[currentScopeIndex++] = walker.currentNode;
    else if (37 === value2 || 49 === value2)
      walker.currentNode.replaceWith(
        (walker.currentNode = scope[currentScopeIndex++] = new Text()),
      ),
        49 === value2 && (scope[currentScopeIndex++] = skipScope());
    else {
      if (38 === value2) return currentWalkIndex;
      if (47 === value2 || 48 === value2)
        (currentWalkIndex = walkInternal(
          currentWalkIndex,
          walkCodes,
          (scope[currentScopeIndex++] = createScope(scope.$global, scope.c)),
        )),
          48 === value2 && (scope[currentScopeIndex++] = skipScope());
      else if (value2 < 92)
        for (value2 = 20 * currentMultiplier + value2 - 67; value2--; )
          walker.nextNode();
      else if (value2 < 107)
        for (value2 = 10 * currentMultiplier + value2 - 97; value2--; )
          walker.nextSibling();
      else if (value2 < 117) {
        for (value2 = 10 * currentMultiplier + value2 - 107; value2--; )
          walker.parentNode();
        walker.nextSibling();
      } else storedMultiplier = 10 * currentMultiplier + value2 - 117;
    }
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
    "string" == typeof tagNameOrRenderer &&
      (branch[0] =
        branch.a =
        branch.b =
          document.createElementNS(
            "svg" === tagNameOrRenderer
              ? "http://www.w3.org/2000/svg"
              : "math" === tagNameOrRenderer
                ? "http://www.w3.org/1998/Math/MathML"
                : parentNode.namespaceURI,
            tagNameOrRenderer,
          )),
    branch
  );
}
function createBranch($global, renderer, parentScope, parentNode) {
  let branch = createScope($global),
    parentBranch = parentScope?.c;
  return (
    (branch._ = renderer.x || parentScope),
    (branch.c = branch),
    parentBranch
      ? ((branch.y = parentBranch.y + 1),
        (branch.q = parentBranch),
        (parentBranch.j ||= new Set()).add(branch))
      : (branch.y = 1),
    renderer.k?.(branch, parentNode.namespaceURI),
    branch
  );
}
function createContent(id, template, rawWalks, setup, getArgs) {
  let args,
    walks = rawWalks ? trimWalkString(rawWalks) : "",
    init2 = template
      ? (branch, ns) => {
          ((cloneCache[ns] ||= {})[template] ||= (function (html2, ns) {
            let { firstChild: firstChild, lastChild: lastChild } = parseHTML(
                html2,
                ns,
              ),
              parent = document.createElementNS(ns, "t");
            return (
              insertChildNodes(parent, null, firstChild, lastChild),
              firstChild === lastChild && firstChild.nodeType < 8
                ? (branch, walks) => {
                    walk(
                      (branch.a = branch.b = firstChild.cloneNode(!0)),
                      walks,
                      branch,
                    );
                  }
                : (branch, walks) => {
                    let clone = parent.cloneNode(!0);
                    walk(clone.firstChild, walks, branch),
                      (branch.a = clone.firstChild),
                      (branch.b = clone.lastChild);
                  }
            );
          })(template, ns))(branch, walks),
            setup && queueRender(branch, setup, -1);
        }
      : (branch) => {
          (branch.a = branch.b = new Text()),
            setup && queueRender(branch, setup, -1);
        };
  return (owner) => ({
    d: id,
    k: init2,
    x: owner,
    get h() {
      return (args ||= getArgs?.());
    },
  });
}
function registerContent(id, template, walks, setup, getArgs) {
  return register(id, createContent(id, template, walks, setup, getArgs));
}
function createRenderer(template, walks, setup, getArgs) {
  return createContent("", template, walks, setup, getArgs)();
}
var cloneCache = {};
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
function state(valueAccessor, fn) {
  let valueChangeAccessor = valueAccessor + "@",
    update = (scope, value2) => {
      scope[valueAccessor] !== value2 &&
        ((scope[valueAccessor] = value2), fn(scope, value2));
    };
  return (scope, value2, valueChange) => (
    rendering
      ? (((scope[valueChangeAccessor] = valueChange) &&
          scope[valueAccessor] !== value2) ||
          !(valueAccessor in scope)) &&
        ((scope[valueAccessor] = value2), fn(scope, value2))
      : scope[valueChangeAccessor]
        ? scope[valueChangeAccessor](value2)
        : (isScheduled ||
            ((isScheduled = !0), queueMicrotask(flushAndWaitFrame)),
          queueRender(scope, update, valueAccessor, value2)),
    value2
  );
}
function value(valueAccessor, fn = () => {}) {
  return (scope, value2) => {
    (!(valueAccessor in scope) || scope[valueAccessor] !== value2) &&
      ((scope[valueAccessor] = value2), fn(scope, value2));
  };
}
var accessorId = 0;
function intersection(id, fn, defaultPending = 1, scopeIdAccessor = "d") {
  return (scope) => {
    scope.f
      ? void 0 === scope[id]
        ? (scope[id] = defaultPending)
        : --scope[id] || fn(scope)
      : queueRender(scope, fn, id, 0, scope[scopeIdAccessor]);
  };
}
function loopClosure(valueAccessor, ownerLoopNodeAccessor, fn) {
  let childSignal = closure(valueAccessor, fn),
    loopScopeAccessor = ownerLoopNodeAccessor + "!",
    loopScopeMapAccessor = ownerLoopNodeAccessor + "(",
    ownerSignal = (ownerScope) => {
      for (let scope of ownerScope[loopScopeAccessor] ||
        ownerScope[loopScopeMapAccessor]?.values() ||
        [])
        scope.f || queueRender(scope, childSignal, -1);
    };
  return (ownerSignal._ = childSignal), ownerSignal;
}
function conditionalClosure(
  valueAccessor,
  ownerConditionalNodeAccessor,
  branch,
  fn,
) {
  let childSignal = closure(valueAccessor, fn),
    scopeAccessor = ownerConditionalNodeAccessor + "!",
    branchAccessor = ownerConditionalNodeAccessor + "(",
    ownerSignal = (scope) => {
      let ifScope = scope[scopeAccessor];
      ifScope &&
        !ifScope.f &&
        scope[branchAccessor] === branch &&
        queueRender(ifScope, childSignal, -1);
    };
  return (ownerSignal._ = childSignal), ownerSignal;
}
function dynamicClosure(valueAccessor, fn, getOwnerScope) {
  let subscribersAccessor = "?" + accessorId++,
    childSignal = closure(valueAccessor, fn, getOwnerScope),
    ownerSignal = (ownerScope) => {
      let subscribers = ownerScope[subscribersAccessor];
      if (subscribers)
        for (let subscriber of subscribers)
          subscriber.f || queueRender(subscriber, childSignal, -1);
    },
    subscribe = (scope) => {
      let owner = getOwnerScope ? getOwnerScope(scope) : scope._,
        subscribers = (owner[subscribersAccessor] ||= new Set());
      subscribers.has(scope) ||
        (subscribers.add(scope),
        getAbortSignal(scope, -1).addEventListener("abort", () =>
          subscribers.delete(scope),
        ));
    };
  return (
    (ownerSignal.F = subscribe),
    (ownerSignal._ = (scope) => {
      childSignal(scope), subscribe(scope);
    }),
    ownerSignal
  );
}
function registerDynamicClosure(registryId, valueAccessor, fn, getOwnerScope) {
  let signal = dynamicClosure(valueAccessor, fn, getOwnerScope);
  return register(registryId, signal.F), signal;
}
function closure(valueAccessor, fn, getOwnerScope) {
  return (scope) => {
    fn(scope, (getOwnerScope ? getOwnerScope(scope) : scope._)[valueAccessor]);
  };
}
function setTagVar(scope, childAccessor, tagVarSignal2) {
  scope[childAccessor]["/"] = (value2) => tagVarSignal2(scope, value2);
}
var tagVarSignal = (scope, value2) => scope["/"]?.(value2);
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
function effect(id, fn) {
  return (
    register(id, fn),
    (scope) => {
      queueEffect(scope, fn);
    }
  );
}
function conditional(nodeAccessor, ...branches) {
  let branchAccessor = nodeAccessor + "(";
  return (scope, newBranch) => {
    newBranch !== scope[branchAccessor] &&
      setConditionalRenderer(
        scope,
        nodeAccessor,
        branches[(scope[branchAccessor] = newBranch)],
        createBranch,
      );
  };
}
var dynamicTag = function (nodeAccessor, getContent, getTagVar, inputIsArgs) {
  let childScopeAccessor = nodeAccessor + "!",
    rendererAccessor = nodeAccessor + "(";
  return (scope, newRenderer, getInput) => {
    let normalizedRenderer = (function (value2) {
      if (value2) return value2.content || value2.default || value2;
    })(newRenderer);
    if (
      ((!(rendererAccessor in scope) ||
        (a = scope[rendererAccessor]) !== (b = normalizedRenderer) ||
        a?.d !== b?.d) &&
        ((scope[rendererAccessor] = normalizedRenderer),
        setConditionalRenderer(
          scope,
          nodeAccessor,
          normalizedRenderer || (getContent ? getContent(scope) : void 0),
          createBranchWithTagNameOrRenderer,
        ),
        getTagVar && setTagVar(scope, childScopeAccessor, getTagVar()),
        getContent &&
          "string" == typeof normalizedRenderer &&
          setConditionalRenderer(
            scope[childScopeAccessor],
            0,
            getContent(scope),
            createBranch,
          )),
      normalizedRenderer)
    ) {
      let input = getInput?.();
      "string" == typeof normalizedRenderer
        ? attrs(
            scope[childScopeAccessor],
            0,
            (inputIsArgs ? input[0] : input) || {},
          )
        : normalizedRenderer.h?.(
            scope[childScopeAccessor],
            inputIsArgs
              ? input
              : [
                  getContent
                    ? { ...input, content: getContent(scope) }
                    : input || {},
                ],
          );
    }
    var a, b;
  };
};
function setConditionalRenderer(
  scope,
  nodeAccessor,
  newRenderer,
  createBranch2,
) {
  let referenceNode = scope[nodeAccessor],
    prevBranch = scope[nodeAccessor + "!"],
    parentNode =
      referenceNode.nodeType > 1
        ? (prevBranch?.a || referenceNode).parentNode
        : referenceNode,
    newBranch = (scope[nodeAccessor + "!"] =
      newRenderer &&
      createBranch2(scope.$global, newRenderer, scope, parentNode));
  referenceNode === parentNode
    ? (prevBranch &&
        (destroyBranch(prevBranch), (referenceNode.textContent = "")),
      newBranch && insertBranchBefore(newBranch, parentNode, null))
    : prevBranch
      ? (newBranch
          ? insertBranchBefore(newBranch, parentNode, prevBranch.a)
          : parentNode.insertBefore(referenceNode, prevBranch.a),
        removeAndDestroyBranch(prevBranch))
      : newBranch &&
        (insertBranchBefore(newBranch, parentNode, referenceNode),
        referenceNode.remove());
}
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
  let params = renderer.h;
  return (scope, value2) => {
    let referenceNode = scope[nodeAccessor],
      oldMap = scope[nodeAccessor + "("],
      oldArray = oldMap
        ? scope[nodeAccessor + "!"] || [...oldMap.values()]
        : [],
      parentNode =
        referenceNode.nodeType > 1
          ? referenceNode.parentNode || oldArray[0].a.parentNode
          : referenceNode,
      newMap = (scope[nodeAccessor + "("] = new Map()),
      newArray = (scope[nodeAccessor + "!"] = []);
    forEach(value2, (key, args) => {
      let branch =
        oldMap?.get(key) ||
        createBranch(scope.$global, renderer, scope, parentNode);
      params?.(branch, args), newMap.set(key, branch), newArray.push(branch);
    });
    let afterReference = null;
    referenceNode !== parentNode &&
      (oldArray.length
        ? ((afterReference = oldArray[oldArray.length - 1].b.nextSibling),
          newArray.length ||
            parentNode.insertBefore(referenceNode, afterReference))
        : newArray.length &&
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
              insertBranchBefore(newBranches[newStart++], parent, nextSibling);
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
              insertBranchBefore(newBranches[newStart], parent, afterReference);
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
                  result = [0];
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
                    insertBranchBefore(newBranch, parent, nextSibling))
                  : --j;
            } else if (synced !== newLength)
              for (k = newBranches.length, i = newLength - 1; i >= 0; --i)
                -1 === sources[i] &&
                  ((pos = i + newStart),
                  (newBranch = newBranches[pos++]),
                  (nextSibling = pos < k ? newBranches[pos].a : afterReference),
                  insertBranchBefore(newBranch, parent, nextSibling));
          }
        }
      })(parentNode, oldArray, newArray, afterReference);
  };
}
function bySecondArg(_item, index) {
  return index;
}
function byFirstArg(name) {
  return name;
}
var classIdToBranch = new Map(),
  compat = {
    patchDynamicTag: function (fn) {
      dynamicTag = fn(dynamicTag);
    },
    queueEffect: queueEffect,
    init(warp10Noop) {
      register("$C_s", (branch) => {
        classIdToBranch.set(branch.m5c, branch);
      }),
        register("$C_b", warp10Noop);
    },
    registerRenderer(fn) {
      register("$C_r", fn);
    },
    isRenderer: (renderer) => renderer.k,
    getStartNode: (branch) => branch.a,
    setScopeNodes(branch, startNode, endNode) {
      (branch.a = startNode), (branch.b = endNode);
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
              ]?.m[value2[1]],
          )
        : value2,
    createRenderer(args, clone) {
      let renderer = createRenderer(0, 0, 0, () => args);
      return (
        (renderer.k = (branch) => {
          let cloned = clone();
          (branch.a = cloned.startNode), (branch.b = cloned.endNode);
        }),
        renderer
      );
    },
    render(out, component, renderer, args) {
      let branch = component.scope;
      branch ||
        ((branch = classIdToBranch.get(component.id)),
        branch &&
          ((component.scope = branch), classIdToBranch.delete(component.id)));
      let applyArgs = renderer.h || noop,
        existing = !1;
      if ("object" == typeof args[0] && "renderBody" in args[0]) {
        let input = args[0],
          normalizedInput = (args[0] = {});
        for (let key in input)
          normalizedInput["renderBody" === key ? "content" : key] = input[key];
      }
      if (
        ((component.effects = prepareEffects(() => {
          branch
            ? (existing = !0)
            : (branch = component.scope =
                createBranch(out.global, renderer, renderer.x, document.body)),
            applyArgs(branch, args);
        })),
        !existing)
      )
        return toInsertNode(branch.a, branch.b);
    },
  };
function noop() {}
var createTemplate = (...contentArgs) => {
  let renderer = createContent(...contentArgs)();
  return (
    (renderer.mount = mount),
    (renderer._ = renderer),
    register(contentArgs[0], renderer)
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
      (parentNode = reference.parentNode), (nextSibling = reference);
      break;
    case "afterbegin":
      nextSibling = reference.firstChild;
      break;
    case "afterend":
      (parentNode = reference.parentNode),
        (nextSibling = reference.nextSibling);
  }
  let args = this.h,
    effects = prepareEffects(() => {
      (branch = createBranch($global, this, void 0, parentNode)),
        args?.(branch, [input]);
    });
  return (
    insertChildNodes(parentNode, nextSibling, branch.a, branch.b),
    runEffects(effects),
    {
      update(newInput) {
        args &&
          runEffects(
            prepareEffects(() => {
              args(branch, [newInput]);
            }),
          );
      },
      destroy() {
        removeAndDestroyBranch(branch);
      },
    }
  );
}
