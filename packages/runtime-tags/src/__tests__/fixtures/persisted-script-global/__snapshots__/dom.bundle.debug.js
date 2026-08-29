// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $setup = () => {};
const $global_brand__script = _script("__tests__/template.marko_0_$global_brand#1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$global_brand + "]";
	}
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m");
