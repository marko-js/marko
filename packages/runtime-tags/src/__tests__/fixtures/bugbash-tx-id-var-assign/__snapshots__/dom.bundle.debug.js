// template.marko
const $template = "<button>set</button><div> </div>";
const $walks = " b D l";
const $x = ($scope, x) => _attr($scope["#div/1"], "id", x);
const $y = /*@__PURE__*/ _let("y/4", ($scope) => _text($scope["#text/2"], $scope.y));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	"changed";
	$y($scope, $scope.y + 1);
}));
function $setup($scope) {
	$x($scope, _id($scope));
	$y($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
