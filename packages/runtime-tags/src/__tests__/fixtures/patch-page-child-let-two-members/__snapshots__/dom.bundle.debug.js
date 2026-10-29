// tags/card.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_label$2 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$2 = ($scope, input) => $input_label$2($scope, input.label);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, "D l", 0, $input$2);

// tags/outer.marko
const $template$1 = "<!><!><p> </p>";
const $walks$1 = "b%bD l";
const $setup$1 = ($_) => {};
const $input_label__OR__v = /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/1"], $scope.v.fmt($scope.input_label)));
const $v = _fill_resume("__tests__/tags/outer.marko_fill1", /*@__PURE__*/ _let("v/6", ($scope) => {
	$v_tag($scope, $scope.v?.tag);
	$input_label__OR__v($scope);
}));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_label__OR__v_tag = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.v_tag, ($_) => ({ label: $scope.input_label })));
const $v_tag = /*@__PURE__*/ _const("v_tag", $input_label__OR__v_tag);
const $input_value = $v;
const $input_label$1 = _fill_resume("__tests__/tags/outer.marko_fill0", /*@__PURE__*/ _const("input_label", ($scope) => {
	$input_label__OR__v_tag($scope);
	$input_label__OR__v($scope);
}));
const $input$1 = ($scope, input) => {
	$input_value($scope, input.value);
	$input_label$1($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, $walks$1, 0, $input$1);

// tags/v:card.marko.register-default.js
_resumed["__tests__/tags/card.marko"] = card_default;

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $input_alt__OR__fn__OR__other = /*@__PURE__*/ _or(7, ($scope) => $input_value($scope["#childScope/0"], {
	tag: card_default,
	fmt: $scope.input_alt ? $scope.other : $scope.fn
}), 2);
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
