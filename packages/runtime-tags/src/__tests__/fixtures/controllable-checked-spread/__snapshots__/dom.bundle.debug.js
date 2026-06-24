// tags/checkbox.marko
const $template$1 = "<input>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $input__script = _script("__tests__/tags/checkbox.marko_0_input", ($scope) => _attrs_script($scope, "#input/0"));
const $input = /*@__PURE__*/ _const("input", ($scope) => {
	_attrs($scope, "#input/0", {
		type: "checkbox",
		...$scope.input
	});
	$input__script($scope);
});
var checkbox_default = /*@__PURE__*/ _template("__tests__/tags/checkbox.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<span> </span>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)(" b");
const $checked = /*@__PURE__*/ _let("checked/2", ($scope) => {
	$input($scope["#childScope/0"], {
		checked: $scope.checked,
		checkedChange: $checkedChange($scope)
	});
	_text($scope["#text/1"], String($scope.checked));
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$checked($scope, false);
}
function $checkedChange($scope) {
	return (_new_checked) => {
		$checked($scope, _new_checked);
	};
}
_resume("__tests__/template.marko_0/checkedChange", $checkedChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
