// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $for_content2__count__OR__row_id = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.row_id + "@" + $scope._._.count));
const $for_content2__count = /*@__PURE__*/ _closure_get("count", $for_content2__count__OR__row_id, ($scope) => $scope._._);
const $for_content2__setup = ($scope) => {
	$for_content2__count($scope);
	$for_content2__row_id._($scope);
};
const $for_content2__row_id = /*@__PURE__*/ _for_closure("#text/0", $for_content2__count__OR__row_id);
const $for_content__for = /*@__PURE__*/ _for_of("#text/0", "<p> </p>", "D ", $for_content2__setup);
const $for_content__row_cells = ($scope, row_cells) => $for_content__for($scope, [row_cells, (cell) => cell]);
const $for_content__$params = ($scope, $params2) => {
	$for_content__row_cells($scope, $params2[0]?.cells);
	$for_content__row_id($scope, $params2[0]?.id);
};
const $for_content__row_id = /*@__PURE__*/ _const("row_id", $for_content2__row_id);
const $count__closure = /*@__PURE__*/ _closure($for_content2__count);
const $count = /*@__PURE__*/ _let("count/5", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, (row) => row.id]);
const $input = ($scope, input) => $input_rows($scope, input.rows);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
