// size: 859 (min) 428 (brotli)
const _expr_name_write_effect = _$.effect("a0", (_scope) => {
    const { 3: name, 4: write } = _scope;
    write(`mounted ${name}`),
      (_$.getAbortSignal(_scope, 0).onabort = ((_scope) => {
        const { 3: name, 4: write } = _scope;
        return () => {
          write(`destroyed ${name}`);
        };
      })(_scope));
  }),
  _expr_name_write = _$.intersection(2, (_scope) => {
    _$.resetAbortSignal(_scope, 0), _expr_name_write_effect(_scope);
  }),
  _write_ = _$.value(4, 0, () => _expr_name_write),
  _name_ = _$.value(
    3,
    (_scope, name) => _$.data(_scope[0], name),
    () => _expr_name_write,
  );
_$.register(
  "b0",
  (_scope) =>
    function (msg) {
      _scope[1].innerHTML += "\n" + msg;
    },
);
const _write$forBody = _$.closure(
    5,
    (_scope, write) => _write_(_scope[0], write),
    void 0,
    () => _$.inChild(0, _write_),
  ),
  _item$forBody = _$.value(
    2,
    (_scope, item) => _name_(_scope[0], item),
    () => _$.inChild(0, _name_),
  ),
  _params_2$forBody = _$.value(
    1,
    (_scope, _params_2) => _item$forBody(_scope, _params_2[0]),
    () => _item$forBody,
  ),
  _setup$forBody = (_scope) => {
    _scope[0];
  },
  _forBody = _$.register(
    "b1",
    _$.createRenderer(
      "<div> </div>",
      "/D l&",
      _setup$forBody,
      () => [_write$forBody],
      () => _params_2$forBody,
    ),
  ),
  _expr_items_items_length_effect = _$.effect("b2", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 3: items, 4: items_length } = _scope;
        return function () {
          _items(_scope, items_length ? items.slice(0, -1) : [1, 2, 3]);
        };
      })(_scope),
    ),
  ),
  _expr_items_items_length = _$.intersection(2, (_scope) => {
    _expr_items_items_length_effect(_scope);
  }),
  _for = _$.loopOf(2, _forBody),
  _items_length = _$.value(4, 0, () => _expr_items_items_length),
  _items = _$.state(
    3,
    (_scope, items) => {
      _items_length(_scope, items?.length), _for(_scope, [items]);
    },
    () => _$.intersections([_expr_items_items_length, _items_length, _for]),
  );
init();
