// template.marko
const $Panel_content__walks = "b";
const $Panel_content__template = "<em>panel</em>";
const $template = "<!><!><!><button>toggle</button>";
const $walks = "b%b%b b";
const $Panel_content = _content("__tests__/template.marko_1*content", $Panel_content__template, $Panel_content__walks);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $Tag = $dynamicTag;
const $open__OR__Panel = /*@__PURE__*/ _or(8, ($scope) => $Tag($scope, $scope.open ? $scope.Panel : "div"));
const $open = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "open/6", $open__OR__Panel);
const $Panel = /*@__PURE__*/ _const("Panel", $open__OR__Panel);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$Panel($scope, { content: $Panel_content($scope) });
	$setup__script($scope);
	$open($scope, false);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks));
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
