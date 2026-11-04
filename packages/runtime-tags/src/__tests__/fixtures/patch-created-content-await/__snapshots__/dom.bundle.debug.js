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
const $if_content__Body_content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_content($scope["#childScope/0"], $scope._.Body_content));
const $if_content__setup = ($scope) => {
	$if_content__Body_content._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $await_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_label#0:4/subscribe", "input_label/9", ($scope) => _text($scope["#text/1"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_0_input_label#4/subscribers", 0);
const $await_content__setup = $await_content__input_label;
const $await_content__$params = ($scope, $params2) => _text($scope["#text/0"], $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<b><!><!></b>", "D%b%", $await_content__setup);
const $Body_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $Body_content__input_p = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_p#0:3/subscribe", "input_p/8", ($scope) => $Body_content__await_promise($scope, $scope._.input_p), 0, "__tests__/template.marko_0_input_p#3/subscribers", 0);
const $Body_content__setup = ($scope) => {
	$Body_content__input_p($scope);
	$await_content($scope);
};
const $Body_content = _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $Body_content__setup);
const $Body = ($scope, Body) => $Body_content2($scope, Body?.content);
const $Body_content2 = /*@__PURE__*/ _const("Body_content");
function $setup($scope) {
	$Body($scope, { content: $Body_content($scope) });
}
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_p($scope, input.p);
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_p__closure = /*@__PURE__*/ _closure($Body_content__input_p);
const $input_p = /*@__PURE__*/ _const("input_p", $input_p__closure);
const $input_label__closure = /*@__PURE__*/ _closure($await_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
