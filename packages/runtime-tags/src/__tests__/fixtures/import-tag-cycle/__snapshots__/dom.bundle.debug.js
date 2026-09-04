// tags/cyc-b.marko
const $template$2 = "<span>b <!></span><!><!>";
const $walks$2 = "Db%l%c";
const $setup$2 = () => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_depth$1 = ($scope, input_depth) => {
	_text($scope["#text/0"], input_depth);
	$dynamicTag($scope, cyc_a_default, () => ({ depth: input_depth + 1 }));
};
const $input$1 = ($scope, input) => $input_depth$1($scope, input.depth);
var cyc_b_default = /*@__PURE__*/ _template("__tests__/tags/cyc-b.marko", $template$2, $walks$2, 0, $input$1);

// tags/cyc-a.marko
const $template$1 = "<div>a <!></div><!><!>";
const $walks$1 = "Db%l%c";
const $setup$1 = () => {};
const $if_content__input_depth = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_depth$1($scope["#childScope/0"], $scope._.input_depth + 1));
const $if_content__setup = $if_content__input_depth;
const $if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$2), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$2), $if_content__setup);
const $input_depth = /*@__PURE__*/ _const("input_depth", ($scope) => {
	_text($scope["#text/0"], $scope.input_depth);
	$if($scope, $scope.input_depth < 2 ? 0 : 1);
	$if_content__input_depth($scope);
});
const $input = ($scope, input) => $input_depth($scope, input.depth);
var cyc_a_default = /*@__PURE__*/ _template("__tests__/tags/cyc-a.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>inc <!></button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` Db%l/${_w0}&b`)($walks$1);
const $n = /*@__PURE__*/ _let("n/3", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$input_depth($scope["#childScope/2"], $scope.n);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
