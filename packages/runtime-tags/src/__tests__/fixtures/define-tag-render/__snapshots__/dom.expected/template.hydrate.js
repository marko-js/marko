// size: 349 (min) 210 (brotli)
const _y$define_content_effect = _$.effect("a1", (_scope, { 7: y }) =>
    _$.on(_scope[2], "click", function () {
      _y$define_content(_scope, y + 1);
    }),
  ),
  _y$define_content = _$.state(7, (_scope, y) => {
    _$.data(_scope[1], y),
      _$.data(_scope[3], y),
      _y$define_content_effect(_scope);
  }),
  _name$define_content = _$.value(6, (_scope, name) =>
    _$.data(_scope[0], name),
  ),
  _pattern_$define_content = _$.value(5, (_scope, _pattern_) =>
    _name$define_content(_scope, _pattern_.name),
  ),
  _params_2$define_content = _$.value(4, (_scope, _params_2) =>
    _pattern_$define_content(_scope, _params_2?.[0]),
  );
_$.registerContent(
  "a0",
  "<div>Hello <!> <!></div><button> </button>",
  "Db%c%l D ",
  (_scope) => {
    _y$define_content(_scope, 1);
  },
  () => _params_2$define_content,
),
  init();
