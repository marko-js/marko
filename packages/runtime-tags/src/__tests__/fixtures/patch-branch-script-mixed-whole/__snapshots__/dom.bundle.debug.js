// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $if_content__input_value__OR__$global__script = _script("__tests__/template.marko_1_input_value#0:6_$global#0:7", ($scope) => {
	{
		const g = $scope.$global;
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope._.input_value + ":" + g.brand + "]";
	}
});
const $if_content__input_value__OR__$global = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_input_value#0:6_$global#0:7/setup", 0, $if_content__input_value__OR__$global__script);
const $if_content__input_value = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_value#0:6/setup", "#text/1", 0, $if_content__input_value__OR__$global);
const $if_content__setup = ($scope) => {
	$if_content__input_value._($scope);
	$if_content__$global._($scope);
};
const $if_content__$global = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_$global#0:7/setup", "#text/1", 0, $if_content__input_value__OR__$global);
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $if = /*@__PURE__*/ _if("#text/1", "<p>promo</p>", 0, $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_title($scope, input.title);
	$input_show($scope, input.show);
};
const $input_value = /*@__PURE__*/ _const("input_value", $if_content__input_value);
const $global2 = _fill_global_resume("__tests__/template.marko_0_$global#7/subscribe", $if_content__$global, "");
const $setup = $global2;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
