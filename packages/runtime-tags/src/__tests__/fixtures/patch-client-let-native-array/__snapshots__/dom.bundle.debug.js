// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = ($_) => {};
const $input_tag = ($scope, input_tag) => $input_tag$1($scope["#childScope/0"], input_tag);
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/outer.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $arr = ($scope, arr) => $arr_($scope, arr[0]);
const $T = _fill_resume("__tests__/tags/outer.marko_fill1", /*@__PURE__*/ _let("T/5", ($scope) => $arr($scope, [$scope.T])));
const $input_tag = $T;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_label__OR__arr_ = /*@__PURE__*/ _or(8, ($scope) => $dynamicTag($scope, $scope.arr_0, ($_) => ({ title: $scope.input_label })));
const $arr_ = /*@__PURE__*/ _const("arr_0", $input_label__OR__arr_);
const $input_label = _fill_resume("__tests__/tags/outer.marko_fill0", /*@__PURE__*/ _const("input_label", $input_label__OR__arr_));
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_label($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, "b%c", 0, $input);
