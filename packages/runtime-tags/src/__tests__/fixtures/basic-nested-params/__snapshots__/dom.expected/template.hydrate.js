// size: 644 (min) 307 (brotli)
const _expr_content_value = _$.intersection(5, (_scope) => {
    const { 3: content, 4: value } = _scope;
    _dynamicTag(_scope, content, () => value);
  }),
  _dynamicTag = _$.dynamicTag(),
  _value = _$.value(4, (_scope) => _expr_content_value(_scope)),
  _content = _$.value(3, (_scope) => _expr_content_value(_scope)),
  _inner$child_content = _$.value(3, (_scope, inner) =>
    _$.data(_scope[1], inner),
  ),
  _outer$child_content = _$.dynamicClosureRead(2, (_scope, outer) =>
    _$.data(_scope[0], outer),
  ),
  _params3$child_content = _$.value(2, (_scope, _params3) =>
    _inner$child_content(_scope, _params3[0]),
  ),
  _child_content2 = _$.registerContent(
    "b0",
    "<div><!>.<!></div>",
    "D%c%",
    0,
    _params3$child_content,
    (_scope) => _outer$child_content(_scope),
  ),
  _y$child_content = _$.dynamicClosureRead(3, (_scope, y) =>
    _value(_scope[0], y),
  ),
  _outer$child_content2_closure = _$.dynamicClosure(_outer$child_content),
  _outer$child_content2 = _$.value(2, (_scope) =>
    _outer$child_content2_closure(_scope),
  ),
  _params2$child_content = _$.value(1, (_scope, _params2) =>
    _outer$child_content2(_scope, _params2[0]),
  );
_$.registerContent(
  "b1",
  "<div><!></div>",
  "/D%l&",
  (_scope) => {
    _scope[0], _content(_scope[0], _child_content2(_scope));
  },
  _params2$child_content,
  (_scope) => _y$child_content(_scope),
);
const _x_effect = _$.effect("b2", (_scope, { 2: x }) =>
    _$.on(_scope[0], "click", function () {
      _x(_scope, x + 1);
    }),
  ),
  _x = _$.state(2, (_scope, x) => {
    _value(_scope[1], x), _x_effect(_scope);
  });
init();
