// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.$global.brand + "]";
	}
});
const $if_content__setup = $if_content__setup__script;
function $setup($scope) {
	_text($scope["#text/0"], $scope.$global.brand);
}
const $if = /*@__PURE__*/ _if("#text/1", "<p>promo</p>", 0, $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
