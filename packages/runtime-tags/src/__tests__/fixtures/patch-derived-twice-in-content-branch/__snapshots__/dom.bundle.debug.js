// tags/wrapper.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrapper_default = /*@__PURE__*/ _template("__tests__/tags/wrapper.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)("D%l");
const $if_content__shout = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.shout));
const $if_content__setup = $if_content__shout;
const $wrapper_content__if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $wrapper_content__count__OR__shout = /*@__PURE__*/ _or(3, ($scope) => $wrapper_content__if($scope, $scope._.count > 0 && $scope.shout ? 0 : 1));
const $wrapper_content__shout = /*@__PURE__*/ _const("shout", ($scope) => {
	$wrapper_content__count__OR__shout($scope);
	$if_content__shout($scope);
});
const $wrapper_content__label = ($scope, label) => $wrapper_content__shout($scope, label + "!");
const $wrapper_content__input_label = _closure_resume("__tests__/template.marko_1_input_label#0:4/subscribe", /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/6", ($scope) => $wrapper_content__label($scope, $scope._.input_label)), 0));
const $wrapper_content__setup = ($scope) => {
	$wrapper_content__input_label($scope);
	$wrapper_content__count($scope);
};
const $wrapper_content__count = _resumed["__tests__/template.marko_1_count#0:5/init"] = /*@__PURE__*/ _closure_get("count/7", $wrapper_content__count__OR__shout, 0, "__tests__/template.marko_1_count#0:5/subscribe");
const $wrapper_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<!><!><!>", "b%", $wrapper_content__setup);
const $count__closure = /*@__PURE__*/ _closure($wrapper_content__count);
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
