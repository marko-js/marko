// size: 551 (min) 307 (brotli)
_._enable_catch();
const $await_content__value = _._const(2, ($scope) =>
    _._text(
      $scope[0],
      $scope[2] > 1
        ? (() => {
            throw new Error("ERROR!");
          })()
        : $scope[2],
    ),
  ),
  $await_content__$params = _._const(1, ($scope) =>
    $await_content__value($scope, $scope[1][0]),
  ),
  $await_content = _._content_branch(
    "Async: <!>",
    "b%b",
    0,
    $await_content__$params,
  ),
  $catch_content__err = _._const(2, ($scope) => _._text($scope[0], $scope[2])),
  $catch_content__$params = _._const(1, ($scope) =>
    $catch_content__err($scope, $scope[1][0]),
  );
(_._content_resume("a0", " ", " b", 0, $catch_content__$params),
  _._content_resume("a1", "LOADING...", "b"));
const $try_content__await = _._await(0, $await_content),
  $try_content__clickCount__script = _._script("a2", ($scope) => {
    $scope._[1].textContent = $scope._[3];
  }),
  $try_content__clickCount = _._closure_get(3, ($scope) => {
    ($try_content__await($scope, resolveAfter($scope._[3], 1)),
      $try_content__clickCount__script($scope));
  }),
  $clickCount__closure = _._closure($try_content__clickCount),
  $clickCount__script = _._script("a3", ($scope) =>
    _._on($scope[0], "click", function () {
      $clickCount($scope, $scope[3] + 1);
    }),
  ),
  $clickCount = _._let(3, ($scope) => {
    ($clickCount__closure($scope), $clickCount__script($scope));
  });
init();
