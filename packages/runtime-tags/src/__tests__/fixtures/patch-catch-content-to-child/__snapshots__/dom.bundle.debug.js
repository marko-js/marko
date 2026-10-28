// tags/box.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var box_default = /*@__PURE__*/ _template("__tests__/tags/box.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
function boom(error) {
	throw error;
}
const $try_content__input_error = /*@__PURE__*/ _init_resume("__tests__/template.marko_3_input_error#0:6/init", /*@__PURE__*/ _closure_get("input_error/9", ($scope) => _text($scope["#text/0"], $scope._.input_error ? boom($scope._.input_error) : "ok"), 0, "__tests__/template.marko_3_input_error#0:6/subscribe"));
const $try_content__setup = $try_content__input_error;
const $box_content__input_label = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_input_label#0:5/init", /*@__PURE__*/ _fill_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/8", ($scope) => _text($scope["#text/2"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:5/subscribe"), 0));
const $box_content__setup = ($scope) => {
	$box_content__input_label($scope);
	$box_content__count($scope);
	$box_content__err_message($scope);
};
const $box_content__count = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_count#0:7/init", /*@__PURE__*/ _closure_get("count/10", ($scope) => _text($scope["#text/1"], $scope._._.count), ($scope) => $scope._._));
const $box_content__err_message = /*@__PURE__*/ _closure_get("err_message/11", ($scope) => _text($scope["#text/0"], $scope._.err_message));
const $box_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<span><!> <!> <!></span>", "D%c%c%", $box_content__setup);
const $catch_content__setup = ($scope) => $input_content_direct($scope["#childScope/0"], $box_content($scope));
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content__err_message__closure = /*@__PURE__*/ _closure($box_content__err_message);
const $catch_content__err_message = /*@__PURE__*/ _const("err_message", $catch_content__err_message__closure);
const $catch_content = _content("__tests__/template.marko_1*content", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $catch_content__setup, $catch_content__$params);
const $count__closure = /*@__PURE__*/ _closure($box_content__count);
const $count = /*@__PURE__*/ _let("count/7", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$count__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/2", "<p> </p>", "D ", $try_content__setup, 0, $catch_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_error($scope, input.error);
};
const $input_label__closure = /*@__PURE__*/ _closure($box_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
const $input_error__closure = /*@__PURE__*/ _closure($try_content__input_error);
const $input_error = /*@__PURE__*/ _const("input_error", $input_error__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
