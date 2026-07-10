// template.marko
const $template = "<div></div><button>Update</button>";
const $walks = " b b";
const $c = /*@__PURE__*/ _let("c/2", ($scope) => _attr_style_item($scope["#div/0"], "color", $scope.c));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$c($scope, "green");
}));
function $setup($scope) {
	$c($scope, "red;background:blue");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
