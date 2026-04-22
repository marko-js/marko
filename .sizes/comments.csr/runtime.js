// size: 6448 (min) 2831 (brotli)
//#region packages/runtime-tags/dist/dom.mjs
let decodeAccessor = (num) =>
    (num + (num < 26 ? 10 : num < 962 ? 334 : 11998)).toString(36),
  defaultDelegator = /* @__PURE__ */ createDelegator(),
  parsers = {},
  nextScopeId = 1e6,
  destroyNestedScopes = function destroyNestedScopes(scope) {
    ((scope.I = 1),
      scope.D?.forEach(destroyNestedScopes),
      scope.B?.forEach(resetControllers));
  },
  isScheduled,
  channel,
  _var_change = (scope, value) => scope.U?.(value),
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
  _for_of = /* @__PURE__ */ loop(([all, by = bySecondArg], cb) => {
    typeof by == "string"
      ? forOf(all, (item, i) => cb(item[by], [item, i]))
      : forOf(all, (item, i) => cb(by(item, i), [item, i]));
  }),
  pendingRenders = [],
  pendingRendersLookup = /* @__PURE__ */ new Map(),
  asyncRendersLookup,
  pendingEffects = [],
  pendingScopes = [],
  rendering,
  runEffects = (effects) => {
    for (let i = 0; i < effects.length; ) effects[i++](effects[i++]);
  },
  runRender = (render) => render.c(render.b, render.d),
  _template = (id, template, walks, setup, inputSignal) => {
    let renderer = _content(id, template, walks, setup, inputSignal)();
    return (
      (renderer.mount = mount),
      (renderer._ = renderer),
      _resume(id, renderer)
    );
  };
function forOf(list, cb) {
  if (list) {
    let i = 0;
    for (let item of list) cb(item, i++);
  }
}
function toArray(opt) {
  return opt ? (Array.isArray(opt) ? opt : [opt]) : [];
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
function destroyBranch(branch) {
  (branch.N?.D?.delete(branch), destroyNestedScopes(branch));
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
function _script(id, fn) {
  return (
    _resume(id, fn),
    (scope) => {
      queueEffect(scope, fn);
    }
  );
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
function enableBranches() {}
function _resume(id, obj) {
  return (registeredValues[id] = obj);
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
function _text(node, value) {
  let normalizedValue = _to_text(value);
  node.data !== normalizedValue && (node.data = normalizedValue);
}
function normalizeAttrValue(value) {
  if (value || value === 0) return value === !0 ? "" : value + "";
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
function bySecondArg(_item, index) {
  return index;
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
function $signalReset(scope, id) {
  let ctrl = scope.A?.[id];
  ctrl && (queueEffect(ctrl, abort), (scope.A[id] = void 0));
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
