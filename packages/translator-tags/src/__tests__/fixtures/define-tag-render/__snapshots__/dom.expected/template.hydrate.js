// size: 399 (min) 252 (brotli)
const _y$defineBody_effect = _$.effect("a0", (_scope, { 7: y }) =>
    _$.on(_scope[2], "click", function () {
      _y$defineBody(_scope, y + 1);
    }),
  ),
  _y$defineBody = _$.state(7, (_scope, y) => {
    _$.data(_scope[1], y), _$.data(_scope[3], y), _y$defineBody_effect(_scope);
  }),
  _name$defineBody = _$.value(6, (_scope, name) => _$.data(_scope[0], name)),
  _pattern_$defineBody = _$.value(5, (_scope, _pattern_) =>
    _name$defineBody(_scope, _pattern_.name),
  ),
  _params_2$defineBody = _$.value(4, (_scope, _params_2) =>
    _pattern_$defineBody(_scope, _params_2?.[0]),
  ),
  _setup$defineBody = (_scope) => {
    _y$defineBody(_scope, 1);
  };
_$.register(
  "a1",
  _$.createRendererWithOwner(
    "<div>Hello <!> <!></div><button> </button>",
    "Db%c%l D ",
    _setup$defineBody,
    void 0,
    () => _params_2$defineBody,
  ),
),
  _$.dynamicTagAttrs(0),
  init();
