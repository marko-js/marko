// size: 498 (min) 259 (brotli)
const _clickCount$elseBody = _$.closure(1, (_scope, clickCount) =>
    _$.data(_scope[0], clickCount),
  ),
  _elseBody = _$.register(
    "a0",
    _$.createRenderer(
      "<span>The button was clicked <!> times.</span>",
      "Db%",
      void 0,
      () => [_clickCount$elseBody],
    ),
  ),
  _clickCount$ifBody_effect = _$.effect(
    "a1",
    (_scope, { _: { 1: clickCount } }) =>
      _$.on(_scope[0], "click", function () {
        _clickCount(_scope._, clickCount + 1);
      }),
  ),
  _clickCount$ifBody = _$.closure(1, (_scope, clickCount) => {
    _$.data(_scope[1], clickCount), _clickCount$ifBody_effect(_scope);
  }),
  _ifBody = _$.register(
    "a2",
    _$.createRenderer("<button> </button>", " D ", void 0, () => [
      _clickCount$ifBody,
    ]),
  ),
  _if = _$.conditional(0, 0),
  _clickCount = _$.state(
    1,
    (_scope, clickCount) => _if(_scope, clickCount < 3 ? _ifBody : _elseBody),
    () =>
      _$.intersections([
        _if,
        _$.inConditionalScope(_clickCount$ifBody, 0),
        _$.inConditionalScope(_clickCount$elseBody, 0),
      ]),
  );
init();
