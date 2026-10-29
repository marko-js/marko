// tags/outer.marko
const $template$1 = "<button>clear</button><!><!>";
const $walks$1 = " b%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__value_content = /*@__PURE__*/ _init_resume("__tests__/tags/outer.marko_1_value_content#0:7/init", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.value_content)));
const $if_content__setup = $if_content__value_content;
const $value = /*@__PURE__*/ _fill_let("__tests__/tags/outer.marko_fill0", "value/6", ($scope) => $value_content($scope, $scope.value?.content));
const $value_content = /*@__PURE__*/ _const("value_content", $if_content__value_content);
const $input_data = $value;
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, { content: undefined });
}));
const $setup$1 = $setup__script;
const $if = /*@__PURE__*/ _if("#text/1", "<section><!></section>", "D%", $if_content__setup);
const $input_more$1 = ($scope, input_more) => $if($scope, input_more ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_data($scope, input.data);
	$input_more$1($scope, input.more);
};
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $Body_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/7", ($scope) => _text($scope["#text/0"], $scope._.input_label), 0, "__tests__/template.marko_1_input_label#0:3/subscribe"), 0);
const $Body_content__setup = $Body_content__input_label;
const $Body_content = _content("__tests__/template.marko_1*content", "<em> </em>", "D ", $Body_content__setup);
const $Body = ($scope, Body) => $Body_content2($scope, Body?.content);
const $Body_content2 = ($scope, Body_content) => $input_data($scope["#childScope/0"], { content: Body_content });
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$Body($scope, { content: $Body_content($scope) });
}
const $input_more = ($scope, input_more) => $input_more$1($scope["#childScope/0"], input_more);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_more($scope, input.more);
};
const $input_label__closure = /*@__PURE__*/ _closure($Body_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
