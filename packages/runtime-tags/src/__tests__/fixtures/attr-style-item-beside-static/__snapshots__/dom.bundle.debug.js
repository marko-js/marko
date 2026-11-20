// template.marko
const $template = "<div style=display:block;background-color:blue></div><div style=border-color:blue></div><button></button>";
const $walks = " b b b";
const $tint = /*@__PURE__*/ _let("tint/3", ($scope) => {
	_attr_style_item($scope["#div/0"], "color", $scope.tint);
	_attr_style_item($scope["#div/1"], "color", $scope.tint);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$tint($scope, $scope.tint ? null : "green");
}));
function $setup($scope) {
	$tint($scope, null);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
