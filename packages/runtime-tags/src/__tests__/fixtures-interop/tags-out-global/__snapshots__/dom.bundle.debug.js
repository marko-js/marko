// template.marko
const $template = "<div><span> </span></div>";
const $walks = "E m";
function $setup($scope) {
	_text($scope["#text/0"], $scope.$global.x);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
