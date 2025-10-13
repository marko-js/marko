// size: 416 (min) 263 (brotli)
const $Foo_content2__dynamicTag = _._dynamic_tag(0, 0, 0, 1),
  $Foo_content2__input_content__OR__input_value = _._or(5, ($scope) => {
    let { 3: input_content, 4: input_value } = $scope;
    $Foo_content2__dynamicTag($scope, input_content, () => [input_value]);
  }),
  $Foo_content2__input_value = _._const(
    4,
    $Foo_content2__input_content__OR__input_value,
  ),
  $if_content__setup = _._closure_get(
    3,
    ($scope, a) => _._text($scope[0], a),
    ($scope) => $scope._._,
  ),
  $if_content = _._content_branch(" ", " b", $if_content__setup),
  $Foo_content__if = _._if(0, $if_content),
  $Foo_content__v = _._const(2, ($scope, v) =>
    $Foo_content__if($scope, v ? 0 : 1),
  ),
  $Foo_content__$params = _._const(1, ($scope, $params3) =>
    $Foo_content__v($scope, $params3[0]),
  );
_._content_resume("a0", "<!><!><!>", "b%c", 0, $Foo_content__$params);
const $count__script = _._script("a1", ($scope, { 2: count }) =>
    _._on($scope[0], "click", function () {
      $count($scope, ++count);
    }),
  ),
  $count = _._let(2, ($scope, count) => {
    ($Foo_content2__input_value($scope[1], count), $count__script($scope));
  });
init();
