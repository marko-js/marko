// template.marko
const $template = "<!>";
const $walks = "%b";
const $x = /*@__PURE__*/ _let("x/1", ($scope) => $x_y($scope, $scope.x?.y));
const $x_y = /*@__PURE__*/ _const("x_y", ($scope) => _text($scope["#text/0"], $scope.x_y));
function $setup($scope) {
	$x($scope, { y: "hello" });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", "<!>", "%b", $setup);
