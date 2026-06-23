// template.marko
const $template = "<div> </div>";
const $walks = "D l";
function $setup($scope) {
	$signalReset($scope, 0);
	_text($scope["#text/0"], $signal($scope, 0).onabort = () => {});
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "D l", $setup);
