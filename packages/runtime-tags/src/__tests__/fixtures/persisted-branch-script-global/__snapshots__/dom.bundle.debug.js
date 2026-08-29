// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $setup = () => {};
const $if_content__$global_brand__script = _script("__tests__/template.marko_1_$global_brand#5", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope._.$global_brand + "]";
	}
});
const $if_content__$global_brand = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__$global_brand__script);
const $if_content__setup = $if_content__$global_brand;
const $if = /*@__PURE__*/ _if("#text/1", "<p>promo</p>", 0, $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
