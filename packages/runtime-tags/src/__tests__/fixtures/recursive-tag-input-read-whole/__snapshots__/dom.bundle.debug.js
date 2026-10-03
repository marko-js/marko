// tags/tree.marko
const $template$1 = "<!><!><span> </span>";
const $walks$1 = "b%bD l";
const $setup$1 = () => {};
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_depth($scope["#childScope/0"], $scope._.input_depth - 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$if_content__input_label._($scope);
};
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label($scope["#childScope/0"], $scope._.input_label));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1), $if_content__setup);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	$if($scope, $scope.input_depth ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input_label = /*@__PURE__*/ _const("input_label", ($scope) => {
	_text($scope["#text/1"], $scope.input_label);
	$if_content__input_label($scope);
});
const $input = ($scope, input) => {
	$input_depth($scope, input.depth);
	$input_label($scope, input.label);
};
var tree_default = /*@__PURE__*/ _template("__tests__/tags/tree.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>deeper</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
const $depth = /*@__PURE__*/ _let("depth/2", ($scope) => $input_depth($scope["#childScope/0"], $scope.depth));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$depth($scope, +$scope.depth + 1);
}));
function $setup($scope) {
	$input_label($scope["#childScope/0"], "x");
	$depth($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
