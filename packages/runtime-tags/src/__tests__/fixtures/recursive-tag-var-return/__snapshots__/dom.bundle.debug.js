// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_depth($scope["#childScope/0"], 1);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/rec.marko
const $template = "<!><!><button> </button>";
const $walks = "b%b D l";
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_depth($scope["#childScope/0"], $scope._.input_depth - 1));
const $if_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $if_content__child);
	$if_content__input_depth._($scope);
	$setup($scope["#childScope/0"]);
};
const $if_content__child = _var_resume("__tests__/tags/rec.marko_1_child#3/var", ($scope, child) => _text($scope["#text/2"], child));
const $n = /*@__PURE__*/ _let("n/6", ($scope) => {
	_text($scope["#text/2"], $scope.n);
	_return($scope, $scope.n);
});
const $setup__script = _script("__tests__/tags/rec.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<span> </span>`)($template), /*@__PURE__*/ ((_w0) => `b0${_w0}&D l`)($walks), $if_content__setup);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	$if($scope, $scope.input_depth ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input = ($scope, input) => $input_depth($scope, input.depth);
var rec_default = /*@__PURE__*/ _template("__tests__/tags/rec.marko", $template, $walks, $setup, $input);
