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
const $Outer_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($Row_content__walks);
const $Outer_content__template = $Row_content__template;
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($Outer_content__template, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&/${_w1}&`)($Outer_content__walks, $walks$1);
const $Row_content__input_label = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_label#0:5/subscribe", "input_label/7", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_0_input_label#5/subscribers", 0);
const $Row_content__setup = $Row_content__input_label;
const $Row_content__n = ($scope, n) => _text($scope["#text/1"], n);
const $Row_content__$params = ($scope, $params2) => $Row_content__$temp($scope, $params2[0]);
const $Row_content__$temp = ($scope, $temp) => $Row_content__n($scope, $temp.n);
const $Row_content = _content("__tests__/template.marko_2*content", $Row_content__template, $Row_content__walks, $Row_content__setup, $Row_content__$params);
const $Outer_content__Row = /*@__PURE__*/ _const("Row", ($scope) => _return($scope, $scope.Row));
const $Outer_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope;
	$Row_content__setup($scope["#childScope/0"]);
	$Row_content__n($scope["#childScope/0"], 1);
	$Outer_content__Row($scope, { content: $Row_content($scope) });
};
const $Row = ($scope, Row) => $input_content($scope["#childScope/2"], Row);
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Outer_content__setup($scope["#childScope/0"]);
	$setup$1($scope["#childScope/2"]);
	_var($scope, "#childScope/0", $Row);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($Row_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
