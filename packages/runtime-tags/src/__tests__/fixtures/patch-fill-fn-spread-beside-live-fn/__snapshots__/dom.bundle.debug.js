// tags/card/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input$1 = ($scope, input) => _text($scope["#text/0"], input.fn("x"));
var card_default = /*@__PURE__*/ _template("__tests__/tags/card/index.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__chars = /*@__PURE__*/ _fill("__tests__/template.marko_fill0", "chars", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/0"], { fn: $scope._.chars })));
const $if_content__setup = ($scope) => {
	$if_content__chars._($scope);
	$if_content__items._($scope);
	$if_content__tag._($scope);
};
const $if_content__items = /*@__PURE__*/ _fill("__tests__/template.marko_fill1", "items", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/1"], { fn: $scope._.items })));
const $if_content__tag = /*@__PURE__*/ _fill("__tests__/template.marko_fill2", "tag", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input$1($scope["#childScope/2"], { fn: $scope._.tag })));
const $pattern3 = ($scope, $pattern) => $chars2($scope, $pattern[2]);
const $chars2 = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "chars", $if_content__chars);
const $pattern4 = ($scope, $pattern2) => $items2($scope, $pattern2[1]);
const $tag2 = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill2", "tag", $if_content__tag);
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => {
	$pattern3($scope, [..."ab", $chars($scope)]);
	$pattern4($scope, [...[$scope.input_title], $items($scope)]);
	$tag2($scope, $tag($scope));
});
const $items2 = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "items", $if_content__items);
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}`)($template$1, $template$1, $template$1), /*@__PURE__*/ ((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}&`)("D l", "D l", "D l"), $if_content__setup);
const $show = _let("show/10", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $chars = ($scope) => (s) => s + ":" + $scope.input_title;
const $items = ($scope) => (s) => s + "=" + $scope.input_title;
const $tag = ($scope) => (s) => s + "#" + $scope.input_title;
_bind_resume("__tests__/template.marko_0/chars input_title", $chars);
_bind_resume("__tests__/template.marko_0/items input_title", $items);
_bind_resume("__tests__/template.marko_0/tag input_title", $tag);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
