// size: 291 (min) 194 (brotli)
const _expr_items_index_effect = _$.effect(
    "a0",
    (_scope, { 3: items, 5: index }) =>
      _$.on(_scope[2], "click", function () {
        const newItems = items.slice(1);
        _items(_scope, newItems), _index(_scope, (index + 1) % newItems.length);
      }),
  ),
  _expr_items_index = _$.intersection(6, (_scope) => {
    const { 3: items, 5: index } = _scope;
    _$.data(_scope[1], items[index]), _expr_items_index_effect(_scope);
  }),
  _index = _$.state(5, (_scope) => _expr_items_index(_scope)),
  _items_ = _$.value(4, (_scope, items_0) => _$.data(_scope[0], items_0)),
  _items = _$.state(3, (_scope, items) => {
    _items_(_scope, items?.[0]), _expr_items_index(_scope);
  });
init();
