// size: 224 (min) 170 (brotli)
const $for_content = _._content_branch("Child", "b"),
  $for = _._for_of(1, $for_content),
  $children__script = _._script("a0", ($scope, { 2: children }) => {
    1 === children.length && $children($scope, (children = [...children, 2]));
  }),
  $children = _._let(2, ($scope, children) => {
    ($children_length($scope, children?.length),
      $for($scope, [children]),
      $children__script($scope));
  }),
  $children_length = _._const(3, ($scope, children_length) =>
    _._attr($scope[0], "data-children", children_length),
  );
init();
