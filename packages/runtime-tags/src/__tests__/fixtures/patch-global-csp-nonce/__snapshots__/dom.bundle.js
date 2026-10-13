// template.marko
const $if_content2__setup = ($scope) => _attr_nonce($scope, "a");
const $else_content__if = /*@__PURE__*/ _if(0, "<style>\n      p {}\n    </style>", " ", $if_content2__setup);
const $else_content__mounted = /*@__PURE__*/ _fill_let("a3", 1, ($scope) => $else_content__if($scope, $scope.b ? 0 : 1));
const $else_content__setup__script = _script("a2", ($scope) => $else_content__mounted($scope, true));
