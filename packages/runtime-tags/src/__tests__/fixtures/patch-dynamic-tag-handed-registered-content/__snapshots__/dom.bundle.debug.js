// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_renderer__OR__input_label = /*@__PURE__*/ _or_patch("__tests__/tags/child.marko_0_input_renderer#3_input_label#4/setup", 5, ($scope) => $dynamicTag$1($scope, $scope.input_renderer, ($_) => ({ label: $scope.input_label })));
const $input_renderer = /*@__PURE__*/ _const("input_renderer", $input_renderer__OR__input_label);
const $input_label$1 = /*@__PURE__*/ _const("input_label", $input_renderer__OR__input_label);
const $input$1 = ($scope, input) => {
	$input_renderer($scope, input.renderer);
	$input_label$1($scope, input.label);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>toggle</button><!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b%b/${_w0}&b`)("b%c");
const $B_content__$params = ($scope, $params3) => _text($scope["#text/0"], $params3[0].label);
const $B_content = _content_resume("__tests__/template.marko_3*content", "<b> </b>", "D ", 0, $B_content__$params);
const $if_content__label = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_2_label#1:3/setup", "#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.label));
const $if_content__setup = $if_content__label;
const $A_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content__setup);
const $A_content__label = /*@__PURE__*/ _const("label", ($scope) => {
	$A_content__if($scope, $scope.label === "two" ? 0 : 1);
	$if_content__label($scope);
});
const $A_content__$params = ($scope, $params2) => $A_content__label($scope, $params2[0].label);
const $A_content = _content_resume("__tests__/template.marko_1*content", "<!><!><!>", "b%", 0, $A_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $A__OR__B__OR__open = /*@__PURE__*/ _or(11, ($scope) => $dynamicTag($scope, $scope.open ? $scope.A : $scope.B, ($_) => ({ label: "local" })), 2);
const $input_a__OR__A__OR__B = /*@__PURE__*/ _or(9, ($scope) => $input_renderer($scope["#childScope/2"], $scope.input_a ? $scope.A : $scope.B), 2);
const $A = /*@__PURE__*/ _const("A", ($scope) => {
	$A__OR__B__OR__open($scope);
	$input_a__OR__A__OR__B($scope);
});
const $B = /*@__PURE__*/ _const("B", ($scope) => {
	$A__OR__B__OR__open($scope);
	$input_a__OR__A__OR__B($scope);
});
const $open = _let("open/10", $A__OR__B__OR__open);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$A($scope, { content: $A_content($scope) });
	$B($scope, { content: $B_content($scope) });
	$open($scope, false);
	$setup__script($scope);
}
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__OR__A__OR__B);
const $input_label = ($scope, input_label) => $input_label$1($scope["#childScope/2"], input_label);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
