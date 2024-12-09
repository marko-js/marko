// size: 1312 (min) 379 (brotli)
const getStringBy = _getStringBy,
  getFunctionBy = _getFunctionBy,
  getMissingBy = _getMissingBy,
  _text$forBody5 = _$.value(3, (_scope, text) => _$.data(_scope[0], text)),
  _pattern_5$forBody = _$.value(2, (_scope, _pattern_5) =>
    _text$forBody5(_scope, _pattern_5.text),
  ),
  _params_6$forBody = _$.value(1, (_scope, _params_6) =>
    _pattern_5$forBody(_scope, _params_6?.[0]),
  ),
  _forBody5 = _$.register(
    "a4",
    _$.createRenderer(" ", " ", void 0, void 0, () => _params_6$forBody),
  ),
  _text$forBody4 = _$.value(3, (_scope, text) => _$.data(_scope[0], text)),
  _pattern_4$forBody = _$.value(2, (_scope, _pattern_4) =>
    _text$forBody4(_scope, _pattern_4.text),
  ),
  _params_5$forBody = _$.value(1, (_scope, _params_5) =>
    _pattern_4$forBody(_scope, _params_5?.[0]),
  ),
  _forBody4 = _$.register(
    "a5",
    _$.createRenderer(" ", " ", void 0, void 0, () => _params_5$forBody),
  ),
  _text$forBody3 = _$.value(3, (_scope, text) => _$.data(_scope[0], text)),
  _pattern_3$forBody = _$.value(2, (_scope, _pattern_3) =>
    _text$forBody3(_scope, _pattern_3.text),
  ),
  _params_4$forBody = _$.value(1, (_scope, _params_4) =>
    _pattern_3$forBody(_scope, _params_4?.[0]),
  ),
  _forBody3 = _$.register(
    "a6",
    _$.createRenderer(" ", " ", void 0, void 0, () => _params_4$forBody),
  ),
  _text$forBody2 = _$.value(3, (_scope, text) => _$.data(_scope[0], text)),
  _pattern_2$forBody = _$.value(2, (_scope, _pattern_2) =>
    _text$forBody2(_scope, _pattern_2.text),
  ),
  _params_3$forBody = _$.value(1, (_scope, _params_3) =>
    _pattern_2$forBody(_scope, _params_3?.[0]),
  ),
  _forBody2 = _$.register(
    "a7",
    _$.createRenderer(" ", " ", void 0, void 0, () => _params_3$forBody),
  ),
  _text$forBody = _$.value(3, (_scope, text) => _$.data(_scope[0], text)),
  _pattern_$forBody = _$.value(2, (_scope, _pattern_) =>
    _text$forBody(_scope, _pattern_.text),
  ),
  _params_2$forBody = _$.value(1, (_scope, _params_2) =>
    _pattern_$forBody(_scope, _params_2?.[0]),
  ),
  _forBody = _$.register(
    "a8",
    _$.createRenderer(" ", " ", void 0, void 0, () => _params_2$forBody),
  ),
  _for5 = _$.loopOf(4, _forBody5),
  _for4 = _$.loopOf(3, _forBody4),
  _for3 = _$.loopOf(2, _forBody3),
  _for2 = _$.loopOf(1, _forBody2),
  _for = _$.loopOf(0, _forBody),
  _items_effect = _$.effect("a9", (_scope, { 6: items }) =>
    _$.on(_scope[5], "click", function () {
      _items(_scope, [...items.slice(1), items[0]]);
    }),
  ),
  _items = _$.state(6, (_scope, items) => {
    _items_effect(_scope),
      _for(_scope, [items, "id"]),
      _for2(_scope, [items, (item) => item.id]),
      _for3(_scope, [items, getStringBy()]),
      _for4(_scope, [items, getFunctionBy()]),
      _for5(_scope, [items, getMissingBy()]);
  });
function _getStringBy() {
  return "id";
}
function _anonymous(item) {
  return item.id;
}
function _getFunctionBy() {
  return _anonymous;
}
function _getMissingBy() {}
_$.register("a0", _getStringBy),
  _$.register("a2", _anonymous),
  _$.register("a1", _getFunctionBy),
  _$.register("a3", _getMissingBy),
  init();
