// tags/wrapper.marko
const $template$1 = "<button id=toggle>toggle</button><!><!>";
const $walks$1 = " b%c";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_content__OR__open = /*@__PURE__*/ _or(6, ($scope) => $dynamicTag($scope, $scope.open && $scope.input_content));
const $open = /*@__PURE__*/ _let("open/5", $input_content__OR__open);
const $setup__script = _script("__tests__/tags/wrapper.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__OR__open);
const $input = ($scope, input) => $input_content($scope, input.content);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $wrapper_content = _content("__tests__/template.marko_1*content", "Hello");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $wrapper_content($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
