// tags/child.marko
const $template$2 = "<select></select>";
const $walks$2 = " b";
const $setup$2 = () => {};
const $for_content__option__script = _script("__tests__/tags/child.marko_1_option", ($scope) => _attrs_script($scope, "#option/0"));
const $for_content__option = /*@__PURE__*/ _const("option", ($scope) => {
	_attrs_content($scope, "#option/0", $scope.option);
	$for_content__option__script($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__option($scope, $params2[0]);
const $input_class = ($scope, input_class) => _attr_class($scope["#select/0"], input_class);
const $for = /*@__PURE__*/ _for_of("#select/0", "<option></option>", " b", 0, $for_content__$params);
const $input_option = ($scope, input_option) => $for($scope, [input_option]);
const $input$1 = ($scope, input) => {
	$input_class($scope, input.class);
	$input_option($scope, input.option);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, " b", $setup$2, $input$1);

// tags/wrap.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
function $setup$1($scope) {
	/* @__PURE__ */ $setup$2($scope["#childScope/0"]);
}
const $_class = ($scope, _class) => $input_class($scope["#childScope/0"], _class);
const $rest_option = ($scope, rest_option) => $input_option($scope["#childScope/0"], rest_option);
const $input = ($scope, input) => {
	(({ class: $class, ...rest }) => $rest($scope, rest))(input);
	$_class($scope, input.class);
};
const $rest = ($scope, rest) => $rest_option($scope, rest.option);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $option_content3 = _content_resume("__tests__/template.marko_3_content", "Three", "b");
const $option_content2 = _content_resume("__tests__/template.marko_2_content", "Two", "b");
const $option_content = _content_resume("__tests__/template.marko_1_content", "One", "b");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$rest_option($scope["#childScope/0"], attrTags(attrTags(attrTag({
		value: 1,
		content: $option_content($scope)
	}), {
		value: 2,
		content: $option_content2($scope)
	}), {
		value: 3,
		content: $option_content3($scope)
	}));
	$_class($scope["#childScope/0"], "foo");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
