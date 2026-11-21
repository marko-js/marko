// tags/card.marko
const $template$1 = "<div class=card> </div>";
const $walks$1 = "D l";
const $setup$1 = ($_) => {};
const wrapper = "section";
const $input_title = ($scope, input_title) => _text($scope["#text/0"], input_title);
const $input$1 = ($scope, input) => $input_title($scope, input.title);
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", $template$1, "D l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!><!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%b%b%c`)("D l");
const $wrapper_content = _content_resume("__tests__/template.marko_1*content", "body");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1", $wrapper_content);
function $setup($scope) {
	$input_title($scope["#childScope/0"], "default");
	$dynamicTag($scope, wrapper, ($_) => ({ class: "named" }));
}
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $dynamicTag3 = /*@__PURE__*/ _dynamic_tag("#text/3");
const $input_same__OR__input_other = /*@__PURE__*/ _or(8, ($scope) => $dynamicTag3($scope, $scope.input_same ? $scope.input_other ? card_default : card_default : card_default, ($_) => ({ title: "listed once" })));
const $input_same = /*@__PURE__*/ _const("input_same", ($scope) => {
	$dynamicTag2($scope, $scope.input_same ? card_default : card_default, ($_) => ({ title: "same file" }));
	$input_same__OR__input_other($scope);
});
const $input_other = /*@__PURE__*/ _const("input_other", $input_same__OR__input_other);
const $input = ($scope, input) => {
	$input_same($scope, input.same);
	$input_other($scope, input.other);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
