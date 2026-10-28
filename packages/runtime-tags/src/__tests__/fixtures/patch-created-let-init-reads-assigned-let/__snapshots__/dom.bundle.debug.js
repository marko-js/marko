// tags/card.marko
const $template$2 = "<section><button>x</button><!></section>";
const $walks$2 = "D b%l";
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c$1 = /*@__PURE__*/ _let("c/7", ($scope) => $dynamicTag$1($scope, $scope.c));
const $input_content__OR__open$1 = /*@__PURE__*/ _or_resume("__tests__/tags/card.marko_0_input_content#4_open#5/init", 6, ($scope) => $c$1($scope, $scope.open ? $scope.input_content : undefined));
const $open$1 = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_fill0", "open/5", $input_content__OR__open$1);
const $setup__script$1 = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c$1($scope, undefined);
	$open$1($scope, !$scope.open);
}));
function $setup$2($scope) {
	$setup__script$1($scope);
	$open$1($scope, true);
}
const $input_content$1 = /*@__PURE__*/ _const("input_content", $input_content__OR__open$1);
const $input$2 = ($scope, input) => $input_content$1($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/relay.marko
const $template$1 = "<section><button>y</button><!></section>";
const $walks$1 = "D b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = /*@__PURE__*/ _let("c/8", ($scope) => $dynamicTag($scope, $scope.c));
const $picked = /*@__PURE__*/ _let("picked/7", ($scope) => $c($scope, $scope.picked));
const $input_content__OR__open = /*@__PURE__*/ _or_resume("__tests__/tags/relay.marko_0_input_content#4_open#5/init", 6, ($scope) => $picked($scope, $scope.open ? $scope.input_content : undefined));
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/relay.marko_fill0", "open/5", $input_content__OR__open);
const $setup__script = _script("__tests__/tags/relay.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__OR__open);
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var relay_default = /*@__PURE__*/ _template("__tests__/tags/relay.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $relay_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_input_label#0:4/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_3_input_label#0:4/subscribe"), 1));
const $relay_content__setup = $relay_content__input_label;
const $relay_content = _content("__tests__/template.marko_3*content", "<em>relayed <!></em>", "Db%", $relay_content__setup);
const $card_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:4/subscribe"), 0);
const $card_content__setup = $card_content__input_label;
const $card_content = _content("__tests__/template.marko_2*content", "<em>static <!></em>", "Db%", $card_content__setup);
const $if_content__setup = ($scope) => {
	$setup$2($scope["#childScope/0"]);
	$input_content$1($scope["#childScope/0"], $card_content($scope));
	$setup$1($scope["#childScope/1"]);
	$input_content($scope["#childScope/1"], $relay_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template$2, $template$1), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks$2, $walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label, $relay_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
