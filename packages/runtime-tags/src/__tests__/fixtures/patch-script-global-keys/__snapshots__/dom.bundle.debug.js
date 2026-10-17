// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $global_other = /*@__PURE__*/ _fill_global_join("other", "__tests__/template.marko_0_$global_other#2", ($scope) => _text($scope["#text/0"], $scope.$global.other));
const $global_brand__OR__$global_locale__script = _fill_global_script("__tests__/template.marko_0_$global_brand#3_$global_locale#4", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$global.brand + ":" + $scope.$global.locale + "]";
	}
}, "brand", "locale");
const $global_brand__OR__$global_locale = /*@__PURE__*/ _fill_global_join("locale", "__tests__/template.marko_0_$global_brand#3_$global_locale#4", /*@__PURE__*/ _fill_global_join("brand", "__tests__/template.marko_0_$global_brand#3_$global_locale#4", /*@__PURE__*/ _or(5, $global_brand__OR__$global_locale__script)));
function $setup($scope) {
	$global_other($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
