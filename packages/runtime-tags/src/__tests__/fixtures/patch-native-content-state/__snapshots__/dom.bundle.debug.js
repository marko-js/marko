// template.marko
const $template = "<main><section></section><button>+</button></main>";
const $walks = "D b l";
const $open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "open/2", ($scope) => _attr_content($scope, "#section/0", $scope.open ? box_a_default : null));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$setup__script($scope);
	$open($scope, false);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
