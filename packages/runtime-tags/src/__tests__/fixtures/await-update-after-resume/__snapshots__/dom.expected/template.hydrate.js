// size: 452 (min) 233 (brotli)
_._enable_catch();
const $await_content__value__script = _._script(
    "a0",
    ($scope) => ($scope._._.c.textContent += `\neffect ran value=${$scope.c}`),
  ),
  $await_content__value = _._const(2, ($scope) => {
    (_._text($scope.a, $scope.c), $await_content__value__script($scope));
  });
_._script("a1", ($scope) => ($scope._._.c.textContent += "\nsetup effect ran"));
const $await_content__$params = _._const(1, ($scope) =>
  $await_content__value($scope, $scope.b[0]),
);
_._content_resume("a2", "loading...", "b");
const $try_content__await_promise = _._await_promise(
    0,
    $await_content__$params,
  ),
  $try_content__value = _._closure_get(3, ($scope) =>
    $try_content__await_promise($scope, resolveAfter($scope._.d)),
  ),
  $value__closure = _._closure($try_content__value),
  $value = _._let(3, ($scope) => {
    (_._text($scope.a, $scope.d), $value__closure($scope));
  });
(_._script("a3", ($scope) =>
  (async () => {
    (await resolveAfter(0, 2), $value($scope, 1));
  })(),
),
  init());
