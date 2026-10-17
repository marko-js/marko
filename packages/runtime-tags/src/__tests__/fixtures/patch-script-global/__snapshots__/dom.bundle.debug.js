// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $setup__$global_brand__script = _fill_global_script("__tests__/template.marko_0_$global_brand#4", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$global.brand + "]";
	}
}, "brand");
const $setup__$global_brand = /*@__PURE__*/ _fill_global_join("brand", "__tests__/template.marko_0_$global_brand#4", ($scope) => {
	$setup__$global_brand__script($scope);
	_text($scope["#text/0"], $scope.$global.brand);
});
const $setup = $setup__$global_brand;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup);
