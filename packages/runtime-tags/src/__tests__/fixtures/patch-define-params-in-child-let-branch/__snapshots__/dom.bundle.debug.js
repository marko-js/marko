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
const $Row_content__walks = "D l%c";
const $Row_content__template = "<em> </em><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($Row_content__template, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($Row_content__walks, $walks$1);
const $if_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_label#0:5/subscribe", "input_label/8", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_0_input_label#5/subscribers", 0);
const $if_content__setup = $if_content__input_label;
const $Row_content__if = /*@__PURE__*/ _if("#text/1", "<b> </b>", "D ", $if_content__setup);
const $Row_content__input_show = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_show#0:4/subscribe", "input_show/7", ($scope) => $Row_content__if($scope, $scope._.input_show ? 0 : 1), 0, "__tests__/template.marko_0_input_show#4/subscribers", 0);
const $Row_content__setup = $Row_content__input_show;
const $Row_content__n = ($scope, n) => _text($scope["#text/0"], n);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => $Row_content__n($scope, $temp.n);
const $Row_content = _content_resume("__tests__/template.marko_1*content", $Row_content__template, $Row_content__walks, $Row_content__setup, $Row_content__$params);
const $Row = ($scope, Row) => $input_content($scope["#childScope/1"], Row);
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Row_content__setup($scope["#childScope/0"]);
	$Row_content__n($scope["#childScope/0"], 1);
	$setup$1($scope["#childScope/1"]);
	$Row($scope, { content: $Row_content($scope) });
}
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
};
const $input_show__closure = /*@__PURE__*/ _closure($Row_content__input_show);
const $input_show = /*@__PURE__*/ _const("input_show", $input_show__closure);
const $input_label__closure = /*@__PURE__*/ _closure($if_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
