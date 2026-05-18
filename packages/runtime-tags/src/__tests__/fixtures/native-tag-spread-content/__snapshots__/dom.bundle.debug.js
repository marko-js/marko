// tags/my-div.marko
const $template$1 = "<div></div><button></button><span>Overridden</span><output></output><strong></strong><p></p><em></em>";
const $walks$1 = " b b b b b b b";
const $CustomContent_content = _content_resume("__tests__/tags/my-div.marko_1_content", "Custom content", "b");
const $input__OR__CustomContent_content__script = _script("__tests__/tags/my-div.marko_0_input_CustomContent_content", ($scope) => _attrs_script($scope, "#p/5"));
const $input__OR__CustomContent_content = /* @__PURE__ */ _or(11, ($scope) => {
	_attrs_content($scope, "#p/5", {
		content: $scope.CustomContent_content,
		...$scope.input
	});
	$input__OR__CustomContent_content__script($scope);
});
const $input__script = _script("__tests__/tags/my-div.marko_0_input", ($scope) => {
	_attrs_script($scope, "#div/0");
	_attrs_script($scope, "#button/1");
	_attrs_script($scope, "#span/2");
	_attrs_script($scope, "#output/3");
	_attrs_script($scope, "#strong/4");
});
const $input = /* @__PURE__ */ _const("input", ($scope) => {
	_attrs_content($scope, "#div/0", $scope.input);
	_attrs_content($scope, "#button/1", {
		foo: 1,
		...$scope.input
	});
	_attrs($scope, "#span/2", $scope.input);
	_attrs($scope, "#output/3", $scope.input);
	_attrs($scope, "#strong/4", $scope.input);
	$input__OR__CustomContent_content($scope);
	$input__script($scope);
});
const $CustomContent = ($scope, CustomContent) => {
	_attr_content($scope, "#em/6", CustomContent);
	$CustomContent_content2($scope, CustomContent?.content);
};
function $setup$1($scope) {
	_attr_content($scope, "#output/3", undefined);
	$CustomContent($scope, { content: $CustomContent_content($scope) });
}
const $CustomContent_content2 = /* @__PURE__ */ _const("CustomContent_content", ($scope) => {
	_attr_content($scope, "#strong/4", $scope.CustomContent_content);
	$input__OR__CustomContent_content($scope);
});
var my_div_default = /* @__PURE__ */ _template("__tests__/tags/my-div.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&`)($walks$1);
const $mydiv_content = _content_resume("__tests__/template.marko_1_content", "Hello", "b");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input($scope["#childScope/0"], { content: $mydiv_content($scope) });
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
