// tags/wrapper.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)("D%l");
const $if_content2__label = /*@__PURE__*/ _closure_get("label/8", ($scope) => _text($scope["#text/0"], $scope._._.label), ($scope) => $scope._._);
const $if_content2__setup = $if_content2__label;
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content2__setup);
const $if_content__count__OR__label = /*@__PURE__*/ _shell_or("__tests__/template.marko_2_count#0:5_label#1:1/init", 1, ($scope) => $if_content__if($scope, $scope._._.count > 0 && $scope._.label ? 0 : 1));
const $if_content__count = /*@__PURE__*/ _shell_init("__tests__/template.marko_2_count#0:5/init", /*@__PURE__*/ _closure_get("count/7", $if_content__count__OR__label, ($scope) => $scope._._));
const $if_content__setup = ($scope) => {
	$if_content__count($scope);
	$if_content__label._($scope);
};
const $if_content__label = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__count__OR__label);
const $wrapper_content__label__closure = /*@__PURE__*/ _closure($if_content2__label);
const $wrapper_content__label = /*@__PURE__*/ _const("label", ($scope) => {
	$if_content__label($scope);
	$wrapper_content__label__closure($scope);
});
const $wrapper_content__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $wrapper_content__input_label = _closure_resume("__tests__/template.marko_1_input_label#0:4/subscribe", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/6", ($scope) => {
	$wrapper_content__label($scope, $scope._.input_label);
	$wrapper_content__if($scope, $scope._.input_label ? 0 : 1);
}), 0));
const $wrapper_content__setup = $wrapper_content__input_label;
const $wrapper_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $wrapper_content__setup);
const $count__closure = /*@__PURE__*/ _closure($if_content__count);
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "count/5", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $wrapper_content($scope));
	$setup__script($scope);
	$count($scope, 0);
}
const $input = ($scope, input) => $input_label($scope, input.label);
const $input_label__closure = /*@__PURE__*/ _closure($wrapper_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
