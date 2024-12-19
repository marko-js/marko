// size: 551 (min) 216 (brotli)
const _value2$if_content = _$.registerSubscriber(
    "a0",
    _$.dynamicClosure(
      5,
      (_scope, value2) => _$.data(_scope[0], value2),
      (_scope) => _scope._._,
    ),
  ),
  _if_content3 = _$.register(
    "a1",
    _$.createRenderer("<span> </span>", "D ", void 0, () => [
      _value2$if_content,
    ]),
  ),
  _value1$if_content = _$.registerSubscriber(
    "a2",
    _$.dynamicClosure(
      4,
      (_scope, value1) => _$.data(_scope[0], value1),
      (_scope) => _scope._._,
    ),
  ),
  _if_content2 = _$.register(
    "a3",
    _$.createRenderer("<span> </span>", "D ", void 0, () => [
      _value1$if_content,
    ]),
  ),
  _if$if_content2 = _$.conditional(1, 0),
  _if$if_content = _$.conditional(0, 0),
  _value2$if_content2 = _$.closure(
    5,
    (_scope, value2) => _if$if_content2(_scope, value2 ? _if_content3 : null),
    void 0,
    () => _if$if_content2,
  ),
  _value1$if_content2 = _$.closure(
    4,
    (_scope, value1) => _if$if_content(_scope, value1 ? _if_content2 : null),
    void 0,
    () => _if$if_content,
  );
_$.register(
  "a4",
  _$.createRenderer("<!><!><!><!>", "D%b%D", void 0, () => [
    _value2$if_content2,
    _value1$if_content2,
  ]),
);
