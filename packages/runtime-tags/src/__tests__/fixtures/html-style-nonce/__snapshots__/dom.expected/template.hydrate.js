// size: 191 (min) 147 (brotli)
const $if_content__setup = ($scope) => {
  _._attr_nonce($scope, "a");
};
_._script("a0", ($scope) => _._attrs_script($scope, "b"));
const $if = _._if(2, "<style>\n    D {}\n  </style>", " b", $if_content__setup),
  $mounted = _._let(4, ($scope) => $if($scope, $scope.e ? 0 : 1));
(_._script("a1", ($scope) => $mounted($scope, !0)), init());
