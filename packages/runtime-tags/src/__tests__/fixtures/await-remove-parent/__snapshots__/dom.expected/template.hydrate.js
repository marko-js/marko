// size: 387 (min) 228 (brotli)
_._enable_catch();
const $await_content__setup = _._script(
    "a0",
    ($scope) => (document.querySelector("#outside").textContent = "Fail"),
  ),
  $placeholder_content = _._content_resume("a1", "loading...", "b"),
  $await_content = _._await_content(0, 0, 0, $await_content__setup),
  $try_content__await_promise = _._await_promise(0),
  $try_content__setup = ($scope) => {
    ($await_content($scope),
      $try_content__await_promise($scope, resolveAfter(0, 1)));
  },
  $if_content__try = _._try(0, "<!><!><!>", "b%c", $try_content__setup),
  $if_content__setup = ($scope) =>
    $if_content__try($scope, {
      placeholder: _.attrTag({ content: $placeholder_content($scope) }),
    }),
  $if = _._if(0, "<!><!><!>", "b%c", $if_content__setup),
  $show = _._let(1, ($scope) => $if($scope, $scope.b ? 0 : 1));
(_._script("a2", ($scope) => $show($scope, 0)), init());
