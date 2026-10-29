// tags/wrap.marko
const $template$1 = "<button> </button><!><!>";
const $walks$1 = " D l%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/wrap.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
const $if_content__setup$1 = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/2", "<!><!><!>", "b%", $if_content__setup$1);
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/wrap.marko_fill1", "n/6", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$if($scope, $scope.n < 2 ? 0 : 1);
});
const $setup__script = _script("__tests__/tags/wrap.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup$1($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/wrap.marko_fill0", "input_content", $if_content__input_content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $if_content__input_w = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_w", /*@__PURE__*/ _closure_get("input_w/6", ($scope) => _text($scope["#text/0"], $scope._._.input_w), ($scope) => $scope._._, "__tests__/template.marko_2_input_w#0:4/subscribe"), 0);
const $if_content__setup = $if_content__input_w;
const $wrap_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $wrap_content__show = /*@__PURE__*/ _closure_get("show/7", ($scope) => $wrap_content__if($scope, $scope._.show ? 0 : 1));
const $wrap_content__setup = $wrap_content__show;
const $wrap_content = _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $wrap_content__setup);
const $show__closure = /*@__PURE__*/ _closure($wrap_content__show);
const $show = /*@__PURE__*/ _let("show/5", $show__closure);
const $input_show = $show;
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $wrap_content($scope));
}
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_w($scope, input.w);
};
const $input_w__closure = /*@__PURE__*/ _closure($if_content__input_w);
const $input_w = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_w", $input_w__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
