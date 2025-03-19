// size: 18809 (min) 7115 (brotli)
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
function normalizeDynamicRenderer(value2) {
  return value2 ? value2.content || value2.default || value2 : void 0;
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
var registeredValues = {};
function init(runtimeId = "M") {
  let resumeRender,
    renders = window[runtimeId],
    defineRuntime = (desc) => Object.defineProperty(window, runtimeId, desc),
    initRuntime = (renders2) => {
      defineRuntime({
        value: (resumeRender = (renderId) => {
          let currentScopeId,
            render = (resumeRender[renderId] =
              renders2[renderId] || renders2(renderId)),
            walk2 = render.w,
            commentPrefixLen = render.i.length,
            scopeStack = [],
            scopeLookup = (render.s = {}),
            serializeContext = { _: registeredValues },
            branchIds = new Set(),
            parentBranchIds = new Map(),
            closestBranchMarkers = new Map();
          return (
            (render.w = () => {
              walk2.call(render);
              let visits = render.v,
                resumes = render.r;
              if (visits.length) {
                let lastEndNode,
                  visitNodes = new Set(visits);
                render.v = [];
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
                    scope = (scopeLookup[scopeId] ||= { e: +scopeId }),
                    data2 = dataIndex ? commentText.slice(dataIndex) : "",
                    token = commentText[commentPrefixLen];
                  if ("*" === token) {
                    let node = (scope[data2] = visit.previousSibling);
                    scope[data2 + ">"] = () => node;
                  } else if ("$" === token)
                    closestBranchMarkers.set(scopeId, visit);
                  else if ("[" === token)
                    currentScopeId &&
                      (dataIndex && branchEnd(currentScopeId, visit, visit),
                      scopeStack.push(currentScopeId)),
                      (currentScopeId = scopeId),
                      (scope.a = visit);
                  else if ("]" === token) {
                    scope[data2] = visit;
                    let curParent = visit.parentNode,
                      startNode = branchEnd(currentScopeId, visit, visit).a;
                    curParent !== startNode.parentNode &&
                      curParent.prepend(startNode),
                      (currentScopeId = scopeStack.pop());
                  } else if ("|" === token || "=" === token) {
                    let next = data2.indexOf(" "),
                      curNode = visit;
                    for (
                      scope[~next ? data2.slice(0, next) : data2] =
                        "=" === token ? visit.parentNode : visit;
                      ~next;

                    ) {
                      let start = next + 1;
                      (next = data2.indexOf(" ", start)),
                        (curNode = branchEnd(
                          data2.slice(start, ~next ? next : data2.length),
                          visit,
                          curNode,
                        ).b);
                    }
                  }
                }
              }
              if (resumes)
                try {
                  (render.r = []), (isResuming = !0);
                  for (let i = 0; i < resumes.length; i++) {
                    let serialized = resumes[i];
                    if ("function" == typeof serialized) {
                      let scopes = serialized(serializeContext),
                        { $global: $global } = scopeLookup;
                      $global ||
                        ((scopeLookup.$global = $global = scopes.$ || {}),
                        ($global.runtimeId = runtimeId),
                        ($global.renderId = renderId),
                        ($global.f = 1e6));
                      for (let scopeId in scopes)
                        if ("$" !== scopeId) {
                          let scope = scopes[scopeId],
                            prevScope = scopeLookup[scopeId];
                          (scope.$global = $global),
                            (scope.e = +scopeId),
                            prevScope !== scope &&
                              (scopeLookup[scopeId] = Object.assign(
                                scope,
                                prevScope,
                              ));
                          let parentBranchId = parentBranchIds.get(scopeId);
                          if (
                            (parentBranchId &&
                              (scope.c = scopes[parentBranchId]),
                            branchIds.has(scopeId))
                          ) {
                            let branch = scope,
                              parentBranch = branch.c;
                            (scope.c = branch),
                              parentBranch &&
                                ((branch.g = parentBranch),
                                (parentBranch.o ||= new Set()).add(branch));
                          }
                        }
                    } else
                      registeredValues[resumes[++i]](
                        scopeLookup[serialized],
                        scopeLookup[serialized],
                      );
                  }
                } finally {
                  isResuming = !1;
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
var isResuming = !1;
function register(id, obj) {
  return (registeredValues[id] = obj), obj;
}
function registerBoundSignal(id, signal) {
  return (
    (registeredValues[id] = (scope) => (value2) => signal(scope, value2)),
    signal
  );
}
function nodeRef(id, key) {
  return register(id, (scope) => () => scope[key]());
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
    pendingEffects.unshift(
      () => setSelectOptions(scope[nodeAccessor], value2, valueChange),
      scope,
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
  if (el.value !== value2) {
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
            stripSpacesAndPunctuation(updatedValue[pos]) && relevantIndex++,
              pos++;
          return pos;
        }
      }
      return -1;
    })(
      inputType,
      el.getRootNode().activeElement === el && el.selectionStart,
      el.value,
      (el.value = value2),
    );
    ~updatedPosition && (el.selectionStart = updatedPosition);
  }
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
var pendingScopes = [];
function createScope($global, closestBranch) {
  let scope = { e: $global.f++, h: 1, c: closestBranch, $global: $global };
  return pendingScopes.push(scope), scope;
}
function skipScope(scope) {
  return scope.$global.f++;
}
function destroyBranch(branch) {
  branch.g?.o?.delete(branch), destroyNestedBranches(branch);
}
function destroyNestedBranches(branch) {
  (branch.k = 1),
    branch.o?.forEach(destroyNestedBranches),
    branch.A?.forEach((scope) => {
      for (let id in scope.l) scope.l[id]?.abort();
    });
}
function removeAndDestroyBranch(branch) {
  destroyBranch(branch), removeChildNodes(branch.a, branch.b);
}
function insertBranchBefore(branch, parentNode, nextSibling) {
  insertChildNodes(parentNode, nextSibling, branch.a, branch.b);
}
function tempDetatchBranch(branch) {
  insertChildNodes(
    branch.a.ownerDocument.createDocumentFragment(),
    null,
    branch.a,
    branch.b,
  );
}
var walker = document.createTreeWalker(document);
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
    ) {
      let node = walker.currentNode;
      (scope[currentScopeIndex] = node),
        (scope[currentScopeIndex++ + ">"] = () => node);
    } else if (37 === value2 || 49 === value2)
      walker.currentNode.replaceWith(
        (walker.currentNode = scope[currentScopeIndex++] = new Text()),
      ),
        49 === value2 && (scope[currentScopeIndex++] = skipScope(scope));
    else {
      if (38 === value2) return currentWalkIndex;
      if (47 === value2 || 48 === value2)
        (currentWalkIndex = walkInternal(
          currentWalkIndex,
          walkCodes,
          (scope[currentScopeIndex++] = createScope(scope.$global, scope.c)),
        )),
          48 === value2 && (scope[currentScopeIndex++] = skipScope(scope));
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
function createBranch($global, renderer, parentScope, parentNode) {
  let branch = createScope($global),
    parentBranch = parentScope?.c;
  return (
    (branch._ = renderer.m || parentScope),
    (branch.c = branch),
    parentBranch &&
      ((branch.g = parentBranch), (parentBranch.o ||= new Set()).add(branch)),
    renderer.p?.(branch, parentNode.namespaceURI),
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
  return (
    (renderer.q || renderer.u) &&
      queueRender(
        branch,
        (branch2) => {
          renderer.q?.(branch2), renderer.u?.(branch2);
        },
        -1,
      ),
    branch
  );
}
function createContent(
  id,
  template,
  walks,
  setup,
  params,
  closures,
  dynamicScopesAccessor,
) {
  (walks = walks ? walks.replace(/[^\0-1]+$/, "") : ""),
    (setup ||= void 0),
    (params ||= void 0),
    (closures ||= void 0);
  let clone = template
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
        })(template, ns))(branch, walks);
      }
    : (branch) => {
        walk((branch.a = branch.b = new Text()), walks, branch);
      };
  return (owner) => ({
    e: id,
    p: clone,
    m: owner,
    q: setup,
    d: params,
    u: closures,
    n: dynamicScopesAccessor,
  });
}
function registerContent(
  id,
  template,
  walks,
  setup,
  params,
  closures,
  dynamicScopesAccessor,
) {
  return register(
    id,
    createContent(
      id,
      template,
      walks,
      setup,
      params,
      closures,
      dynamicScopesAccessor,
    ),
  );
}
function createRenderer(template, walks, setup, params, closures) {
  return createContent("", template, walks, setup, params, closures)();
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
function intersection(id, fn, defaultPending = 1, scopeIdAccessor = "e") {
  return (scope) => {
    scope.h
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
      let scopes =
          ownerScope[loopScopeAccessor] ||
          ownerScope[loopScopeMapAccessor]?.values() ||
          [],
        [firstScope] = scopes;
      firstScope &&
        queueRender(
          ownerScope,
          () => {
            for (let scope of scopes)
              !scope.h && !scope.k && childSignal(scope);
          },
          -1,
          0,
          firstScope.e,
        );
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
        !ifScope.h &&
        scope[branchAccessor] === branch &&
        queueRender(ifScope, childSignal, -1);
    };
  return (ownerSignal._ = childSignal), ownerSignal;
}
function subscribeToScopeSet(ownerScope, accessor, scope) {
  let subscribers = (ownerScope[accessor] ||= new Set());
  subscribers.has(scope) ||
    (subscribers.add(scope),
    getAbortSignal(scope, -1).addEventListener("abort", () =>
      ownerScope[accessor].delete(scope),
    ));
}
function dynamicClosure(...closureSignals) {
  let [{ x: ___scopeInstancesAccessor, y: ___signalIndexAccessor }] =
    closureSignals;
  for (let i = closureSignals.length; i--; ) closureSignals[i].B = i;
  return (scope) => {
    if (scope[___scopeInstancesAccessor])
      for (let childScope of scope[___scopeInstancesAccessor])
        childScope.h ||
          queueRender(
            childScope,
            closureSignals[childScope[___signalIndexAccessor]],
            -1,
          );
  };
}
function dynamicClosureRead(valueAccessor, fn, getOwnerScope) {
  let childSignal = closure(valueAccessor, fn, getOwnerScope),
    closureSignal = (scope) => {
      (scope[closureSignal.y] = closureSignal.B),
        childSignal(scope),
        subscribeToScopeSet(
          getOwnerScope ? getOwnerScope(scope) : scope._,
          closureSignal.x,
          scope,
        );
    };
  return (
    (closureSignal.x = valueAccessor + "!"),
    (closureSignal.y = valueAccessor + "("),
    closureSignal
  );
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
function hoist(...path) {
  return (scope) => {
    let getOne = (...args) =>
        iterator()
          .next()
          .value(...args),
      iterator = (getOne[Symbol.iterator] = () =>
        traverseAllHoisted(scope, path));
    return getOne;
  };
}
function awaitTag(nodeAccessor, renderer) {
  let promiseAccessor = nodeAccessor + "?",
    branchAccessor = nodeAccessor + "!";
  return (scope, promise) => {
    let tryBranch = scope.c,
      awaitBranch = scope[branchAccessor],
      referenceNode = scope[nodeAccessor],
      namespaceNode = (awaitBranch?.a ?? referenceNode).parentNode;
    for (; tryBranch && !tryBranch["%"]; ) tryBranch = tryBranch.g;
    let thisPromise = (scope[promiseAccessor] = promise
      .then((data2) => {
        if (scope.c?.k || scope[promiseAccessor] !== thisPromise) return;
        scope[promiseAccessor] = void 0;
        let effects = prepareEffects(() => {
          (!awaitBranch || !tryBranch) &&
            (insertBranchBefore(
              (awaitBranch ??= scope[branchAccessor] =
                createAndSetupBranch(
                  scope.$global,
                  renderer,
                  scope,
                  namespaceNode,
                )),
              referenceNode.parentNode,
              referenceNode,
            ),
            referenceNode.remove()),
            renderer.d?.(awaitBranch, [data2]);
        });
        if (tryBranch) {
          if (!--tryBranch["."]) {
            let placeholderBranch = tryBranch["#"];
            placeholderBranch
              ? (insertBranchBefore(
                  tryBranch,
                  placeholderBranch.a.parentNode,
                  placeholderBranch.a,
                ),
                removeAndDestroyBranch(placeholderBranch))
              : insertBranchBefore(
                  tryBranch,
                  referenceNode.parentNode,
                  referenceNode,
                );
          }
        } else runEffects(effects);
      })
      .catch((error) => {
        let tryBranch2 = scope.c;
        for (; tryBranch2 && !tryBranch2["^"]; ) tryBranch2 = tryBranch2.g;
        tryBranch2
          ? (setConditionalRenderer(
              tryBranch2._,
              tryBranch2["*"],
              tryBranch2["^"],
              createAndSetupBranch,
            ),
            tryBranch2["^"].d?.(tryBranch2._[tryBranch2["*"] + "!"], [error]))
          : setTimeout(() => {
              throw error;
            });
      }));
    tryBranch
      ? (tryBranch["."] ||
          ((tryBranch["."] = 0),
          requestAnimationFrame(() => {
            if (tryBranch["."] && !tryBranch.k) {
              insertBranchBefore(
                (tryBranch["#"] = createAndSetupBranch(
                  scope.$global,
                  tryBranch["%"],
                  tryBranch._,
                  tryBranch.a.parentNode,
                )),
                tryBranch.a.parentNode,
                tryBranch.a,
              ),
                tempDetatchBranch(tryBranch);
            }
          })),
        tryBranch["."]++)
      : awaitBranch &&
        (awaitBranch.a.parentNode.insertBefore(referenceNode, awaitBranch.a),
        tempDetatchBranch(awaitBranch));
  };
}
function createTry(nodeAccessor, tryContent) {
  let branchAccessor = nodeAccessor + "!";
  return (scope, input) => {
    scope[branchAccessor] ||
      setConditionalRenderer(
        scope,
        nodeAccessor,
        tryContent,
        createAndSetupBranch,
      );
    let branch = scope[branchAccessor];
    branch &&
      ((branch["*"] = nodeAccessor),
      (branch["^"] = normalizeDynamicRenderer(input.catch)),
      (branch["%"] = normalizeDynamicRenderer(input.placeholder)));
  };
}
function conditional(nodeAccessor, ...branches) {
  let branchAccessor = nodeAccessor + "(";
  return (scope, newBranch) => {
    newBranch !== scope[branchAccessor] &&
      setConditionalRenderer(
        scope,
        nodeAccessor,
        branches[(scope[branchAccessor] = newBranch)],
        createAndSetupBranch,
      );
  };
}
var dynamicTag = function (nodeAccessor, getContent, getTagVar, inputIsArgs) {
  let childScopeAccessor = nodeAccessor + "!",
    rendererAccessor = nodeAccessor + "(";
  return (scope, newRenderer, getInput) => {
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
        getTagVar && setTagVar(scope, childScopeAccessor, getTagVar()),
        "string" == typeof normalizedRenderer)
      ) {
        if (getContent) {
          let content = getContent(scope);
          setConditionalRenderer(
            scope[childScopeAccessor],
            0,
            content,
            createAndSetupBranch,
          ),
            content.n &&
              subscribeToScopeSet(
                content.m,
                content.n,
                scope[childScopeAccessor]["0!"],
              );
        }
      } else
        normalizedRenderer?.n &&
          subscribeToScopeSet(
            normalizedRenderer.m,
            normalizedRenderer.n,
            scope[childScopeAccessor],
          );
    if (normalizedRenderer) {
      let args = getInput?.();
      if ("string" == typeof normalizedRenderer)
        attrs(
          scope[childScopeAccessor],
          0,
          (inputIsArgs ? args[0] : args) || {},
        );
      else if (normalizedRenderer.d)
        if (inputIsArgs)
          normalizedRenderer.d(
            scope[childScopeAccessor],
            normalizedRenderer._ ? args[0] : args,
          );
        else {
          let inputWithContent = getContent
            ? { ...args, content: getContent(scope) }
            : args || {};
          normalizedRenderer.d(
            scope[childScopeAccessor],
            normalizedRenderer._ ? inputWithContent : [inputWithContent],
          );
        }
    }
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
  let params = renderer.d;
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
        createAndSetupBranch(scope.$global, renderer, scope, parentNode);
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
      ? (branch[0] =
          branch.a =
          branch.b =
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
var pendingRenders = [],
  pendingRendersLookup = new Map(),
  pendingEffects = [],
  rendering = !1,
  scopeKeyOffset = 1e3;
function queueRender(scope, signal, signalKey, value2, scopeKey = scope.e) {
  let key = scopeKey * scopeKeyOffset + signalKey,
    existingRender = signalKey >= 0 && pendingRendersLookup.get(key);
  if (existingRender) existingRender.z = value2;
  else {
    let render = { j: key, t: scope, C: signal, z: value2 },
      i = pendingRenders.push(render) - 1;
    for (; i; ) {
      let parentIndex = (i - 1) >> 1,
        parent = pendingRenders[parentIndex];
      if (key - parent.j >= 0) break;
      (pendingRenders[i] = parent), (i = parentIndex);
    }
    signalKey >= 0 && pendingRendersLookup.set(key, render),
      (pendingRenders[i] = render);
  }
}
function queueEffect(scope, fn) {
  pendingEffects.push(fn, scope);
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
  for (let scope, i = 0; i < effects.length; )
    effects[i++]((scope = effects[i++]), scope);
}
function runRenders() {
  for (; pendingRenders.length; ) {
    let render = pendingRenders[0],
      item = pendingRenders.pop();
    if (render !== item) {
      let i = 0,
        mid = pendingRenders.length >> 1,
        key = (pendingRenders[0] = item).j;
      for (; i < mid; ) {
        let bestChild = 1 + (i << 1),
          right = bestChild + 1;
        if (
          (right < pendingRenders.length &&
            pendingRenders[right].j - pendingRenders[bestChild].j < 0 &&
            (bestChild = right),
          pendingRenders[bestChild].j - key >= 0)
        )
          break;
        (pendingRenders[i] = pendingRenders[bestChild]), (i = bestChild);
      }
      pendingRenders[i] = item;
    }
    render.t.c?.k || runRender(render);
  }
  !(function () {
    for (let scope of pendingScopes) scope.h = 0;
    pendingScopes = [];
  })();
}
var runRender = (render) => render.C(render.t, render.z),
  enableCatch = () => {
    (enableCatch = () => {}),
      (runRender = ((runRender2) => (render) => {
        try {
          runRender2(render);
        } catch (error) {
          let branch = render.t.c;
          for (; branch && !branch["^"]; ) branch = branch.g;
          if (!branch) throw error;
          setConditionalRenderer(
            branch._,
            branch["*"],
            branch["^"],
            createAndSetupBranch,
          ),
            branch["^"].d?.(branch._[branch["*"] + "!"], [error]);
        }
      })(runRender));
  };
function resetAbortSignal(scope, id) {
  let ctrl = scope.l?.[id];
  ctrl && (queueEffect(ctrl, abort), (scope.l[id] = void 0));
}
function getAbortSignal(scope, id) {
  return (
    scope.c && (scope.c.A ||= new Set()).add(scope),
    ((scope.l ||= {})[id] ||= new AbortController()).signal
  );
}
function abort(ctrl) {
  ctrl.abort();
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
    isRenderer: (renderer) => renderer.p,
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
              ]?.s[value2[1]],
          )
        : value2,
    createRenderer(params, clone) {
      let renderer = createRenderer(0, 0, 0, params);
      return (
        (renderer.p = (branch) => {
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
      let existing = !1;
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
            : ((out.global.f ||= 0),
              (branch = component.scope =
                createAndSetupBranch(
                  out.global,
                  renderer,
                  renderer.m,
                  document.body,
                ))),
            renderer.d?.(branch, renderer._ ? args[0] : args);
        })),
        !existing)
      )
        return toInsertNode(branch.a, branch.b);
    },
  },
  createTemplate = (id, template, walks, setup, inputSignal) => {
    let renderer = createContent(id, template, walks, setup, inputSignal)();
    return (
      (renderer.mount = mount), (renderer._ = renderer), register(id, renderer)
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
        ($global = { f: 0, runtimeId: "M", renderId: "_", ...$global }))
      : ($global = { f: 0, runtimeId: "M", renderId: "_" }),
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
  let args = this.d,
    effects = prepareEffects(() => {
      (branch = createBranch($global, this, void 0, parentNode)),
        this.q?.(branch),
        args?.(branch, input);
    });
  return (
    insertChildNodes(parentNode, nextSibling, branch.a, branch.b),
    runEffects(effects),
    {
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
