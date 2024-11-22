// size: 162 (min) 143 (brotli)
const _className_effect = _$.effect("b", (_scope) =>
    _$.on(
      _scope[1],
      "click",
      ((_scope) => {
        const { 2: className } = _scope;
        return function () {
          _className(_scope, "A" === className ? "B" : "A");
        };
      })(_scope),
    ),
  ),
  _className = _$.state(2, (_scope, className) => {
    _$.classAttr(_scope[0], className), _className_effect(_scope);
  });
init();
