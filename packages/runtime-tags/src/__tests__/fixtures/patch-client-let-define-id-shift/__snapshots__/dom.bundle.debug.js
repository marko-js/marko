// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $T = /*@__PURE__*/ _let("T/4", ($scope) => $dynamicTag($scope, $scope.T));
const $input_fmt = $T;
const $input$1 = ($scope, input) => $input_fmt($scope, input.fmt);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("b%c");
const $Body_content__input_label = /*@__PURE__*/ _closure_get("input_label/7", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:5/subscribe");
const $Body_content__setup = $Body_content__input_label;
const $Body_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<p> </p>", "D ", $Body_content__setup);
const $if = /*@__PURE__*/ _if("#text/0", "<i>prefix</i>");
const $input_more = ($scope, input_more) => $if($scope, input_more ? 0 : 1);
const $Body = ($scope, Body) => $input_fmt($scope["#childScope/1"], Body);
function $setup($scope) {
	$Body($scope, { content: $Body_content($scope) });
}
const $input = ($scope, input) => {
	$input_more($scope, input.more);
	$input_label($scope, input.label);
};
const $input_label__closure = /*@__PURE__*/ _closure($Body_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
