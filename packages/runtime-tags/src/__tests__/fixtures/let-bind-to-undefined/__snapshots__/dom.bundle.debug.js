// tags/child.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = () => {};
const $local = /*@__PURE__*/ _let_change("local/6", ($scope) => _text($scope["#text/0"], $scope.local == null ? "none" : $scope.local));
const $input_value__OR__input_valueChange = /*@__PURE__*/ _or(5, ($scope) => $local($scope, $scope.input_value, $scope.input_valueChange));
const $input_value = /*@__PURE__*/ _const("input_value", $input_value__OR__input_valueChange);
const $input_valueChange = /*@__PURE__*/ _const("input_valueChange", $input_value__OR__input_valueChange);
const $input = ($scope, input) => {
	$input_value($scope, input.value);
	$input_valueChange($scope, input.valueChange);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>clear</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)("D l");
const $count = /*@__PURE__*/ _let("count/2", ($scope) => $input_value($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, undefined);
}));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
	$input_valueChange($scope["#childScope/0"], $valueChange($scope));
	$count($scope, 3);
	$setup__script($scope);
}
function $valueChange($scope) {
	return (_new_count) => {
		$count($scope, _new_count);
	};
}
_resume("__tests__/template.marko_0/valueChange", $valueChange);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
