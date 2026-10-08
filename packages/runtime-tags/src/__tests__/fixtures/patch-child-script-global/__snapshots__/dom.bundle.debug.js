// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("D l");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/badge/index.marko
const $template = "<span> </span>";
const $walks = "D l";
const $global_brand__script = _fill_global_script("__tests__/tags/badge/index.marko_0_$global_brand#2", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$global.brand + "]";
	}
});
_fill_global_join_resume("brand", "__tests__/tags/badge/index.marko_0_$global_brand#2/global", $global_brand__script);
const $global_brand = /*@__PURE__*/ _fill_global_join("brand", "__tests__/tags/badge/index.marko_0_$global_brand#2/global", ($scope) => {
	$global_brand__script($scope);
	_text($scope["#text/0"], $scope.$global.brand);
});
function $setup($scope) {
	$global_brand($scope);
}
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge/index.marko", $template, "D l", $setup);
