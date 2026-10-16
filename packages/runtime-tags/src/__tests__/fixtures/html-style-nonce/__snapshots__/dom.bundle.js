// template.marko
const $spreadAttrs__script = _script("a1", ($scope) => _attrs_script($scope, "a"));
const $if = /*@__PURE__*/ _if(1, "<style>\n    D {}\n  </style>", "!");
const $mounted = /*@__PURE__*/ _let(3, ($scope) => $if($scope, $scope.d ? 0 : 1));
const $setup__script = _script("a0", ($scope) => $mounted($scope, true));
