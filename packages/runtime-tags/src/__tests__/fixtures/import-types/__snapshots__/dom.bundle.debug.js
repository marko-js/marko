// template.marko
const $template = "<div><!><!></div>";
const $walks = "D%b%l";
function $setup($scope) {
	_text($scope["#text/0"], String(true));
	_text($scope["#text/1"], String(true));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
