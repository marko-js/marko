// template.marko
const $template = "a";
const $walks = "b";
function $setup($scope) {
	(() => {
		throw new Error("ERROR!");
	})();
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", "a", "b", $setup);
