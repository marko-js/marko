// size: 818 (min) 332 (brotli)
const _count$ifBody_effect = _$.effect("b", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const {
          _: {
            _: { 4: count },
          },
        } = _scope;
        return function () {
          _count(_scope._._, count + 1);
        };
      })(_scope),
    ),
  ),
  _count$ifBody = _$.registerSubscriber(
    "c",
    _$.dynamicClosure(
      4,
      (_scope, count) => {
        _$.data(_scope[1], count), _count$ifBody_effect(_scope);
      },
      (_scope) => _scope._._,
    ),
  ),
  _ifBody2 = _$.register(
    "d",
    _$.createRenderer("<button id=count> </button>", " D ", void 0, () => [
      _count$ifBody,
    ]),
  ),
  _if$ifBody = _$.conditional(1, 0),
  _inner$ifBody_effect = _$.effect("e", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const {
          _: { 3: inner },
        } = _scope;
        return function () {
          _inner(_scope._, !inner);
        };
      })(_scope),
    ),
  ),
  _inner$ifBody = _$.closure(
    3,
    (_scope, inner) => {
      _inner$ifBody_effect(_scope), _if$ifBody(_scope, inner ? _ifBody2 : null);
    },
    void 0,
    () => _if$ifBody,
  ),
  _ifBody = _$.register(
    "f",
    _$.createRenderer(
      "<button id=inner></button><!><!>",
      " b%D",
      void 0,
      () => [_inner$ifBody],
    ),
  ),
  _if = _$.conditional(1, 0),
  _count = _$.state(4, 0, () => _$.dynamicSubscribers(4)),
  _inner = _$.state(3, 0, () => _$.inConditionalScope(_inner$ifBody, 1)),
  _outer_effect = _$.effect("g", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 2: outer } = _scope;
        return function () {
          _outer(_scope, !outer);
        };
      })(_scope),
    ),
  ),
  _outer = _$.state(
    2,
    (_scope, outer) => {
      _outer_effect(_scope), _if(_scope, outer ? _ifBody : null);
    },
    () => _if,
  );
init();
