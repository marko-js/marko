// template.marko
const $template = "<div> </div><div> </div><button>before</button>";
const $walks = "D lD l b";
function sum(a, b) {
	return a + b;
}
const add1 = (v) => (0, sum)(1, v);
function updateText(ev) {
	ev.target.textContent = "after";
}
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", updateText));
function $setup($scope) {
	_text($scope["#text/0"], sum(1, 2));
	_text($scope["#text/1"], add1(3));
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
