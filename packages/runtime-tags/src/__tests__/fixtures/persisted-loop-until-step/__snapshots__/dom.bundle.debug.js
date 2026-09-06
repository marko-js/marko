// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for = /*@__PURE__*/ _for_until("#text/0", "<span> </span>", "D ", $for_content__setup);
const $input_step__OR__count = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_step", /*@__PURE__*/ _or(6, ($scope) => $for($scope, [
	$scope.count,
	0,
	$scope.input_step
])));
const $count = /*@__PURE__*/ _let("count/5", $input_step__OR__count);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 2);
}));
function $setup($scope) {
	$count($scope, 4);
	$setup__script($scope);
}
const $input_step = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_step", $input_step__OR__count);
const $input = ($scope, input) => $input_step($scope, input.step);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
