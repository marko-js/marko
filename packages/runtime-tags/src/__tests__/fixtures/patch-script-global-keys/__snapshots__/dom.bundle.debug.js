// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $global_other = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_$global_other#4/subscribe", ($scope) => _text($scope["#text/0"], $scope.$global.other), "other");
const $global_brand__OR__$global_locale__script = _script("__tests__/template.marko_0_$global_brand#5_$global_locale#6", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$global.brand + ":" + $scope.$global.locale + "]";
	}
});
const $global_brand__OR__$global_locale = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_$global_brand#5_$global_locale#6/setup", 1, $global_brand__OR__$global_locale__script);
const $global_brand = _fill_global_resume("__tests__/template.marko_0_$global_brand#5/subscribe", $global_brand__OR__$global_locale, "brand");
const $global_locale = _fill_global_resume("__tests__/template.marko_0_$global_locale#6/subscribe", $global_brand__OR__$global_locale, "locale");
function $setup($scope) {
	$global_brand($scope);
	$global_locale($scope);
	$global_other($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
