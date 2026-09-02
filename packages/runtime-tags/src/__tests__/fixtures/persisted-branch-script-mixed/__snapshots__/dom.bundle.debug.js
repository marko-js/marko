// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $setup = () => {};
const $if_content__input_value__OR__$global_brand__script = _global_script("__tests__/template.marko_1_input_value#6_$global_brand#7", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope._.input_value + ":" + $scope.$global.brand + "]";
	}
});
const $if_content__input_value__OR__$global_brand = _global_join("brand", "__tests__/template.marko_1_input_value#6_$global_brand#7/global", /*@__PURE__*/ _or(0, $if_content__input_value__OR__$global_brand__script));
const $if_content__input_value = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_value__OR__$global_brand);
const $if_content__setup = ($scope) => {
	$if_content__input_value._($scope);
	$if_content__$global_brand._($scope);
};
const $if_content__$global_brand = /*@__PURE__*/ _global_join("brand", "__tests__/template.marko_1_$global_brand#7/global", /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_value__OR__$global_brand));
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $if = /*@__PURE__*/ _if("#text/1", "<p>promo</p>", 0, $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_show($scope, input.show);
	$input_value($scope, input.value);
};
const $input_value = /*@__PURE__*/ _const("input_value", $if_content__input_value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
