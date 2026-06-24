// tags/my-box.marko
const $template$1 = "<div></div><button type=button class=cap>check</button><div class=out> </div>";
const $walks$1 = " b bD l";
const $captured = /*@__PURE__*/ _let("captured/6", ($scope) => _text($scope["#text/2"], $scope.captured));
function $setup$1($scope) {
	$captured($scope, "(unchecked)");
}
const $input__script = _script("__tests__/tags/my-box.marko_0_input", ($scope) => _attrs_script($scope, "#div/0"));
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	_attrs_content($scope, "#div/0", $scope.input);
	$input_content($scope, $scope.input.content);
	$input__script($scope);
});
const $input_content__script = _script("__tests__/tags/my-box.marko_0_input_content", ($scope) => _on($scope["#button/1"], "click", function() {
	$captured($scope, $scope.input_content ? "has-content" : "no-content");
}));
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__script);
var my_box_default = /*@__PURE__*/ _template("__tests__/tags/my-box.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $mybox_content = _content_resume("__tests__/template.marko_1_content", "Hello", "b");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input($scope["#childScope/0"], {
		class: "x",
		content: $mybox_content($scope)
	});
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
