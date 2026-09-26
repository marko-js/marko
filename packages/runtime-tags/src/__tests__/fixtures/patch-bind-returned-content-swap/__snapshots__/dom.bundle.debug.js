// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $Content_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/tags/child.marko0", "input_label", /*@__PURE__*/ _closure_get("input_label", ($scope) => _text($scope["#text/1"], $scope._.input_label), 0, "__tests__/tags/child.marko_1_input_label#2/subscribe"), 0);
const $Content_content__setup__script = _script("__tests__/tags/child.marko_1", ($scope) => _on($scope["#em/0"], "click", function() {
	$count($scope._, +$scope._.count + 1);
}));
const $Content_content__setup = ($scope) => {
	$Content_content__input_label($scope);
	$Content_content__count($scope);
	$Content_content__setup__script($scope);
};
const $Content_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/2"], $scope._.count), 0, "__tests__/tags/child.marko_1_count#3/subscribe");
const $Content_content = _content("__tests__/tags/child.marko_1*content", "<em><!> <!></em>", " D%c%", $Content_content__setup);
const $count__closure = /*@__PURE__*/ _closure($Content_content__count);
const $count = /*@__PURE__*/ _fill_let("__tests__/tags/child.marko1", "count/3", $count__closure);
const $Content = /*@__PURE__*/ _const("Content", ($scope) => _return($scope, $scope.Content));
function $setup$1($scope) {
	$Content($scope, { content: $Content_content($scope) });
	$count($scope, 0);
}
const $input$1 = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($Content_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko0", "input_label", $input_label__closure);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", "", "", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!><button> </button>`)("", "");
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b0${_w0}&0${_w1}&%b D l`)("", "");
const $n = /*@__PURE__*/ _let("n/10", ($scope) => _text($scope["#text/6"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/5"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $a);
	_var($scope, "#childScope/2", $b);
	$setup$1($scope["#childScope/0"]);
	$input_label($scope["#childScope/0"], "A");
	$setup$1($scope["#childScope/2"]);
	$input_label($scope["#childScope/2"], "B");
	$n($scope, 0);
	$setup__script($scope);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/4");
const $input_first__OR__a__OR__b = /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.input_first ? $scope.a : $scope.b), 2);
const $a = _var_resume("__tests__/template.marko_0_a#11/var", /*@__PURE__*/ _const("a", $input_first__OR__a__OR__b));
const $b = _var_resume("__tests__/template.marko_0_b#12/var", /*@__PURE__*/ _const("b", $input_first__OR__a__OR__b));
const $input_first = /*@__PURE__*/ _const("input_first", $input_first__OR__a__OR__b);
const $input = ($scope, input) => $input_first($scope, input.first);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
