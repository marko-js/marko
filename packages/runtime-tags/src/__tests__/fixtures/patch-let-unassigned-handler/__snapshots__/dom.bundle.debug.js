// template.marko
const $template = "<main><em> </em><button>set</button></main>";
const $walks = "E l l";
const $x = _let("x/5", ($scope) => $x_length($scope, $scope.x?.length));
const $x_length = /*@__PURE__*/ _const("x_length");
const $input_foo = $x;
const $count = _let("count/7", ($scope) => _text($scope["#text/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.x_length);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_foo($scope, input.foo);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
