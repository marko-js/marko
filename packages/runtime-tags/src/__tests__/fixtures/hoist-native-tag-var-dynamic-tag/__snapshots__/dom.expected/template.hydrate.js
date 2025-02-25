// size: 988 (min) 362 (brotli)
const _dynamicTag2 = _$.dynamicTag(1),
  _dynamicTag = _$.dynamicTag(0),
  _input_content_ = _$.value(
    4,
    (_scope, input_content) => {
      _dynamicTag(_scope, input_content), _dynamicTag2(_scope, input_content);
    },
    () => _$.intersections([_dynamicTag, _dynamicTag2]),
  );
_$.register("b0", _$.hoist("0>", "0?"));
const _hoist_el2 = _$.register("b1", _$.hoist("0>", "0?"));
_$.register("b2", _$.hoist("0>", "0?", "1?")),
  _$.register("b3", _$.hoist("0>", "2?")),
  _$.register(
    "b4",
    _$.createRendererWithOwner("<p></p>", " ", void 0, void 0, "2?"),
  );
const _child_content2 = _$.register(
    "b5",
    _$.createRendererWithOwner("<div></div>", " ", void 0, void 0, "0?"),
  ),
  _hoisted_el2$inputShowChildNull_content_effect = _$.effect(
    "b6",
    ({ 1: _hoisted_el2 }) => {
      for (const element of _hoisted_el2) element().classList.add("inner");
    },
  ),
  _hoisted_el2$inputShowChildNull_content = _$.value(
    1,
    (_scope, _hoisted_el2) =>
      _hoisted_el2$inputShowChildNull_content_effect(_scope),
  ),
  _setup$inputShowChildNull_content = (_scope) => {
    _scope[0],
      _hoisted_el2$inputShowChildNull_content(_scope, _hoist_el2(_scope)),
      _input_content_(_scope[0], _child_content2(_scope));
  };
_$.register(
  "b7",
  _$.createRendererWithOwner(
    "<!><!><!><!><!><!>",
    "D/D%b%bD&D",
    _setup$inputShowChildNull_content,
    void 0,
    "1?",
  ),
),
  _$.register(
    "b8",
    _$.createRendererWithOwner("<span></span>", " ", void 0, void 0, "0?"),
  ),
  _$.effect("b9", ({ 8: _hoisted_el4 }) => {
    {
      const element = _hoisted_el4();
      element && (element.innerHTML = "Hoist from dynamic tag");
    }
  }),
  _$.effect("b10", ({ 7: _hoisted_el3 }) => {
    for (const element of _hoisted_el3) element().classList.add("outer");
  }),
  _$.effect("b11", ({ 6: _hoisted_el }) => {
    for (const element of _hoisted_el)
      element().innerHTML = "Hoist from custom tag";
  }),
  init();
