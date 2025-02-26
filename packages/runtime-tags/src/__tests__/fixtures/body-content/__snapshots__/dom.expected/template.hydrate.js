// size: 451 (min) 242 (brotli)
const _dynamicTag = _$.dynamicTag(1),
  _attrs__effect = _$.effect("a0", (_scope) => _$.attrsEvents(_scope, 0)),
  _content_ = _$.value(
    4,
    (_scope, content) => _dynamicTag(_scope, content),
    () => _dynamicTag,
  ),
  _input_ = _$.value(
    3,
    (_scope, input) => {
      ((_scope, attrs) => {
        _$.attrs(_scope, 0, attrs), _attrs__effect(_scope);
      })(_scope, input),
        _content_(_scope, input.content);
    },
    () => _content_,
  ),
  _clickCount$FancyButton_content = _$.registerDynamicClosure(
    "b2",
    1,
    (_scope, clickCount) => _$.data(_scope[0], clickCount),
  ),
  _FancyButton_content = _$.registerContent("b1", " ", " ", (_scope) => {
    _clickCount$FancyButton_content._(_scope);
  }),
  _clickCount = _$.state(
    1,
    (_scope, clickCount) => {
      _input_(_scope[0], {
        onClick: _onClick(_scope),
        content: _FancyButton_content(_scope),
      }),
        _clickCount$FancyButton_content(_scope);
    },
    () => _$.inChild(0, _input_),
  );
function _onClick(_scope, { 1: clickCount } = _scope) {
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
}
_$.register("b0", _onClick), init();
