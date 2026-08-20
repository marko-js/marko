// tags/frame.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var frame_default = /*@__PURE__*/ _template("__tests__/tags/frame.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>toggle</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D%l");
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ");
const $frame_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $frame_content__input_second__OR__input_first__OR__showSecond = /*@__PURE__*/ _fill_join_scope("__tests__/template.marko1", "input_first", /*@__PURE__*/ _fill_join_scope("__tests__/template.marko0", "input_second", /*@__PURE__*/ _or(1, ($scope) => $frame_content__await_promise($scope, $scope._.showSecond ? $scope._.input_second : $scope._.input_first), 2), () => $frame_content__input_second, 0), () => $frame_content__input_first, 0);
const $frame_content__input_second = /*@__PURE__*/ _closure_get("input_second", $frame_content__input_second__OR__input_first__OR__showSecond);
const $frame_content__setup = ($scope) => {
	$frame_content__input_second($scope);
	$frame_content__input_first($scope);
	$frame_content__showSecond($scope);
	$await_content($scope);
};
const $frame_content__input_first = /*@__PURE__*/ _closure_get("input_first", $frame_content__input_second__OR__input_first__OR__showSecond);
const $frame_content__showSecond = /*@__PURE__*/ _closure_get("showSecond", $frame_content__input_second__OR__input_first__OR__showSecond);
const $frame_content = /*@__PURE__*/ _content$1("__tests__/template.marko_1*content", "<!><!><!>", "b%", $frame_content__setup);
const $showSecond__closure = /*@__PURE__*/ _closure($frame_content__showSecond);
const $showSecond = /*@__PURE__*/ _let("showSecond/6", $showSecond__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$showSecond($scope, !$scope.showSecond);
}));
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $frame_content($scope));
	$showSecond($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_second($scope, input.second);
	$input_first($scope, input.first);
};
const $input_second__closure = /*@__PURE__*/ _closure($frame_content__input_second);
const $input_second = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_second", $input_second__closure);
const $input_first__closure = /*@__PURE__*/ _closure($frame_content__input_first);
const $input_first = /*@__PURE__*/ _fill_const("__tests__/template.marko1", "input_first", $input_first__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
