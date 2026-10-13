// template.marko
const $template = "<div><h1> </h1><button> </button></div>";
const $walks = "E l D m";
const $clickCount = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "clickCount/6", ($scope) => _text($scope["#text/2"], $scope.clickCount));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$clickCount($scope, +$scope.clickCount + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$clickCount($scope, 0);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
