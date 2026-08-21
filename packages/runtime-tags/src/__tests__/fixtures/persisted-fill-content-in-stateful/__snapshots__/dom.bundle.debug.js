// tags/wrap/index.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap/index.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = "<button>inc</button><!><!>";
const $walks = " b%c";
const $wrap_content__input_msg__OR__count = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._._.input_msg + ":" + $scope._._.count));
const $wrap_content__input_msg = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_msg", /*@__PURE__*/ _closure_get("input_msg", $wrap_content__input_msg__OR__count, ($scope) => $scope._._), 0);
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_msg($scope);
	$wrap_content__count($scope);
};
const $wrap_content__count = /*@__PURE__*/ _closure_get("count", $wrap_content__input_msg__OR__count, ($scope) => $scope._._);
const $wrap_content = /*@__PURE__*/ _content$1("__tests__/template.marko_2*content", "<span> </span>", "D ", $wrap_content__setup);
const $if_content__setup = ($scope) => $input_content_direct($scope["#childScope/0"], $wrap_content($scope));
const $if = /*@__PURE__*/ _if("#text/1", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $count__closure = /*@__PURE__*/ _closure($wrap_content__count);
const $count = /*@__PURE__*/ _let("count/5", ($scope) => {
	$if($scope, $scope.count < 2 ? 0 : 1);
	$count__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_msg($scope, input.msg);
const $input_msg__closure = /*@__PURE__*/ _closure($wrap_content__input_msg);
const $input_msg = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_msg", $input_msg__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
