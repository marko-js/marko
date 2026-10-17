// template.marko
const $Label_content__walks = "D l";
const $Label_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Label_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Label_content__walks);
const $Label_content__input_suffix__OR__n = /*@__PURE__*/ _fill_join_subscribers("__tests__/template.marko_fill0", "input_suffix", /*@__PURE__*/ _or(4, ($scope) => _text($scope["#text/0"], $scope.n + $scope._.input_suffix)), "input_suffix/6", 0);
const $Label_content__input_suffix = /*@__PURE__*/ _closure_get("input_suffix/6", $Label_content__input_suffix__OR__n, 0, "__tests__/template.marko_1_input_suffix#0:4/subscribe");
const $Label_content__setup = $Label_content__input_suffix;
const $Label_content__n = /*@__PURE__*/ _const("n", $Label_content__input_suffix__OR__n);
const $Label_content__$params = ($scope, $params2) => $Label_content__$temp($scope, $params2[0]);
const $Label_content__$temp = ($scope, $temp) => $Label_content__n($scope, $temp.n);
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "count/5", ($scope) => $Label_content__n($scope["#childScope/0"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Label_content__setup($scope["#childScope/0"]);
	$setup__script($scope);
	$count($scope, 0);
}
const $input = ($scope, input) => $input_suffix($scope, input.suffix);
const $input_suffix__closure = /*@__PURE__*/ _closure($Label_content__input_suffix);
const $input_suffix = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_suffix", $input_suffix__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
