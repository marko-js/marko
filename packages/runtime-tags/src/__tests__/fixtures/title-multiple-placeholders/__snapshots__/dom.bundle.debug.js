// template.marko
const $template = "<button>inc <!></button><title></title>";
const $walks = " Db%l b";
const $input_a__OR__n = /*@__PURE__*/ _or(7, ($scope) => _text_content($scope["#title/2"], `${_to_text($scope.input_a)} - ${_to_text($scope.n)}`));
const $n__script = _script("__tests__/template.marko_0_n", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
const $n = /*@__PURE__*/ _let("n/6", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$input_a__OR__n($scope);
	$n__script($scope);
});
function $setup($scope) {
	$n($scope, 1);
}
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__OR__n);
const $input = ($scope, input) => $input_a($scope, input.a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
