// template.marko
const $template = "<div><h1> </h1><button>Count <!></button></div>";
const $walks = "E l Db%m";
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
