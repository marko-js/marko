// theme.ts
const card = {
	color: "blue",
	padding: "4px"
};

// template.marko
const $template = /*@__PURE__*/ (() => `<div style="${_attr_style_text(card)};color:red"></div><button></button>`)();
const $walks = " b b";
const $width = /*@__PURE__*/ _let("width/2", ($scope) => _attr_style_item($scope["#div/0"], "width", $scope.width));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$width($scope, "20px");
}));
function $setup($scope) {
	$width($scope, "10px");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
