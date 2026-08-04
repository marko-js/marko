// tags/tree/index.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_depth($scope["#childScope/0"], $scope._.input_depth - 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	_var($scope, "#childScope/0", $if_content__nested);
};
const $if_content__nested = _var_resume("__tests__/tags/tree/index.marko_1_nested/var", ($scope, nested) => _text($scope["#text/2"], nested));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<div>nested <!></div>`)($template$1), /*@__PURE__*/ ((_w0) => `b0${_w0}&Db%l`)("b%c"), $if_content__setup);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	_return($scope, $scope.input_depth);
	$if($scope, $scope.input_depth ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input = ($scope, input) => $input_depth($scope, input.depth);
var tree_default = /*@__PURE__*/ _template("__tests__/tags/tree/index.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>inc</button>${_w0}<div>total <!></div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b0${_w0}&Db%l`)("b%c");
const $n = /*@__PURE__*/ _let("n/4", ($scope) => $input_depth($scope["#childScope/1"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup($scope) {
	_var($scope, "#childScope/1", $total);
	$n($scope, 2);
	$setup__script($scope);
}
const $total = _var_resume("__tests__/template.marko_0_total/var", ($scope, total) => _text($scope["#text/3"], total));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
