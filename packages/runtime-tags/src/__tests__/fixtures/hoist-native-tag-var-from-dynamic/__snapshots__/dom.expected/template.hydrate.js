// size: 761 (min) 324 (brotli)
const _dynamicTag2 = _$.dynamicTag(1),
  _dynamicTag = _$.dynamicTag(),
  _input_content = _$.value(4, (_scope, input_content) => {
    _dynamicTag(_scope, input_content), _dynamicTag2(_scope, input_content);
  }),
  _get_hoisted_el = _$.hoist("j0", "a4");
_$.registerContent("b0", "<p></p>", " ", 0, 0, 0, "a4");
const _get_hoisted_el2 = _$.register("b2", _$.hoist("j0", "a3"));
_$.register("b3", _$.hoist("j0", "a3", "a2"));
const _child_content2 = _$.createContent(
    "b1",
    "<div></div>",
    " ",
    0,
    0,
    0,
    "a3",
  ),
  _hoisted_el2$inputshowChildnull_content_effect = _$.effect(
    "b5",
    ({ 1: _hoisted_el2 }) => {
      for (const element of 1) element().classList.add("inner");
    },
  ),
  _hoisted_el2$inputshowChildnull_content = _$.value(
    1,
    _hoisted_el2$inputshowChildnull_content_effect,
  );
_$.registerContent(
  "b4",
  "<!><!><!><!><!><!>",
  "D/D%b%bD&D",
  (_scope) => {
    _scope[0],
      _input_content(_scope[0], _child_content2(_scope)),
      _hoisted_el2$inputshowChildnull_content(_scope, _get_hoisted_el2(_scope));
  },
  0,
  0,
  "a2",
),
  _$.register("b7", _$.hoist("j0", "a1")),
  _$.effect("b8", ({ 7: _hoisted_el3 }) => {
    for (const element of 7) element().classList.add("outer");
  }),
  _$.effect("b9", ({ 6: _hoisted_el }) => {
    for (const element of 6) element().innerHTML = "Hoist from custom tag";
  }),
  _$.effect("b10", (_scope) => {
    {
      const element = _get_hoisted_el(_scope)();
      element && (element.innerHTML = "Hoist from dynamic tag");
    }
  }),
  init();
