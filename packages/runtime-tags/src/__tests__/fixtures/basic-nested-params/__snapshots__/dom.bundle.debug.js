// tags/child.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0", 0, 0, 1);
const $input_content__OR__input_value = /* @__PURE__ */ _or(5, ($scope) => $dynamicTag($scope, $scope.content, () => [$scope.value]));
const $content = /* @__PURE__ */ _const("content", $input_content__OR__input_value);
const $value = /* @__PURE__ */ _const("value", $input_content__OR__input_value);
const $input = ($scope, input) => {
	$content($scope, input.content);
	$value($scope, input.value);
};
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, "D%l", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<button>Inc</button>${_w0}`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => ` b/${_w0}&`)("D%l");
const $child_content2__outer = /* @__PURE__ */ _closure_get("outer", ($scope) => _text($scope["#text/0"], $scope._.outer));
const $child_content2__setup = $child_content2__outer;
const $child_content2__inner = ($scope, inner) => _text($scope["#text/1"], inner);
const $child_content2__$params = ($scope, $params3) => $child_content2__inner($scope, $params3[0]);
const $child_content2 = _content_resume("__tests__/template.marko_2_content", "<div><!>.<!></div>", "D%c%l", $child_content2__setup, $child_content2__$params);
const $child_content__y = /* @__PURE__ */ _closure_get("y", ($scope) => $value($scope["#childScope/0"], $scope._.y));
const $child_content__setup = ($scope) => {
	$child_content__y($scope);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$content($scope["#childScope/0"], $child_content2($scope));
};
const $child_content__$params = ($scope, $params2) => $child_content__outer($scope, $params2[0]);
const $child_content__outer__closure = /* @__PURE__ */ _closure($child_content2__outer);
const $child_content__outer = /* @__PURE__ */ _const("outer", $child_content__outer__closure);
const $child_content = _content_resume("__tests__/template.marko_1_content", $template$1, /* @__PURE__ */ ((_w0) => `/${_w0}&`)("D%l"), $child_content__setup, $child_content__$params);
const $x__script = _script("__tests__/template.marko_0_x", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, $scope.x + 1);
}));
const $x = /* @__PURE__ */ _let("x/2", ($scope) => {
	$value($scope["#childScope/1"], $scope.x);
	$x__script($scope);
});
const $y = /* @__PURE__ */ _let("y/3");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	$content($scope["#childScope/1"], $child_content($scope));
	$x($scope, 1);
	$y($scope, 2);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
