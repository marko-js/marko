// size: 1528 (min) 542 (brotli)
const _expr_name_write_effect = _$.effect("a0", (_scope) => {
    const { 3: name, 4: write } = _scope;
    write(`${name} mounted`),
      (_$.getAbortSignal(_scope, 0).onabort = ((_scope) => {
        const { 3: name, 4: write } = _scope;
        return () => {
          write(`${name} destroyed`);
        };
      })(_scope));
  }),
  _expr_name_write = _$.intersection(2, (_scope) => {
    _$.resetAbortSignal(_scope, 0), _expr_name_write_effect(_scope);
  }),
  _write_ = _$.value(4, 0, () => _expr_name_write),
  _name_ = _$.value(
    3,
    (_scope, name) => _$.data(_scope[0], name),
    () => _expr_name_write,
  );
_$.register(
  "b0",
  (_scope) =>
    function (msg) {
      _scope[3].innerHTML += "\n" + msg;
    },
);
const _write$ifBody3 = _$.dynamicClosure(
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
  _showInner_effect = _$.effect("b5", (_scope) =>
    _$.on(
      _scope[2],
      "click",
      ((_scope) => {
        const { 7: showInner } = _scope;
        return function () {
          _showInner(_scope, !showInner);
        };
      })(_scope),
    ),
  ),
  _showInner = _$.state(
    7,
    (_scope, showInner) => _showInner_effect(_scope),
    () => _$.dynamicSubscribers(7),
  ),
  _showMiddle_effect = _$.effect("b6", (_scope) =>
    _$.on(
      _scope[1],
      "click",
      ((_scope) => {
        const { 6: showMiddle } = _scope;
        return function () {
          _showMiddle(_scope, !showMiddle);
        };
      })(_scope),
    ),
  ),
  _showMiddle = _$.state(
    6,
    (_scope, showMiddle) => _showMiddle_effect(_scope),
    () => _$.inConditionalScope(_showMiddle$ifBody, 4),
  ),
  _showOuter_effect = _$.effect("b7", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 5: showOuter } = _scope;
        return function () {
          _showOuter(_scope, !showOuter);
        };
      })(_scope),
    ),
  ),
  _showOuter = _$.state(
    5,
    (_scope, showOuter) => {
      _showOuter_effect(_scope), _if(_scope, showOuter ? _ifBody : null);
    },
    () => _if,
  );
init();
