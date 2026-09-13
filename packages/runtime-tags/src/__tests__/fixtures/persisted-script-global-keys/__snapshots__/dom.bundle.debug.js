// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $global_other = /*@__PURE__*/ _global_join("other", "__tests__/template.marko_0_$global_other#1/global", ($scope, $global_other) => _text($scope["#text/0"], $scope.$global.other));
const $global_brand__OR__$global_locale__script = _global_script("__tests__/template.marko_0_$global_brand#2_$global_locale#3", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$global.brand + ":" + $scope.$global.locale + "]";
	}
});
const $global_brand__OR__$global_locale = _global_join("locale", "__tests__/template.marko_0_$global_brand#2_$global_locale#3/global", _global_join("brand", "__tests__/template.marko_0_$global_brand#2_$global_locale#3/global", /*@__PURE__*/ _or(4, $global_brand__OR__$global_locale__script)));
function $setup($scope) {
	$global_other($scope, $scope.$global.other);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
