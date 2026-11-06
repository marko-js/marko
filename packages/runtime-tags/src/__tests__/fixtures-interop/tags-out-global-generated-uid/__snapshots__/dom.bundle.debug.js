// template.marko
const $template = "<div><!> <!></div>";
const $walks = "D%c%l";
const $global4 = ($scope, global) => _text($scope["#text/1"], global?.x);
const $global3 = ($scope, $global2) => $global4($scope, void 0 !== $global2 ? $global2 : {});
function $setup($scope) {
	_text($scope["#text/0"], $scope.$global.x);
}
const $input = ($scope, input) => $global3($scope, input.global);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
