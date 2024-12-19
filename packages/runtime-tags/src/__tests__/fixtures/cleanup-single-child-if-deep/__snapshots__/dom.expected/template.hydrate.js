// size: 1441 (min) 523 (brotli)
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
  _write$if_content3 = _$.dynamicClosure(
    8,
    (_scope, write) => _write_(_scope[0], write),
    (_scope) => _scope._._._,
    () => _$.inChild(0, _write_),
  ),
  _setup$if_content3 = (_scope) => {
    _scope[0], _name_(_scope[0], "Inner");
  },
  _if_content3 = _$.register(
    "b1",
    _$.createRenderer("<p> </p>", "/D l&", _setup$if_content3, () => [
      _write$if_content3,
    ]),
  ),
  _if$if_content = _$.conditional(1, 0),
  _write$if_content2 = _$.dynamicClosure(
    8,
    (_scope, write) => _write_(_scope[0], write),
    (_scope) => _scope._._,
    () => _$.inChild(0, _write_),
  ),
  _showInner$if_content = _$.registerSubscriber(
    "b2",
    _$.dynamicClosure(
      7,
      (_scope, showInner) =>
        _if$if_content(_scope, showInner ? _if_content3 : null),
      (_scope) => _scope._._,
      () => _if$if_content,
    ),
  ),
  _setup$if_content2 = (_scope) => {
    _scope[0], _name_(_scope[0], "Middle");
  },
  _if_content2 = _$.register(
    "b3",
    _$.createRenderer(
      "<div><p> </p><!></div>",
      "D/D l&%",
      _setup$if_content2,
      () => [_write$if_content2, _showInner$if_content],
    ),
  ),
  _if$if_content2 = _$.conditional(1, 0),
  _write$if_content = _$.closure(
    8,
    (_scope, write) => _write_(_scope[0], write),
    void 0,
    () => _$.inChild(0, _write_),
  ),
  _showMiddle$if_content = _$.closure(
    6,
    (_scope, showMiddle) =>
      _if$if_content2(_scope, showMiddle ? _if_content2 : null),
    void 0,
    () => _if$if_content2,
  ),
  _setup$if_content = (_scope) => {
    _scope[0], _name_(_scope[0], "Outer");
  },
  _if_content = _$.register(
    "b4",
    _$.createRenderer(
      "<div><p> </p><!></div>",
      "D/D l&%",
      _setup$if_content,
      () => [_write$if_content, _showMiddle$if_content],
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
    () => _$.inConditionalScope(_showMiddle$if_content, 4),
  ),
  _showOuter_effect = _$.effect("b7", (_scope, { 5: showOuter }) =>
    _$.on(_scope[0], "click", function () {
      _showOuter(_scope, !showOuter);
    }),
  ),
  _showOuter = _$.state(
    5,
    (_scope, showOuter) => {
      _showOuter_effect(_scope), _if(_scope, showOuter ? _if_content : null);
    },
    () => _if,
  );
_$.register("b0", function (_scope) {
  return function (msg) {
    _scope[3].innerHTML += "\n" + msg;
  };
}),
  init();
