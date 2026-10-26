// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $n = /*@__PURE__*/ _let("n/5", ($scope) => _text($scope["#text/1"], $scope.n));
const $input_n = $n;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_n($scope, input.n);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
