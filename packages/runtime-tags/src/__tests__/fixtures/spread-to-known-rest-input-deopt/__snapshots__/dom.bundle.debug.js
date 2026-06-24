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
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b b");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
}
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	const $child_input_spread = {
		"data-foo": 1,
		...$scope.input
	};
	$_class($scope["#childScope/0"], $child_input_spread.class);
	$rest($scope["#childScope/0"], (({ class: $class, ...rest }) => rest)($child_input_spread));
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
