// tags/ret.marko
const $template$2 = "";
const $walks$2 = "";
const $setup$2 = ($_) => {};
const $input_x$1 = /*@__PURE__*/ _const("input_x", ($scope) => _return($scope, String($scope.input_x) + "!"));
const $input$1 = ($scope, input) => $input_x$1($scope, input.x);
var ret_default = /*@__PURE__*/ _template("__tests__/tags/ret.marko", "", "", 0, /*@__PURE__*/ _return_setup($input$1));

// tags/w.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<p>r:<!></p>`)("");
const $walks$1 = /*@__PURE__*/ ((_w0) => `0${_w0}&Db%l`)("");
const $r = _var_resume("__tests__/tags/w.marko_0_r#6/var", ($scope, r) => _text($scope["#text/2"], r));
const $input_x = ($scope, input_x) => $input_x$1($scope["#childScope/0"], input_x);
const $input = ($scope, input) => $input_x($scope, input.x);
function $setup$1($scope) {
	_var($scope, "#childScope/0", $r);
}
var w_default = /*@__PURE__*/ _template("__tests__/tags/w.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $for_content__s = /*@__PURE__*/ _for_closure("#text/2", ($scope) => $input_x($scope["#childScope/0"], $scope._.s + $scope["#LoopKey"]));
const $for_content__setup = ($scope) => {
	$for_content__s._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $for = /*@__PURE__*/ _for_until_unkeyed("#text/2", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $for_content__setup);
const $s = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "s/3", ($scope) => {
	_text($scope["#text/1"], $scope.s);
	$for($scope, [
		1 + $scope.s % 3,
		0,
		1
	]);
	$for_content__s($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$s($scope, +$scope.s + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$s($scope, 0);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
