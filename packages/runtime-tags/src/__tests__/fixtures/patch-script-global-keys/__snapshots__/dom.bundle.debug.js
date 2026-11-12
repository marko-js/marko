// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $global_other_key = /*@__PURE__*/ _global_key("$global_other/3", "other");
const $global_other = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_other#4/subscribe", $global_other_key, ($scope) => _text($scope["#text/0"], $scope.$global.other));
const $global_brand_key = /*@__PURE__*/ _global_key("$global_brand/4", "brand");
const $global_brand = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_brand#5/subscribe", $global_brand_key);
const $global_locale_key = /*@__PURE__*/ _global_key("$global_locale/5", "locale");
const $global_locale = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_locale#6/subscribe", $global_locale_key);
const $global_brand__OR__$global_locale = /*@__PURE__*/ _global_or(1, ($scope) => $global_brand__OR__$global_locale__script($scope), $global_brand, $global_locale);
const $global_brand__OR__$global_locale__script = _global_script("__tests__/template.marko_0_$global_brand#5_$global_locale#6", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$global.brand + ":" + $scope.$global.locale + "]";
	}
}, $global_brand__OR__$global_locale);
function $setup($scope) {
	$global_brand__OR__$global_locale($scope);
	$global_other($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
