// template.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<em> </em>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%b b`)($Panel_content__walks);
const $Panel_content__label = ($scope, label) => _text($scope["#text/0"], label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => $Panel_content__label($scope, $temp.label);
const $Panel_content = _content("__tests__/template.marko_1*content", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_attrs_label__OR__open__OR__Panel = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_attrs_label", /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.open ? "b" : $scope.Panel, ($_) => ({ label: $scope.input_attrs_label })), 2));
const $open = _let("open/7", $input_attrs_label__OR__open__OR__Panel);
const $Panel = /*@__PURE__*/ _const("Panel", $input_attrs_label__OR__open__OR__Panel);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$Panel($scope, { content: $Panel_content($scope) });
	$setup__script($scope);
}
const $input_attrs_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_attrs_label", ($scope) => {
	$input_attrs_label__OR__open__OR__Panel($scope);
	$Panel_content__label($scope["#childScope/0"], $scope.input_attrs_label);
}, $input_attrs_label__OR__open__OR__Panel);
const $input = ($scope, input) => $input_attrs($scope, input.attrs);
const $input_attrs = ($scope, input_attrs) => $input_attrs_label($scope, input_attrs?.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
