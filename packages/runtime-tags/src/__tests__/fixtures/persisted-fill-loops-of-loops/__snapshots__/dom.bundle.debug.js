// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $for_content2__input_suffix__OR__count__OR__cell = /*@__PURE__*/ _fill_join_for("__tests__/template.marko0", "input_suffix", /*@__PURE__*/ _or(3, ($scope) => _text($scope["#text/0"], $scope.cell + ":" + $scope._._.input_suffix + "@" + $scope._._.count), 2), "#text/0", "#text/0");
const $for_content2__input_suffix = /*@__PURE__*/ _closure_get("input_suffix", $for_content2__input_suffix__OR__count__OR__cell, ($scope) => $scope._._);
const $for_content2__setup = ($scope) => {
	$for_content2__input_suffix($scope);
	$for_content2__count($scope);
};
const $for_content2__count = /*@__PURE__*/ _init_closure_get("__tests__/template.marko_2_count#6/init", "count", $for_content2__input_suffix__OR__count__OR__cell, ($scope) => $scope._._);
const $for_content2__cell = /*@__PURE__*/ _const("cell", $for_content2__input_suffix__OR__count__OR__cell);
const $for_content2__$params = ($scope, $params3) => $for_content2__cell($scope, $params3[0]);
const $for_content__for = /*@__PURE__*/ _for_of("#text/0", "<p> </p>", "D ", $for_content2__setup, $for_content2__$params);
const $for_content__row_cells = ($scope, row_cells) => $for_content__for($scope, [row_cells, (cell) => cell]);
const $for_content__$params = ($scope, $params2) => $for_content__row_cells($scope, $params2[0]?.cells);
const $count__closure = /*@__PURE__*/ _closure($for_content2__count);
const $count = /*@__PURE__*/ _let("count/6", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, (row) => row.id]);
const $input = ($scope, input) => {
	$input_rows($scope, input.rows);
	$input_suffix($scope, input.suffix);
};
const $input_suffix__closure = /*@__PURE__*/ _closure($for_content2__input_suffix);
const $input_suffix = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_suffix", $input_suffix__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
