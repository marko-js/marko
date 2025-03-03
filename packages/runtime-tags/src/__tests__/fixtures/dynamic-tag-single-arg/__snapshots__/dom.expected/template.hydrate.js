// size: 307 (min) 201 (brotli)
const _input_ = _$.value(2, (_scope, input) => _$.data(_scope[0], input));
function _setup_(_scope) {
  _$.tagVarSignal(_scope, "hello from other");
}
const tags = [_$.createTemplate("a", "<div> </div>", "D l", _setup_, _input_)],
  _dynamicTag = _$.dynamicTag(2),
  _x_effect = _$.effect("b0", (_scope, { 3: x }) =>
    _$.on(_scope[0], "click", function () {
      _x(_scope, x + 1);
    }),
  ),
  _x = _$.state(3, (_scope, x) => {
    _$.data(_scope[1], x),
      _dynamicTag(_scope, tags[0], () => x),
      _x_effect(_scope);
  });
init();
