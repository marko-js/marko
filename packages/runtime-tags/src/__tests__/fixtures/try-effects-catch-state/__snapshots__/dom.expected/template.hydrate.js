// size: 381 (min) 222 (brotli)
_$.enableCatch();
const _err$catch_content = _$.value(2, (_scope, err) =>
    _$.data(_scope[0], err),
  ),
  _params_2$catch_content = _$.value(1, (_scope, _params_2) =>
    _err$catch_content(_scope, _params_2[0]),
  );
_$.registerContent("a0", " ", " ", 0, _params_2$catch_content);
const _clickCount$try_content_effect = _$.effect(
    "a1",
    (_scope, { _: { 2: clickCount } }) => {
      _$.on(_scope[0], "click", function () {
        _clickCount(_scope._, clickCount + 1);
      }),
        (_scope._[0].textContent = clickCount);
    },
  ),
  _clickCount$try_content = _$.dynamicClosureRead(2, (_scope, clickCount) => {
    _$.data(
      _scope[1],
      (() => {
        if (clickCount > 1) throw new Error("ERROR!");
      })(),
    ),
      _clickCount$try_content_effect(_scope);
  }),
  _clickCount_closure = _$.dynamicClosure(_clickCount$try_content),
  _clickCount = _$.state(2, (_scope) => _clickCount_closure(_scope));
init();
