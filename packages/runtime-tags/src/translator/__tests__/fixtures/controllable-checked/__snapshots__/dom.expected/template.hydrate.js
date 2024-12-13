// size: 211 (min) 129 (brotli)
const _checked = _$.state(2, (_scope, checked) => {
  _$.controllable_input_checked(_scope, 0, checked, _checkedChange(_scope)),
    _$.data(_scope[1], String(checked));
});
function _checkedChange(_scope) {
  return (_new_checked) => {
    _checked(_scope, _new_checked);
  };
}
_$.effect("a1", (_scope) => _$.controllable_input_checked_effect(_scope, 0)),
  _$.register("a0", _checkedChange),
  init();
