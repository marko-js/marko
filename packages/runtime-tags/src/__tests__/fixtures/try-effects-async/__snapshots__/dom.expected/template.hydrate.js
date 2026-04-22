// size: 449 (min) 246 (brotli)
_._enable_catch();
const $await_content__value = ($scope, value) =>
    _._text(
      $scope.a,
      value > 1
        ? (() => {
            throw Error(`ERROR!`);
          })()
        : value,
    ),
  $await_content__$params = ($scope, $params3) =>
    $await_content__value($scope, $params3[0]),
  $catch_content__err = ($scope, err) => _._text($scope.a, err);
(_._content_resume(`a0`, ` `, ` b`, 0, ($scope, $params2) =>
  $catch_content__err($scope, $params2[0]),
),
  _._content_resume(`a1`, `LOADING...`, `b`));
const $try_content__await_promise = _._await_promise(
    0,
    $await_content__$params,
  ),
  $try_content__clickCount__script = _._script(
    `a2`,
    ($scope) => ($scope._.b.textContent = $scope._.d),
  ),
  $try_content__clickCount = _._closure_get(3, ($scope) => {
    ($try_content__await_promise($scope, resolveAfter($scope._.d)),
      $try_content__clickCount__script($scope));
  }),
  $clickCount__closure = _._closure($try_content__clickCount),
  $clickCount__script = _._script(`a3`, ($scope) =>
    _._on($scope.a, `click`, function () {
      $clickCount($scope, $scope.d + 1);
    }),
  ),
  $clickCount = _._let(3, ($scope) => {
    ($clickCount__closure($scope), $clickCount__script($scope));
  });
init();
