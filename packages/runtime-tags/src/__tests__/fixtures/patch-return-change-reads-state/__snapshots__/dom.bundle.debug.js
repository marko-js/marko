// tags/child.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $x = /*@__PURE__*/ _fill_let("__tests__/tags/child.marko_fill0", "x/4", ($scope) => {
	_return($scope, $scope.x);
	_return_change($scope, $valueChange($scope));
	_text($scope["#text/0"], $scope.x);
});
const $input_v$1 = $x;
const $input$1 = ($scope, input) => $input_v$1($scope, input.v);
const $valueChange = ($scope) => function(v) {
	$x($scope, $scope.x === v ? $scope.x : v);
};
_resumed["__tests__/tags/child.marko_0/valueChange"] = $valueChange;
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "D l", 0, /*@__PURE__*/ _return_setup($input$1));

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)("D l");
const $c = _var_resume("__tests__/template.marko_0_c#7/var", /*@__PURE__*/ _const("c", ($scope) => _text($scope["#text/2"], $scope.c)));
const $input_v = ($scope, input_v) => $input_v$1($scope["#childScope/0"], input_v);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	_var_change($scope["#childScope/0"], $scope.c + "!", "c");
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $c);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_v($scope, input.v);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
