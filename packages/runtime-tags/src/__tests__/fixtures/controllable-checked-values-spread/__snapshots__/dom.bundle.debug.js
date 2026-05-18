// tags/checkbox.marko
const $template$1 = "<input>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $input__script = _script("__tests__/tags/checkbox.marko_0_input", ($scope) => _attrs_script($scope, "#input/0"));
const $input = /* @__PURE__ */ _const("input", ($scope) => {
	_attrs($scope, "#input/0", {
		type: "checkbox",
		...$scope.input
	});
	$input__script($scope);
});
var checkbox_default = /* @__PURE__ */ _template("__tests__/tags/checkbox.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}<span> </span>`)($template$1, $template$1, $template$1);
const $walks = /* @__PURE__ */ ((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}&D l`)(" b", " b", " b");
const $checkedValue__OR__$checkedValueChange = /* @__PURE__ */ _or(6, ($scope) => {
	$input($scope["#childScope/0"], {
		checkedValue: $scope.checkedValue,
		checkedValueChange: $scope.$checkedValueChange,
		value: "a"
	});
	$input($scope["#childScope/1"], {
		checkedValue: $scope.checkedValue,
		checkedValueChange: $scope.$checkedValueChange,
		value: "b"
	});
	$input($scope["#childScope/2"], {
		checkedValue: $scope.checkedValue,
		checkedValueChange: $scope.$checkedValueChange,
		value: "c"
	});
});
const $checkedValue = /* @__PURE__ */ _let("checkedValue/4", ($scope) => {
	_text($scope["#text/3"], $scope.checkedValue);
	$checkedValue__OR__$checkedValueChange($scope);
});
const $checkedValueChange3 = /* @__PURE__ */ _const("$checkedValueChange", $checkedValue__OR__$checkedValueChange);
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	/* @__PURE__ */ $setup$1($scope["#childScope/2"]);
	$checkedValue($scope, ["a", "b"]);
	$checkedValueChange3($scope, $checkedValueChange2($scope));
}
function $checkedValueChange2($scope) {
	return (_new_checkedValue) => {
		$checkedValue($scope, _new_checkedValue);
	};
}
_resume("__tests__/template.marko_0/checkedValueChange2", $checkedValueChange2);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
