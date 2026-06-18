// tags/my-select.marko
const $template$1 = "<select></select>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $input__script = _script("__tests__/tags/my-select.marko_0_input", ($scope) => _attrs_script($scope, "#select/0"));
const $input = /* @__PURE__ */ _const("input", ($scope) => {
	_attrs_content($scope, "#select/0", $scope.input);
	$input__script($scope);
});
var my_select_default = /* @__PURE__ */ _template("__tests__/tags/my-select.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `${_w0}<span> </span>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&D l`)(" b");
const $myselect_content = /* @__PURE__ */ _content("__tests__/template.marko_1_content", "<option value=a>A</option><option value=b>B</option><option value=c>C</option>", "d");
const $value = /* @__PURE__ */ _let("value/2", ($scope) => {
	$input($scope["#childScope/0"], {
		value: $scope.value,
		valueChange: $valueChange($scope),
		content: $myselect_content($scope)
	});
	_text($scope["#text/1"], $scope.value);
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$value($scope, "b");
}
function $valueChange($scope) {
	return function(v) {
		$value($scope, v);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
