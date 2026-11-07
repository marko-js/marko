// template.marko
const $for_content2__selected = /*@__PURE__*/ _for_selector(0, 2, ($scope) => _attr_class_item($scope.a, "danger", $scope._._.c === $scope.M), ($scope) => $scope._);
const $for_content2__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$selected($scope._._, $scope.M);
}));
const $for_content2__setup = ($scope) => {
	$for_content2__selected._($scope);
	_text($scope.c, $scope.M);
	$for_content2__setup__script($scope);
};
const $for_content__selected = /*@__PURE__*/ _for_closure(0, $for_content2__selected, 4);
const $for_content__setup = $for_content__selected;
const $for_content__for = /*@__PURE__*/ _for_of(0, "<li><button class=select> </button></li>", " D D ", $for_content2__setup);
const $for_content__$params = ($scope, $params2) => $for_content__for($scope, [$params2[0]?.rows, "id"]);
const $selected = /*@__PURE__*/ _let(2, $for_content__selected);
const $for = /*@__PURE__*/ _for_of(0, "<ul></ul>", " ", $for_content__setup, $for_content__$params);
const $groups = /*@__PURE__*/ _let(3, ($scope) => $for($scope, [$scope.d, "id"]));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$groups($scope, [...$scope.d, {
		id: "z",
		rows: [{ id: 5 }]
	}]);
}));
