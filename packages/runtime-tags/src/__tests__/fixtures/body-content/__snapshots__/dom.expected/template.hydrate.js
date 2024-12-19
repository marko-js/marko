// size: 577 (min) 316 (brotli)
const _content_input = _$.dynamicTagAttrs(1),
  _dynamicTagName = _$.conditional(
    1,
    (_scope) => _content_input(_scope, () => ({})),
    () => _content_input,
  ),
  _attrs__effect = _$.effect("a0", (_scope) => _$.attrsEvents(_scope, 0)),
  _content_ = _$.value(
    4,
    (_scope, content) => _dynamicTagName(_scope, content),
    () => _dynamicTagName,
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
  _clickCount$FancyButton_content = _$.registerSubscriber(
    "b1",
    _$.dynamicClosure(1, (_scope, clickCount) =>
      _$.data(_scope[0], clickCount),
    ),
  ),
  _FancyButton_content = _$.register(
    "b2",
    _$.createRendererWithOwner(" ", " ", void 0, () => [
      _clickCount$FancyButton_content,
    ]),
  ),
  _clickCount = _$.state(
    1,
    (_scope, clickCount) =>
      _input_(_scope[0], {
        onClick: _onClick(_scope),
        content: _FancyButton_content(_scope),
      }),
    () => _$.intersections([_$.inChild(0, _input_), _$.dynamicSubscribers(1)]),
  );
function _onClick(_scope, { 1: clickCount } = _scope) {
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
}
_$.register("b0", _onClick), init();
