// size: 827 (min) 374 (brotli)
const _dynamicTag2 = _$.dynamicTag(1),
  _dynamicTag = _$.dynamicTag(),
  _input_content = _$.value(4, (_scope, input_content) => {
    _dynamicTag(_scope, input_content), _dynamicTag2(_scope, input_content);
  });
function _setup(_scope) {
  _$.tagVarSignal(_scope, _return(_scope));
}
function _return(_scope) {
  return function (html) {
    _scope[0].innerHTML = html;
  };
}
_$.register("a0", _return);
const _get_hoisted_setHtml = _$.hoist(16, "a4"),
  _setHtml3$inputshowsectionnull_content = _$.registerBoundSignal(
    "c1",
    _$.value(16),
  );
_$.registerContent(
  "c0",
  "<div></div>",
  "0 b&",
  (_scope) => {
    _$.setTagVar(_scope, 0, _setHtml3$inputshowsectionnull_content),
      _setup(_scope[0]);
  },
  0,
  0,
  "a4",
);
const _get_hoisted_setHtml2 = _$.hoist(11, "a3", "a2"),
  _setHtml2$thing_content = _$.registerBoundSignal("c3", _$.value(11)),
  _setup$thing_content2 = (_scope) => {
    _$.setTagVar(_scope, 0, _setHtml2$thing_content), _setup(_scope[0]);
  },
  _thing_content2 = _$.createContent(
    "c2",
    "<div></div>",
    "0 b&",
    _setup$thing_content2,
    0,
    0,
    "a3",
  );
_$.registerContent(
  "c4",
  "<!><!><!><!><!><!>",
  "D/D%b%bD&D",
  (_scope) => {
    _scope[0], _input_content(_scope[0], _thing_content2(_scope));
  },
  0,
  0,
  "a2",
),
  _$.register("c6", _$.hoist(5, "a1")),
  _$.registerBoundSignal("c7", _$.value(5)),
  _$.effect("c8", ({ 6: _hoisted_setHtml }) => {
    for (const fn of 6) fn("Hoist from custom tag");
  }),
  _$.effect("c9", (_scope) => {
    _get_hoisted_setHtml2(_scope)("Hoist from dynamic tag"),
      _get_hoisted_setHtml(_scope)("Hoist from dynamic tag");
  }),
  init();
