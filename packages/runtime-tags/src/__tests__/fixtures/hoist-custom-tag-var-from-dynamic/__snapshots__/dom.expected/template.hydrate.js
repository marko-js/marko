// size: 915 (min) 386 (brotli)
const _dynamicTag2 = _$.dynamicTag(1),
  _dynamicTag = _$.dynamicTag(),
  _input_content_ = _$.value(4, (_scope, input_content) => {
    _dynamicTag(_scope, input_content), _dynamicTag2(_scope, input_content);
  });
function _setup_(_scope) {
  _$.tagVarSignal(_scope, _return(_scope));
}
function _return(_scope) {
  return function (html) {
    _scope[0].innerHTML = html;
  };
}
_$.register("a0", _return);
const _get_hoisted_setHtml = _$.hoist(16, "2?"),
  _setHtml3$inputShowSectionNull_content = _$.registerBoundSignal(
    "c2",
    _$.value(16),
  );
_$.registerContent(
  "c1",
  "<div></div>",
  "0 b&",
  (_scope) => {
    _$.setTagVar(_scope, 0, _setHtml3$inputShowSectionNull_content),
      _setup_(_scope[0]);
  },
  0,
  "2?",
);
const _get_hoisted_setHtml2 = _$.hoist(11, "0?", "1?"),
  _setHtml2$thing_content = _$.registerBoundSignal("c4", _$.value(11)),
  _thing_content2 = _$.registerContent(
    "c3",
    "<div></div>",
    "0 b&",
    (_scope) => {
      _$.setTagVar(_scope, 0, _setHtml2$thing_content), _setup_(_scope[0]);
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
const _setHtml$thing_content = _$.registerBoundSignal("c7", _$.value(5));
_$.registerContent(
  "c6",
  "<div></div>",
  "0 b&",
  (_scope) => {
    _$.setTagVar(_scope, 0, _setHtml$thing_content), _setup_(_scope[0]);
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
