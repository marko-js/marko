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
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}& l`)("D%l");
const $frame_content__input_label__OR__count = /*@__PURE__*/ _fill_join_subscribers("__tests__/template.marko0", "input_label", /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.input_label + ":" + $scope._.count)), () => $frame_content__input_label, 0);
const $frame_content__input_label = /*@__PURE__*/ _closure_get("input_label", $frame_content__input_label__OR__count);
const $frame_content__setup = ($scope) => {
	$frame_content__input_label($scope);
	$frame_content__count($scope);
};
const $frame_content__count = /*@__PURE__*/ _closure_get("count", $frame_content__input_label__OR__count);
const $frame_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<p> </p>", "D ", $frame_content__setup);
const $count__closure = /*@__PURE__*/ _closure($frame_content__count);
const $count = /*@__PURE__*/ _let("count/5", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $frame_content($scope));
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($frame_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
