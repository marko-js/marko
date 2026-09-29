// tags/store.marko
const $template$2 = "";
const $walks$2 = "";
const $last = /*@__PURE__*/ _fill_let("__tests__/tags/store.marko0", "last/0", ($scope) => _return($scope, {
	last: $scope.last,
	set: $_return($scope)
}));
function $setup$2($scope) {
	$last($scope, 0);
}
const $_return = ($scope) => function(next) {
	$last($scope, next);
};
_resumed["__tests__/tags/store.marko_0/_return"] = $_return;
var store_default = /*@__PURE__*/ _template("__tests__/tags/store.marko", "", "", $setup$2);

// tags/child.marko
const $template$1 = "<button><!> <!></button>";
const $walks$1 = " D%c%l";
const $setup__script = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.input_s.set($scope.input_s.last + 1);
}));
const $setup$1 = $setup__script;
const $input_label$1 = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input_s_last = ($scope, input_s_last) => _text($scope["#text/2"], input_s_last);
const $input$1 = ($scope, input) => {
	$input_s($scope, input.s);
	$input_label$1($scope, input.label);
};
const $input_s = /*@__PURE__*/ _const("input_s", ($scope) => $input_s_last($scope, $scope.input_s?.last));
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)("", $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&/${_w1}&`)("", $walks$1);
const $s = _var_resume("__tests__/template.marko_0_s#6/var", ($scope, s) => $input_s($scope["#childScope/2"], s));
function $setup($scope) {
	_var($scope, "#childScope/0", $s);
	$setup$2($scope["#childScope/0"]);
	$setup$1($scope["#childScope/2"]);
}
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/2"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
