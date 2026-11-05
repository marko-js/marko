// template.marko
const $template = "<div><span> </span></div>";
const $walks = "E m";
const $x = ($scope, x) => _text($scope["#text/0"], x);
function $setup($scope) {
	$x($scope, $scope.$global.x);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
