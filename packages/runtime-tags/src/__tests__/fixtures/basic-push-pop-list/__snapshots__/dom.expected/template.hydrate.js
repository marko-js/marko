// size: 380 (min) 223 (brotli)
const $for_content__item = _._const(2, ($scope, item) =>
    _._text($scope[0], item),
  ),
  $for_content__$params = _._const(1, ($scope, $params2) =>
    $for_content__item($scope, $params2[0]),
  ),
  $for_content = _._content_branch(" ", " b", 0, $for_content__$params),
  $id__OR__items__script = _._script("a0", ($scope, { 3: id, 4: items }) =>
    _._on($scope[1], "click", function () {
      const nextId = id + 1;
      ($id($scope, (id = nextId)),
        $items($scope, (items = [...items, nextId])));
    }),
  ),
  $id__OR__items = _._or(5, $id__OR__items__script),
  $id = _._let(3, $id__OR__items),
  $for = _._for_of(0, $for_content),
  $items__script = _._script("a1", ($scope, { 4: items }) =>
    _._on($scope[2], "click", function () {
      $items($scope, (items = items.slice(0, -1)));
    }),
  ),
  $items = _._let(4, ($scope, items) => {
    ($for($scope, [items]), $id__OR__items($scope), $items__script($scope));
  });
init();
