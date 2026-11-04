// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_label#0:4/subscribe", "input_label/6", ($scope) => {
	$input_label$1($scope["#childScope/0"], $scope._._.input_label);
	$input_label$2($scope["#childScope/1"], $scope._._.input_label);
}, ($scope) => $scope._._, "__tests__/template.marko_0_input_label#4/subscribers", 0);
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$card_content__input_tag($scope);
	$setup$1($scope["#childScope/0"]);
	$setup$2($scope["#childScope/1"]);
};
const $card_content__input_tag = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_tag#0:5/subscribe", "input_tag/7", ($scope) => $input_tag$1($scope["#childScope/1"], $scope._._.input_tag), ($scope) => $scope._._, "__tests__/template.marko_0_input_tag#5/subscribers", 0);
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!>`)($template$1, $template$2), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&b`)($walks$1, "b%c"), $card_content__setup);
const $if_content__setup = ($scope) => {
	$setup$3($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$3, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
	$input_tag($scope, input.tag);
};
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_tag__closure = /*@__PURE__*/ _closure($card_content__input_tag);
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/btn.marko
const $template$2 = "<i><!><!></i>";
const $walks$2 = " D%b%l";
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/btn.marko_0_n#6/fill", "n/6", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script$1 = _script("__tests__/tags/btn.marko_0", ($scope) => _on($scope["#i/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup$2($scope) {
	$setup__script$1($scope);
	$n($scope, 0);
}
const $input_label$1 = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input$2 = ($scope, input) => $input_label$1($scope, input.label);
var btn_default = /*@__PURE__*/ _template("__tests__/tags/btn.marko", $template$2, $walks$2, $setup$2, $input$2);

// tags/defn.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $Inner_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/tags/defn.marko_1_input_label#0:3/subscribe", "input_label/7", ($scope) => _text($scope["#text/1"], $scope._.input_label), 0, "__tests__/tags/defn.marko_0_input_label#3/subscribers", 0);
const $Inner_content__setup__script = _script("__tests__/tags/defn.marko_1", ($scope) => _on($scope["#b/0"], "click", function() {
	console.log($scope._.input_label);
}));
const $Inner_content__setup = ($scope) => {
	$Inner_content__input_label($scope);
	$Inner_content__setup__script($scope);
};
const $Inner_content = _content("__tests__/tags/defn.marko_1*content", "<b> </b>", " D ", $Inner_content__setup);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_tag__OR__Inner = /*@__PURE__*/ _or_patch("__tests__/tags/defn.marko_0_input_tag#4_Inner#5/setup", 6, ($scope) => $dynamicTag$1($scope, $scope.input_tag, ($_) => ({ content: $scope.Inner })));
const $Inner = /*@__PURE__*/ _const("Inner", $input_tag__OR__Inner);
function $setup$1($scope) {
	$Inner($scope, { content: $Inner_content($scope) });
}
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__OR__Inner);
const $input$1 = ($scope, input) => {
	$input_label($scope, input.label);
	$input_tag($scope, input.tag);
};
const $input_label__closure = /*@__PURE__*/ _closure($Inner_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var defn_default = /*@__PURE__*/ _template("__tests__/tags/defn.marko", $template$1, "b%c", $setup$1, $input$1);

// tags/card.marko
const $template = "<section><button>clear</button><!></section>";
const $walks = "D b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = _let("c/5", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup = $setup__script;
const $input = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template, $walks, $setup, $input);
