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
const $wrap_content__z__$global_mark = /*@__PURE__*/ _fill_global_join("mark", "__tests__/template.marko_1_z#0:7_$global_mark#0:9", ($scope) => _attr($scope["#p/0"], "data-z", $scope._.z + _global_read($scope.$global, "mark")));
const $wrap_content__z = /*@__PURE__*/ _closure_get("z/8", $wrap_content__z__$global_mark, 0, "__tests__/template.marko_1_z#0:7/subscribe");
const $wrap_content__setup = $wrap_content__z;
const $wrap_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<p></p>", " ", $wrap_content__setup);
const $n = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "n/6", ($scope) => _text($scope["#text/2"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$input_content_direct($scope["#childScope/0"], $wrap_content($scope));
	$setup__script($scope);
	$n($scope, 0);
}
const $z__closure = /*@__PURE__*/ _closure($wrap_content__z);
const $z = /*@__PURE__*/ _const("z", $z__closure);
const $input_v__$global_flag = /*@__PURE__*/ _fill_global_join("flag", "__tests__/template.marko_0_input_v#5_$global_flag#6", ($scope) => $z($scope, $scope.input_v + _global_read($scope.$global, "flag")));
const $input_v = /*@__PURE__*/ _const("input_v", $input_v__$global_flag);
const $input = ($scope, input) => $input_v($scope, input.v);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
