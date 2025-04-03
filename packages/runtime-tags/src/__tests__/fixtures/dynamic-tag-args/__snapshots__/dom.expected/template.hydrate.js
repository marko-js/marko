// size: 289 (min) 204 (brotli)
const _setup = () => {},
  _input = _$.value(2, (_scope, input) =>
    _$.data(_scope[0], JSON.stringify(input)),
  );
const tags = [_$.createTemplate("a", "<div> </div>", "D l", _setup, _input)],
  _dynamicTag = _$.dynamicTag(2, 0, 0, 1),
  _x_effect = _$.effect("b0", (_scope, { 6: x }) =>
    _$.on(_scope[0], "click", function () {
      _x(_scope, x + 1);
    }),
  ),
  _x = _$.state(6, (_scope, x) => {
    _$.data(_scope[1], x),
      _dynamicTag(_scope, tags[0], () => [x, "foo"]),
      _x_effect(_scope);
  });
init();
