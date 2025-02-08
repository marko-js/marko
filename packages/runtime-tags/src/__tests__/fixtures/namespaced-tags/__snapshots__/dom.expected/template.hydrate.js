// size: 1027 (min) 427 (brotli)
const _Child_content2 = _$.register("a0", _$.createRendererWithOwner("Hi", "")),
  _Child_content = _$.register("a1", _$.createRendererWithOwner("Hi", "")),
  _input_value$Parent_content = _$.registerSubscriber(
    "a2",
    _$.dynamicClosure((_scope, input_value) => _$.html(_scope, input_value, 0)),
  ),
  _setup$Parent_content = (_scope) => {
    _input_value$Parent_content._(_scope, _scope._[10]);
  },
  _Parent_content = _$.register(
    "a3",
    _$.createRendererWithOwner(" ", " ", _setup$Parent_content),
  ),
  _expr_Parent_Child_effect = _$.effect(
    "a4",
    (_scope, { 11: Parent, 12: Child }) => {
      for (const node of _scope[0].querySelectorAll("a"))
        node.getAttribute("ns") !== node.namespaceURI &&
          node.setAttribute("ns", node.namespaceURI);
    },
  ),
  _expr_Parent_Child = _$.intersection(2, (_scope) => {
    _expr_Parent_Child_effect(_scope);
  }),
  _Parent_input = _$.dynamicTagAttrs(5, _Parent_content),
  _dynamicTag3 = _$.dynamicTag(
    5,
    (_scope) => _Parent_input(_scope, () => ({})),
    () => _Parent_input,
  ),
  _Child_input2 = _$.dynamicTagAttrs(4, _Child_content2),
  _dynamicTag2 = _$.dynamicTag(
    4,
    (_scope) => _Child_input2(_scope, () => ({ href: "#bar" })),
    () => _Child_input2,
  ),
  _Child_input = _$.dynamicTagAttrs(2, _Child_content),
  _dynamicTag = _$.dynamicTag(
    2,
    (_scope) => _Child_input(_scope, () => ({ href: "#bar" })),
    () => _Child_input,
  ),
  _Child_effect = _$.effect("a5", (_scope, { 12: Child }) =>
    _$.on(_scope[7], "click", function () {
      _Child(_scope, "a" === Child ? null : "a");
    }),
  ),
  _Child = _$.state(
    12,
    (_scope, Child) => {
      _Child_effect(_scope),
        _dynamicTag(_scope, Child || _Child_content(_scope)),
        _dynamicTag2(_scope, Child || _Child_content2(_scope));
    },
    () => _$.intersections([_expr_Parent_Child, _dynamicTag, _dynamicTag2]),
  ),
  _Parent_effect = _$.effect("a6", (_scope, { 11: Parent }) =>
    _$.on(_scope[6], "click", function () {
      _Parent(_scope, "div" === Parent ? "svg" : "div");
    }),
  ),
  _Parent = _$.state(
    11,
    (_scope, Parent) => {
      _Parent_effect(_scope),
        _dynamicTag3(_scope, Parent || _Parent_content(_scope));
    },
    () => _$.intersections([_expr_Parent_Child, _dynamicTag3]),
  );
init();
