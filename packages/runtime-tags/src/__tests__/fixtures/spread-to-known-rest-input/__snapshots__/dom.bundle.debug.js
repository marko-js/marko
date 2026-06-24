// tags/child.marko
const $template$1 = " <span></span>";
const $walks$1 = "b b";
const $setup$1 = () => {};
const $input_class__OR__rest__script = _script("__tests__/tags/child.marko_0__class_rest", ($scope) => _attrs_script($scope, "#span/0"));
const $input_class__OR__rest = /*@__PURE__*/ _or(5, ($scope) => {
	_attrs_content($scope, "#span/0", {
		class: $scope._class,
		...$scope.rest
	});
	$input_class__OR__rest__script($scope);
});
const $_class = /*@__PURE__*/ _const("_class", $input_class__OR__rest);
const $rest = /*@__PURE__*/ _const("rest", $input_class__OR__rest);
const $input$1 = ($scope, input) => {
	(({ class: $class, ...rest }) => $rest($scope, rest))(input);
	$_class($scope, input.class);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b b", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<div id=known>${_w0}</div><div id=dynamic><!></div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&lD%l`)("b b");
const Child = child_default;
_resume_dynamic_tag();
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	$_class($scope["#childScope/0"], $scope.input.class);
	$rest($scope["#childScope/0"], (({ class: $class, ...rest }) => rest)($scope.input));
	$dynamicTag($scope, Child, () => $scope.input);
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
