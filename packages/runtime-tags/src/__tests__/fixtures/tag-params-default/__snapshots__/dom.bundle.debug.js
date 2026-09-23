// tags/child.marko
const $template$1 = "<!><!><!><!>";
const $walks$1 = "b%b%c";
const $setup$1 = () => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, 0, 1);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1", 0, 0, 1);
const $input_content = ($scope, input_content) => {
	$dynamicTag($scope, input_content, () => [undefined]);
	$dynamicTag2($scope, input_content, () => ["given"]);
};
const $input = ($scope, input) => $input_content($scope, input.content);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<button id=change>change</button>${_w0}${_w1}<!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => ` b/${_w0}&/${_w1}&b`)($walks$1, $walks$1);
const $child_content__y = ($scope, y) => _text($scope["#text/0"], y);
const $child_content__fallback__OR__$y = /*@__PURE__*/ _or(3, ($scope) => $child_content__y($scope, void 0 !== $scope.$y ? $scope.$y : $scope._.fallback));
const $child_content__fallback = /*@__PURE__*/ _closure_get("fallback", $child_content__fallback__OR__$y);
const $child_content__setup = $child_content__fallback;
const $child_content__$y = /*@__PURE__*/ _const("$y", $child_content__fallback__OR__$y);
const $child_content__$params = ($scope, $params2) => $child_content__$y($scope, $params2[0]);
const $child_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<p> </p>", "D ", $child_content__setup, $child_content__$params);
const $fallback__closure = /*@__PURE__*/ _closure($child_content__fallback);
const $fallback = /*@__PURE__*/ _let("fallback/3", $fallback__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$fallback($scope, $scope.fallback + "!");
}));
function $setup($scope) {
	$input_content($scope["#childScope/1"], $child_content($scope));
	$input_content($scope["#childScope/2"]);
	$fallback($scope, "default");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
