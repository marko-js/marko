// tags/tree.marko
const $template$1 = "<!><!><!><!>";
const $walks$1 = "b%b%c";
const $setup$1 = ($_) => {};
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_content($scope["#childScope/0"], $scope._.input_content));
const $if_content__setup = ($scope) => {
	$if_content__input_content._($scope);
	$if_content__input_depth._($scope);
};
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_depth($scope["#childScope/0"], $scope._.input_depth - 1));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = /*@__PURE__*/ _const("input_content", ($scope) => {
	$dynamicTag($scope, $scope.input_content);
	$if_content__input_content($scope);
});
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1), $if_content__setup);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	$if($scope, $scope.input_depth ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input = ($scope, input) => {
	$input_content($scope, input.content);
	$input_depth($scope, input.depth);
};
var tree_default = /*@__PURE__*/ _template("__tests__/tags/tree.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<div>${_w0}</div><button>inc</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l b`)($walks$1);
const $tree_content__n = /*@__PURE__*/ _closure_get("n/3", ($scope) => _text($scope["#text/0"], $scope._.n), 0, "__tests__/template.marko_1_n#0:2/subscribe");
const $tree_content__setup = $tree_content__n;
const $tree_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!>!", "%", $tree_content__setup);
const $n__closure = /*@__PURE__*/ _closure($tree_content__n);
const $n = /*@__PURE__*/ _let("n/2", $n__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$input_content($scope["#childScope/0"], $tree_content($scope));
	$input_depth($scope["#childScope/0"], 1);
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
