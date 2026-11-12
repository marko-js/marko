// tags/wrap.marko
const $template$1 = "<div><!></div>";
const $walks$1 = "D%l";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, "D%l", 0, $input);

// template.marko
const $D_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l");
const $D_content__template = $template$1;
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button> </button>`)($D_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& D l`)($D_content__walks);
const $global_mark_key = /*@__PURE__*/ _global_key("$global_mark/6", "mark");
const $wrap_content__$global_mark = /*@__PURE__*/ _global_closure("__tests__/template.marko_2_$global_mark#0:12/subscribe", $global_mark_key);
const $wrap_content__$global_mark__OR__z = /*@__PURE__*/ _global_or(1, ($scope) => _attr($scope["#p/0"], "data-z", $scope._.z + _global_read($scope.$global, "mark")), $wrap_content__$global_mark);
const $wrap_content__z = /*@__PURE__*/ _closure_get("z/7", $wrap_content__$global_mark__OR__z, 0, "__tests__/template.marko_2_z#1:5/subscribe");
const $wrap_content__setup = $wrap_content__z;
const $wrap_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<p></p>", " ", $wrap_content__setup);
const $D_content__z__closure = /*@__PURE__*/ _closure($wrap_content__z);
const $D_content__z = /*@__PURE__*/ _const("z", $D_content__z__closure);
const $global_flag_key = /*@__PURE__*/ _global_key("$global_flag/5", "flag");
const $D_content__$global_flag = /*@__PURE__*/ _global_closure("__tests__/template.marko_1_$global_flag#0:9/subscribe", $global_flag_key);
const $D_content__$global_flag__OR__v = /*@__PURE__*/ _global_or(4, ($scope) => $D_content__z($scope, $scope.v + _global_read($scope.$global, "flag")), $D_content__$global_flag);
const $D_content__v = /*@__PURE__*/ _const("v", $D_content__$global_flag__OR__v);
const $D_content__setup = ($scope) => $input_content_direct($scope["#childScope/0"], $wrap_content($scope));
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__v($scope, $temp.v);
const $n = _let("n/3", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$D_content__setup($scope["#childScope/0"]);
	$D_content__v($scope["#childScope/0"], "a");
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
