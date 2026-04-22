// size: 377 (min) 218 (brotli)
_._enable_catch();
const $await_content__setup = _._script(
    `a0`,
    ($scope) => (document.querySelector(`#outside`).textContent = `Fail`),
  ),
  $placeholder_content = _._content_resume(`a1`, `loading...`, `b`),
  $await_content = _._await_content(0, 0, 0, $await_content__setup),
  $try_content__await_promise = _._await_promise(0),
  $if_content__try = _._try(0, `<!><!><!>`, `b%c`, ($scope) => {
    ($await_content($scope),
      $try_content__await_promise($scope, resolveAfter(0, 1)));
  }),
  $if = _._if(0, `<!><!><!>`, `b%c`, ($scope) =>
    $if_content__try($scope, {
      placeholder: _.attrTag({ content: $placeholder_content($scope) }),
    }),
  ),
  $show = _._let(1, ($scope) => $if($scope, +!$scope.b));
(_._script(`a2`, ($scope) => $show($scope, 0)), init());
