// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = _let("c/5", ($scope) => $dynamicTag($scope, $scope.c));
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $C_content__outer = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_7_outer#2:1/subscribe", "outer/8", ($scope) => _text($scope["#text/2"], $scope._._._.outer), ($scope) => $scope._._._, "__tests__/template.marko_2_outer#1/subscribers", 2);
const $C_content__setup__script = _script("__tests__/template.marko_7", ($scope) => _on($scope["#u/0"], "click", function() {
	console.log($scope._._.inner, $scope._._._.outer);
}));
const $C_content__setup = ($scope) => {
	$C_content__outer($scope);
	$C_content__inner($scope);
	$C_content__setup__script($scope);
};
const $C_content__inner = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_7_inner#3:4/subscribe", "inner/10", ($scope) => _text($scope["#text/1"], $scope._._.inner), ($scope) => $scope._._, "__tests__/template.marko_3_inner#4/subscribers", 1);
const $C_content = _content("__tests__/template.marko_7*content", "<u><!><!></u>", " D%b%", $C_content__setup);
const $A_content__outer = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_6_outer#2:1/subscribe", "outer/8", ($scope) => _text($scope["#text/1"], $scope._.outer), 0, "__tests__/template.marko_2_outer#1/subscribers", 1);
const $A_content__setup__script = _script("__tests__/template.marko_6", ($scope) => _on($scope["#b/0"], "click", function() {
	console.log($scope._.outer);
}));
const $A_content__setup = ($scope) => {
	$A_content__outer($scope);
	$A_content__setup__script($scope);
};
const $A_content = _content("__tests__/template.marko_6*content", "<b> </b>", " D ", $A_content__setup);
const $card_content3__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $card_content3__input_tag__OR__C = /*@__PURE__*/ _or_patch("__tests__/template.marko_5_input_tag#0:5_C#3/setup", 4, ($scope) => $card_content3__dynamicTag($scope, $scope._._._._.input_tag, ($_) => ({ content: $scope.C })));
const $card_content3__dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $card_content3__input_tag__OR__A = /*@__PURE__*/ _or_patch("__tests__/template.marko_5_input_tag#0:5_A#2:2/setup", 2, ($scope) => $card_content3__dynamicTag2($scope, $scope._._._._.input_tag, ($_) => ({ content: $scope._._.A })));
const $card_content3__input_tag = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_5_input_tag#0:5/subscribe", "input_tag/7", ($scope) => {
	$card_content3__input_tag__OR__C($scope);
	$card_content3__input_tag__OR__A($scope);
}, ($scope) => $scope._._._._, "__tests__/template.marko_0_input_tag#5/subscribers", 1);
const $card_content3__C = /*@__PURE__*/ _const("C", $card_content3__input_tag__OR__C);
const $card_content3__setup = ($scope) => {
	$card_content3__input_tag($scope);
	$card_content3__A($scope);
	$card_content3__C($scope, { content: $C_content($scope) });
};
const $card_content3__A = /*@__PURE__*/ _closure_get("A/9", $card_content3__input_tag__OR__A, ($scope) => $scope._._);
const $card_content3 = /*@__PURE__*/ _content("__tests__/template.marko_5*content", "<!><!><!><!>", "b%b%", $card_content3__setup);
const $B_content__inner = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_4_inner#3:4/subscribe", "inner/10", ($scope) => _text($scope["#text/1"], $scope._.inner), 0, "__tests__/template.marko_3_inner#4/subscribers", 0);
const $B_content__setup__script = _script("__tests__/template.marko_4", ($scope) => _on($scope["#i/0"], "click", function() {
	console.log($scope._.inner, $scope._._.outer, $scope._._._._.input_label);
}));
const $B_content__setup = ($scope) => {
	$B_content__inner($scope);
	$B_content__setup__script($scope);
};
const $B_content = _content("__tests__/template.marko_4*content", "<i> </i>", " D ", $B_content__setup);
const $card_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $card_content2__input_tag__OR__A = /*@__PURE__*/ _or_patch("__tests__/template.marko_3_input_tag#0:5_A#2:2/setup", 3, ($scope) => $card_content2__dynamicTag($scope, $scope._._._.input_tag, ($_) => ({ content: $scope._.A })));
const $card_content2__dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1");
const $card_content2__input_tag__OR__B = /*@__PURE__*/ _or_patch("__tests__/template.marko_3_input_tag#0:5_B#5/setup", 6, ($scope) => $card_content2__dynamicTag2($scope, $scope._._._.input_tag, ($_) => ({ content: $scope.B })));
const $card_content2__input_tag = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_tag#0:5/subscribe", "input_tag/7", ($scope) => {
	$card_content2__input_tag__OR__A($scope);
	$card_content2__input_tag__OR__B($scope);
}, ($scope) => $scope._._._, "__tests__/template.marko_0_input_tag#5/subscribers", 0);
const $card_content2__B = /*@__PURE__*/ _const("B", $card_content2__input_tag__OR__B);
const $card_content2__setup = ($scope) => {
	$card_content2__input_tag($scope);
	$card_content2__outer($scope);
	$card_content2__A($scope);
	$setup$1($scope["#childScope/2"]);
	$input_content($scope["#childScope/2"], $card_content3($scope));
	$card_content2__B($scope, { content: $B_content($scope) });
};
const $card_content2__inner__closure = /*@__PURE__*/ _closure($B_content__inner, $C_content__inner);
const $card_content2__inner = /*@__PURE__*/ _const("inner", $card_content2__inner__closure);
const $card_content2__outer = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_outer#2:1/subscribe", "outer/8", ($scope) => $card_content2__inner($scope, $scope._.outer + "?"), 0, "__tests__/template.marko_2_outer#1/subscribers", 0);
const $card_content2__A = /*@__PURE__*/ _closure_get("A/9", $card_content2__input_tag__OR__A);
const $card_content2 = /*@__PURE__*/ _content("__tests__/template.marko_3*content", /*@__PURE__*/ ((_w0) => `<!><!><!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `b%b%b/${_w0}&`)($walks$1), $card_content2__setup);
const $card_content__outer__closure = /*@__PURE__*/ _closure($card_content2__outer, $A_content__outer, $C_content__outer);
const $card_content__outer = /*@__PURE__*/ _const("outer", $card_content__outer__closure);
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_label#0:4/subscribe", "input_label/6", ($scope) => $card_content__outer($scope, $scope._._.input_label + "!"), ($scope) => $scope._._, "__tests__/template.marko_0_input_label#4/subscribers", 0);
const $card_content__A = /*@__PURE__*/ _const("A");
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content2($scope));
	$card_content__A($scope, { content: $A_content($scope) });
};
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $card_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
	$input_tag($scope, input.tag);
};
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_tag__closure = /*@__PURE__*/ _closure($card_content2__input_tag, $card_content3__input_tag);
const $input_tag = /*@__PURE__*/ _const("input_tag", $input_tag__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
