// size: 609 (min) 345 (brotli)
const _expr_input_onCount_clickCount_effect = _$.effect(
    "a0",
    (_scope, { 4: input_onCount, 5: clickCount }) =>
      _$.on(_scope[0], "click", function () {
        input_onCount(_clickCount(_scope, clickCount + 1));
      }),
  ),
  _expr_input_onCount_clickCount = _$.intersection(6, (_scope) => {
    _expr_input_onCount_clickCount_effect(_scope);
  }),
  _clickCount = _$.state(5, (_scope, clickCount) => {
    _$.data(
      _scope[1],
      ((() => {
        if (clickCount > 0)
          throw new Error(
            "This should not have executed since the parent removes this component when the count is greater than 0",
          );
      })(),
      clickCount),
    ),
      _expr_input_onCount_clickCount(_scope);
  }),
  _input_onCount_ = _$.value(4, (_scope, input_onCount) =>
    _expr_input_onCount_clickCount(_scope),
  );
const _onCount$if_content = _$.conditionalClosure(2, 0, 0, (_scope, onCount) =>
    _input_onCount_(_scope[0], onCount),
  ),
  _setup$if_content = (_scope) => {
    !(function (_scope) {
      _clickCount(_scope, 0);
    })(_scope[0]);
  },
  _if_content = _$.createRenderer(
    "<div><button> </button></div>",
    "D/ D l&",
    _setup$if_content,
    0,
    (_scope) => _onCount$if_content._(_scope),
  ),
  _if = _$.conditional(0, _if_content),
  _show = _$.state(1, (_scope, show) => _if(_scope, show ? 0 : 1));
_$.register("b0", function (_scope) {
  return function (count) {
    _show(_scope, count < 1);
  };
}),
  init();
