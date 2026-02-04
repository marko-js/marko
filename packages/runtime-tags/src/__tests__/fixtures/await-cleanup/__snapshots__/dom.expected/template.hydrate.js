// size: 770 (min) 371 (brotli)
_._enable_catch();
const $await_content2__setup__script = _._script(
    "a0",
    ($scope) =>
      (_.$signal($scope, 0).onabort = () =>
        (document.querySelector("#two").textContent = "Pass")),
  ),
  $await_content2__setup = ($scope) => {
    (_.$signalReset($scope, 0), $await_content2__setup__script($scope));
  },
  $placeholder_content = _._content_resume("a1", "loading...", "b"),
  $await_content__show = _._closure_get(
    2,
    ($scope) => _._text($scope.a, $scope._._._.c),
    ($scope) => $scope._._._,
    "a2",
  ),
  $await_content__setup__script = _._script(
    "a3",
    ($scope) =>
      (_.$signal($scope, 0).onabort = () =>
        (document.querySelector("#one").textContent = "Pass")),
  ),
  $await_content__setup = ($scope) => {
    ($await_content__show($scope),
      _.$signalReset($scope, 0),
      $await_content__setup__script($scope));
  },
  $await_content = _._await_content(0, " ", " b", $await_content__setup),
  $try_content__await_promise = _._await_promise(0),
  $await_content2 = _._await_content(1, 0, 0, $await_content2__setup),
  $try_content__await_promise2 = _._await_promise(1),
  $try_content__setup = ($scope) => {
    ($await_content($scope),
      $await_content2($scope),
      $try_content__await_promise($scope, resolveAfter(0, 1)),
      $try_content__await_promise2($scope, resolveAfter(0, 1)));
  },
  $if_content__try = _._try(0, "<!><!><!><!>", "b%b%c", $try_content__setup),
  $if_content__setup = ($scope) =>
    $if_content__try($scope, {
      placeholder: _.attrTag({ content: $placeholder_content($scope) }),
    }),
  $if = _._if(1, "<!><!><!>", "b%c", $if_content__setup),
  $show__closure = _._closure($await_content__show),
  $show = _._let(2, ($scope) => {
    ($if($scope, $scope.c ? 0 : 1), $show__closure($scope));
  });
(_._script("a4", ($scope) =>
  _._on($scope.a, "click", function () {
    $show($scope, 0);
  }),
),
  init());
