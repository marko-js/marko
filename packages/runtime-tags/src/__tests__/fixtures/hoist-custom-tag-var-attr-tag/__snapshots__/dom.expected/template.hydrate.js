// size: 346 (min) 208 (brotli)
function _return(_scope) {
  return function (html) {
    _scope[0].innerHTML = html;
  };
}
_$.register("a0", _return), _$.register("c1", _$.hoist(4, "1?"));
const _setHtml$what_content = _$.registerBoundSignal("c2", _$.value(4));
_$.registerContent(
  "c0",
  "<div></div>",
  "0 b&",
  (_scope) => {
    _$.setTagVar(_scope, 0, _setHtml$what_content),
      (function (_scope) {
        _$.tagVarSignal(_scope, _return(_scope));
      })(_scope[0]);
  },
  0,
  "1?",
),
  _$.effect("c3", ({ 1: _hoisted_setHtml }) => {
    for (const fn of 1) fn("Hoist from custom tag");
  }),
  init();
