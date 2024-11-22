// size: 482 (min) 249 (brotli)
const _item$forBody = _$.value(2, (_scope, item) => _$.data(_scope[0], item)),
  _params_2$forBody = _$.value(1, (_scope, _params_2) =>
    _item$forBody(_scope, _params_2[0]),
  ),
  _forBody = _$.register(
    "b",
    _$.createRenderer(" ", " ", void 0, void 0, () => _params_2$forBody),
  ),
  _expr_id_items_effect = _$.effect("c", (_scope) =>
    _$.on(
      _scope[1],
      "click",
      ((_scope) => {
        const { 3: id, 4: items } = _scope;
        return function () {
          const nextId = id + 1;
          _id(_scope, nextId), _items(_scope, [...items, nextId]);
        };
      })(_scope),
    ),
  ),
  _expr_id_items = _$.intersection(2, (_scope) => {
    _expr_id_items_effect(_scope);
  }),
  _for = _$.loopOf(0, _forBody),
  _items_effect = _$.effect("d", (_scope) =>
    _$.on(
      _scope[2],
      "click",
      ((_scope) => {
        const { 4: items } = _scope;
        return function () {
          _items(_scope, items.slice(0, -1));
        };
      })(_scope),
    ),
  ),
  _items = _$.state(
    4,
    (_scope, items) => {
      _items_effect(_scope), _for(_scope, [items]);
    },
    () => _expr_id_items,
  ),
  _id = _$.state(3, 0, () => _expr_id_items);
init();
