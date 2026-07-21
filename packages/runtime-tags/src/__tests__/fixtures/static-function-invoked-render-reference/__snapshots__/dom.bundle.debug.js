// template.marko
const $template = "<div> </div>";
const $walks = "D l";
function getAnswer() {
	return 42;
}
const $setup__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/0"], getAnswer()));
function $setup($scope) {
	$setup__render($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup);
