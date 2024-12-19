// size: 1233 (min) 522 (brotli)
const _expr_name_write_effect = _$.effect(
    "a0",
    (_scope, { 3: name, 4: write }) =>
      (_$.getAbortSignal(_scope, 0).onabort = () => {
        write(`destroyed ${name}`);
      }),
  ),
  _expr_name_write = _$.intersection(2, (_scope) => {
    _$.resetAbortSignal(_scope, 0), _expr_name_write_effect(_scope);
  }),
  _write_ = _$.value(4, 0, () => _expr_name_write),
  _name_ = _$.value(
    3,
    (_scope, name) => _$.data(_scope[0], name),
    () => _expr_name_write,
  ),
  _expr_outerItem_middleItem$for_content = _$.intersection(
    2,
    (_scope) => {
      const {
        _: { 3: outerItem },
        2: middleItem,
      } = _scope;
      _name_(_scope[0], `${outerItem}.${middleItem}`);
    },
    () => _$.inChild(0, _name_),
  ),
  _write$for_content2 = _$.dynamicClosure(
    4,
    (_scope, write) => _write_(_scope[0], write),
    (_scope) => _scope._._,
    () => _$.inChild(0, _write_),
  ),
  _outerItem$for_content2 = _$.closure(
    3,
    0,
    void 0,
    () => _expr_outerItem_middleItem$for_content,
  ),
  _middleItem$for_content = _$.value(
    2,
    0,
    () => _expr_outerItem_middleItem$for_content,
  ),
  _params_3$for_content = _$.value(
    1,
    (_scope, _params_3) => _middleItem$for_content(_scope, _params_3[0]),
    () => _middleItem$for_content,
  ),
  _setup$for_content2 = (_scope) => {
    _scope[0];
  },
  _for_content2 = _$.register(
    "b1",
    _$.createRenderer(
      "<div><div> </div></div>",
      "D/D l&",
      _setup$for_content2,
      () => [_write$for_content2, _outerItem$for_content2],
      () => _params_3$for_content,
    ),
  ),
  _for$for_content = _$.loopOf(1, _for_content2),
  _write$for_content = _$.closure(
    4,
    (_scope, write) => _write_(_scope[0], write),
    void 0,
    () => _$.inChild(0, _write_),
  ),
  _outerItem$for_content = _$.value(
    3,
    (_scope, outerItem) => _name_(_scope[0], `${outerItem}`),
    () =>
      _$.intersections([
        _$.inChild(0, _name_),
        _$.inLoopScope(_outerItem$for_content2, 1),
      ]),
  ),
  _items$for_content = _$.closure(
    3,
    (_scope, items) => _for$for_content(_scope, [items]),
    void 0,
    () => _for$for_content,
  ),
  _params_2$for_content = _$.value(
    2,
    (_scope, _params_2) => _outerItem$for_content(_scope, _params_2[0]),
    () => _outerItem$for_content,
  ),
  _setup$for_content = (_scope) => {
    _scope[0];
  },
  _for_content = _$.register(
    "b2",
    _$.createRenderer(
      "<div><div> </div><!></div>",
      "D/D l&%",
      _setup$for_content,
      () => [_write$for_content, _items$for_content],
      () => _params_2$for_content,
    ),
  ),
  _for = _$.loopOf(2, _for_content),
  _items_effect = _$.effect("b3", (_scope, { 3: items }) =>
    _$.on(_scope[0], "click", function () {
      _items(_scope, items.length ? items.slice(0, -1) : [1, 2, 3]);
    }),
  ),
  _items = _$.state(
    3,
    (_scope, items) => {
      _items_effect(_scope), _for(_scope, [items]);
    },
    () => _$.intersections([_for, _$.inLoopScope(_items$for_content, 2)]),
  );
_$.register("b0", function (_scope) {
  return function (msg) {
    _scope[1].innerHTML += "\n" + msg;
  };
}),
  init();
