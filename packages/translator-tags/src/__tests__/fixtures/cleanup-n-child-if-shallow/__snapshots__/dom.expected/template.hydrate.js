// size: 531 (min) 293 (brotli)
const _input__effect = _$.effect("a0", (_scope) => {
    const { 1: input } = _scope;
    input.write("mounted"),
      (_$.getAbortSignal(_scope, 0).onabort = ((_scope) => {
        const { 1: input } = _scope;
        return () => {
          input.write("destroyed");
        };
      })(_scope));
  }),
  _input_ = _$.value(1, (_scope, input) => {
    _$.resetAbortSignal(_scope, 0), _input__effect(_scope);
  }),
  _write = _$.register(
    "b0",
    (_scope) =>
      function (state) {
        _scope._[1].innerHTML = state;
      },
  ),
  _setup$ifBody = (_scope) => {
    _scope[0], _input_(_scope[0], { write: _write(_scope) });
  },
  _ifBody = _$.register(
    "b1",
    _$.createRenderer(
      "<div>a</div><span>b</span><p>c</p>",
      "/d&",
      _setup$ifBody,
    ),
  ),
  _if = _$.conditional(2, 0),
  _show_effect = _$.effect("b2", (_scope) =>
    _$.on(
      _scope[0],
      "click",
      ((_scope) => {
        const { 3: show } = _scope;
        return function () {
          _show(_scope, !show);
        };
      })(_scope),
    ),
  ),
  _show = _$.state(3, (_scope, show) => {
    _show_effect(_scope), _if(_scope, show ? _ifBody : null);
  });
init();
