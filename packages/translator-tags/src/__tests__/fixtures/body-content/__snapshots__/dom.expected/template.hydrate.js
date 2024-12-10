// size: 583 (min) 311 (brotli)
const _renderBody_input = _$.dynamicTagAttrs(1),
  _dynamicTagName = _$.conditional(
    1,
    (_scope) => _renderBody_input(_scope, () => ({})),
    () => _renderBody_input,
  ),
  _attrs__effect = _$.effect("a0", (_scope) => _$.attrsEvents(_scope, 0)),
  _renderBody_ = _$.value(
    4,
    (_scope, renderBody) => _dynamicTagName(_scope, renderBody),
    () => _dynamicTagName,
  ),
  _input_ = _$.value(
    3,
    (_scope, input) => {
      ((_scope, attrs) => {
        _$.attrs(_scope, 0, attrs), _attrs__effect(_scope);
      })(_scope, input),
        _renderBody_(_scope, input.renderBody);
    },
    () => _renderBody_,
  ),
  _clickCount$FancyButtonBody = _$.registerSubscriber(
    "b1",
    _$.dynamicClosure(1, (_scope, clickCount) =>
      _$.data(_scope[0], clickCount),
    ),
  ),
  _FancyButtonBody = _$.register(
    "b2",
    _$.createRendererWithOwner(" ", " ", void 0, () => [
      _clickCount$FancyButtonBody,
    ]),
  ),
  _clickCount = _$.state(
    1,
    (_scope, clickCount) =>
      _input_(_scope[0], {
        onClick: _onClick(_scope),
        renderBody: _FancyButtonBody(_scope),
      }),
    () => _$.intersections([_$.inChild(0, _input_), _$.dynamicSubscribers(1)]),
  );
function _onClick(_scope, { 1: clickCount } = _scope) {
  return function () {
    _clickCount(_scope, clickCount + 1);
  };
}
_$.register("b0", _onClick), init();
