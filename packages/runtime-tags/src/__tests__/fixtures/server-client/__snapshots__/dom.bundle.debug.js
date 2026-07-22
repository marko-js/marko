// template.marko
const $template = "<div><span> </span></div>";
const $walks = "E m";
var server_x;
const client_x = 2;
const x = typeof server_x === "undefined" ? client_x : server_x;
const $setup__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/0"], x));
function $setup($scope) {
	$setup__render($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
