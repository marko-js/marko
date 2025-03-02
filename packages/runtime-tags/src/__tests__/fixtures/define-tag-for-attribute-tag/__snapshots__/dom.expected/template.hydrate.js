// size: 379 (min) 210 (brotli)
const _dynamicTag = _$.dynamicTag(1),
  _input_thing_content_ = _$.value(6, (_scope, input_thing_content) =>
    _dynamicTag(_scope, input_thing_content),
  ),
  _input_thing_selected_ = _$.value(5, (_scope, input_thing_selected) =>
    _$.classAttr(_scope[0], { selected: input_thing_selected }),
  ),
  _input_thing_ = _$.value(4, (_scope, input_thing) => {
    _input_thing_selected_(_scope, input_thing?.selected),
      _input_thing_content_(_scope, input_thing?.content);
  }),
  _define_content = _$.createContent("b0", "<span>The thing</span>"),
  _myThing = _$.value(3, (_scope, myThing) =>
    _input_thing_(_scope[0], myThing),
  ),
  _selected_effect = _$.effect("b1", (_scope, { 2: selected }) =>
    _$.on(_scope[1], "click", function () {
      _selected(_scope, !selected);
    }),
  ),
  _selected = _$.state(2, (_scope, selected) => {
    _myThing(_scope, { selected: selected, content: _define_content(_scope) }),
      _selected_effect(_scope);
  });
init();
