// template.marko
const $template = "<div> </div><!>";
const $walks = "D l%b";
const $z = /*@__PURE__*/ _let("z/2", ($scope) => {
	$x($scope, $scope.z.x);
	$y($scope, $scope.z.y);
});
const $x = /*@__PURE__*/ _const("x", ($scope) => _text($scope["#text/0"], $scope.x));
const $y = /*@__PURE__*/ _const("y", ($scope) => _text($scope["#text/1"], $scope.y));
function $setup($scope) {
	$z($scope, {
		x: 1,
		y: 2
	});
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
