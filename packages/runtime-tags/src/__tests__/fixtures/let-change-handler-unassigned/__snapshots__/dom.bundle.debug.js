// tags/child.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $value = /* @__PURE__ */ _let_change("value/6", ($scope) => _text($scope["#text/0"], $scope.value));
const $input_initial__OR__input_onValue = /* @__PURE__ */ _or(5, ($scope) => $value($scope, $scope.initial, $scope.onValue));
const $initial$1 = /* @__PURE__ */ _const("initial", $input_initial__OR__input_onValue);
const $onValue$1 = /* @__PURE__ */ _const("onValue", $input_initial__OR__input_onValue);
const $input = ($scope, input) => {
	$initial$1($scope, input.initial);
	$onValue$1($scope, input.onValue);
};
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `${_w0}<button>inc</button>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}& b`)("D l");
const $initial = /* @__PURE__ */ _let("initial/2", ($scope) => $initial$1($scope["#childScope/0"], $scope.initial));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$initial($scope, $scope.initial + 1);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$onValue$1($scope["#childScope/0"], $onValue);
	$initial($scope, 1);
	$setup__script($scope);
}
function $onValue() {}
_resume("__tests__/template.marko_0/onValue", $onValue);
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
