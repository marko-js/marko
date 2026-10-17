// tags/reveal.marko
const $template$2 = "<button>show</button><!><!>";
const $walks$2 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill_join("__tests__/tags/reveal.marko_fill0", "input_content", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _fill_let("__tests__/tags/reveal.marko_fill1", "show/5", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/tags/reveal.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup$2($scope) {
	$setup__script($scope);
	$show($scope, false);
}
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
const $input_content$1 = /*@__PURE__*/ _fill_const("__tests__/tags/reveal.marko_fill0", "input_content", $if_content__input_content);
var reveal_default = /*@__PURE__*/ _template("__tests__/tags/reveal.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/card.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$2);
function $setup$1($scope) {
	$setup$2($scope["#childScope/0"]);
}
const $input_content = ($scope, input_content) => $input_content$1($scope["#childScope/0"], input_content);
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $inputwrapCarddiv_content__row_label = /*@__PURE__*/ _closure_get("row_label/6", ($scope) => _text($scope["#text/0"], $scope._.row_label), 0, "__tests__/template.marko_2_row_label#1:3/subscribe");
const $inputwrapCarddiv_content__setup = $inputwrapCarddiv_content__row_label;
const $inputwrapCarddiv_content = _content("__tests__/template.marko_2*content", "<b> </b>", "D ", $inputwrapCarddiv_content__setup);
_content_resume($inputwrapCarddiv_content);
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputwrapCarddiv_content);
const $for_content__input_wrap = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_wrap", /*@__PURE__*/ _for_closure("#text/0", ($scope) => $for_content__dynamicTag($scope, $scope._.input_wrap ? card_default : "div")));
const $for_content__setup = $for_content__input_wrap;
const $for_content__$params = ($scope, $params2) => $for_content__row_label($scope, $params2[0]?.label);
const $for_content__row_label__closure = /*@__PURE__*/ _closure($inputwrapCarddiv_content__row_label);
const $for_content__row_label = /*@__PURE__*/ _const("row_label", $for_content__row_label__closure);
const $for = /*@__PURE__*/ _for_of("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_rows = ($scope, input_rows) => $for($scope, [input_rows, "id"]);
const $input = ($scope, input) => {
	$input_rows($scope, input.rows);
	$input_wrap($scope, input.wrap);
};
const $input_wrap = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_wrap", $for_content__input_wrap);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
