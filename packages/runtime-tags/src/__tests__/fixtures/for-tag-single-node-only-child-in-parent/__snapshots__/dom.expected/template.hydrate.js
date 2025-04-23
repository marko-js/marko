// size: 226 (min) 158 (brotli)
const $for_content = _$.createRenderer("<div></div>"),
  $for = _$.loopOf(0, $for_content),
  $children_effect = _$.effect("a0", ($scope, { 1: children }) => {
    1 === children.length && $children($scope, [...children, 2]);
  }),
  $children = _$.state(1, ($scope, children) => {
    $children_length($scope, children?.length),
      $for($scope, [children]),
      $children_effect($scope);
  }),
  $children_length = _$.value(2, ($scope, children_length) =>
    _$.attr($scope[0], "data-children", children_length),
  );
init();
