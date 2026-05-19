// template.marko
const $template = "<button>Before</button>";
const $walks = " b";
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function(_, el) {
	el.textContent = "" + 0;
}));
function $setup($scope) {
	0;
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, " b", $setup);
