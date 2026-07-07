// template.marko
const $template = "<div> </div>";
const $walks = "D l";
const $z = ($scope, z) => _text($scope["#text/0"], z);
const $y = ($scope, y) => $z($scope, y * 3);
const $x = /*@__PURE__*/ _let("x/1", ($scope) => $y($scope, $scope.x * 2));
function $setup($scope) {
	$x($scope, 1);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup);
