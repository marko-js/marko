// tags/child.marko
const $template$1 = "<button><!>|<!></button><button><!>|<!></button><button><!>|<!></button>";
const $walks$1 = " D%c%l D%c%l D%c%l";
const $setup$1 = () => {};
const $state__script = _script("__tests__/tags/child.marko_0_state", ($scope) => _on($scope["#button/0"], "click", function() {
	$state($scope, $scope.state + 1);
}));
const $state = /* @__PURE__ */ _let_change("state/14", ($scope) => {
	_text($scope["#text/2"], $scope.state);
	$state__script($scope);
});
const $thirdState__script = _script("__tests__/tags/child.marko_0_thirdState", ($scope) => _on($scope["#button/6"], "click", function() {
	$thirdState($scope, $scope.thirdState + 1);
}));
const $thirdState = /* @__PURE__ */ _let_change("thirdState/16", ($scope) => {
	_text($scope["#text/8"], $scope.thirdState);
	$thirdState__script($scope);
});
const $input_value__OR__input_valueChange = /* @__PURE__ */ _or(13, ($scope) => {
	$state($scope, $scope.input_value, $scope.input_valueChange);
	$thirdState($scope, $scope.input_value, $scope.input_valueChange);
});
const $input_value = /* @__PURE__ */ _const("input_value", ($scope) => {
	_text($scope["#text/1"], $scope.input_value);
	_text($scope["#text/4"], $scope.input_value);
	_text($scope["#text/7"], $scope.input_value);
	$input_value__OR__input_valueChange($scope);
});
const $input_valueChange = /* @__PURE__ */ _const("input_valueChange", $input_value__OR__input_valueChange);
const $otherState__script = _script("__tests__/tags/child.marko_0_otherState", ($scope) => _on($scope["#button/3"], "click", function() {
	$otherState($scope, $scope.otherState + 1);
}));
const $otherState = /* @__PURE__ */ _let_change("otherState/15", ($scope) => {
	_text($scope["#text/5"], $scope.otherState);
	$otherState__script($scope);
});
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_valueChange($scope, input.valueChange);
	$otherState($scope, input["value"], input["value" + "Change"]);
};
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `${_w0}source=<!>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&b%b`)($walks$1);
const $source = /* @__PURE__ */ _let("source/2", ($scope) => {
	$input($scope["#childScope/0"], {
		value: $scope.source,
		valueChange: $valueChange($scope)
	});
	_text($scope["#text/1"], $scope.source);
});
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$source($scope, 1);
}
function $valueChange($scope) {
	return (_new_source) => {
		$source($scope, _new_source);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
