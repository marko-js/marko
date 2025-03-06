// size: 588 (min) 309 (brotli)
const _name_ = _$.value(3, (_scope, name) => _$.data(_scope[0], name)),
  _expr_outer_inner$for_content = _$.intersection(3, (_scope) => {
    const {
      _: { 2: outer },
      2: inner,
    } = _scope;
    _name_(_scope[0], `${outer}.${inner}`);
  }),
  _outer$for_content = _$.loopClosure(2, 0, (_scope, outer) =>
    _expr_outer_inner$for_content(_scope),
  ),
  _inner$for_content = _$.value(2, (_scope, inner) =>
    _expr_outer_inner$for_content(_scope),
  ),
  _params_3$for_content = _$.value(1, (_scope, _params_3) =>
    _inner$for_content(_scope, _params_3[0]),
  ),
  _setup$for_content = (_scope) => {
    _outer$for_content._(_scope), _scope[0];
  },
  _for_content2 = _$.createRenderer(
    "<div> </div>",
    "/D l&",
    _setup$for_content,
    _params_3$for_content,
  ),
  _for$for_content = _$.loopOf(0, _for_content2),
  _outer$for_content2 = _$.value(2, (_scope, outer) =>
    _outer$for_content(_scope),
  ),
  _items$for_content = _$.loopClosure(2, 1, (_scope, items) =>
    _for$for_content(_scope, [items]),
  ),
  _params_2$for_content = _$.value(1, (_scope, _params_2) =>
    _outer$for_content2(_scope, _params_2[0]),
  ),
  _setup$for_content2 = (_scope) => {
    _items$for_content._(_scope);
  },
  _for_content = _$.createRenderer(
    "<!><!><!>",
    "D%D",
    _setup$for_content2,
    _params_2$for_content,
  ),
  _for = _$.loopOf(1, _for_content),
  _items_effect = _$.effect("b0", (_scope, { 2: items }) =>
    _$.on(_scope[0], "click", function () {
      _items(_scope, [...items, items.length]);
    }),
  ),
  _items = _$.state(2, (_scope, items) => {
    _for(_scope, [items]), _items$for_content(_scope), _items_effect(_scope);
  });
init();
