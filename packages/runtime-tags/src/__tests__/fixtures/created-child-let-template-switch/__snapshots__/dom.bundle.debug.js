// tags/card.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $setup$2 = ($_) => {};
const $input_label$2 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$2 = ($scope, input) => $input_label$2($scope, input.label);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, "D l", 0, $input$2);

// tags/big.marko
const $template$1 = "<strong><i> </i></strong>";
const $walks$1 = "E m";
const $setup$1 = ($_) => {};
const $input_label$1 = ($scope, input_label) => _text($scope["#text/0"], input_label.toUpperCase());
const $input$1 = ($scope, input) => $input_label$1($scope, input.label);
var big_default = /*@__PURE__*/ _template("__tests__/tags/big.marko", $template$1, "E m", 0, $input$1);

// tags/v:card.marko.register-default.js
_resumed["__tests__/tags/card.marko"] = card_default;

// tags/v:big.marko.register-default.js
_resumed["__tests__/tags/big.marko"] = big_default;

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_big = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_tag($scope["#childScope/0"], $scope._.input_big ? big_default : card_default));
const $if_content__setup = ($scope) => {
	$if_content__input_big._($scope);
	$if_content__input_label._($scope);
	$setup$3($scope["#childScope/0"]);
};
const $if_content__input_label = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$3($scope["#childScope/0"], $scope._.input_label));
const $if = /*@__PURE__*/ _if("#text/0", $template$3, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$3), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_big($scope, input.big);
	$input_label($scope, input.label);
};
const $input_big = /*@__PURE__*/ _const("input_big", $if_content__input_big);
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/outer.marko
const $template = "<button>clear</button><section><!></section>";
const $walks = " bD%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_label__OR__T = /*@__PURE__*/ _or(7, ($scope) => $dynamicTag($scope, $scope.T, ($_) => ({ label: $scope.input_label })));
const $T = /*@__PURE__*/ _let("T/6", $input_label__OR__T);
const $input_tag = $T;
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$T($scope, undefined);
}));
const $setup = $setup__script;
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__OR__T);
const $input = ($scope, input) => {
	$input_tag($scope, input.tag);
	$input_label($scope, input.label);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, $walks, $setup, $input);
