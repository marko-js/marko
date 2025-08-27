// size: 220 (min) 159 (brotli)
const $for_content = _$.createRenderer("Child", "b"),
  $for = _$.loopOf(1, $for_content),
  $children_effect = _$.effect("a0", ($scope, { 2: children }) => {
    1 === children.length && $children($scope, (children = [...children, 2]));
  }),
  $children = _$.state(2, ($scope, children) => {
    ($children_length($scope, children?.length),
      $for($scope, [children]),
      $children_effect($scope));
  }),
  $children_length = _$.value(3, ($scope, children_length) =>
    _$.attr($scope[0], "data-children", children_length),
  );
init();
