// size: 1441 (min) 521 (brotli)
const _expr_name_write_effect = _$.effect(
    "a0",
    (_scope, { 3: name, 4: write }) => {
      write(`${name} mounted`),
        (_$.getAbortSignal(_scope, 0).onabort = () => {
          write(`${name} destroyed`);
        });
    },
  ),
  _expr_name_write = _$.intersection(2, (_scope) => {
    _$.resetAbortSignal(_scope, 0), _expr_name_write_effect(_scope);
  }),
  _write_ = _$.value(4, 0, () => _expr_name_write),
  _name_ = _$.value(
    3,
    (_scope, name) => _$.data(_scope[0], name),
    () => _expr_name_write,
  ),
  _write$ifBody3 = _$.dynamicClosure(
    8,
    (_scope, write) => _write_(_scope[0], write),
    (_scope) => _scope._._._,
    () => _$.inChild(0, _write_),
  ),
  _setup$ifBody3 = (_scope) => {
    _scope[0], _name_(_scope[0], "Inner");
  },
  _ifBody3 = _$.register(
    "b1",
    _$.createRenderer("<p> </p>", "/D l&", _setup$ifBody3, () => [
      _write$ifBody3,
    ]),
  ),
  _if$ifBody = _$.conditional(1, 0),
  _write$ifBody2 = _$.dynamicClosure(
    8,
    (_scope, write) => _write_(_scope[0], write),
    (_scope) => _scope._._,
    () => _$.inChild(0, _write_),
  ),
  _showInner$ifBody = _$.registerSubscriber(
    "b2",
    _$.dynamicClosure(
      7,
      (_scope, showInner) => _if$ifBody(_scope, showInner ? _ifBody3 : null),
      (_scope) => _scope._._,
      () => _if$ifBody,
    ),
  ),
  _setup$ifBody2 = (_scope) => {
    _scope[0], _name_(_scope[0], "Middle");
  },
  _ifBody2 = _$.register(
    "b3",
    _$.createRenderer(
      "<div><p> </p><!></div>",
      "D/D l&%",
      _setup$ifBody2,
      () => [_write$ifBody2, _showInner$ifBody],
    ),
  ),
  _if$ifBody2 = _$.conditional(1, 0),
  _write$ifBody = _$.closure(
    8,
    (_scope, write) => _write_(_scope[0], write),
    void 0,
    () => _$.inChild(0, _write_),
  ),
  _showMiddle$ifBody = _$.closure(
    6,
    (_scope, showMiddle) => _if$ifBody2(_scope, showMiddle ? _ifBody2 : null),
    void 0,
    () => _if$ifBody2,
  ),
  _setup$ifBody = (_scope) => {
    _scope[0], _name_(_scope[0], "Outer");
  },
  _ifBody = _$.register(
    "b4",
    _$.createRenderer(
      "<div><p> </p><!></div>",
      "D/D l&%",
      _setup$ifBody,
      () => [_write$ifBody, _showMiddle$ifBody],
    ),
  ),
  _if = _$.conditional(4, 0),
  _showInner_effect = _$.effect("b5", (_scope, { 7: showInner }) =>
    _$.on(_scope[2], "click", function () {
      _showInner(_scope, !showInner);
    }),
  ),
  _showInner = _$.state(
    7,
    (_scope, showInner) => _showInner_effect(_scope),
    () => _$.dynamicSubscribers(7),
  ),
  _showMiddle_effect = _$.effect("b6", (_scope, { 6: showMiddle }) =>
    _$.on(_scope[1], "click", function () {
      _showMiddle(_scope, !showMiddle);
    }),
  ),
  _showMiddle = _$.state(
    6,
    (_scope, showMiddle) => _showMiddle_effect(_scope),
    () => _$.inConditionalScope(_showMiddle$ifBody, 4),
  ),
  _showOuter_effect = _$.effect("b7", (_scope, { 5: showOuter }) =>
    _$.on(_scope[0], "click", function () {
      _showOuter(_scope, !showOuter);
    }),
  ),
  _showOuter = _$.state(
    5,
    (_scope, showOuter) => {
      _showOuter_effect(_scope), _if(_scope, showOuter ? _ifBody : null);
    },
    () => _if,
  );
_$.register("b0", function (_scope) {
  return function (msg) {
    _scope[3].innerHTML += "\n" + msg;
  };
}),
  init();
