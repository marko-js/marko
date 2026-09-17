// template.marko
const $template = "<a href=\"/\"> </a>";
const $walks = "D l";
const $setup = () => {};
let n = 0;
function random() {
	return ++n / 10;
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup);
