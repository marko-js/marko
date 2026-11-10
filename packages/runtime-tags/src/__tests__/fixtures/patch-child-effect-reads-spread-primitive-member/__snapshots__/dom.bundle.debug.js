// template.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
const $setup = ($_) => {};
const $o = ($scope, o) => $input_label($scope["#childScope/0"], o.label);
const $input_title__OR__input_n = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_title#3_input_n#4/setup", 5, ($scope) => $o($scope, {
	label: $scope.input_title,
	n: $scope.input_n
}));
const $input_title = /*@__PURE__*/ _const("input_title", $input_title__OR__input_n);
const $input_n = /*@__PURE__*/ _const("input_n", $input_title__OR__input_n);
const $input = ($scope, input) => {
	$input_title($scope, input.title);
	$input_n($scope, input.n);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/label.marko
const $template = "";
const $walks = "";
const $setup = ($_) => {};
const $input_label__script = _script("__tests__/tags/label.marko_0_input_label#2", ($scope) => console.log("run", $scope.input_label));
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__script);
const $input = ($scope, input) => $input_label($scope, input.label);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", "", "", 0, $input);
