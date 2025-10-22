// size: 563 (min) 308 (brotli)
_._enable_catch();
const $await_content__value = _._const(2, ($scope, value) =>
    _._text(
      $scope[0],
      value > 1
        ? (() => {
            throw new Error("ERROR!");
          })()
        : value,
    ),
  ),
  $await_content__$params = _._const(1, ($scope, $params3) =>
    $await_content__value($scope, $params3[0]),
  ),
  $await_content = _._content_branch(
    "Async: <!>",
    "b%b",
    0,
    $await_content__$params,
  ),
  $catch_content__err = _._const(2, ($scope, err) => _._text($scope[0], err)),
  $catch_content__$params = _._const(1, ($scope, $params2) =>
    $catch_content__err($scope, $params2[0]),
  );
(_._content_resume("a0", " ", " b", 0, $catch_content__$params),
  _._content_resume("a1", "LOADING...", "b"));
const $try_content__await = _._await(0, $await_content),
  $try_content__clickCount__script = _._script(
    "a2",
    ($scope, { _: { 3: clickCount } }) => {
      $scope._[1].textContent = clickCount;
    },
  ),
  $try_content__clickCount = _._closure_get(3, ($scope, clickCount) => {
    ($try_content__await($scope, resolveAfter(clickCount, 1)),
      $try_content__clickCount__script($scope));
  }),
  $clickCount__closure = _._closure($try_content__clickCount),
  $clickCount__script = _._script("a3", ($scope, { 3: clickCount }) =>
    _._on($scope[0], "click", function () {
      $clickCount($scope, ++clickCount);
    }),
  ),
  $clickCount = _._let(3, ($scope) => {
    ($clickCount__closure($scope), $clickCount__script($scope));
  });
init();
