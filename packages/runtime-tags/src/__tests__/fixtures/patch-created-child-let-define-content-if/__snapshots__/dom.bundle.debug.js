// tags/outer.marko
const $template$1 = "<button>clear</button><section><!></section>";
const $walks$1 = " bD%l";
const $value = /*@__PURE__*/ _let("value/5", ($scope) => $value_content($scope, $scope.value?.content));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $value_content = /*@__PURE__*/ _const("value_content", ($scope) => $dynamicTag($scope, $scope.value_content));
const $input_data = $value;
const $setup__script = _script("__tests__/tags/outer.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$value($scope, {});
}));
const $setup$1 = $setup__script;
const $input$1 = ($scope, input) => $input_data($scope, input.data);
var outer_default = /*@__PURE__*/ _template("__tests__/tags/outer.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content2__Body_content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_data($scope["#childScope/0"], { content: $scope._.Body_content }));
const $if_content2__setup = ($scope) => {
	$if_content2__Body_content._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:3/init", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/7", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:3/subscribe"), 1));
const $if_content__setup = $if_content__input_label;
const $Body_content__if = /*@__PURE__*/ _if("#text/0", "<em> </em>", "D ", $if_content__setup);
const $Body_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:3/init", _closure_resume("__tests__/template.marko_1_input_label#0:3/subscribe", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/7", ($scope) => $Body_content__if($scope, $scope._.input_label !== "x" ? 0 : 1)), 0)));
const $Body_content__setup = $Body_content__input_label;
const $Body_content = _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $Body_content__setup);
const $Body = ($scope, Body) => $Body_content2($scope, Body?.content);
const $Body_content2 = /*@__PURE__*/ _const("Body_content");
function $setup($scope) {
	$Body($scope, { content: $Body_content($scope) });
}
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content2__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_label__closure = /*@__PURE__*/ _closure($Body_content__input_label, $if_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
