// size: 359 (min) 227 (brotli)
_._enable_catch();
const $catch_content__err = _._const(2, ($scope, err) =>
    _._text($scope[0], err),
  ),
  $catch_content__$params = _._const(1, ($scope, $params2) =>
    $catch_content__err($scope, $params2[0]),
  );
_._content_resume("a0", " ", " b", 0, $catch_content__$params);
const $try_content__clickCount__script = _._script(
    "a1",
    ($scope, { _: { 2: clickCount } }) => {
      (_._on($scope[0], "click", function () {
        $clickCount($scope._, ++clickCount);
      }),
        ($scope._[0].textContent = clickCount));
    },
  ),
  $try_content__clickCount = _._closure_get(2, ($scope, clickCount) => {
    (_._text(
      $scope[1],
      (() => {
        if (clickCount > 1) throw new Error("ERROR!");
      })(),
    ),
      $try_content__clickCount__script($scope));
  }),
  $clickCount__closure = _._closure($try_content__clickCount),
  $clickCount = _._let(2, $clickCount__closure);
init();
