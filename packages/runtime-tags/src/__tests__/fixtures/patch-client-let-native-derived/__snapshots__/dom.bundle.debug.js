// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $setup = ($_) => {};
const $input_tag = ($scope, input_tag) => $input_tag$1($scope["#childScope/0"], input_tag);
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/outer.marko
const $template = "<!><!><p> </p>";
const $walks = "b%bD l";
const $setup = ($_) => {};
const $obj = ($scope, obj) => $obj_T($scope, obj.T);
const $T = _fill_resume("__tests__/tags/outer.marko_fill1", /*@__PURE__*/ _let("T/6", ($scope) => $obj($scope, { T: $scope.T })));
const $input_tag = $T;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_label__OR__obj_T = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.obj_T, ($_) => ({ title: $scope.input_label })));
const $obj_T = /*@__PURE__*/ _const("obj_T", ($scope) => {
	_text($scope["#text/1"], $scope.obj_T);
	$input_label__OR__obj_T($scope);
});
const $input_label = _fill_resume("__tests__/tags/outer.marko_fill0", /*@__PURE__*/ _const("input_label", $input_label__OR__obj_T));
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_label($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, $walks, 0, $input);
