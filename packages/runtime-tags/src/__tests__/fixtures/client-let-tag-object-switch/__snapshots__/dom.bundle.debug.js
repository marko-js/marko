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
const $obj = ($scope, obj) => $obj_T($scope, obj.T);
const $T = /*@__PURE__*/ _let("T/5", ($scope) => $obj($scope, { T: $scope.T }));
const $input_tag = $T;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_label__OR__obj_T = /*@__PURE__*/ _or(8, ($scope) => $dynamicTag($scope, $scope.obj_T, ($_) => ({ label: $scope.input_label })));
const $obj_T = /*@__PURE__*/ _const("obj_T", $input_label__OR__obj_T);
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_label__OR__obj_T);
const $input$1 = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_label$1($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "b%c", 0, $input$1);

// tags/v:card.marko.register-default.js
_resumed["__tests__/tags/card.marko"] = card_default;

// tags/v:big.marko.register-default.js
_resumed["__tests__/tags/big.marko"] = big_default;

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = ($_) => {};
const $input_alt = ($scope, input_alt) => $input_tag($scope["#childScope/0"], input_alt ? big_default : card_default);
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/0"], input_label);
const $input = ($scope, input) => {
	$input_alt($scope, input.alt);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
