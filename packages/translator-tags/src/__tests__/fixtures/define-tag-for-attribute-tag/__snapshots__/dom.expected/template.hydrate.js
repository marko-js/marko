// size: 508 (min) 275 (brotli)
const _inputThingRenderBody_input = _$.dynamicTagAttrs(1),
  _dynamicTagName = _$.conditional(
    1,
    (_scope) => _inputThingRenderBody_input(_scope, () => ({})),
    () => _inputThingRenderBody_input,
  ),
  _input_thing_renderBody_ = _$.value(
    6,
    (_scope, input_thing_renderBody) =>
      _dynamicTagName(_scope, input_thing_renderBody),
    () => _dynamicTagName,
  ),
  _input_thing_selected_ = _$.value(5, (_scope, input_thing_selected) =>
    _$.classAttr(_scope[0], { selected: input_thing_selected }),
  ),
  _input_thing_ = _$.value(
    4,
    (_scope, input_thing) => {
      _input_thing_selected_(_scope, input_thing?.selected),
        _input_thing_renderBody_(_scope, input_thing?.renderBody);
    },
    () => _input_thing_renderBody_,
  ),
  _defineBody = _$.register(
    "b0",
    _$.createRendererWithOwner("<span>The thing</span>", ""),
  ),
  _myThing = _$.value(
    3,
    (_scope, myThing) => _input_thing_(_scope[0], myThing),
    () => _$.inChild(0, _input_thing_),
  ),
  _selected_effect = _$.effect("b1", (_scope, { 2: selected }) =>
    _$.on(_scope[1], "click", function () {
      _selected(_scope, !selected);
    }),
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
