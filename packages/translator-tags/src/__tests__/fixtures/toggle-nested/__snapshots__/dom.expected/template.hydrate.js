// size: 551 (min) 198 (brotli)
const _value2$ifBody = _$.registerSubscriber(
    "a0",
    _$.dynamicClosure(
      5,
      (_scope, value2) => _$.data(_scope[0], value2),
      (_scope) => _scope._._,
    ),
  ),
  _ifBody3 = _$.register(
    "a1",
    _$.createRenderer("<span> </span>", "D ", void 0, () => [_value2$ifBody]),
  ),
  _value1$ifBody = _$.registerSubscriber(
    "a2",
    _$.dynamicClosure(
      4,
      (_scope, value1) => _$.data(_scope[0], value1),
      (_scope) => _scope._._,
    ),
  ),
  _ifBody2 = _$.register(
    "a3",
    _$.createRenderer("<span> </span>", "D ", void 0, () => [_value1$ifBody]),
  ),
  _if$ifBody2 = _$.conditional(1, 0),
  _if$ifBody = _$.conditional(0, 0),
  _value2$ifBody2 = _$.closure(
    5,
    (_scope, value2) => _if$ifBody2(_scope, value2 ? _ifBody3 : null),
    void 0,
    () => _if$ifBody2,
  ),
  _value1$ifBody2 = _$.closure(
    4,
    (_scope, value1) => _if$ifBody(_scope, value1 ? _ifBody2 : null),
    void 0,
    () => _if$ifBody,
  );
_$.register(
  "a4",
  _$.createRenderer("<!><!><!><!>", "D%b%D", void 0, () => [
    _value2$ifBody2,
    _value1$ifBody2,
  ]),
);
