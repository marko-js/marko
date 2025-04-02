// size: 359 (min) 212 (brotli)
_$.enableCatch();
const _value$await_content = _$.value(2, (_scope, value) =>
    _$.data(_scope[0], value),
  ),
  _params2$await_content = _$.value(1, (_scope, _params2) =>
    _value$await_content(_scope, _params2[0]),
  ),
  _await_content = _$.createRenderer(" ", " ", 0, _params2$await_content);
_$.registerContent("a0", "LOADING...");
const _await$try_content = _$.awaitTag(0, _await_content),
  _clickCount$try_content = _$.dynamicClosureRead(2, (_scope, clickCount) =>
    _await$try_content(_scope, resolveAfter(clickCount, 1)),
  ),
  _clickCount_closure = _$.dynamicClosure(_clickCount$try_content),
  _clickCount_effect = _$.effect("a1", (_scope, { 2: clickCount }) =>
    _$.on(_scope[0], "click", function () {
      _clickCount(_scope, clickCount + 1);
    }),
  ),
  _clickCount = _$.state(2, (_scope) => {
    _clickCount_closure(_scope), _clickCount_effect(_scope);
  });
init();
