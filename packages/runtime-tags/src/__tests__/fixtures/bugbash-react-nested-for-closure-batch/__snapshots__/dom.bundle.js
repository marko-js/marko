// template.marko
const $for_content2__count = /*@__PURE__*/ _closure_get(3, ($scope) => _text($scope.c, $scope._._.d), ($scope) => $scope._._);
const $for_content2__setup = ($scope) => {
	$for_content2__count($scope);
	$for_content2__row_id._($scope);
};
const $for_content2__row_id = /*@__PURE__*/ _for_closure(0, ($scope) => _text($scope.a, $scope._.e));
const $for_content2__cell = ($scope, cell) => _text($scope.b, cell);
const $for_content2__$params = ($scope, $params3) => $for_content2__cell($scope, $params3[0]);
const $for_content__for = /*@__PURE__*/ _for_of(0, "<span><!><!>.<!></span>", "D%b%c%l", $for_content2__setup, $for_content2__$params);
const $for_content__row_cells = ($scope, row_cells) => $for_content__for($scope, [row_cells, (cell) => cell]);
const $for_content__$params = ($scope, $params2) => {
	$for_content__row_cells($scope, $params2[0]?.cells);
	$for_content__row_id($scope, $params2[0]?.id);
};
const $for_content__row_id = /*@__PURE__*/ _const(4, $for_content2__row_id);
const $count = /*@__PURE__*/ _let(3, /* @__PURE__ */ _closure($for_content2__count));
const $for = /*@__PURE__*/ _for_of(0, "<div></div>", " b", 0, $for_content__$params);
const $rows = /*@__PURE__*/ _let(4, ($scope) => $for($scope, [$scope.e, "id"]));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$count($scope, $scope.d + 1);
		$rows($scope, [{
			id: "b",
			cells: [
				5,
				6,
				4
			]
		}, {
			id: "a",
			cells: [3, 1]
		}]);
	});
	_on($scope.c, "click", function() {
		$count($scope, $scope.d + 1);
	});
});
