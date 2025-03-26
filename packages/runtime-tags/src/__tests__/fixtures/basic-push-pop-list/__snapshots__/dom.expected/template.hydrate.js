// size: 409 (min) 228 (brotli)
const _item$for_content = _$.value(2, (_scope, item) =>
    _$.data(_scope[0], item),
  ),
  _params_2$for_content = _$.value(1, (_scope, _params_2) =>
    _item$for_content(_scope, _params_2[0]),
  ),
  _for_content = _$.createRenderer(" ", " ", 0, _params_2$for_content),
  _expr_id_items_effect = _$.effect("a0", (_scope, { 3: id, 4: items }) =>
    _$.on(_scope[1], "click", function () {
      const nextId = id + 1;
      _id(_scope, nextId), _items(_scope, [...items, nextId]);
    }),
  ),
  _expr_id_items = _$.intersection(5, (_scope) =>
    _expr_id_items_effect(_scope),
  ),
  _for = _$.loopOf(0, _for_content),
  _items_effect = _$.effect("a1", (_scope, { 4: items }) =>
    _$.on(_scope[2], "click", function () {
      _items(_scope, items.slice(0, -1));
    }),
  ),
  _items = _$.state(4, (_scope, items) => {
    _for(_scope, [items]), _expr_id_items(_scope), _items_effect(_scope);
  }),
  _id = _$.state(3, (_scope, id) => _expr_id_items(_scope));
init();
