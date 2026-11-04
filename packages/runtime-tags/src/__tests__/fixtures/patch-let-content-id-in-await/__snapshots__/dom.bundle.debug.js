// tags/card.marko
const $template$1 = "<section><button>clear</button><!><!></section>";
const $walks$1 = "D b%b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $c = _let("c/6", ($scope) => {
	$dynamicTag($scope, $scope.c);
	$dynamicTag2($scope, $scope.c);
});
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
const $await_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_3_input_label#0:5/subscribe", "input_label/7", ($scope) => _text($scope["#text/3"], $scope._._._.input_label), ($scope) => $scope._._._, "__tests__/template.marko_0_input_label#5/subscribers", 0);
const $await_content__uid = ($scope, uid) => {
	_attr($scope["#input/0"], "id", uid);
	_attr($scope["#label/1"], "for", uid);
};
const $await_content__setup = ($scope) => {
	$await_content__input_label($scope);
	$await_content__uid($scope, _id($scope));
};
const $await_content__$params = ($scope, $params2) => _text($scope["#text/2"], $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<input><label><!><!></label>", " b D%b%", $await_content__setup);
const $card_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $card_content__input_p = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_p#0:4/subscribe", "input_p/6", ($scope) => $card_content__await_promise($scope, $scope._._.input_p), ($scope) => $scope._._, "__tests__/template.marko_0_input_p#4/subscribers", 0);
const $card_content__setup = ($scope) => {
	$card_content__input_p($scope);
	$await_content($scope);
};
const $card_content = _content("__tests__/template.marko_2*content", "<!><!><!>", "b%", $card_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_p($scope, input.p);
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_p__closure = /*@__PURE__*/ _closure($card_content__input_p);
const $input_p = /*@__PURE__*/ _const("input_p", $input_p__closure);
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
