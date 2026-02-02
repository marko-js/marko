// size: 428 (min) 226 (brotli)
_._enable_catch();
const $await_content__value__script = _._script("a0", ($scope) =>
    console.log(`\neffect ran value=${$scope.c}`),
  ),
  $await_content__value = _._const(2, ($scope) => {
    (_._text($scope.a, $scope.c), $await_content__value__script($scope));
  });
_._script("a1", ($scope) => console.log("\nsetup effect ran"));
const $await_content__$params = ($scope, $params2) =>
  $await_content__value($scope, $params2[0]);
_._content_resume("a2", "loading...", "b");
const $try_content__await_promise = _._await_promise(
    0,
    $await_content__$params,
  ),
  $try_content__value = _._closure_get(2, ($scope) =>
    $try_content__await_promise($scope, resolveAfter($scope._.c, 3)),
  ),
  $value__closure = _._closure($try_content__value),
  $value = _._let(2, ($scope) => {
    (_._text($scope.a, $scope.c), $value__closure($scope));
  });
(_._script("a3", ($scope) =>
  (async () => {
    (await resolveAfter(0, 1), $value($scope, 1));
  })(),
),
  init());
