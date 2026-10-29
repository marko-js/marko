// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__value_content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.value_content));
const $if_content__setup$1 = $if_content__value_content;
const $value = /*@__PURE__*/ _let("value/5", ($scope) => $value_content($scope, $scope.value?.content));
const $value_content = /*@__PURE__*/ _const("value_content");
const $input_data = $value;
const $if$1 = /*@__PURE__*/ _if("#text/0", "<section><!></section>", "D%", $if_content__setup$1);
const $input_more$1 = ($scope, input_more) => $if$1($scope, input_more ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_data($scope, input.data);
	$input_more$1($scope, input.more);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__input_more = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_more$1($scope["#childScope/0"], $scope._.input_more));
const $if_content__setup = ($scope) => {
	$if_content__input_more._($scope);
	$if_content__Body_content._($scope);
};
const $if_content__Body_content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_data($scope["#childScope/0"], { content: $scope._.Body_content }));
const $Body_content__input_label = /*@__PURE__*/ _closure_get("input_label/8", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:3/subscribe");
const $Body_content__setup = $Body_content__input_label;
const $Body_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $Body_content__setup);
const $Body = ($scope, Body) => $Body_content2($scope, Body?.content);
const $Body_content2 = /*@__PURE__*/ _const("Body_content");
function $setup($scope) {
	$Body($scope, { content: $Body_content($scope) });
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
	$input_more($scope, input.more);
};
const $input_label__closure = /*@__PURE__*/ _closure($Body_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
const $input_more = /*@__PURE__*/ _const("input_more", $if_content__input_more);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
