// template.marko
const $template = "<button>=8 onClick() { count++ }>More</button>";
const $walks = " b";
const $count = /*@__PURE__*/ _let("count/1", ($scope) => _attr($scope["#button/0"], "disabled", $scope.count));
function $setup($scope) {
	$count($scope, 2);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
