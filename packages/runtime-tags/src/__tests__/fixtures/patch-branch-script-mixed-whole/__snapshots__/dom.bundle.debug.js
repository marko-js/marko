// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $setup = ($_) => {};
const $global_key = /*@__PURE__*/ _global_key();
const $if_content__$global = /*@__PURE__*/ _global_closure($global_key);
const $if_content__input_value__OR__$global = _global_script(_filled_id("__tests__/template.marko_1_input_value#0:6_$global#0:7 >input_value"), ($scope) => {
	{
		const g = $scope.$global;
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope._.input_value + ":" + g.brand + "]";
	}
}, $if_content__$global);
const $if_content__input_value = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_value#0:6/setup", "#text/1", 0, $if_content__input_value__OR__$global);
const $if_content__setup = $if_content__input_value;
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $if = /*@__PURE__*/ _if("#text/1", "<p>promo</p>", 0, $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_title($scope, input.title);
	$input_show($scope, input.show);
};
const $input_value = /*@__PURE__*/ _const("input_value", $if_content__input_value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
