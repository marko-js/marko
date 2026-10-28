// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $x = /*@__PURE__*/ _let("x/2", ($scope) => _text($scope["#text/1"], $scope.x));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, +$scope.x + 1);
}));
function $setup($scope) {
	$x($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
