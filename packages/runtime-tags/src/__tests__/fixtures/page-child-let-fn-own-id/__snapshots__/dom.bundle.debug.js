// tags/card.marko
const $template$2 = "<span>card</span>";
const $walks$2 = "b";
const $setup$2 = ($_) => {};
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, "b");

// tags/outer.marko
const $template$1 = "<p> </p>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const $input_label__OR__obj = /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/0"], $scope.obj.f($scope.input_label)));
const $obj = /*@__PURE__*/ _let("obj/5", $input_label__OR__obj);
const $input_fmt = $obj;
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__OR__obj);
const $input$1 = ($scope, input) => {
	$input_fmt($scope, input.fmt);
	$input_label$1($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "D l", 0, $input$1);

// tags/v:card.marko.register-default.js
_resumed["__tests__/tags/card.marko"] = card_default;

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l");
const $input_alt__OR__fn__OR__other = /*@__PURE__*/ _or(7, ($scope) => $input_fmt($scope["#childScope/0"], { f: Object.assign($scope.input_alt ? $scope.other : $scope.fn, { content: card_default }) }), 2);
const $fn2 = /*@__PURE__*/ _const("fn", $input_alt__OR__fn__OR__other);
const $other2 = /*@__PURE__*/ _const("other", $input_alt__OR__fn__OR__other);
function $setup($scope) {
	$fn2($scope, $fn);
	$other2($scope, $other);
}
const $input_alt = /*@__PURE__*/ _const("input_alt", $input_alt__OR__fn__OR__other);
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => {
	$input_alt($scope, input.alt);
	$input_label($scope, input.label);
};
function $fn(v) {
	return "f-" + v;
}
function $other(v) {
	return "g-" + v;
}
_resumed["__tests__/template.marko_0/fn"] = $fn;
_resumed["__tests__/template.marko_0/other"] = $other;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
