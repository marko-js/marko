// template.marko
const $for_content3__fn__script = _script("a5", ($scope) => _on($scope.a, "click", $scope.c));
const $for_content3__fn = /*@__PURE__*/ _const(2, $for_content3__fn__script);
const $for_content3__$params = ($scope, $params4) => $for_content3__fn($scope, $params4[0]);
const $for_content2__fn__script = _script("a4", ($scope) => _on($scope.a, "click", $scope.c));
const $for_content2__fn = /*@__PURE__*/ _const(2, $for_content2__fn__script);
const $for_content2__$params = ($scope, $params3) => $for_content2__fn($scope, $params3[0]);
const $for_content__fn__script = _script("a3", ($scope) => _on($scope.a, "click", $scope.c));
const $for_content__fn = /*@__PURE__*/ _const(2, $for_content__fn__script);
const $for_content__$params = ($scope, $params2) => $for_content__fn($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<button id=concat></button>", " ", 0, $for_content__$params);
const $for2 = /*@__PURE__*/ _for_of_unkeyed(2, "<button id=values></button>", " ", 0, $for_content2__$params);
const $for3 = /*@__PURE__*/ _for_of_unkeyed(3, "<button id=direct></button>", " ", 0, $for_content3__$params);
const $n = /*@__PURE__*/ _let(4, ($scope) => {
	_text($scope.a, $scope.e);
	$for($scope, [[$of($scope)].concat([])]);
	$for2($scope, [Object.values({ counted: $of2($scope) })]);
	$for3($scope, [[$of3($scope)]]);
});
const $of = ($scope) => () => $n($scope, +$scope.e + 1) - 1;
const $of2 = ($scope) => function() {
	$n($scope, +$scope.e + 1);
};
const $of3 = ($scope) => () => $n($scope, +$scope.e + 1) - 1;
_resumed.a0 = $of;
_resumed.a1 = $of2;
_resumed.a2 = $of3;
