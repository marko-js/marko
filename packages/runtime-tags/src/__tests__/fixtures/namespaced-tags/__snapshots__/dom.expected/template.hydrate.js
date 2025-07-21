// size: 692 (min) 329 (brotli)
const $Child_content2 = _$.registerContent("a0", "Hi"),
  $Child_content = _$.registerContent("a1", "Hi"),
  $setup$Parent$content = _$.dynamicClosureRead(10, ($scope, input_value) =>
    _$.html($scope, input_value, 0),
  ),
  $Parent_content = _$.registerContent("a2", " ", " ", $setup$Parent$content),
  $dynamicTag3 = _$.dynamicTag(5, $Parent_content),
  $expr_Parent_Child_effect = _$.effect(
    "a3",
    ($scope, { 11: Parent, 12: Child }) => {
      for (const node of $scope[0].querySelectorAll("a"))
        node.getAttribute("ns") !== node.namespaceURI &&
          node.setAttribute("ns", node.namespaceURI);
    },
  ),
  $expr_Parent_Child = _$.intersection(13, $expr_Parent_Child_effect),
  $Parent_effect = _$.effect("a4", ($scope, { 11: Parent }) =>
    _$.on($scope[6], "click", function () {
      $Parent($scope, (Parent = "div" === Parent ? "svg" : "div"));
    }),
  ),
  $Parent = _$.state(11, ($scope, Parent) => {
    ($dynamicTag3($scope, Parent),
      $expr_Parent_Child($scope),
      $Parent_effect($scope));
  }),
  $dynamicTag = _$.dynamicTag(2, $Child_content),
  $dynamicTag2 = _$.dynamicTag(4, $Child_content2),
  $Child_effect = _$.effect("a5", ($scope, { 12: Child }) =>
    _$.on($scope[7], "click", function () {
      $Child($scope, (Child = "a" === Child ? null : "a"));
    }),
  ),
  $Child = _$.state(12, ($scope, Child) => {
    ($dynamicTag($scope, Child, () => ({ href: "#bar" })),
      $dynamicTag2($scope, Child, () => ({ href: "#bar" })),
      $expr_Parent_Child($scope),
      $Child_effect($scope));
  });
init();
