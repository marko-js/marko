// template.marko
const $template = "<p> </p><button> </button>";
const $walks = "D l D l";
const $count = _let("count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label__script = _script("__tests__/template.marko_0_input_label#5", ($scope) => {
	if ($scope.input_label === "b") throw new Error("effect failed");
});
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	_text($scope["#text/0"], $scope.input_label);
	$input_label__script($scope);
});
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
