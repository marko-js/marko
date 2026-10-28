// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $Row_content__label = ($scope, label) => _text($scope["#text/0"], label);
const $Row_content__$params = ($scope, $params2) => $Row_content__label($scope, $params2[0].label);
const $Row_content = _content("__tests__/template.marko_1*content", "<b>R<!></b>", "Db%", 0, $Row_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_y__OR__Tag = /*@__PURE__*/ _or(5, ($scope) => $dynamicTag($scope, $scope.Row, ($_) => ({ label: $scope.input_y })));
const $Row = /*@__PURE__*/ _const("Row", $input_y__OR__Tag);
function $setup($scope) {
	$Row($scope, { content: $Row_content($scope) });
}
const $input_y = /*@__PURE__*/ _const("input_y", $input_y__OR__Tag);
const $input = ($scope, input) => $input_y($scope, input.y);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
