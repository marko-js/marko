// size: 267 (min) 166 (brotli)
const _onClick__effect = _$.effect("a0", (_scope, { 4: onClick }) =>
    _$.on(_scope[0], "click", onClick),
  ),
  _onClick_ = _$.value(4, (_scope) => _onClick__effect(_scope)),
  _clickCount$myButton_content = _$.dynamicClosureRead(
    1,
    (_scope, clickCount) => _$.data(_scope[0], clickCount),
  ),
  _clickCount_closure = _$.dynamicClosure(_clickCount$myButton_content),
  _clickCount = _$.state(1, (_scope, clickCount) => {
    _onClick_(_scope[0], _onClick(_scope)), _clickCount_closure(_scope);
  });
function _onClick(_scope, { 1: clickCount } = _scope) {
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
}
_$.register("b0", _onClick), init();
