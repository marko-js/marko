// template.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
const $setup = ($_) => {};
const $input_a__OR__input_b = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_a#3_input_b#4/setup", 5, ($scope) => {
	const $label_input_spread = {
		...$scope.input_a,
		...$scope.input_b
	};
	$input_item($scope["#childScope/0"], $label_input_spread.item);
});
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__OR__input_b);
const $input_b = /*@__PURE__*/ _const("input_b", $input_a__OR__input_b);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/label.marko
const $template = "";
const $walks = "";
const $setup = ($_) => {};
const $input_item__script = _script("__tests__/tags/label.marko_0_input_item#2", ($scope) => console.log("run", JSON.stringify($scope.input_item)));
const $input_item = /*@__PURE__*/ _const("input_item", $input_item__script);
const $input = ($scope, input) => $input_item($scope, input.item);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", "", "", 0, $input);
