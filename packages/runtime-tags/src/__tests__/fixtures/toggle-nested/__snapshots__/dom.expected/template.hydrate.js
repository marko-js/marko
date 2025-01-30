// size: 607 (min) 221 (brotli)
const _value2$if_content = _$.registerSubscriber(
    "a0",
    _$.dynamicClosure(
      (_scope, value2) => _$.data(_scope[0], value2),
      (_scope) => _scope._._,
    ),
  ),
  _setup$if_content3 = (_scope) => {
    _value2$if_content._(_scope, _scope._._[5]);
  },
  _if_content3 = _$.register(
    "a1",
    _$.createRenderer("<span> </span>", "D ", _setup$if_content3),
  ),
  _value1$if_content = _$.registerSubscriber(
    "a2",
    _$.dynamicClosure(
      (_scope, value1) => _$.data(_scope[0], value1),
      (_scope) => _scope._._,
    ),
  ),
  _setup$if_content = (_scope) => {
    _value1$if_content._(_scope, _scope._._[4]);
  },
  _if_content2 = _$.register(
    "a3",
    _$.createRenderer("<span> </span>", "D ", _setup$if_content),
  ),
  _if$if_content2 = _$.conditional(1, 0),
  _if$if_content = _$.conditional(0, 0),
  _value2$if_content2 = _$.conditionalClosure(
    0,
    () => _if_content,
    (_scope, value2) => _if$if_content2(_scope, value2 ? _if_content3 : null),
    () => _if$if_content2,
  ),
  _value1$if_content2 = _$.conditionalClosure(
    0,
    () => _if_content,
    (_scope, value1) => _if$if_content(_scope, value1 ? _if_content2 : null),
    () => _if$if_content,
  ),
  _setup$if_content2 = (_scope) => {
    _value1$if_content2._(_scope, _scope._[4]),
      _value2$if_content2._(_scope, _scope._[5]);
  },
  _if_content = _$.register(
    "a4",
    _$.createRenderer("<!><!><!><!>", "D%b%D", _setup$if_content2),
  );
