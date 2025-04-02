// size: 427 (min) 246 (brotli)
const _dynamicTag = _$.dynamicTag(1),
  _attrs_effect = _$.effect("a0", (_scope) => _$.attrsEvents(_scope, 0)),
  _content = _$.value(4, (_scope, content) => _dynamicTag(_scope, content)),
  _input = _$.value(3, (_scope, input) => {
    ((_scope, attrs) => {
      _$.attrs(_scope, 0, attrs), _attrs_effect(_scope);
    })(_scope, input),
      _content(_scope, input.content);
  }),
  _clickCount$FancyButton_content = _$.dynamicClosureRead(
    1,
    (_scope, clickCount) => _$.data(_scope[0], clickCount),
  ),
  _FancyButton_content = _$.registerContent("b1", " ", " ", 0, 0, (_scope) =>
    _clickCount$FancyButton_content(_scope),
  ),
  _clickCount_closure = _$.dynamicClosure(_clickCount$FancyButton_content),
  _clickCount = _$.state(1, (_scope, clickCount) => {
    _input(_scope[0], {
      onClick: _onClick(_scope),
      content: _FancyButton_content(_scope),
    }),
      _clickCount_closure(_scope);
  });
function _onClick(_scope, { 1: clickCount } = _scope) {
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
}
_$.register("b0", _onClick), init();
