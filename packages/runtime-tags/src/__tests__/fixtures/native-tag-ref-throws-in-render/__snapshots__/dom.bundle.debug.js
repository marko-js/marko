// template.marko
const $template = "<div></div><div> </div>";
const $walks = " bD l";
const $setup__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/1"], _el_read($scope["#div/0"])));
function $setup($scope) {
	$setup__render($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
