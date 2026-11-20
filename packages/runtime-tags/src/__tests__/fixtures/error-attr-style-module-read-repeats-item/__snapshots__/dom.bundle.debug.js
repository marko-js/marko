// theme.ts
const base = "color:blue";

// template.marko
const $template = /*@__PURE__*/ (() => `<div style="${_attr_style_text(base)}"></div><button></button>`)();
const $walks = " b b";
const $tint = /*@__PURE__*/ _let("tint/2", ($scope) => {
	_assert_style_items([base], ["color"]);
	_attr_style_item($scope["#div/0"], "color", $scope.tint);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$tint($scope, "green");
}));
function $setup($scope) {
	$tint($scope, "red");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
