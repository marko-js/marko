// size: 427 (min) 239 (brotli)
const _clickCount$else_content = _$.conditionalClosure(
    1,
    0,
    1,
    (_scope, clickCount) => _$.data(_scope[0], clickCount),
  ),
  _else_content = _$.createRenderer(
    "<span>The button was clicked <!> times.</span>",
    "Db%",
    0,
    0,
    (_scope) => _clickCount$else_content._(_scope),
  ),
  _clickCount$if_content_effect = _$.effect(
    "a0",
    (_scope, { _: { 1: clickCount } }) =>
      _$.on(_scope[0], "click", function () {
        _clickCount(_scope._, clickCount + 1);
      }),
  ),
  _clickCount$if_content = _$.conditionalClosure(
    1,
    0,
    0,
    (_scope, clickCount) => {
      _$.data(_scope[1], clickCount), _clickCount$if_content_effect(_scope);
    },
  ),
  _if_content = _$.createRenderer("<button> </button>", " D ", 0, 0, (_scope) =>
    _clickCount$if_content._(_scope),
  ),
  _if = _$.conditional(0, _if_content, _else_content),
  _clickCount = _$.state(1, (_scope, clickCount) => {
    _if(_scope, clickCount < 3 ? 0 : 1),
      _clickCount$if_content(_scope),
      _clickCount$else_content(_scope);
  });
init();
