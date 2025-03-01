// size: 973 (min) 384 (brotli)
function _setup_$1(_scope) {
  _$.tagVarSignal(_scope, _return(_scope));
}
function _return(_scope) {
  return function (html) {
    _scope[0].innerHTML = html;
  };
}
_$.register("a0", _return);
var Child = _$.createTemplate("a", "<div></div>", " b", _setup_$1);
const _dynamicTag2 = _$.dynamicTag(1),
  _dynamicTag = _$.dynamicTag(),
  _input_content_ = _$.value(4, (_scope, input_content) => {
    _dynamicTag(_scope, input_content), _dynamicTag2(_scope, input_content);
  }),
  _get_hoisted_setHtml = _$.hoist(16, "2?"),
  _dynamicTag$inputShowSectionNull_content = _$.dynamicTag(
    0,
    0,
    () => _setHtml3$inputShowSectionNull_content,
  ),
  _setHtml3$inputShowSectionNull_content = _$.registerBoundSignal(
    "c2",
    _$.value(16),
  );
_$.registerContent(
  "c1",
  "<!><!><!>",
  "D1D",
  (_scope) => {
    _dynamicTag$inputShowSectionNull_content(_scope, Child);
  },
  0,
  "2?",
);
const _get_hoisted_setHtml2 = _$.hoist(11, "0?", "1?"),
  _dynamicTag$thing_content2 = _$.dynamicTag(
    0,
    0,
    () => _setHtml2$thing_content,
  ),
  _setHtml2$thing_content = _$.registerBoundSignal("c4", _$.value(11)),
  _thing_content2 = _$.registerContent(
    "c3",
    "<!><!><!>",
    "D1D",
    (_scope) => {
      _dynamicTag$thing_content2(_scope, Child);
    },
    0,
    "0?",
  );
_$.registerContent(
  "c5",
  "<!><!><!><!><!><!>",
  "D/D%b%bD&D",
  (_scope) => {
    _scope[0], _input_content_(_scope[0], _thing_content2(_scope));
  },
  0,
  "1?",
),
  _$.register("c0", _$.hoist(5, "0?"));
const _dynamicTag$thing_content = _$.dynamicTag(
    0,
    0,
    () => _setHtml$thing_content,
  ),
  _setHtml$thing_content = _$.registerBoundSignal("c7", _$.value(5));
_$.registerContent(
  "c6",
  "<!><!><!>",
  "D1D",
  (_scope) => {
    _dynamicTag$thing_content(_scope, Child);
  },
  0,
  "0?",
),
  _$.effect("c8", ({ 6: _hoisted_setHtml }) => {
    for (const fn of 6) fn("Hoist from custom tag");
  }),
  _$.effect("c9", (_scope) => {
    _get_hoisted_setHtml2(_scope)("Hoist from dynamic tag"),
      _get_hoisted_setHtml(_scope)("Hoist from dynamic tag");
  }),
  init();
