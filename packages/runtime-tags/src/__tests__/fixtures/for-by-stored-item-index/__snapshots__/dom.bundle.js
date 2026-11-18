// template.marko
const $for_content__setup = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$picked($scope._, $scope.d);
}));
const $for_content__$params = ($scope, item, i) => {
	$for_content__item($scope, item);
	_text($scope.b, i);
};
const $for_content__item = /*@__PURE__*/ _const(3);
const $for = /*@__PURE__*/ _for_of(0, "<li><button> </button></li>", "D D ", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let(3, ($scope) => $for($scope, [$scope.d, "id"]));
const $picked = /*@__PURE__*/ _let(4, ($scope) => $picked_name($scope, $scope.e?.name));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$items($scope, [...$scope.d.slice(1), $scope.d[0]]);
}));
const $picked_name = /*@__PURE__*/ _const(5, ($scope) => _text($scope.c, $scope.f));
