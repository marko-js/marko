// template.marko
const $template = "<div>hello</div>";
const $walks = "b";
const $setup = ($_) => {};
function tick() {
	requestAnimationFrame(tick);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b", $setup);
