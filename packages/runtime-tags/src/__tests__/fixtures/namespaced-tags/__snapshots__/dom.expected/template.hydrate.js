// size: 696 (min) 336 (brotli)
const $Child_content2 = _._content_resume("a0", "Hi", "b"),
  $Child_content = _._content_resume("a1", "Hi", "b"),
  $Parent_content__setup = _._closure_get(10, ($scope, input_value) =>
    _._html($scope, input_value, 0),
  ),
  $Parent_content = _._content_resume("a2", " ", " b", $Parent_content__setup),
  $dynamicTag3 = _._dynamic_tag(5, $Parent_content),
  $Parent__OR__Child__script = _._script(
    "a3",
    ($scope, { 11: Parent, 12: Child }) => {
      for (const node of $scope[0].querySelectorAll("a"))
        node.getAttribute("ns") !== node.namespaceURI &&
          node.setAttribute("ns", node.namespaceURI);
    },
  ),
  $Parent__OR__Child = _._or(13, $Parent__OR__Child__script),
  $Parent__script = _._script("a4", ($scope, { 11: Parent }) =>
    _._on($scope[6], "click", function () {
      $Parent($scope, (Parent = "div" === Parent ? "svg" : "div"));
    }),
  ),
  $Parent = _._let(11, ($scope, Parent) => {
    ($dynamicTag3($scope, Parent),
      $Parent__OR__Child($scope),
      $Parent__script($scope));
  }),
  $dynamicTag = _._dynamic_tag(2, $Child_content),
  $dynamicTag2 = _._dynamic_tag(4, $Child_content2),
  $Child__script = _._script("a5", ($scope, { 12: Child }) =>
    _._on($scope[7], "click", function () {
      $Child($scope, (Child = "a" === Child ? null : "a"));
    }),
  ),
  $Child = _._let(12, ($scope, Child) => {
    ($dynamicTag($scope, Child, () => ({ href: "#bar" })),
      $dynamicTag2($scope, Child, () => ({ href: "#bar" })),
      $Parent__OR__Child($scope),
      $Child__script($scope));
  });
init();
