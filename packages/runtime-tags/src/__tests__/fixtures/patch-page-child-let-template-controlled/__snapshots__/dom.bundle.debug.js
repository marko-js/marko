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
const $template$1 = "<button>clear</button><section><!></section>";
const $walks$1 = " bD%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_label__OR__T = /*@__PURE__*/ _fill_join("__tests__/tags/outer.marko_fill2", "input_label", /*@__PURE__*/ _or(10, ($scope) => $dynamicTag($scope, $scope.T, ($_) => ({ label: $scope.input_label }))));
const $T = /*@__PURE__*/ _fill_let_change("__tests__/tags/outer.marko_fill3", "T/8", $input_label__OR__T);
const $input_tag__OR__input_tagChange = /*@__PURE__*/ _fill_join("__tests__/tags/outer.marko_fill1", "input_tagChange", /*@__PURE__*/ _fill_join("__tests__/tags/outer.marko_fill0", "input_tag", /*@__PURE__*/ _or_resume("__tests__/tags/outer.marko_0_input_tag#4_input_tagChange#5/init", 6, ($scope) => $T($scope, $scope.input_tag, $scope.input_tagChange))));
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__OR__input_tagChange);
const $input_tagChange = /*@__PURE__*/ _const("input_tagChange", $input_tag__OR__input_tagChange);
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$T($scope, undefined);
}));
const $setup$1 = $setup__script;
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__OR__T);
const $input$1 = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_tagChange($scope, input.tagChange);
	$input_label$1($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, $walks$1, $setup$1, $input$1);

// tags/v:card.marko.register-default.js
_resumed["__tests__/tags/card.marko"] = card_default;

// tags/v:big.marko.register-default.js
_resumed["__tests__/tags/big.marko"] = big_default;

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_tagChange($scope["#childScope/0"], $tagChange);
}
const $input_big = ($scope, input_big) => $input_tag($scope["#childScope/0"], input_big ? big_default : card_default);
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => {
	$input_big($scope, input.big);
	$input_label($scope, input.label);
};
function $tagChange() {}
_resumed["__tests__/template.marko_0/tagChange"] = $tagChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
