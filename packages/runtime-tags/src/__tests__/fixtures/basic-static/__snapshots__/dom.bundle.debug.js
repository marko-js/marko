// template.marko
const $template = "<div><span> </span></div>";
const $walks = "E m";
const x = 1;
const $setup__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/0"], x));
function $setup($scope) {
	$setup__render($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
