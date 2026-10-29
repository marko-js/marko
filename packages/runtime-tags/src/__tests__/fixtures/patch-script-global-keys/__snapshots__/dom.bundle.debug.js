// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $setup__$global_other = /*@__PURE__*/ _fill_global("__tests__/template.marko_0_$global_other#4", ($scope) => _text($scope["#text/0"], $scope.$global.other), "other");
const $setup__$global_brand__OR__$global_locale__script = _fill_global_script("__tests__/template.marko_0_$global_brand#5_$global_locale#6", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$global.brand + ":" + $scope.$global.locale + "]";
	}
}, "brand", "locale");
const $setup__$global_brand__OR__$global_locale = $setup__$global_brand__OR__$global_locale__script;
function $setup($scope) {
	$setup__$global_brand__OR__$global_locale($scope);
	$setup__$global_other($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
