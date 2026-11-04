// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $c = /*@__PURE__*/ _fill_let("__tests__/tags/card.marko_0_c#5/fill", "c/5", ($scope) => $dynamicTag($scope, $scope.c, ($_) => ({ n: 2 })));
const $input_content = $c;
const $setup__script = _script("__tests__/tags/card.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$c($scope, undefined);
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $Row_content__walks = "D%c%l";
const $Row_content__template = "<em><!> <!></em>";
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($Row_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($Row_content__walks);
const $if_content__Row = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $input_content($scope["#childScope/0"], $scope._.Row));
const $if_content__setup = ($scope) => {
	$if_content__Row._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $Row_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_label#0:4/subscribe", "input_label/7", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_0_input_label#4/subscribers", 0);
const $Row_content__setup = $Row_content__input_label;
const $Row_content__n = ($scope, n) => _text($scope["#text/1"], n);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => $Row_content__n($scope, $temp.n);
const $Row_content = _content_resume("__tests__/template.marko_1*content", $Row_content__template, $Row_content__walks, $Row_content__setup, $Row_content__$params);
const $Row = /*@__PURE__*/ _const("Row");
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Row_content__setup($scope["#childScope/0"]);
	$Row_content__n($scope["#childScope/0"], 1);
	$Row($scope, { content: $Row_content($scope) });
}
const $if = /*@__PURE__*/ _if("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_label__closure = /*@__PURE__*/ _closure($Row_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
