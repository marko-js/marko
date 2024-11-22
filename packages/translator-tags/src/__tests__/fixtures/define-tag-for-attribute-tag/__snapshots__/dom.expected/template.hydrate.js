// size: 478 (min) 275 (brotli)
const _inputThingRenderBody_input = _$.dynamicTagAttrs(1),
  _dynamicTagName = _$.conditional(
    1,
    (_scope) => _inputThingRenderBody_input(_scope, () => ({})),
    () => _inputThingRenderBody_input,
  ),
  _input_ = _$.value(
    3,
    (_scope, input) => {
      _$.classAttr(_scope[0], { selected: input.thing.selected }),
        _dynamicTagName(_scope, input.thing.renderBody);
    },
    () => _dynamicTagName,
  ),
  _defineBody = _$.register(
    "c",
    _$.createRendererWithOwner("<span>The thing</span>", ""),
  ),
  _myThing = _$.value(
    3,
    (_scope, myThing) => _input_(_scope[0], { thing: myThing }),
    () => _$.inChild(0, _input_),
  ),
  _selected_effect = _$.effect("d", (_scope) =>
    _$.on(
      _scope[1],
      "click",
      ((_scope) => {
        const { 2: selected } = _scope;
        return function () {
          _selected(_scope, !selected);
        };
      })(_scope),
    ),
  ),
  _selected = _$.state(
    2,
    (_scope, selected) => {
      _selected_effect(_scope),
        _myThing(_scope, {
          selected: selected,
          renderBody: _defineBody(_scope),
        });
    },
    () => _myThing,
  );
init();
