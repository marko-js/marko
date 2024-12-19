// size: 787 (min) 404 (brotli)
const _expr_name_write_effect = _$.effect(
    "a0",
    (_scope, { 5: name, 6: write }) => {
      write(`mounted ${name}`),
        (_$.getAbortSignal(_scope, 0).onabort = () => {
          write(`destroyed ${name}`);
        });
    },
  ),
  _expr_name_write = _$.intersection(2, (_scope) => {
    _$.resetAbortSignal(_scope, 0), _expr_name_write_effect(_scope);
  }),
  _write_ = _$.value(6, 0, () => _expr_name_write),
  _name_ = _$.value(
    5,
    (_scope, name) => {
      _$.data(_scope[0], name),
        _$.data(_scope[1], name),
        _$.data(_scope[2], name);
    },
    () => _expr_name_write,
  ),
  _write$for_content = _$.closure(
    4,
    (_scope, write) => _write_(_scope[0], write),
    void 0,
    () => _$.inChild(0, _write_),
  ),
  _item$for_content = _$.value(
    2,
    (_scope, item) => _name_(_scope[0], item),
    () => _$.inChild(0, _name_),
  ),
  _params_2$for_content = _$.value(
    1,
    (_scope, _params_2) => _item$for_content(_scope, _params_2[0]),
    () => _item$for_content,
  ),
  _setup$for_content = (_scope) => {
    _scope[0];
  },
  _for_content = _$.register(
    "b1",
    _$.createRenderer(
      "<div> </div><span> </span><p> </p>",
      "/D lD lD l&",
      _setup$for_content,
      () => [_write$for_content],
      () => _params_2$for_content,
    ),
  ),
  _for = _$.loopOf(2, _for_content),
  _items_effect = _$.effect("b2", (_scope, { 3: items }) =>
    _$.on(_scope[0], "click", function () {
      _items(_scope, items.length ? items.slice(0, -1) : [1, 2, 3]);
    }),
  ),
  _items = _$.state(
    3,
    (_scope, items) => {
      _items_effect(_scope), _for(_scope, [items]);
    },
    () => _for,
  );
_$.register("b0", function (_scope) {
  return function (msg) {
    _scope[1].innerHTML += "\n" + msg;
  };
}),
  init();
