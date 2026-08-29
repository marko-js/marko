// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	{
		const g = $scope.$global;
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + g.brand + "]";
	}
});
const $setup = $setup__script;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
