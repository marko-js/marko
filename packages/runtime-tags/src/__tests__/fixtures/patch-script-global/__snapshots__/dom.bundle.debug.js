// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $global_brand_key = /*@__PURE__*/ _global_key("$global_brand/2", "brand");
const $global_brand = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_brand#4/subscribe", $global_brand_key, ($scope) => {
	$global_brand__script($scope);
	_text($scope["#text/0"], $scope.$global.brand);
});
const $global_brand__script = _global_script("__tests__/template.marko_0_$global_brand#4", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$global.brand + "]";
	}
}, $global_brand);
const $setup = $global_brand;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
