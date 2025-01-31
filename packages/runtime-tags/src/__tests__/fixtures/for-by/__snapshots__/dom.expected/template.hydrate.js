// size: 486 (min) 242 (brotli)
const _text$for_content = _$.value(3, (_scope, text) =>
    _$.data(_scope[0], text),
  ),
  _pattern_$for_content = _$.value(2, (_scope, _pattern_) =>
    _text$for_content(_scope, _pattern_.text),
  ),
  _params_2$for_content = _$.value(1, (_scope, _params_2) =>
    _pattern_$for_content(_scope, _params_2?.[0]),
  ),
  _for_content = _$.register(
    "a4",
    _$.createRenderer(" ", " ", void 0, () => _params_2$for_content),
  ),
  _for = _$.loopOf(0, _for_content),
  _items_effect = _$.effect("a5", (_scope, { 2: items }) =>
    _$.on(_scope[1], "click", function () {
      _items(_scope, [...items.slice(1), items[0]]);
    }),
  ),
  _items = _$.state(2, (_scope, items) => {
    _items_effect(_scope), _for(_scope, [items, "id"]);
  });
function _anonymous(item) {
  return item.id;
}
_$.register("a0", function () {
  return "id";
}),
  _$.register("a2", _anonymous),
  _$.register("a1", function () {
    return _anonymous;
  }),
  _$.register("a3", function () {}),
  init();
