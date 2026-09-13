// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for = /*@__PURE__*/ _for_to("#text/0", "<span> </span>", "D ", $for_content__setup);
const $input_end__OR__start = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_end", /*@__PURE__*/ _or(6, ($scope) => $for($scope, [
	$scope.input_end,
	Math.max(0, $scope.start),
	1
])));
const $start = /*@__PURE__*/ _let("start/5", $input_end__OR__start);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$start($scope, $scope.start + 1);
}));
function $setup($scope) {
	$start($scope, 0);
	$setup__script($scope);
}
const $input_end = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_end", $input_end__OR__start);
const $input = ($scope, input) => $input_end($scope, input.end);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
