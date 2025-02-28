// size: 311 (min) 204 (brotli)
const _setup_ = () => {},
  _input_ = _$.value(2, (_scope, input) => _$.data(_scope[0], input)),
  _params__ = _$.value(1, (_scope, _params_) => _input_(_scope, _params_[0]));
const tags = [
    _$.createTemplate("a", "<div> </div>", "D l", _setup_, () => _params__),
  ],
  _dynamicTag = _$.dynamicTag(2, 0, 0, 1),
  _x_effect = _$.effect("b0", (_scope, { 3: x }) =>
    _$.on(_scope[0], "click", function () {
      _x(_scope, x + 1);
    }),
  ),
  _x = _$.state(3, (_scope, x) => {
    _$.data(_scope[1], x),
      _dynamicTag(_scope, tags[0], () => [x, "foo"]),
      _x_effect(_scope);
  });
init();
