// tags/child.marko
const $template$1 = "<button class=inc> </button>";
const $walks$1 = " D l";
const $input_extra__OR__x = /*@__PURE__*/ _or(6, ($scope) => _return($scope, $scope.x + $scope.input_extra));
const $x__script = _script("__tests__/tags/child.marko_0_x", ($scope) => _on($scope["#button/0"], "click", function() {
	$x($scope, $scope.x + 1);
}));
const $x = /*@__PURE__*/ _let("x/5", ($scope) => {
	_text($scope["#text/1"], $scope.x);
	$input_extra__OR__x($scope);
	$x__script($scope);
});
function $setup$1($scope) {
	$x($scope, 0);
}
const $input_extra = /*@__PURE__*/ _const("input_extra", $input_extra__OR__x);
const $input = ($scope, input) => $input_extra($scope, input.extra);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<div> </div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)($walks$1);
const $message = ($scope, message) => _text($scope["#text/2"], message);
const $name__OR__data = /*@__PURE__*/ _or(5, ($scope) => $message($scope, `${$scope.name} ${$scope.data}`), 1, "#scopeOffset/1");
const $name = /*@__PURE__*/ _let("name/3", $name__OR__data);
function $setup($scope) {
	_var($scope, "#childScope/0", $data);
	$setup$1($scope["#childScope/0"]);
	$input_extra($scope["#childScope/0"], 1);
	$name($scope, "Marko");
}
const $data = _var_resume("__tests__/template.marko_0_data/var", /*@__PURE__*/ _const("data", $name__OR__data));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
