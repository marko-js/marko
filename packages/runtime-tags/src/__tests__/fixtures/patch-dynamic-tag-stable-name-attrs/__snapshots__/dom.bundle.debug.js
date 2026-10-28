// template.marko
const $Row_content__walks = "Db%l";
const $Row_content__template = "<b>R<!></b>";
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($Row_content__walks);
const $Row_content__label = ($scope, label) => _text($scope["#text/0"], label);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => $Row_content__label($scope, $temp.label);
const $Row_content = _content("__tests__/template.marko_1*content", $Row_content__template, $Row_content__walks, 0, $Row_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_y__OR__Tag = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.Row, ($_) => ({ label: $scope.input_y })));
const $Row = /*@__PURE__*/ _const("Row", $input_y__OR__Tag);
function $setup($scope) {
	$Row($scope, { content: $Row_content($scope) });
}
const $input_y = /*@__PURE__*/ _const("input_y", ($scope) => {
	$input_y__OR__Tag($scope);
	$Row_content__label($scope["#childScope/1"], $scope.input_y);
});
const $input = ($scope, input) => $input_y($scope, input.y);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
