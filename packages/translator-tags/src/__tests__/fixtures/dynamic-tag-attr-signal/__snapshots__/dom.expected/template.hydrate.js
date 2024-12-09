// size: 143 (min) 114 (brotli)
const _className_effect = _$.effect("a0", (_scope, { 2: className }) =>
    _$.on(_scope[1], "click", function () {
      _className(_scope, "A" === className ? "B" : "A");
    }),
  ),
  _className = _$.state(2, (_scope, className) => {
    _$.classAttr(_scope[0], className), _className_effect(_scope);
  });
init();
