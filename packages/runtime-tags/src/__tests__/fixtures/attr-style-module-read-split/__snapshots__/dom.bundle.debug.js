// theme.ts
const base = "display:block";
const card = {
	"font-family": "\"Helvetica Neue\", sans-serif",
	"background-image": "url(/tile.svg?size=2&tone=light)"
};

// template.marko
const $template = /*@__PURE__*/ (() => `<div style="${_attr_style_text(base)}"></div><div style="${_attr_style_text(card)};margin:0"></div><div style="${_attr_style_text(base)}"></div><button></button>`)();
const $walks = " b c b";
const $tint = /*@__PURE__*/ _let("tint/3", ($scope) => {
	_assert_style_items([base], ["color"]);
	_attr_style_item($scope["#div/0"], "color", $scope.tint);
	_assert_style_items([card, "margin:0"], ["color"]);
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
