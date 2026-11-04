// tags/card.marko
const $template$2 = "<button> </button>";
const $walks$2 = " D l";
const $f = _let("f/5", ($scope) => _text($scope["#text/1"], $scope.f()));
const $input_fn = $f;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$f($scope, () => "x");
}));
const $setup$2 = $setup__script;
const $input$2 = ($scope, input) => $input_fn($scope, input.fn);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/outer.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2);
const $input__OR__open = /*@__PURE__*/ _or_patch("__tests__/tags/outer.marko_0_input#2_open#3/setup", 4, ($scope) => $input_fn($scope["#childScope/0"], function() {
	return $scope.open ? $scope.input.fn() : "-";
}));
const $open = _fill_let_resume("__tests__/tags/outer.marko_fill0", "open/3", $input__OR__open);
function $setup$1($scope) {
	$setup$2($scope["#childScope/0"]);
	$open($scope, true);
}
const $input$1 = /*@__PURE__*/ _const("input", $input__OR__open);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_label = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_label#0:4/setup", "#text/0", 0, ($scope) => $input$1($scope["#childScope/0"], { fn: $fn($scope) }));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
const $fn = ($scope) => function() {
	return "f:" + $scope._.input_label;
};
_bind_resume("__tests__/template.marko_1/fn >input_label", $fn);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
