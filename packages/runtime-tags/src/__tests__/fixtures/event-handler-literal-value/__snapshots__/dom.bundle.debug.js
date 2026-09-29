// template.marko
const $template = "<button>a</button><div>b</div>";
const $walks = " b b";
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", false);
	_on($scope["#div/1"], "click", 0);
	_on($scope["#div/1"], "input", null);
});
const $setup = $setup__script;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
