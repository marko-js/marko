// size: 1157 (min) 371 (brotli)
const getStringBy = _getStringBy,
  getFunctionBy = _getFunctionBy,
  getMissingBy = _getMissingBy,
  _text$for_content5 = _$.value(3, (_scope, text) => _$.data(_scope[0], text)),
  _pattern_5$for_content = _$.value(2, (_scope, _pattern_5) =>
    _text$for_content5(_scope, _pattern_5.text),
  ),
  _params_6$for_content = _$.value(1, (_scope, _params_6) =>
    _pattern_5$for_content(_scope, _params_6?.[0]),
  ),
  _for_content5 = _$.createRenderer(
    " ",
    " ",
    void 0,
    () => _params_6$for_content,
  ),
  _text$for_content4 = _$.value(3, (_scope, text) => _$.data(_scope[0], text)),
  _pattern_4$for_content = _$.value(2, (_scope, _pattern_4) =>
    _text$for_content4(_scope, _pattern_4.text),
  ),
  _params_5$for_content = _$.value(1, (_scope, _params_5) =>
    _pattern_4$for_content(_scope, _params_5?.[0]),
  ),
  _for_content4 = _$.createRenderer(
    " ",
    " ",
    void 0,
    () => _params_5$for_content,
  ),
  _text$for_content3 = _$.value(3, (_scope, text) => _$.data(_scope[0], text)),
  _pattern_3$for_content = _$.value(2, (_scope, _pattern_3) =>
    _text$for_content3(_scope, _pattern_3.text),
  ),
  _params_4$for_content = _$.value(1, (_scope, _params_4) =>
    _pattern_3$for_content(_scope, _params_4?.[0]),
  ),
  _for_content3 = _$.createRenderer(
    " ",
    " ",
    void 0,
    () => _params_4$for_content,
  ),
  _text$for_content2 = _$.value(3, (_scope, text) => _$.data(_scope[0], text)),
  _pattern_2$for_content = _$.value(2, (_scope, _pattern_2) =>
    _text$for_content2(_scope, _pattern_2.text),
  ),
  _params_3$for_content = _$.value(1, (_scope, _params_3) =>
    _pattern_2$for_content(_scope, _params_3?.[0]),
  ),
  _for_content2 = _$.createRenderer(
    " ",
    " ",
    void 0,
    () => _params_3$for_content,
  ),
  _text$for_content = _$.value(3, (_scope, text) => _$.data(_scope[0], text)),
  _pattern_$for_content = _$.value(2, (_scope, _pattern_) =>
    _text$for_content(_scope, _pattern_.text),
  ),
  _params_2$for_content = _$.value(1, (_scope, _params_2) =>
    _pattern_$for_content(_scope, _params_2?.[0]),
  ),
  _for_content = _$.createRenderer(
    " ",
    " ",
    void 0,
    () => _params_2$for_content,
  ),
  _for5 = _$.loopOf(4, _for_content5),
  _for4 = _$.loopOf(3, _for_content4),
  _for3 = _$.loopOf(2, _for_content3),
  _for2 = _$.loopOf(1, _for_content2),
  _for = _$.loopOf(0, _for_content),
  _items_effect = _$.effect("a3", (_scope, { 6: items }) =>
    _$.on(_scope[5], "click", function () {
      _items(_scope, [...items.slice(1), items[0]]);
    }),
  ),
  _items = _$.state(6, (_scope, items) => {
    _for(_scope, [items, "id"]),
      _for2(_scope, [items, (item) => item.id]),
      _for3(_scope, [items, getStringBy()]),
      _for4(_scope, [items, getFunctionBy()]),
      _for5(_scope, [items, getMissingBy()]),
      _items_effect(_scope);
  });
function _getStringBy() {
  return "id";
}
function _getFunctionBy() {
  return (item) => item.id;
}
function _getMissingBy() {}
_$.register("a0", _getStringBy),
  _$.register("a1", _getFunctionBy),
  _$.register("a2", _getMissingBy),
  init();
