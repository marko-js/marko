// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $global_brand_key = /*@__PURE__*/ _global_key("brand");
const $global_brand = /*@__PURE__*/ _global_closure($global_brand_key, "__tests__/template.marko_0_$global_brand#4/subscribe", ($scope) => _text($scope["#text/0"], $scope.$global.brand));
const $global_brand__script = _global_script("__tests__/template.marko_0_$global_brand#4", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$global.brand + "]";
	}
}, /*@__PURE__*/ _global_closure($global_brand_key));
function $setup($scope) {
	$global_brand__script($scope);
	$global_brand($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
