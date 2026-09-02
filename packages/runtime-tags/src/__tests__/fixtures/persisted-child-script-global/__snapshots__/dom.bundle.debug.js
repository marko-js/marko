// tags/badge/index.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $global_brand__script = _global_script("__tests__/tags/badge/index.marko_0_$global_brand#1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$global.brand + "]";
	}
});
const $global_brand = _global_join("brand", "__tests__/tags/badge/index.marko_0_$global_brand#1/global", ($scope) => {
	$global_brand__script($scope);
	_text($scope["#text/0"], $scope.$global.brand);
});
function $setup$1($scope) {
	$global_brand($scope, $scope.$global.brand);
}
var badge_default = /*@__PURE__*/ _template("__tests__/tags/badge/index.marko", $template$1, "D l", $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("D l");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
