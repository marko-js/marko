// size: 731 (min) 386 (brotli)
const _name_ = _$.value(3, (_scope, name) => _$.data(_scope[0], name)),
  _expr_outer_inner$for_content = _$.intersection(
    2,
    (_scope) => {
      const {
        _: { 2: outer },
        2: inner,
      } = _scope;
      _name_(_scope[0], `${outer}.${inner}`);
    },
    () => _$.inChild(0, _name_),
  ),
  _outer$for_content = _$.closure(
    2,
    0,
    void 0,
    () => _expr_outer_inner$for_content,
  ),
  _inner$for_content = _$.value(2, 0, () => _expr_outer_inner$for_content),
  _params_3$for_content = _$.value(
    1,
    (_scope, _params_3) => _inner$for_content(_scope, _params_3[0]),
    () => _inner$for_content,
  ),
  _setup$for_content = (_scope) => {
    _scope[0];
  },
  _for_content2 = _$.register(
    "b0",
    _$.createRenderer(
      "<div> </div>",
      "/D l&",
      _setup$for_content,
      () => [_outer$for_content],
      () => _params_3$for_content,
    ),
  ),
  _for$for_content = _$.loopOf(0, _for_content2),
  _outer$for_content2 = _$.value(2, 0, () =>
    _$.inLoopScope(_outer$for_content, 0),
  ),
  _items$for_content = _$.closure(
    2,
    (_scope, items) => _for$for_content(_scope, [items]),
    void 0,
    () => _for$for_content,
  ),
  _params_2$for_content = _$.value(
    1,
    (_scope, _params_2) => _outer$for_content2(_scope, _params_2[0]),
    () => _outer$for_content2,
  ),
  _for_content = _$.register(
    "b1",
    _$.createRenderer(
      "<!><!><!>",
      "D%D",
      void 0,
      () => [_items$for_content],
      () => _params_2$for_content,
    ),
  ),
  _for = _$.loopOf(1, _for_content),
  _items_effect = _$.effect("b2", (_scope, { 2: items }) =>
    _$.on(_scope[0], "click", function () {
      _items(_scope, [...items, items.length]);
    }),
  ),
  _items = _$.state(
    2,
    (_scope, items) => {
      _items_effect(_scope), _for(_scope, [items]);
    },
    () => _$.intersections([_for, _$.inLoopScope(_items$for_content, 1)]),
  );
init();