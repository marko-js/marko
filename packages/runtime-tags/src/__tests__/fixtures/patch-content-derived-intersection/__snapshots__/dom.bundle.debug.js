// tags/panel.marko
const $template$1 = "<button class=t>t</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _fill_signal("input_content __tests__/tags/panel.marko_fill0", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content)));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("__tests__/tags/panel.marko_fill1", "open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/tags/panel.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/panel.marko_fill0", "input_content", $if_content__input_content);
var panel_default = /*@__PURE__*/ _template("__tests__/tags/panel.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $panel_content__x__OR__k = /*@__PURE__*/ _or(4, ($scope) => _text($scope["#text/1"], $scope.x + ":" + $scope.k));
const $panel_content__x = /*@__PURE__*/ _const("x", $panel_content__x__OR__k);
const $panel_content__input_label = /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/4", ($scope) => $panel_content__x($scope, $scope._.input_label + "!"), 0, "__tests__/template.marko_1_input_label#0:3/subscribe"), 0);
const $panel_content__k = /*@__PURE__*/ _let("k/3", $panel_content__x__OR__k);
const $panel_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$panel_content__k($scope, +$scope.k + 1);
}));
const $panel_content__setup = ($scope) => {
	$panel_content__input_label($scope);
	$panel_content__k($scope, 0);
	$panel_content__setup__script($scope);
};
const $panel_content = _content("__tests__/template.marko_1*content", "<button class=k> </button>", " D ", $panel_content__setup);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $panel_content($scope));
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($panel_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
