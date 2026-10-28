// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _init_resume("__tests__/tags/wrap.marko_1_input_content#0:4/init", /*@__PURE__*/ _fill_signal("input_content __tests__/tags/wrap.marko_fill0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content))));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/0", "<section><!></section>", "D%", $if_content__setup);
const $input_show$1 = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input$1 = ($scope, input) => {
	$input_show$1($scope, input.show);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _fill_const("__tests__/tags/wrap.marko_fill0", "input_content", $if_content__input_content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $await_content__input_id = /*@__PURE__*/ _init_resume("__tests__/template.marko_4_input_id#0:4/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_id", /*@__PURE__*/ _closure_get("input_id/6", ($scope) => _text($scope["#text/0"], $scope._._._.input_id), ($scope) => $scope._._._, "__tests__/template.marko_4_input_id#0:4/subscribe"), 1));
const $await_content__setup = $await_content__input_id;
const $await_content__v = ($scope, v) => _text($scope["#text/1"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p><!>:<!></p>", "D%c%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__input_value = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_input_value#0:5/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill1", "input_value", /*@__PURE__*/ _closure_get("input_value/7", ($scope) => $try_content__await_promise($scope, $scope._._.input_value), ($scope) => $scope._._, "__tests__/template.marko_3_input_value#0:5/subscribe"), 0));
const $try_content__setup = ($scope) => {
	$try_content__input_value($scope);
	$await_content($scope);
};
const $placeholder_content__input_id = /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_id", /*@__PURE__*/ _closure_get("input_id/6", ($scope) => _text($scope["#text/0"], $scope._._.input_id), ($scope) => $scope._._), 0);
const $placeholder_content__setup = $placeholder_content__input_id;
const $placeholder_content = _content("__tests__/template.marko_2*content", "loading <!>", "b%", $placeholder_content__setup);
const $wrap_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
const $wrap_content__setup = ($scope) => $wrap_content__try($scope);
const $wrap_content = _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $wrap_content__setup);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $wrap_content($scope));
}
const $input_show = ($scope, input_show) => $input_show$1($scope["#childScope/0"], input_show);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_id($scope, input.id);
	$input_value($scope, input.value);
};
const $input_id__closure = /*@__PURE__*/ _closure($placeholder_content__input_id, $await_content__input_id);
const $input_id = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_id", $input_id__closure);
const $input_value__closure = /*@__PURE__*/ _closure($try_content__input_value);
const $input_value = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_value", $input_value__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
