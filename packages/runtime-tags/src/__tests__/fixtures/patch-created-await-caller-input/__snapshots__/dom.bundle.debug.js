// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_first = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_first#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_first", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_first$1($scope["#childScope/0"], $scope._.input_first))));
const $if_content__setup = ($scope) => {
	$if_content__input_first._($scope);
	$if_content__input_second._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if_content__input_second = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_second#0:5/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill1", "input_second", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_second$1($scope["#childScope/0"], $scope._.input_second))));
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_first($scope, input.first);
	$input_second($scope, input.second);
};
const $input_first = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_first", $if_content__input_first);
const $input_second = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_second", $if_content__input_second);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/frame.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var frame_default = /*@__PURE__*/ _template("__tests__/tags/frame.marko", $template$1, "D%l", 0, $input$1);

// under-wrapper.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>toggle</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D%l");
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $frame_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $frame_content__input_second__OR__input_first__OR__showSecond = /*@__PURE__*/ _fill_join_subscribers("__tests__/under-wrapper.marko_fill1", "input_first", /*@__PURE__*/ _fill_join_subscribers("__tests__/under-wrapper.marko_fill0", "input_second", /*@__PURE__*/ _or_resume("__tests__/under-wrapper.marko_1_input_second#0:4_input_first#0:5_showSecond#0:6/init", 1, ($scope) => $frame_content__await_promise($scope, $scope._.showSecond ? $scope._.input_second : $scope._.input_first), 2), "input_second/7", 0), "input_first/8", 0);
const $frame_content__input_second = _closure_resume("__tests__/under-wrapper.marko_1_input_second#0:4/subscribe", /*@__PURE__*/ _closure_get("input_second/7", $frame_content__input_second__OR__input_first__OR__showSecond));
const $frame_content__setup = ($scope) => {
	$frame_content__input_second($scope);
	$frame_content__input_first($scope);
	$frame_content__showSecond($scope);
	$await_content($scope);
};
const $frame_content__input_first = _closure_resume("__tests__/under-wrapper.marko_1_input_first#0:5/subscribe", /*@__PURE__*/ _closure_get("input_first/8", $frame_content__input_second__OR__input_first__OR__showSecond));
const $frame_content__showSecond = /*@__PURE__*/ _init_resume("__tests__/under-wrapper.marko_1_showSecond#0:6/init", /*@__PURE__*/ _closure_get("showSecond/9", $frame_content__input_second__OR__input_first__OR__showSecond));
const $frame_content = /*@__PURE__*/ _content("__tests__/under-wrapper.marko_1*content", "<!><!><!>", "b%", $frame_content__setup);
const $showSecond__closure = /*@__PURE__*/ _closure($frame_content__showSecond);
const $showSecond = /*@__PURE__*/ _fill_let("__tests__/under-wrapper.marko_fill2", "showSecond/6", $showSecond__closure);
const $setup__script = _script("__tests__/under-wrapper.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$showSecond($scope, !$scope.showSecond);
}));
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $frame_content($scope));
	$setup__script($scope);
	$showSecond($scope, false);
}
const $input = ($scope, input) => {
	$input_second($scope, input.second);
	$input_first($scope, input.first);
};
const $input_second__closure = /*@__PURE__*/ _closure($frame_content__input_second);
const $input_second = /*@__PURE__*/ _fill_const("__tests__/under-wrapper.marko_fill0", "input_second", $input_second__closure);
const $input_first__closure = /*@__PURE__*/ _closure($frame_content__input_first);
const $input_first = /*@__PURE__*/ _fill_const("__tests__/under-wrapper.marko_fill1", "input_first", $input_first__closure);
var under_wrapper_default = /*@__PURE__*/ _template("__tests__/under-wrapper.marko", $template, $walks, $setup, $input);
