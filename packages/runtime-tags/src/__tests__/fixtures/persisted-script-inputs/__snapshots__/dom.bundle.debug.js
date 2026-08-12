// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $setup = () => {};
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input_a__OR__input_b__script = _script("__tests__/template.marko_0_input_a#4_input_b#5", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.pair = $scope.input_a + $scope.input_b;
		el.dataset.runs = String(+(el.dataset.runs || 0) + 1);
	}
});
const $input_a__OR__input_b = /*@__PURE__*/ _or(6, $input_a__OR__input_b__script);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__OR__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_a__OR__input_b);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "E m", $setup, $input);
