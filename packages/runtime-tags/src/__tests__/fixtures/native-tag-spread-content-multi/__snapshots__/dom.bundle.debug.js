// tags/my-box.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $input__OR__extra__script = _script("__tests__/tags/my-box.marko_0_input_extra", ($scope) => _attrs_script($scope, "#div/0"));
const $input__OR__extra = /*@__PURE__*/ _or(4, ($scope) => {
	_attrs_content($scope, "#div/0", {
		...$scope.input,
		...$scope.extra
	});
	$input__OR__extra__script($scope);
});
const $extra = /*@__PURE__*/ _const("extra", $input__OR__extra);
function $setup$1($scope) {
	$extra($scope, { id: "x" });
}
const $input = /*@__PURE__*/ _const("input", $input__OR__extra);
var my_box_default = /*@__PURE__*/ _template("__tests__/tags/my-box.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $mybox_content = /*@__PURE__*/ _content("__tests__/template.marko_1_content", "Hello", "b");
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input($scope["#childScope/0"], {
		class: "base",
		content: $mybox_content($scope)
	});
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
