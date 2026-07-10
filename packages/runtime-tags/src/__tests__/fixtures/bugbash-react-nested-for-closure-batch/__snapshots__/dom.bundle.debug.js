// template.marko
const $template = "<div id=grid></div><button id=both>both</button><button id=count>count</button>";
const $walks = " b b b";
const $for_content2__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/2"], $scope._._.count), ($scope) => $scope._._);
const $for_content2__setup = ($scope) => {
	$for_content2__count($scope);
	$for_content2__row_id._($scope);
};
const $for_content2__row_id = /*@__PURE__*/ _for_closure("#div/0", ($scope) => _text($scope["#text/0"], $scope._.row_id));
const $for_content2__cell = ($scope, cell) => _text($scope["#text/1"], cell);
const $for_content2__$params = ($scope, $params3) => $for_content2__cell($scope, $params3[0]);
const $for_content__for = /*@__PURE__*/ _for_of("#div/0", "<span><!><!>.<!></span>", "D%b%c%l", $for_content2__setup, $for_content2__$params);
const $for_content__row_cells = ($scope, row_cells) => $for_content__for($scope, [row_cells, (cell) => cell]);
const $for_content__$params = ($scope, $params2) => {
	$for_content__row_cells($scope, $params2[0]?.cells);
	$for_content__row_id($scope, $params2[0]?.id);
};
const $for_content__row_id = /*@__PURE__*/ _const("row_id", $for_content2__row_id);
const $count__closure = /*@__PURE__*/ _closure($for_content2__count);
const $count = /*@__PURE__*/ _let("count/3", $count__closure);
const $for = /*@__PURE__*/ _for_of("#div/0", "<div></div>", " b", 0, $for_content__$params);
const $rows = /*@__PURE__*/ _let("rows/4", ($scope) => $for($scope, [$scope.rows, "id"]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$count($scope, $scope.count + 1);
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
	_on($scope["#button/2"], "click", function() {
		$count($scope, $scope.count + 1);
	});
});
function $setup($scope) {
	$count($scope, 0);
	$rows($scope, [{
		id: "a",
		cells: [
			1,
			2,
			3
		]
	}, {
		id: "b",
		cells: [4, 5]
	}]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
