// tags/my-input.marko
const $template$1 = "<input type=number>";
const $walks$1 = " b";
function num(v) {
	return +v;
}
const $input_countChange__OR__input_count = /* @__PURE__ */ _or(5, ($scope) => _attr_input_value($scope, "#input/0", $scope.count, $scope.$countChange && $valueChange($scope)));
const $countChange2 = /* @__PURE__ */ _const("$countChange", $input_countChange__OR__input_count);
const $count = /* @__PURE__ */ _const("count", $input_countChange__OR__input_count);
const $setup__script = _script("__tests__/tags/my-input.marko_0", ($scope) => _attr_input_value_script($scope, "#input/0"));
const $setup$1 = $setup__script;
const $input = ($scope, input) => {
	$countChange2($scope, input.countChange);
	$count($scope, input.count);
};
function $valueChange($scope) {
	return ($next) => {
		$scope.$countChange(num($next));
	};
}
_resume("__tests__/tags/my-input.marko_0/valueChange", $valueChange);
var my_input_default = /* @__PURE__ */ _template("__tests__/tags/my-input.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `${_w0}<span><!> <!></span>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&D%c%l`)(" b");
const $value = /* @__PURE__ */ _let("value/3", ($scope) => {
	$count($scope["#childScope/0"], $scope.value);
	_text($scope["#text/1"], $scope.value);
	_text($scope["#text/2"], typeof $scope.value);
});
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$countChange2($scope["#childScope/0"], $countChange($scope));
	$value($scope, 0);
}
function $countChange($scope) {
	return (_new_value) => {
		$value($scope, _new_value);
	};
}
_resume("__tests__/template.marko_0/countChange", $countChange);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
