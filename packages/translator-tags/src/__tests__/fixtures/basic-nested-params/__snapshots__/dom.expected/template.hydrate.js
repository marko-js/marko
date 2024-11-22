// size: 872 (min) 390 (brotli)
const _renderBody_input = _$.dynamicTagAttrs(0),
  _expr_Text_value = _$.intersection(
    2,
    (_scope) => {
      const { 4: value } = _scope;
      _renderBody_input(_scope, () => value);
    },
    () => _renderBody_input,
  ),
  _dynamicTagName = _$.conditional(0, 0, () => _expr_Text_value),
  _value_ = _$.value(4, 0, () => _expr_Text_value),
  _renderBody_ = _$.value(
    3,
    (_scope, renderBody) => _dynamicTagName(_scope, renderBody),
    () => _dynamicTagName,
  ),
  _inner$childBody = _$.value(3, (_scope, inner) => _$.data(_scope[1], inner)),
  _outer$childBody = _$.registerSubscriber(
    "c",
    _$.dynamicClosure(2, (_scope, outer) => _$.data(_scope[0], outer)),
  ),
  _params_3$childBody = _$.value(2, (_scope, _params_3) =>
    _inner$childBody(_scope, _params_3[0]),
  ),
  _childBody2 = _$.register(
    "d",
    _$.createRendererWithOwner(
      "<div><!>.<!></div>",
      "D%c%",
      void 0,
      () => [_outer$childBody],
      () => _params_3$childBody,
    ),
  ),
  _y$childBody = _$.registerSubscriber(
    "e",
    _$.dynamicClosure(
      3,
      (_scope, y) => _value_(_scope[0], y),
      void 0,
      () => _$.inChild(0, _value_),
    ),
  ),
  _outer$childBody2 = _$.value(2, 0, () => _$.dynamicSubscribers(2)),
  _params_2$childBody = _$.value(
    1,
    (_scope, _params_2) => _outer$childBody2(_scope, _params_2[0]),
    () => _outer$childBody2,
  ),
  _setup$childBody = (_scope) => {
    _scope[0], _renderBody_(_scope[0], _childBody2(_scope));
  };
_$.register(
  "f",
  _$.createRendererWithOwner(
    "<div><!></div>",
    "/D%l&",
    _setup$childBody,
    () => [_y$childBody],
    () => _params_2$childBody,
  ),
);
const _x_effect = _$.effect("g", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 2: x } = _scope;
        return function () {
          _x(_scope, x + 1);
        };
      })(_scope),
    ),
  ),
  _x = _$.state(
    2,
    (_scope, x) => {
      _x_effect(_scope), _value_(_scope[1], x);
    },
    () => _$.inChild(1, _value_),
  );
init();
