// size: 463 (min) 235 (brotli)
const _description$for_content = _$.value(5, (_scope, description) =>
    _$.data(_scope[1], description),
  ),
  _name$for_content = _$.value(4, (_scope, name) => _$.data(_scope[0], name)),
  _pattern_$for_content = _$.value(3, (_scope, _pattern_) => {
    _name$for_content(_scope, _pattern_.name),
      _description$for_content(_scope, _pattern_.description);
  }),
  _params_2$for_content = _$.value(2, (_scope, _params_2) =>
    _pattern_$for_content(_scope, _params_2?.[0]),
  ),
  _for_content = _$.createRenderer(
    "<div><!>: <!></div>",
    "D%c%",
    0,
    _params_2$for_content,
  ),
  _for = _$.loopOf(0, _for_content),
  _items_effect = _$.effect("a0", (_scope, { 3: items }) => {
    _$.on(_scope[1], "click", function () {
      _items(_scope, [
        ...items,
        { name: "JavaScript", description: "Java, but scriptier" },
      ]);
    }),
      _$.on(_scope[2], "click", function () {
        _items(_scope, items.slice(0, -1));
      });
  }),
  _items = _$.state(3, (_scope, items) => {
    _for(_scope, [items]), _items_effect(_scope);
  });
init();
