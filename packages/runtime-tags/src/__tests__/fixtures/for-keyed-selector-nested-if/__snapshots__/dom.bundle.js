// template.marko
function rendered(id) {
	console.log(`row ${id}`);
	return true;
}
const $for_content__selected = /*@__PURE__*/ _for_selector(0, 3, ($scope) => _attr_class_item($scope.a, "danger", rendered($scope.M) && $scope._._.d === $scope.M), ($scope) => $scope._);
const $for_content__setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$selected($scope._._, $scope.M);
}));
const $for_content__setup = ($scope) => {
	$for_content__selected._($scope);
	$for_content__setup__script($scope);
};
const $for_content__$params = ($scope, $params2) => _text($scope.c, $params2[0]?.label);
const $if_content__selected = /*@__PURE__*/ _if_closure(0, 0, $for_content__selected);
const $if_content__setup = ($scope) => {
	$if_content__selected._($scope);
	$if_content__rows._($scope);
};
const $if_content__for = /*@__PURE__*/ _for_of(0, "<li><button class=select> </button></li>", " D D ", $for_content__setup, $for_content__$params);
const $if_content__rows = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $if_content__for($scope, [$scope._.e, "id"]));
const $selected = /*@__PURE__*/ _let(3, $if_content__selected);
const $rows = /*@__PURE__*/ _let(4, ($scope) => {
	$rows_length($scope, $scope.e?.length);
	$if_content__rows($scope);
});
const $setup__script = _script("a1", ($scope) => {
	_on($scope.b, "click", function() {
		$rows($scope, [...$scope.e, {
			id: $scope.e.length + 1,
			label: "n"
		}]);
	});
	_on($scope.c, "click", function() {
		$rows($scope, []);
	});
});
const $if = /*@__PURE__*/ _if(0, "<ul></ul>", " ", $if_content__setup);
const $rows_length = /*@__PURE__*/ _const(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
