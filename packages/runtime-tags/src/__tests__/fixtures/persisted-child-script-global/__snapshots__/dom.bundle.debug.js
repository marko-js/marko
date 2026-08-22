// tags/badge/index.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $global_brand__script = _script("__tests__/tags/badge/index.marko_0_$global_brand#1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$global_brand + "]";
	}
});
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge/index.marko", $template$1, "D l");

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("D l");
const $setup = () => {};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks);
