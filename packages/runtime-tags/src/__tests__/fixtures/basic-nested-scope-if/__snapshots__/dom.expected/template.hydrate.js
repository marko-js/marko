// size: 498 (min) 263 (brotli)
const _clickCount$else_content = _$.closure(1, (_scope, clickCount) =>
    _$.data(_scope[0], clickCount),
  ),
  _else_content = _$.register(
    "a0",
    _$.createRenderer(
      "<span>The button was clicked <!> times.</span>",
      "Db%",
      void 0,
      () => [_clickCount$else_content],
    ),
  ),
  _clickCount$if_content_effect = _$.effect(
    "a1",
    (_scope, { _: { 1: clickCount } }) =>
      _$.on(_scope[0], "click", function () {
        _clickCount(_scope._, clickCount + 1);
      }),
  ),
  _clickCount$if_content = _$.closure(1, (_scope, clickCount) => {
    _$.data(_scope[1], clickCount), _clickCount$if_content_effect(_scope);
  }),
  _if_content = _$.register(
    "a2",
    _$.createRenderer("<button> </button>", " D ", void 0, () => [
      _clickCount$if_content,
    ]),
  ),
  _if = _$.conditional(0, 0),
  _clickCount = _$.state(
    1,
    (_scope, clickCount) =>
      _if(_scope, clickCount < 3 ? _if_content : _else_content),
    () =>
      _$.intersections([
        _if,
        _$.inConditionalScope(_clickCount$if_content, 0),
        _$.inConditionalScope(_clickCount$else_content, 0),
      ]),
  );
init();
