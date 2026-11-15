// tags/tree.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $Wrap_content2__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $Wrap_content2__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $setup$1 = ($_) => {};
const $Wrap_content2__depth = ($scope, depth) => $input_depth($scope["#childScope/0"], depth);
const $Wrap_content2__content = ($scope, content) => $input_content($scope["#childScope/0"], content);
const $Wrap_content2__$params = ($scope, $params2) => $Wrap_content2__$temp($scope, $params2[0]);
const $Wrap_content2__$temp = ($scope, $temp) => {
	$Wrap_content2__depth($scope, $temp.depth);
	$Wrap_content2__content($scope, $temp.content);
};
const $else_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $else_content__input_content = /*@__PURE__*/ _if_closure("#text/0", 1, ($scope) => $else_content__dynamicTag($scope, $scope._.input_content));
const $else_content__setup = $else_content__input_content;
const $Wrap_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $Wrap_content__input_content = /*@__PURE__*/ _closure_get("input_content/6", ($scope) => $Wrap_content__dynamicTag($scope, $scope._._.input_content), ($scope) => $scope._._, "__tests__/tags/tree.marko_2_input_content#0:4/subscribe");
const $Wrap_content__setup = $Wrap_content__input_content;
const $Wrap_content = _content_resume("__tests__/tags/tree.marko_2*content", "<!><!><!>", "b%", $Wrap_content__setup);
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $Wrap_content2__depth($scope["#childScope/0"], $scope._.input_depth - 1));
const $if_content__setup = ($scope) => {
	$if_content__input_depth._($scope);
	$Wrap_content2__content($scope["#childScope/0"], $Wrap_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<div>${_w0}</div>`)($Wrap_content2__template), /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($Wrap_content2__walks), $if_content__setup, "<div><!></div>", "D%", $else_content__setup);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	$if($scope, $scope.input_depth ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input_content__closure = /*@__PURE__*/ _closure($Wrap_content__input_content);
const $input_content = /*@__PURE__*/ _const("input_content", ($scope) => {
	$input_content__closure($scope);
	$else_content__input_content($scope);
});
const $input = ($scope, input) => {
	$input_depth($scope, input.depth);
	$input_content($scope, input.content);
};
var tree_default = /*@__PURE__*/ _template("__tests__/tags/tree.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<div>${_w0}</div><button>inc</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l b`)("b%c");
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
	$input_depth($scope["#childScope/0"], 2);
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
