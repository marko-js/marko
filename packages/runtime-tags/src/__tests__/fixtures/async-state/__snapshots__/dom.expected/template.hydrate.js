// size: 345 (min) 207 (brotli)
_._enable_catch();
const $await_content__value = _._const(2, ($scope, value) =>
    _._text($scope[0], value),
  ),
  $await_content__$params = _._const(1, ($scope, $params2) =>
    $await_content__value($scope, $params2[0]),
  ),
  $await_content = _._content_branch(" ", " b", 0, $await_content__$params);
_._content_resume("a0", "LOADING...", "b");
const $try_content__await = _._await(0, $await_content),
  $try_content__clickCount = _._closure_get(2, ($scope, clickCount) =>
    $try_content__await($scope, resolveAfter(clickCount, 1)),
  ),
  $clickCount__closure = _._closure($try_content__clickCount),
  $clickCount__script = _._script("a1", ($scope, { 2: clickCount }) =>
    _._on($scope[0], "click", function () {
      $clickCount($scope, ++clickCount);
    }),
  ),
  $clickCount = _._let(2, ($scope) => {
    ($clickCount__closure($scope), $clickCount__script($scope));
  });
init();
