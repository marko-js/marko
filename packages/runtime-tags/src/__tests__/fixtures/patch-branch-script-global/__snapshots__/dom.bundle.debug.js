// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $global_brand_key = /*@__PURE__*/ _global_key("$global_brand/6", "brand");
const $if_content__$global_brand__script = _script("__tests__/template.marko_1_$global_brand#0:5", ($scope) => {
	$if_content__$global_brand.r($scope);
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$global.brand + "]";
	}
});
const $if_content__$global_brand = /*@__PURE__*/ _global_closure("__tests__/template.marko_1_$global_brand#0:5/subscribe", $global_brand_key, $if_content__$global_brand__script);
const $if_content__setup = $if_content__$global_brand;
const $global_brand = /*@__PURE__*/ _global_closure("__tests__/template.marko_0_$global_brand#5/subscribe", $global_brand_key, ($scope) => _text($scope["#text/0"], $scope.$global.brand));
const $setup = $global_brand;
const $if = /*@__PURE__*/ _if("#text/1", "<p>promo</p>", 0, $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
