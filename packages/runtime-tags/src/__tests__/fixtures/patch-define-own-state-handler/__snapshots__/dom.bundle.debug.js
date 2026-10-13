// template.marko
const $Row_content__walks = " D l";
const $Row_content__template = "<button> </button>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Row_content__walks);
const $Row_content__shown = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "shown/5", ($scope) => _text($scope["#text/1"], $scope.shown));
const $Row_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$Row_content__shown($scope, $scope.label);
}));
const $Row_content__setup = /*@__PURE__*/ _child_setup(($scope) => {
	$Row_content__setup__script($scope);
	$Row_content__shown($scope, "none");
});
const $Row_content__tag_input_label = /*@__PURE__*/ _const("label");
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => $Row_content__tag_input_label($scope, $temp.label);
function $setup($scope) {
	$Row_content__setup._($scope["#childScope/0"], $scope);
}
const $input_label = ($scope, input_label) => $Row_content__tag_input_label($scope["#childScope/0"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
