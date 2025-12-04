// size: 202 (min) 151 (brotli)
const $if_content__setup = ($scope) => {
  _._attr_nonce($scope, "a");
};
_._script("a0", ($scope) => _._attrs_script($scope, "c"));
const $if = _._if(
    3,
    "<script type=magic>\n    D\n  <\/script>",
    " b",
    $if_content__setup,
  ),
  $mounted = _._let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
(_._script("a1", ($scope) => $mounted($scope, !0)), init());
