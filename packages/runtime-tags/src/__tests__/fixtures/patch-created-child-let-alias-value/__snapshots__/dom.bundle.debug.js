// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_label = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_label#0:4/setup", "#text/0", 0, ($scope) => $input_n($scope["#childScope/0"], $scope._.input_label));
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
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/card.marko
const $template$1 = "<section><button>clear</button> </section>";
const $walks$1 = "D b l";
const $c = _let("c/5", ($scope) => _text($scope["#text/1"], $scope.c));
const $input_n$1 = $c;
const $setup__script$1 = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, "y");
}));
const $setup$1 = $setup__script$1;
const $input$1 = ($scope, input) => $input_n$1($scope, input.n);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// tags/outer.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>drop</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $o = /*@__PURE__*/ _fill_let("__tests__/tags/outer.marko_0_o#5/fill", "o/5", ($scope) => $p($scope, $scope.o));
const $p = ($scope) => $input_n$1($scope["#childScope/1"], $scope.o);
const $input_n = $o;
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$o($scope, "x");
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_n($scope, input.n);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template, $walks, $setup, $input);
