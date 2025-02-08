// size: 838 (min) 396 (brotli)
const _content_input = _$.dynamicTagAttrs(0),
  _expr_Text_value = _$.intersection(
    2,
    (_scope) => {
      const { 4: value } = _scope;
      _content_input(_scope, () => value);
    },
    () => _content_input,
  ),
  _dynamicTag = _$.dynamicTag(0, 0, () => _expr_Text_value),
  _value_ = _$.value(4, 0, () => _expr_Text_value),
  _content_ = _$.value(
    3,
    (_scope, content) => _dynamicTag(_scope, content),
    () => _dynamicTag,
  ),
  _inner$child_content = _$.value(3, (_scope, inner) =>
    _$.data(_scope[1], inner),
  ),
  _outer$child_content = _$.registerSubscriber(
    "b0",
    _$.dynamicClosure((_scope, outer) => _$.data(_scope[0], outer)),
  ),
  _params_3$child_content = _$.value(2, (_scope, _params_3) =>
    _inner$child_content(_scope, _params_3[0]),
  ),
  _setup$child_content = (_scope) => {
    _outer$child_content._(_scope, _scope._[2]);
  },
  _child_content2 = _$.register(
    "b1",
    _$.createRendererWithOwner(
      "<div><!>.<!></div>",
      "D%c%",
      _setup$child_content,
      () => _params_3$child_content,
    ),
  ),
  _y$child_content = _$.registerSubscriber(
    "b2",
    _$.dynamicClosure(
      (_scope, y) => _value_(_scope[0], y),
      void 0,
      () => _$.inChild(0, _value_),
    ),
  ),
  _outer$child_content2 = _$.value(2, (_scope, outer) =>
    _outer$child_content(_scope, outer),
  ),
  _params_2$child_content = _$.value(1, (_scope, _params_2) =>
    _outer$child_content2(_scope, _params_2[0]),
  ),
  _setup$child_content2 = (_scope) => {
    _y$child_content._(_scope, _scope._[3]),
      _scope[0],
      _content_(_scope[0], _child_content2(_scope));
  };
_$.register(
  "b3",
  _$.createRendererWithOwner(
    "<div><!></div>",
    "/D%l&",
    _setup$child_content2,
    () => _params_2$child_content,
  ),
);
const _x_effect = _$.effect("b4", (_scope, { 2: x }) =>
    _$.on(_scope[0], "click", function () {
      _x(_scope, x + 1);
    }),
  ),
  _x = _$.state(
    2,
    (_scope, x) => {
      _x_effect(_scope), _value_(_scope[1], x);
    },
    () => _$.inChild(1, _value_),
  );
init();
