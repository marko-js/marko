// tags/custom-tag.marko
const $template$1 = "<div></div><!><!>";
const $walks$1 = " b%c";
const $setup$1 = () => {};
const $if_content__input_test_style = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _attr_style($scope["#div/0"], $scope._.input_test_style));
const $if_content__setup = ($scope) => {
	$if_content__input_test_style._($scope);
	$if_content__input_test_content._($scope);
};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $if_content__input_test_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_test_content));
const $input_style = ($scope, input_style) => _attr_style($scope["#div/0"], input_style);
const $if = /*@__PURE__*/ _if("#text/1", "<div id=test><!></div>", " D%l", $if_content__setup);
const $input_test = ($scope, input_test) => {
	$input_test_style($scope, input_test?.style);
	$input_test_content($scope, input_test?.content);
	$if($scope, input_test ? 0 : 1);
};
const $input$1 = ($scope, input) => {
	$input_style($scope, input.style);
	$input_test($scope, input.test);
};
const $input_test_style = /*@__PURE__*/ _const("input_test_style", $if_content__input_test_style);
const $input_test_content = /*@__PURE__*/ _const("input_test_content", $if_content__input_test_content);
var custom_tag_default = /*@__PURE__*/ _template("__tests__/tags/custom-tag.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `<div></div><div style=width:100px></div><div style="color: green"></div>${_w0}${_w1}${_w2}<!><!>`)($template$1, $template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => ` d/${_w0}&/${_w1}&/${_w2}&%c`)($walks$1, $walks$1, $walks$1);
const TestTag = custom_tag_default;
const $test_content = _content_resume("__tests__/template.marko_1_content", "Hello", "b");
const $input_color = /*@__PURE__*/ _const("input_color", ($scope) => {
	_attr_style_item($scope["#div/0"], "color", $scope.input_color);
	$input_style($scope["#childScope/1"], { color: $scope.input_color });
});
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/4");
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	$input_test($scope["#childScope/1"]);
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$input_style($scope["#childScope/2"], { width: "100px" });
	$input_test($scope["#childScope/2"]);
	/* @__PURE__ */ $setup$1($scope["#childScope/3"]);
	$input_style($scope["#childScope/3"], "color: green");
	$input_test($scope["#childScope/3"]);
	$dynamicTag($scope, TestTag, () => ({
		style: { color: "green" },
		test: attrTag({
			style: { color: "green" },
			content: $test_content($scope)
		})
	}));
}
const $input = ($scope, input) => $input_color($scope, input.color);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
