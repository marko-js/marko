// tags/frame.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var frame_default = /*@__PURE__*/ _template("__tests__/tags/frame.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}<button> </button>`)($template$1, $template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}& D l`)("D%l", "D%l", "D%l");
const $frame_content3__input_title__OR__count = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.input_title + ": " + $scope._.count));
const $frame_content3__input_title__script = _script("__tests__/template.marko_3_input_title#0:8", ($scope) => document.body.dataset.title = $scope._.input_title);
const $frame_content3__input_title = /*@__PURE__*/ _closure_get("input_title/11", ($scope) => {
	$frame_content3__input_title__OR__count($scope);
	$frame_content3__input_title__script($scope);
}, 0, "__tests__/template.marko_3_input_title#0:8/subscribe");
const $frame_content3__setup = ($scope) => {
	$frame_content3__input_title($scope);
	$frame_content3__count($scope);
};
const $frame_content3__count = /*@__PURE__*/ _closure_get("count/12", $frame_content3__input_title__OR__count, 0, "__tests__/template.marko_3_count#0:9/subscribe");
const $frame_content3 = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "<p> </p>", "D ", $frame_content3__setup);
const $frame_content2__input_label__OR__count = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.input_label + ": " + $scope._.count));
const $frame_content2__input_label__script = _script("__tests__/template.marko_2_input_label#0:7", ($scope) => document.body.dataset.second = $scope._.input_label);
const $frame_content2__input_label = /*@__PURE__*/ _closure_get("input_label/10", ($scope) => {
	$frame_content2__input_label__OR__count($scope);
	$frame_content2__input_label__script($scope);
}, 0, "__tests__/template.marko_2_input_label#0:7/subscribe");
const $frame_content2__setup = ($scope) => {
	$frame_content2__input_label($scope);
	$frame_content2__count($scope);
};
const $frame_content2__count = /*@__PURE__*/ _closure_get("count/12", $frame_content2__input_label__OR__count, 0, "__tests__/template.marko_2_count#0:9/subscribe");
const $frame_content2 = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<p> </p>", "D ", $frame_content2__setup);
const $frame_content__input_label__OR__count = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.input_label + ": " + $scope._.count));
const $frame_content__input_label__script = _script("__tests__/template.marko_1_input_label#0:7", ($scope) => document.body.dataset.first = $scope._.input_label);
const $frame_content__input_label = /*@__PURE__*/ _closure_get("input_label/10", ($scope) => {
	$frame_content__input_label__OR__count($scope);
	$frame_content__input_label__script($scope);
}, 0, "__tests__/template.marko_1_input_label#0:7/subscribe");
const $frame_content__setup = ($scope) => {
	$frame_content__input_label($scope);
	$frame_content__count($scope);
};
const $frame_content__count = /*@__PURE__*/ _closure_get("count/12", $frame_content__input_label__OR__count, 0, "__tests__/template.marko_1_count#0:9/subscribe");
const $frame_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<p> </p>", "D ", $frame_content__setup);
const $count__closure = /*@__PURE__*/ _closure($frame_content__count, $frame_content2__count, $frame_content3__count);
const $count = /*@__PURE__*/ _let("count/9", ($scope) => {
	_text($scope["#text/4"], $scope.count);
	$count__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $frame_content($scope));
	$input_content_direct($scope["#childScope/1"], $frame_content2($scope));
	$input_content_direct($scope["#childScope/2"], $frame_content3($scope));
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_title($scope, input.title);
};
const $input_label__closure = /*@__PURE__*/ _closure($frame_content__input_label, $frame_content2__input_label);
const $input_label = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _const("input_label", $input_label__closure));
const $input_title__closure = /*@__PURE__*/ _closure($frame_content3__input_title);
const $input_title = _fill_resume("__tests__/template.marko_fill1", /*@__PURE__*/ _const("input_title", $input_title__closure));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
