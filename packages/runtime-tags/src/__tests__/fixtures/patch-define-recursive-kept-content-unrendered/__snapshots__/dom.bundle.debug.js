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
const $Tree_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks$1);
const $Tree_content__template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1);
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._;
	$Tree_content__setup($scope["#childScope/0"]);
};
const $await_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._._;
	$Tree_content__setup($scope["#childScope/0"]);
};
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_label#0:3/subscribe", "input_label/6", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_0_input_label#3/subscribers", 0);
const $card_content__setup = $card_content__input_label;
const $card_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<span> </span>", "D ", $card_content__setup);
const $await_content = /*@__PURE__*/ _await_content("#text/1", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($Tree_content__template), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($Tree_content__walks), $await_content__setup);
const $Tree_content__await_promise = /*@__PURE__*/ _await_promise("#text/1");
const $Tree_content__input_next = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_next#0:4/subscribe", "input_next/7", ($scope) => $Tree_content__await_promise($scope, $scope._.input_next), 0, "__tests__/template.marko_0_input_next#4/subscribers", 0);
const $Tree_content__setup = ($scope) => {
	$Tree_content__input_next($scope);
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $card_content($scope));
	$await_content($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($Tree_content__template), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($Tree_content__walks), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_next($scope, input.next);
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_label__closure = /*@__PURE__*/ _closure($card_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_next__closure = /*@__PURE__*/ _closure($Tree_content__input_next);
const $input_next = /*@__PURE__*/ _const("input_next", $input_next__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
