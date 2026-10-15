// tags/countdown.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_depth($scope["#childScope/0"], $scope._.input_depth - 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$if_content__input_label._($scope);
	_var($scope, "#childScope/0", $if_content__child);
};
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label($scope["#childScope/0"], $scope._.input_label));
const $if_content__child = _var_resume("__tests__/tags/countdown.marko_1_child#3/var", ($scope, child) => _text($scope["#text/2"], child));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<span> </span>`)($template$1), /*@__PURE__*/ ((_w0) => `b0${_w0}&D l`)("b%c"), $if_content__setup);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	$if($scope, $scope.input_depth ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	_return($scope, $scope.input_label);
	$if_content__input_label($scope);
});
const $input = ($scope, input) => {
	$input_depth($scope, input.depth);
	$input_label($scope, input.label);
};
var countdown_default = /*@__PURE__*/ _template("__tests__/tags/countdown.marko", $template$1, "b%c", 0, /*@__PURE__*/ _return_setup($input));

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button> </button>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& D l`)("b%c", "b%c");
const $label = /*@__PURE__*/ _let("label/4", ($scope) => {
	$input_label($scope["#childScope/1"], $scope.label);
	_text($scope["#text/3"], $scope.label);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$label($scope, $scope.label + "a");
}));
function $setup($scope) {
	$input_depth($scope["#childScope/0"], 1);
	$input_label($scope["#childScope/0"], "x");
	$input_depth($scope["#childScope/1"], 1);
	$label($scope, "a");
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
