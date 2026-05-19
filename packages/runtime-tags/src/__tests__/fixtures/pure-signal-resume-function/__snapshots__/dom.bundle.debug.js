// tags/my-button.marko
const $template$1 = "<button></button>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $input__script = _script("__tests__/tags/my-button.marko_0_input", ($scope) => _attrs_script($scope, "#button/0"));
const $input = /* @__PURE__ */ _const("input", ($scope) => {
	_attrs_content($scope, "#button/0", $scope.input);
	$input__script($scope);
});
var my_button_default = /* @__PURE__ */ _template("__tests__/tags/my-button.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = $template$1;
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&`)(" b");
const $mybutton_content = _content_resume("__tests__/template.marko_1_content", "Click", "b");
const $test = /* @__PURE__ */ _const("test", ($scope) => $input($scope["#childScope/0"], {
	onClick: $onClick($scope),
	content: $mybutton_content($scope)
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$test($scope, "foo");
}
function $onClick($scope) {
	return function() {
		console.log($scope.test);
	};
}
_resume("__tests__/template.marko_0/onClick", $onClick);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
