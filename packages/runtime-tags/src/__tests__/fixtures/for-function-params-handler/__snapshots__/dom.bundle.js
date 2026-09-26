// template.marko
const $for_content2__handler = /*@__PURE__*/ _const(4, _script("a3", ($scope) => _on($scope.a, "click", $scope.e)));
const $for_content2__setup = ($scope) => _text($scope.b, $scope.M);
const $for_content2__$params = ($scope, $params3) => $for_content2__handler($scope, $params3[1]);
const $for_content__handler = /*@__PURE__*/ _const(2, _script("a2", ($scope) => _on($scope.a, "click", $scope.c)));
const $for_content__$params = ($scope, $params2) => $for_content__handler($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<button id=of>of</button>", " ", 0, $for_content__$params);
const $for2 = /*@__PURE__*/ _for_in(1, "<button id=in> </button>", " D ", $for_content2__setup, $for_content2__$params);
const $count = /*@__PURE__*/ _let(3, ($scope) => {
	_text($scope.c, $scope.d);
	$for($scope, [[$of($scope)]]);
	$for2($scope, [{ add: $in($scope) }]);
});
const $of = ($scope) => () => $count($scope, +$scope.d + 1) - 1;
const $in = ($scope) => function() {
	$count($scope, $scope.d + 10);
};
_resumed.a0 = $of;
_resumed.a1 = $in;
