// size: 464 (min) 276 (brotli)
const $if_content__dynamicTag = _._dynamic_tag(0),
  $if_content__content = _._if_closure(0, 0, ($scope) =>
    $if_content__dynamicTag($scope, $scope._.d),
  ),
  $if_content__setup = $if_content__content,
  $for_content__if = _._if(0, `<!><!><!>`, `b%c`, $if_content__setup),
  $for_content__content = _._const(3, ($scope) => {
    ($for_content__if($scope, +!$scope.d), $if_content__content($scope));
  }),
  $for_content__$params = ($scope, $params2) =>
    $for_content__$temp($scope, $params2?.[0]),
  $for_content__$temp = ($scope, $temp) =>
    $for_content__content($scope, $temp.content),
  $for = _._for_of(0, `<!><!><!>`, `b%c`, 0, $for_content__$params),
  $input_section = ($scope, input_section) => $for($scope, [input_section]),
  $section_content__count = _._closure_get(1, ($scope) =>
    _._text($scope.a, $scope._.b),
  ),
  $section_content__setup = $section_content__count,
  $section_content = _._content_resume(
    `b1`,
    ` `,
    ` b`,
    $section_content__setup,
  ),
  $count__closure = _._closure($section_content__count),
  $count = _._let(1, ($scope) => {
    ($input_section(
      $scope.a,
      _.attrTag({
        onClick: $onClick($scope),
        content: $section_content($scope),
      }),
    ),
      $count__closure($scope));
  });
function $onClick($scope) {
  return function () {
    $count($scope, $scope.b + 1);
  };
}
(_._resume(`b0`, $onClick), init());
