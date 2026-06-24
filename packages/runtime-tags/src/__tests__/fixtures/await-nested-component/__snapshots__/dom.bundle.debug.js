// tags/child.marko
const $template$1 = "<input>";
const $walks$1 = " b";
const $setup$1 = () => {};
const $input_x = /*@__PURE__*/ _const("input_x", ($scope) => _attr_input_value_default($scope, "#input/0", $scope.input_x));
const $input = ($scope, input) => $input_x($scope, input.x);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__setup = ($scope) => {
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
};
const $await_content__value = /*@__PURE__*/ _const("value", ($scope) => {
	$input_x($scope["#childScope/0"], $scope.value);
	_attr_input_value_default($scope, "#input/1", $scope.value);
	_text($scope["#text/2"], $scope.value);
});
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<input><span>got: <!></span>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}& bDb%l`)(" b"), $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
function $setup($scope) {
	$await_content($scope);
	$await_promise($scope, resolveAfter("X", 1));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
