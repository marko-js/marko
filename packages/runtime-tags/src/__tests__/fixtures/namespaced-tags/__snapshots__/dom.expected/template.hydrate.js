// size: 669 (min) 325 (brotli)
const $Child_content2 = _._content_resume("a0", "Hi", "b"),
  $Child_content = _._content_resume("a1", "Hi", "b"),
  $Parent_content__setup = _._closure_get(10, ($scope) =>
    _._html($scope, $scope._.k, "a"),
  ),
  $Parent_content = _._content_resume("a2", " ", " b", $Parent_content__setup),
  $dynamicTag3 = _._dynamic_tag(5, $Parent_content),
  $Parent__OR__Child__script = _._script("a3", ($scope) => {
    ($scope.l, $scope.m);
    for (const node of $scope.a.querySelectorAll("a"))
      node.getAttribute("ns") !== node.namespaceURI &&
        node.setAttribute("ns", node.namespaceURI);
  }),
  $Parent__OR__Child = _._or(13, $Parent__OR__Child__script),
  $Parent__script = _._script("a4", ($scope) =>
    _._on($scope.g, "click", function () {
      $Parent($scope, "div" === $scope.l ? "svg" : "div");
    }),
  ),
  $Parent = _._let(11, ($scope) => {
    ($dynamicTag3($scope, $scope.l),
      $Parent__OR__Child($scope),
      $Parent__script($scope));
  }),
  $dynamicTag = _._dynamic_tag(2, $Child_content),
  $dynamicTag2 = _._dynamic_tag(4, $Child_content2),
  $Child__script = _._script("a5", ($scope) =>
    _._on($scope.h, "click", function () {
      $Child($scope, "a" === $scope.m ? null : "a");
    }),
  ),
  $Child = _._let(12, ($scope) => {
    ($dynamicTag($scope, $scope.m, () => ({ href: "#bar" })),
      $dynamicTag2($scope, $scope.m, () => ({ href: "#bar" })),
      $Parent__OR__Child($scope),
      $Child__script($scope));
  });
init();
