// size: 209 (min) 145 (brotli)
const _ifBody = _$.register("b", _$.createRenderer("Hi", "")),
  _if = _$.conditional(1, 0),
  _x_effect = _$.effect("c", (_scope) =>
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
  _x = _$.state(2, (_scope, x) => {
    _x_effect(_scope), _if(_scope, x ? null : _ifBody);
  });
init();
