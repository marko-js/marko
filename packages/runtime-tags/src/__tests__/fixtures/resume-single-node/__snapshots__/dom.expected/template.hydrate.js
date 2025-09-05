// size: 357 (min) 226 (brotli)
const $if_content = _._content_branch("<div>b</div>", "b"),
  $for_content__if = _._if(0, $if_content),
  $for_content__items_length = _._for_closure(5, 0, ($scope, items_length) =>
    $for_content__if($scope, items_length > 1 ? 0 : 1),
  ),
  $for_content__setup = $for_content__items_length,
  $for_content = _._content_branch(
    "<div>a</div><!><!>",
    "b%c",
    $for_content__setup,
  ),
  $itemId__OR__items__script = _._script(
    "a0",
    ($scope, { 2: itemId, 3: items }) =>
      _._on($scope[1], "click", function () {
        $items($scope, (items = [...items, $itemId($scope, ++itemId)]));
      }),
  ),
  $itemId__OR__items = _._or(4, $itemId__OR__items__script),
  $itemId = _._let(2, $itemId__OR__items),
  $for = _._for_of(0, $for_content),
  $items = _._let(3, ($scope, items) => {
    ($items_length($scope, items?.length),
      $for($scope, [items]),
      $itemId__OR__items($scope));
  }),
  $items_length = _._const(5, $for_content__items_length);
init();
