// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_label#0:4/init", /*@__PURE__*/ _fill_signal("input_label __tests__/template.marko_fill0", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_label$1($scope["#childScope/0"], $scope._.input_label))));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$if_content__input_error._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__input_error = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_error#0:5/init", /*@__PURE__*/ _fill_signal("input_error __tests__/template.marko_fill1", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_error$1($scope["#childScope/0"], $scope._.input_error))));
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_label($scope, input.label);
	$input_error($scope, input.error);
};
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $if_content__input_label);
const $input_error = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_error", $if_content__input_error);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/box.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var box_default = /*@__PURE__*/ _template("__tests__/tags/box.marko", $template$1, "D%l", 0, $input$1);

// tags/child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom(error) {
	throw error;
}
const $try_content__input_error = /*@__PURE__*/ _init_resume("__tests__/tags/child.marko_3_input_error#0:4/init", /*@__PURE__*/ _closure_get("input_error/6", ($scope) => _text($scope["#text/0"], $scope._.input_error ? boom($scope._.input_error) : "ok"), 0, "__tests__/tags/child.marko_3_input_error#0:4/subscribe"));
const $try_content__setup = $try_content__input_error;
const $box_content__input_label = /*@__PURE__*/ _init_resume("__tests__/tags/child.marko_2_input_label#0:3/init", /*@__PURE__*/ _fill_closure("__tests__/tags/child.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/5", ($scope) => _text($scope["#text/1"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/tags/child.marko_2_input_label#0:3/subscribe"), 0));
const $box_content__setup = ($scope) => {
	$box_content__input_label($scope);
	$box_content__err_message($scope);
};
const $box_content__err_message = /*@__PURE__*/ _closure_get("err_message/7", ($scope) => _text($scope["#text/0"], $scope._.err_message));
const $box_content = /*@__PURE__*/ _content("__tests__/tags/child.marko_2*content", "<span><!> <!></span>", "D%c%", $box_content__setup);
const $catch_content__setup = ($scope) => $input_content_direct($scope["#childScope/0"], $box_content($scope));
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content__err_message__closure = /*@__PURE__*/ _closure($box_content__err_message);
const $catch_content__err_message = /*@__PURE__*/ _const("err_message", $catch_content__err_message__closure);
const $catch_content = _content("__tests__/tags/child.marko_1*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $catch_content__setup, $catch_content__$params);
const $try = /*@__PURE__*/ _try("#text/0", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_error($scope, input.error);
};
const $input_label__closure = /*@__PURE__*/ _closure($box_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/tags/child.marko_fill0", "input_label", $input_label__closure);
const $input_error__closure = /*@__PURE__*/ _closure($try_content__input_error);
const $input_error = /*@__PURE__*/ _const("input_error", $input_error__closure);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, "b%c", $setup, $input);
