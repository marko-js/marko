// template.marko
const $template = "<div></div><div> </div>";
const $walks = " bD l";
function $setup($scope) {
	_text($scope["#text/1"], _el_read($scope["#div/0"]));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
