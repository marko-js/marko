// size: 438 (min) 225 (brotli)
const _count$ifBody = _$.closure(4, (_scope, count) =>
    _$.data(_scope[0], count),
  ),
  _ifBody = _$.register(
    "b",
    _$.createRenderer("The count is <!>", "b%", void 0, () => [_count$ifBody]),
  ),
  _if = _$.conditional(2, 0),
  _count_effect = _$.effect("c", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 4: count } = _scope;
        return function () {
          _count(_scope, count + 1);
        };
      })(_scope),
    ),
  ),
  _count = _$.state(
    4,
    (_scope, count) => _count_effect(_scope),
    () => _$.inConditionalScope(_count$ifBody, 2),
  ),
  _show_effect = _$.effect("d", (_scope) =>
    _$.on(
      _scope[1],
      "click",
      ((_scope) => {
        const { 3: show } = _scope;
        return function () {
          _show(_scope, !show);
        };
      })(_scope),
    ),
  ),
  _show = _$.state(
    3,
    (_scope, show) => {
      _show_effect(_scope), _if(_scope, show ? _ifBody : null);
    },
    () => _if,
  );
init();
