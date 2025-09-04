// size: 462 (min) 242 (brotli)
const $for_content__name = _._const(4, ($scope, name) =>
    _._text($scope[0], name),
  ),
  $for_content__description = _._const(5, ($scope, description) =>
    _._text($scope[1], description),
  ),
  $for_content__$params = _._const(2, ($scope, $params2) =>
    $for_content__$temp($scope, $params2?.[0]),
  ),
  $for_content__$temp = _._const(3, ($scope, $temp) => {
    ($for_content__name($scope, $temp.name),
      $for_content__description($scope, $temp.description));
  }),
  $for_content = _._content_branch(
    "<div><!>: <!></div>",
    "D%c%l",
    0,
    $for_content__$params,
  ),
  $for = _._for_of(0, $for_content),
  $items__script = _._script("a0", ($scope, { 3: items }) => {
    (_._on($scope[1], "click", function () {
      $items(
        $scope,
        (items = [
          ...items,
          { name: "JavaScript", description: "Java, but scriptier" },
        ]),
      );
    }),
      _._on($scope[2], "click", function () {
        $items($scope, (items = items.slice(0, -1)));
      }));
  }),
  $items = _._let(3, ($scope, items) => {
    ($for($scope, [items]), $items__script($scope));
  });
init();
