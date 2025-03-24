// size: 580 (min) 302 (brotli)
_$.enableCatch();
const _value$await_content = _$.value(2, (_scope, value) =>
    _$.data(
      _scope[0],
      value > 1
        ? (() => {
            throw new Error("ERROR!");
          })()
        : value,
    ),
  ),
  _params_3$await_content = _$.value(1, (_scope, _params_3) =>
    _value$await_content(_scope, _params_3[0]),
  ),
  _await_content = _$.createRenderer(
    "Async: <!>",
    "b%",
    0,
    _params_3$await_content,
  ),
  _err$catch_content = _$.value(2, (_scope, err) => _$.data(_scope[0], err)),
  _params_2$catch_content = _$.value(1, (_scope, _params_2) =>
    _err$catch_content(_scope, _params_2[0]),
  );
_$.registerContent("a0", " ", " ", 0, _params_2$catch_content),
  _$.registerContent("a1", "LOADING...");
const _await$try_content = _$.awaitTag(0, _await_content),
  _clickCount$try_content_effect = _$.effect(
    "a2",
    (_scope, { _: { 3: clickCount } }) =>
      (_scope._[1].textContent = clickCount),
  ),
  _clickCount$try_content = _$.dynamicClosureRead(3, (_scope, clickCount) => {
    _await$try_content(_scope, resolveAfter(clickCount, 1)),
      _clickCount$try_content_effect(_scope);
  }),
  _clickCount_closure = _$.dynamicClosure(_clickCount$try_content),
  _clickCount_effect = _$.effect("a3", (_scope, { 3: clickCount }) =>
    _$.on(_scope[0], "click", function () {
      _clickCount(_scope, clickCount + 1);
    }),
  ),
  _clickCount = _$.state(3, (_scope, clickCount) => {
    _clickCount_closure(_scope), _clickCount_effect(_scope);
  });
init();
