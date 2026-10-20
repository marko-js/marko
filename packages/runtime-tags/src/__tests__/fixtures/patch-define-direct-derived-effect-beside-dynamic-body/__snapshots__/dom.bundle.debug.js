// template.marko
const $Panel_content__walks = "D l";
const $Panel_content__template = "<em> </em>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button>toggle</button>`)($Panel_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%b b`)($Panel_content__walks);
const $Panel_content__shout__script = _script("__tests__/template.marko_1_shout#4", ($scope) => document.body.dataset.label = $scope.shout);
const $Panel_content__shout = /*@__PURE__*/ _const("shout", ($scope) => {
	$Panel_content__shout__script($scope);
	_text($scope["#text/0"], $scope.shout);
});
const $Panel_content__label = ($scope, label) => $Panel_content__shout($scope, label + "!");
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => $Panel_content__label($scope, $temp.label);
const $Panel_content = _content("__tests__/template.marko_1*content", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_label__OR__open__OR__Panel = /*@__PURE__*/ _or(8, ($scope) => $dynamicTag($scope, $scope.open ? "b" : $scope.Panel, ($_) => ({ label: $scope.input_label })), 2);
const $open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "open/6", $input_label__OR__open__OR__Panel);
const $Panel = /*@__PURE__*/ _const("Panel", $input_label__OR__open__OR__Panel);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$Panel($scope, { content: $Panel_content($scope) });
	$setup__script($scope);
	$open($scope, false);
}
const $input_label = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _const("input_label", ($scope) => {
	$Panel_content__label($scope["#childScope/0"], $scope.input_label);
	$input_label__OR__open__OR__Panel($scope);
}));
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
