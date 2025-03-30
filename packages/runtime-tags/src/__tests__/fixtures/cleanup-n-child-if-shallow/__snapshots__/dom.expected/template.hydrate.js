// size: 469 (min) 282 (brotli)
const _input__effect = _$.effect("a0", (_scope, { 1: input }) => {
    input.write("mounted"),
      (_$.getAbortSignal(_scope, 0).onabort = () => {
        input.write("destroyed");
      });
  }),
  _input_ = _$.value(1, (_scope) => {
    _$.resetAbortSignal(_scope, 0), _input__effect(_scope);
  }),
  _setup$if_content = (_scope) => {
    _scope[0], _input_(_scope[0], { write: _write(_scope) });
  },
  _if_content = _$.createRenderer(
    "<div>a</div><span>b</span><p>c</p>",
    "/d&",
    _setup$if_content,
  ),
  _if = _$.conditional(2, _if_content),
  _show_effect = _$.effect("b1", (_scope, { 3: show }) =>
    _$.on(_scope[0], "click", function () {
      _show(_scope, !show);
    }),
  ),
  _show = _$.state(3, (_scope, show) => {
    _if(_scope, show ? 0 : 1), _show_effect(_scope);
  });
function _write(_scope) {
  return function (state) {
    _scope._[1].innerHTML = state;
  };
}
_$.register("b0", _write), init();
