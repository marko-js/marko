// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $for_content2__count = /*@__PURE__*/ _init_closure_get("__tests__/template.marko_2_count#5/init", "count", ($scope) => _text($scope["#text/0"], $scope._["#LoopKey"] + "@" + $scope._._.count), ($scope) => $scope._._, "__tests__/template.marko_2_count#5/subscribe");
const $for_content2__setup = $for_content2__count;
const $for_content__for = /*@__PURE__*/ _for_of("#text/0", "<p> </p>", "D ", $for_content2__setup);
const $for_content__row_cells = ($scope, row_cells) => $for_content__for($scope, [row_cells, (cell) => cell]);
const $for_content__$params = ($scope, $params2) => $for_content__row_cells($scope, $params2[0]?.cells);
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
