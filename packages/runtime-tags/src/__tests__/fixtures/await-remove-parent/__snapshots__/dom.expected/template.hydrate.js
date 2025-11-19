// size: 354 (min) 217 (brotli)
_._enable_catch();
const $await_content__setup = _._script(
    "a0",
    ($scope) => (document.querySelector("#outside").textContent = "Fail"),
  ),
  $placeholder_content = _._content_resume("a1", "loading...", "b"),
  $try_content__await = _._await(0, 0, 0, $await_content__setup),
  $try_content__setup = ($scope) => {
    $try_content__await($scope, resolveAfter(0, 1));
  },
  $if_content__try = _._try(0, "<!><!><!>", "b%c", $try_content__setup),
  $if_content__setup = ($scope) => {
    $if_content__try($scope, {
      placeholder: _.attrTag({ content: $placeholder_content($scope) }),
    });
  },
  $if = _._if(0, "<!><!><!>", "b%c", $if_content__setup),
  $show = _._let(1, ($scope) => $if($scope, $scope.b ? 0 : 1));
(_._script("a2", ($scope) => $show($scope, 0)), init());
