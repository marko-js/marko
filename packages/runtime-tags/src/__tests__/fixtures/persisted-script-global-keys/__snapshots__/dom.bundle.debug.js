// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $setup = () => {};
const $global_brand__OR__$global_locale__script = _script("__tests__/template.marko_0_$global_brand#2_$global_locale#3", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$global_brand + ":" + $scope.$global_locale + "]";
	}
});
const $global_brand__OR__$global_locale = /*@__PURE__*/ _or(4, $global_brand__OR__$global_locale__script);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m");
