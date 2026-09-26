// template.marko
const $template = "<div> </div>";
const $walks = "D l";
var Partial;
var partialHTML;
function $setup($scope) {
	_text($scope["#text/0"], partialHTML.includes("child.marko.load.mjs"));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", $setup);

// child.marko
const $template = "<p>child</p>";
const $walks = "b";
const $setup = () => {};
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, "b");
