// template.marko
const $template = "<div> </div>";
const $walks = "D l";
const $setup__render = /*@__PURE__*/ _render(($scope) => _text($scope["#text/0"], $signal($scope, 0).onabort = () => {}));
function $setup($scope) {
	$setup__render($scope);
	$signalReset($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup);
