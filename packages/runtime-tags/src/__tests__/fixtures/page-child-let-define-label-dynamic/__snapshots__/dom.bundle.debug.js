// tags/wrap.marko
const $template$2 = "<div><!></div>";
const $walks$2 = "D%l";
const $setup$2 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag$1;
const $input$2 = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$2, "D%l", 0, $input$2);

// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__value_content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.value_content));
const $if_content__setup = $if_content__value_content;
const $value = /*@__PURE__*/ _let("value/5", ($scope) => $value_content($scope, $scope.value?.content));
const $value_content = /*@__PURE__*/ _const("value_content");
const $input_data = $value;
const $if = /*@__PURE__*/ _if("#text/0", "<section><!></section>", "D%", $if_content__setup);
const $input_more$1 = ($scope, input_more) => $if($scope, input_more ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_data($scope, input.data);
	$input_more$1($scope, input.more);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)("b%c");
const $Body_content__input_label = /*@__PURE__*/ _closure_get("input_label/10", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:4/subscribe");
const $Body_content__setup = $Body_content__input_label;
const $Body_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $Body_content__setup);
const $Body = ($scope, Body) => $Body_content2($scope, Body?.content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $input_wrap__OR__Body_content = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.input_wrap && wrap_default, ($_) => ({ content: $scope.Body_content })));
const $Body_content2 = /*@__PURE__*/ _const("Body_content", ($scope) => {
	$input_data($scope["#childScope/0"], { content: $scope.Body_content });
	$input_wrap__OR__Body_content($scope);
});
function $setup($scope) {
	$Body($scope, { content: $Body_content($scope) });
}
const $input_more = ($scope, input_more) => $input_more$1($scope["#childScope/0"], input_more);
const $input_wrap = /*@__PURE__*/ _const("input_wrap", $input_wrap__OR__Body_content);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_more($scope, input.more);
	$input_wrap($scope, input.wrap);
};
const $input_label__closure = /*@__PURE__*/ _closure($Body_content__input_label);
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
