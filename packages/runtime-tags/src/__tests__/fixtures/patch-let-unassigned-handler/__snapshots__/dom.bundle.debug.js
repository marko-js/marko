// template.marko
const $template = "<main><em> </em><button>set</button></main>";
const $walks = "E l l";
const $x = /*@__PURE__*/ _let("x/5", ($scope) => $x_length($scope, $scope.x?.length));
const $x_length__script = _script("__tests__/template.marko_0_x_length#6", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.x_length);
}));
const $x_length = /*@__PURE__*/ _const("x_length", $x_length__script);
const $input_foo = $x;
const $count = /*@__PURE__*/ _let("count/7", ($scope) => _text($scope["#text/0"], $scope.count));
function $setup($scope) {
	$count($scope, 0);
}
const $input = ($scope, input) => $input_foo($scope, input.foo);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
