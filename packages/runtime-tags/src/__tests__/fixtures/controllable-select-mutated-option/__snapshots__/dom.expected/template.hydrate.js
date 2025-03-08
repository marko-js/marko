// size: 655 (min) 318 (brotli)
const _opt$for_content = _$.value(3, (_scope, opt) => {
    _$.attr(_scope[0], "value", opt), _$.data(_scope[1], opt);
  }),
  _params_2$for_content = _$.value(2, (_scope, _params_2) =>
    _opt$for_content(_scope, _params_2[0]),
  ),
  _for_content = _$.createRenderer(
    "<option> </option>",
    " D ",
    0,
    _params_2$for_content,
  ),
  _for = _$.loopOf(0, _for_content),
  _value = _$.state(6, (_scope, value) => {
    _$.controllable_select_value(_scope, 0, value, _valueChange(_scope)),
      _$.data(_scope[1], value);
  }),
  _options_ = _$.value(5, (_scope, options_0) => _value(_scope, options_0)),
  _options_effect = _$.effect("a1", (_scope, { 4: options }) => {
    _$.on(_scope[2], "click", function () {
      _options(_scope, options.slice(1));
    }),
      _$.on(_scope[3], "click", function () {
        _options(_scope, [options.length ? options[0] - 1 : 3, ...options]);
      });
  }),
  _options = _$.state(4, (_scope, options) => {
    _options_(_scope, options?.[0]),
      _for(_scope, [options, (v) => v]),
      _options_effect(_scope);
  });
function _valueChange(_scope) {
  return (_new_value) => {
    _value(_scope, _new_value);
  };
}
_$.effect("a2", (_scope) => {
  _$.controllable_select_value_effect(_scope, 0),
    _$.on(_scope[0], "change", console.log),
    _$.on(_scope[0], "input", console.log);
}),
  _$.register("a0", _valueChange),
  init();
