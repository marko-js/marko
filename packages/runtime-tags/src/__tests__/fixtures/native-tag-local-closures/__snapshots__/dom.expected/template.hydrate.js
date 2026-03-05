// size: 424 (min) 249 (brotli)
const $item_content = _._content_closures(_._content_resume("a0", " ", " b"), {
    4($scope) {
      _._text($scope.a, $scope.e);
    },
  }),
  $for_content__item__script = _._script("a1", ($scope) =>
    _._attrs_script($scope, "a"),
  ),
  $for_content__item = _._const(2, ($scope) => {
    (_._attrs_content($scope, "a", $scope.c),
      $for_content__item__script($scope));
  }),
  $for_content__$params = ($scope, $params3) =>
    $for_content__item($scope, $params3[0]),
  $Child_content__for = _._for_of(
    0,
    "<div></div>",
    " b",
    0,
    $for_content__$params,
  ),
  $size__script = _._script("a2", ($scope) =>
    _._on($scope.b, "click", function () {
      $size($scope, $scope.c + 1);
    }),
  ),
  $size = _._let(2, ($scope) => {
    let $item;
    (_.forUntil($scope.c, 0, 1, (i) => {
      $item = _.attrTags($item, { content: $item_content($scope, { 4: i }) });
    }),
      (($scope, input_item) => {
        $Child_content__for($scope, [input_item]);
      })($scope.a, $item),
      $size__script($scope));
  });
init();
