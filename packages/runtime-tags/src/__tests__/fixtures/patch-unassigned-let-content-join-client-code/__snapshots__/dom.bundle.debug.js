// tags/wrap.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "D%l", 0, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button> </button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& D l`)("D%l");
const $wrap_content__input_name__OR__uid = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.uid + "-" + $scope._.input_name));
const $wrap_content__input_name = /*@__PURE__*/ _closure_get("input_name/9", $wrap_content__input_name__OR__uid, 0, "__tests__/template.marko_1_input_name#0:6/subscribe");
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_name($scope);
	$wrap_content__uid($scope);
};
const $wrap_content__uid = /*@__PURE__*/ _closure_get("uid/10", $wrap_content__input_name__OR__uid);
const $wrap_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<p> </p>", "D ", $wrap_content__setup);
const $uid__closure = /*@__PURE__*/ _closure($wrap_content__uid);
const $uid = /*@__PURE__*/ _let("uid/7", $uid__closure);
const $input_id = $uid;
const $n = /*@__PURE__*/ _let("n/8", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $wrap_content($scope));
	$n($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_id($scope, input.id);
	$input_name($scope, input.name);
};
const $input_name__closure = /*@__PURE__*/ _closure($wrap_content__input_name);
const $input_name = _fill_resume("__tests__/template.marko_fill0", /*@__PURE__*/ _const("input_name", $input_name__closure));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
