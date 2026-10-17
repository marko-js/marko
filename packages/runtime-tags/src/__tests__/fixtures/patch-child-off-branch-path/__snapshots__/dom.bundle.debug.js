// tags/note.marko
const $template$3 = "<p> </p>";
const $walks$3 = "D l";
const $setup$3 = ($_) => {};
const $input_label$2 = ($scope, input_label) => _text($scope["#text/0"], input_label);
const $input$3 = ($scope, input) => $input_label$2($scope, input.label);
var note_default = /*@__PURE__*/ _template("__tests__/tags/note.marko", $template$3, "D l", 0, $input$3);

// tags/toggle.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = ($_) => {};
const $if = /*@__PURE__*/ _if("#text/0", "<i>on</i>");
const $input_on = ($scope, input_on) => $if($scope, input_on ? 0 : 1);
const $input$2 = ($scope, input) => $input_on($scope, input.on);
var toggle_default = /*@__PURE__*/ _template("__tests__/tags/toggle.marko", $template$2, "b%c", 0, $input$2);

// tags/card.marko
const $template$1 = "<!><!><!><!>";
const $walks$1 = "b%b%c";
const $await_content3__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content3__$params = ($scope, $params4) => $await_content3__v($scope, $params4[0]);
const $await_content2__w = ($scope, w) => _text($scope["#text/0"], w);
const $await_content2__$params = ($scope, $params3) => $await_content2__w($scope, $params3[0]);
const $await_content__v$1 = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params$1 = ($scope, $params2) => $await_content__v$1($scope, $params2[0]);
const $await_content3 = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content3__$params);
const $try_content2__input_failing = /*@__PURE__*/ _closure_get("input_failing/11", ($scope) => $try_content2__await_promise($scope, $scope._.input_failing), 0, "__tests__/tags/card.marko_4_input_failing#0:7/subscribe");
const $try_content2__setup = ($scope) => {
	$try_content2__input_failing($scope);
	$await_content3($scope);
};
const $catch_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/tags/card.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/8", ($scope) => $input_label$2($scope["#childScope/0"], $scope._.input_label), 0, "__tests__/tags/card.marko_3_input_label#0:4/subscribe"), 1);
const $catch_content__setup = ($scope) => {
	$catch_content__input_label($scope);
	$catch_content__input_other($scope);
	$await_content2($scope);
};
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<b> </b>", "D ");
const $catch_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content2__$params);
const $catch_content__input_other = /*@__PURE__*/ _fill_join_closure("__tests__/tags/card.marko_fill1", "input_other", /*@__PURE__*/ _closure_get("input_other/10", ($scope) => $catch_content__await_promise($scope, $scope._.input_other), 0, "__tests__/tags/card.marko_3_input_other#0:6/subscribe"), 0);
const $catch_content = _content("__tests__/tags/card.marko_3*content", /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$3), /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)("D l"), $catch_content__setup);
const $await_content$1 = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $try_content__await_promise$1 = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params$1);
const $try_content__input_slow$1 = /*@__PURE__*/ _closure_get("input_slow/9", ($scope) => $try_content__await_promise$1($scope, $scope._.input_slow), 0, "__tests__/tags/card.marko_2_input_slow#0:5/subscribe");
const $try_content__setup$1 = ($scope) => {
	$try_content__input_slow$1($scope);
	$await_content$1($scope);
};
const $placeholder_content__input_label$1 = /*@__PURE__*/ _fill_join_closure("__tests__/tags/card.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/8", ($scope) => $input_label$2($scope["#childScope/0"], $scope._.input_label), 0, "__tests__/tags/card.marko_1_input_label#0:4/subscribe"), 0);
const $placeholder_content__setup$1 = $placeholder_content__input_label$1;
const $placeholder_content$1 = _content("__tests__/tags/card.marko_1*content", $template$3, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $placeholder_content__setup$1);
const $try$1 = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup$1, $placeholder_content$1);
const $try2 = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content2__setup, 0, $catch_content);
function $setup$1($scope) {
	$try$1($scope);
	$try2($scope);
}
const $input$1 = ($scope, input) => {
	$input_slow$1($scope, input.slow);
	$input_failing$1($scope, input.failing);
	$input_label$1($scope, input.label);
	$input_other$1($scope, input.other);
};
const $input_label__closure$1 = /*@__PURE__*/ _closure($placeholder_content__input_label$1, $catch_content__input_label);
const $input_label$1 = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill0", "input_label", $input_label__closure$1);
const $input_slow__closure$1 = /*@__PURE__*/ _closure($try_content__input_slow$1);
const $input_slow$1 = /*@__PURE__*/ _const("input_slow", $input_slow__closure$1);
const $input_other__closure = /*@__PURE__*/ _closure($catch_content__input_other);
const $input_other$1 = /*@__PURE__*/ _fill_const("__tests__/tags/card.marko_fill1", "input_other", $input_other__closure);
const $input_failing__closure = /*@__PURE__*/ _closure($try_content2__input_failing);
const $input_failing$1 = /*@__PURE__*/ _const("input_failing", $input_failing__closure);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button> </button><!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l%b/${_w0}&b`)($walks$1);
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<em> </em>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_slow = /*@__PURE__*/ _closure_get("input_slow/15", ($scope) => $try_content__await_promise($scope, $scope._.input_slow), 0, "__tests__/template.marko_2_input_slow#0:7/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__input_slow($scope);
	$await_content($scope);
};
const $placeholder_content__input_label__OR__n = /*@__PURE__*/ _fill_join_subscribers("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _or(3, ($scope) => $input_label$2($scope["#childScope/1"], `${$scope._.n} ${$scope._.input_label}`)), "input_label/14", 0);
const $placeholder_content__input_label = /*@__PURE__*/ _closure_get("input_label/14", $placeholder_content__input_label__OR__n, 0, "__tests__/template.marko_1_input_label#0:6/subscribe");
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__input_label($scope);
	$placeholder_content__brand($scope);
	$placeholder_content__n($scope);
};
const $placeholder_content__brand = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill1", "brand", /*@__PURE__*/ _closure_get("brand/16", ($scope) => $input_label$2($scope["#childScope/0"], $scope._.brand)), 0);
const $placeholder_content__n = /*@__PURE__*/ _closure_get("n/17", ($scope) => {
	$input_on($scope["#childScope/2"], $scope._.n);
	$placeholder_content__input_label__OR__n($scope);
}, 0, "__tests__/template.marko_1_n#0:13/subscribe");
const $placeholder_content = _content("__tests__/template.marko_1*content", /*@__PURE__*/ ((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}<!>`)($template$3, $template$3, $template$2), /*@__PURE__*/ ((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}&b`)("D l", "D l", "b%c"), $placeholder_content__setup);
const $brand__closure = /*@__PURE__*/ _closure($placeholder_content__brand);
const $brand = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "brand", $brand__closure);
const $global_brand = /*@__PURE__*/ _fill_global_join("brand", "__tests__/template.marko_0_$global_brand#12", ($scope) => $brand($scope, `${$scope.$global.brand}!`));
const $n__closure = /*@__PURE__*/ _closure($placeholder_content__n);
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill2", "n/13", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$n__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/3"]);
	$input_label$1($scope["#childScope/3"], "fixed");
	$try($scope);
	$setup__script($scope);
	$n($scope, 0);
	$global_brand($scope);
}
const $input_slow__closure = /*@__PURE__*/ _closure($try_content__input_slow);
const $input_slow = /*@__PURE__*/ _const("input_slow", ($scope) => {
	$input_slow$1($scope["#childScope/3"], $scope.input_slow);
	$input_slow__closure($scope);
});
const $input_failing = ($scope, input_failing) => $input_failing$1($scope["#childScope/3"], input_failing);
const $input_other = ($scope, input_other) => $input_other$1($scope["#childScope/3"], input_other);
const $input = ($scope, input) => {
	$input_slow($scope, input.slow);
	$input_failing($scope, input.failing);
	$input_other($scope, input.other);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($placeholder_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
