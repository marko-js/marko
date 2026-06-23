// template.marko
const $template = "<div> </div>";
const $walks = "D l";
function getAnswer() {
	return 42;
}
function $setup($scope) {
	_text($scope["#text/0"], getAnswer());
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, "D l", $setup);
