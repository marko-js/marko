// size: 555 (min) 327 (brotli)
const _name = _$.value(3, (_scope, name) => _$.data(_scope[0], name)),
  _expr_outer_inner$for_content = _$.intersection(3, (_scope) => {
    const {
      _: { 2: outer },
      2: inner,
    } = _scope;
    _name(_scope[0], `${outer}.${inner}`);
  }),
  _outer$for_content = _$.loopClosure(2, 0, _expr_outer_inner$for_content),
  _inner$for_content = _$.value(2, _expr_outer_inner$for_content),
  _params3$for_content = _$.value(1, (_scope, _params3) =>
    _inner$for_content(_scope, _params3[0]),
  ),
  _setup$for_content = (_scope) => {
    _scope[0];
  },
  _for_content2 = _$.createRenderer(
    "<div> </div>",
    "/D l&",
    _setup$for_content,
    _params3$for_content,
    (_scope) => _outer$for_content._(_scope),
  ),
  _for$for_content = _$.loopOf(0, _for_content2),
  _items$for_content = _$.loopClosure(2, 1, (_scope, items) =>
    _for$for_content(_scope, [items]),
  ),
  _outer$for_content2 = _$.value(2, _outer$for_content),
  _params2$for_content = _$.value(1, (_scope, _params2) =>
    _outer$for_content2(_scope, _params2[0]),
  ),
  _for_content = _$.createRenderer(
    "<!><!><!>",
    "D%D",
    0,
    _params2$for_content,
    (_scope) => _items$for_content._(_scope),
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
