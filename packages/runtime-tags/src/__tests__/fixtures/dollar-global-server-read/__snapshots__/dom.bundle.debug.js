// template.marko
const $template = "<button> </button><p> </p>";
const $walks = " D lD l";
const $n = /*@__PURE__*/ _let("n/6", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input_name = ($scope, input_name) => _text($scope["#text/2"], input_name + _global_read($scope.$global, "suffix"));
const $input = ($scope, input) => $input_name($scope, input.name);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
