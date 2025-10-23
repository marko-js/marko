// size: 332 (min) 217 (brotli)
const $for_content__item = _._const(2, ($scope, item) =>
    _._text($scope[0], item),
  ),
  $for_content__$params = _._const(1, ($scope, $params2) =>
    $for_content__item($scope, $params2[0]),
  ),
  $for_content = _._content_branch(
    "<li> </li>",
    "D l",
    0,
    $for_content__$params,
  ),
  $getul = _._el("a0", "j1"),
  $for = _._for_of(1, $for_content),
  $items__script = _._script("a1", ($scope, { 2: items }) =>
    _._on($scope[0], "click", function () {
      $items($scope, (items = [...items, items?.length]));
    }),
  ),
  $items = _._let(2, ($scope, items) => {
    ($for($scope, [items]), $items__script($scope));
  });
(_._script("a2", ($scope) => {
  $getul($scope)().classList.add("attached");
}),
  init());
