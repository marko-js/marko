// tags/card.marko
const $template$3 = "<em> </em>";
const $walks$3 = "D l";
const $setup$3 = ($_) => {};
const $input_label$3 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$3 = ($scope, input) => $input_label$3($scope, input.label);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$3, "D l", 0, $input$3);

// tags/big.marko
const $template$2 = "<strong> </strong>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_label$2 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$2 = ($scope, input) => $input_label$2($scope, input.label);
var big_default = /*@__PURE__*/ _template("__tests__/tags/big.marko", $template$2, "D l", 0, $input$2);

// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_label__OR__T = /*@__PURE__*/ _or_resume("__tests__/tags/outer.marko_1_input_label#0:5_T#0:6/init", 1, ($scope) => $if_content__dynamicTag($scope, $scope._.T, ($_) => ({ label: $scope._.input_label })));
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_label__OR__T);
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__T._($scope);
};
const $if_content__T = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_label__OR__T);
const $T = _fill_resume("__tests__/tags/outer.marko_fill1", /*@__PURE__*/ _let("T/6", $if_content__T));
const $input_tag = $T;
const $if = /*@__PURE__*/ _if("#text/0", "<section><!></section>", "D%", $if_content__setup);
const $input_more$1 = ($scope, input_more) => $if($scope, input_more ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_more$1($scope, input.more);
	$input_label$1($scope, input.label);
};
const $input_label$1 = _fill_resume("__tests__/tags/outer.marko_fill0", /*@__PURE__*/ _const("input_label", $if_content__input_label));
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "b%c", 0, $input$1);

// tags/v:card.marko.register-default.js
_resumed["__tests__/tags/card.marko"] = card_default;

// tags/v:big.marko.register-default.js
_resumed["__tests__/tags/big.marko"] = big_default;

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = ($_) => {};
const $input_big = ($scope, input_big) => $input_tag($scope["#childScope/0"], input_big ? big_default : card_default);
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input_more = ($scope, input_more) => $input_more$1($scope["#childScope/0"], input_more);
const $input = ($scope, input) => {
	$input_big($scope, input.big);
	$input_label($scope, input.label);
	$input_more($scope, input.more);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
