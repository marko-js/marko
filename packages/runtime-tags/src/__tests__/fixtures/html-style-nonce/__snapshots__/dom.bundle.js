// total: 8676 (min) 3647 (brotli)
// template.marko: 169 (min) 133 (brotli)
const $if_content__setup = ($scope) => _attr_nonce($scope, "a");
const $spreadAttrs__script = _script("a1", ($scope) => _attrs_script($scope, "b"));
const $if = /* @__PURE__ */ _if(2, "<style>\n    D {}\n  </style>", " b", $if_content__setup);
const $mounted = /* @__PURE__ */ _let(4, ($scope) => $if($scope, $scope.e ? 0 : 1));
const $setup__script = _script("a0", ($scope) => $mounted($scope, true));
