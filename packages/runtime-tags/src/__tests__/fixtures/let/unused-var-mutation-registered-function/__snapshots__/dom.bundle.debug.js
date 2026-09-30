// template.marko
const $template = "<button>Click</button>";
const $walks = " b";
const identity = (fn) => fn;
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", identity(() => {
	"updated";
})));
function $setup($scope) {
	"initial";
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
