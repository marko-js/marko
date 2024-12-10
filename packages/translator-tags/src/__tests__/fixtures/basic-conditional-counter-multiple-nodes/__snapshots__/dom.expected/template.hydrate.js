// size: 401 (min) 220 (brotli)
const _count$ifBody = _$.closure(4, (_scope, count) =>
    _$.data(_scope[0], count),
  ),
  _ifBody = _$.register(
    "a0",
    _$.createRenderer("The count is <!>", "b%", void 0, () => [_count$ifBody]),
  ),
  _if = _$.conditional(2, 0),
  _count_effect = _$.effect("a1", (_scope, { 4: count }) =>
    _$.on(_scope[0], "click", function () {
      _count(_scope, count + 1);
    }),
  ),
  _count = _$.state(
    4,
    (_scope, count) => _count_effect(_scope),
    () => _$.inConditionalScope(_count$ifBody, 2),
  ),
  _show_effect = _$.effect("a2", (_scope, { 3: show }) =>
    _$.on(_scope[1], "click", function () {
      _show(_scope, !show);
    }),
  ),
  _show = _$.state(
    3,
    (_scope, show) => {
      _show_effect(_scope), _if(_scope, show ? _ifBody : null);
    },
    () => _if,
  );
init();
