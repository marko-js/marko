// tags/setter.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
const $input_value__OR__setter = /* @__PURE__ */ _or(5, ($scope) => _return($scope, ($scope.input_value, $scope.setter)));
const $setter2 = /* @__PURE__ */ _const("setter", $input_value__OR__setter);
const $input_valueChange = /* @__PURE__ */ _const("input_valueChange", ($scope) => $setter2($scope, $setter($scope)));
const $input_value = /* @__PURE__ */ _const("input_value", $input_value__OR__setter);
const $input = ($scope, input) => {
	$input_valueChange($scope, input.valueChange);
	$input_value($scope, input.value);
};
function $setter($scope) {
	return function() {
		$scope.input_valueChange(1);
	};
}
_resume("__tests__/tags/setter.marko_0/setter", $setter);
var setter_default = /* @__PURE__ */ _template("__tests__/tags/setter.marko", "", "", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `${_w0}<div> </div>`)("");
const $walks = /* @__PURE__ */ ((_w0) => `0${_w0}&D l`)("");
const $count = /* @__PURE__ */ _let("count/3", ($scope) => {
	$input_value($scope["#childScope/0"], $scope.count);
	_text($scope["#text/2"], $scope.count);
});
function $setup($scope) {
	_var($scope, "#childScope/0", $setCount);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_valueChange($scope["#childScope/0"], $valueChange($scope));
	$count($scope, 0);
}
const $setCount__script = _script("__tests__/template.marko_0_setCount", ($scope) => $scope.setCount());
const $setCount = _var_resume("__tests__/template.marko_0_setCount/var", /* @__PURE__ */ _const("setCount", $setCount__script));
function $valueChange($scope) {
	return (_new_count) => {
		$count($scope, _new_count);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
