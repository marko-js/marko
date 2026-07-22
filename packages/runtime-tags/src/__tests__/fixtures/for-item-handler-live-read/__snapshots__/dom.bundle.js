// template.marko
const $for_content__setup = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$log($scope._, $scope.e);
}));
const $for_content__item_label = /*@__PURE__*/ _const(4, ($scope) => _text($scope.b, $scope.e));
const $for_content__$params = ($scope, $params2) => $for_content__item_label($scope, $params2[0]?.label);
const $for = /*@__PURE__*/ _for_of(0, "<li><button class=show> </button></li>", "D D m", $for_content__setup, $for_content__$params);
const $items = /*@__PURE__*/ _let(3, ($scope) => $for($scope, [$scope.d, "id"]));
const $log = /*@__PURE__*/ _let(4, ($scope) => _text($scope.c, $scope.e));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$items($scope, $scope.d.map((it) => it.id === 1 ? {
		id: 1,
		label: it.label + "!"
	} : it));
}));
