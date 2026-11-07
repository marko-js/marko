// tags/gm/index.marko
const $template$1 = "<p></p><!><!>";
const $walks$1 = " b%c";
const $if_content__z__OR__$global_mark = /*@__PURE__*/ _or_patch("__tests__/tags/gm/index.marko_1_z#0:6_$global_mark#0:10/setup", 1, ($scope) => _attr($scope["#i/0"], "data-z", $scope._.z + _global_read($scope.$global, "mark")));
const $if_content__z = /*@__PURE__*/ _if_closure_patch("__tests__/tags/gm/index.marko_1_z#0:6/setup", "#text/1", 0, $if_content__z__OR__$global_mark);
const $if_content__setup$1 = ($scope) => {
	$if_content__z._($scope);
	$if_content__$global_mark._($scope);
};
const $if_content__$global_mark = /*@__PURE__*/ _if_closure_patch("__tests__/tags/gm/index.marko_1_$global_mark#0:10/setup", "#text/1", 0, $if_content__z__OR__$global_mark);
const $z = /*@__PURE__*/ _const("z", $if_content__z);
const $input_v__OR__$global_flag = /*@__PURE__*/ _or_patch("__tests__/tags/gm/index.marko_0_input_v#4_$global_flag#6/setup", 7, ($scope) => $z($scope, $scope.input_v + _global_read($scope.$global, "flag")));
const $if$1 = /*@__PURE__*/ _if("#text/1", "<i></i>", " ", $if_content__setup$1);
const $input_v = /*@__PURE__*/ _const("input_v", ($scope) => {
	$if$1($scope, $scope.input_v ? 0 : 1);
	$input_v__OR__$global_flag($scope);
});
const $global_flag = _fill_global_resume("__tests__/tags/gm/index.marko_0_$global_flag#6/subscribe", $input_v__OR__$global_flag, "flag");
const $global_mark = _fill_global_resume("__tests__/tags/gm/index.marko_0_$global_mark#10/subscribe", $if_content__$global_mark, "mark");
function $setup$1($scope) {
	$global_flag($scope);
	$global_mark($scope);
}
const $input_w$1 = ($scope, input_w) => _attr($scope["#p/0"], "data-w", input_w);
const $input$1 = ($scope, input) => {
	$input_v($scope, input.v);
	$input_w$1($scope, input.w);
};
var gm_default = /*@__PURE__*/ _template("__tests__/tags/gm/index.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__input_w = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_w#0:4/setup", "#text/0", 0, ($scope) => $input_w$1($scope["#childScope/0"], $scope._.input_w));
const $if_content__setup = ($scope) => {
	$if_content__input_w._($scope);
	$setup$1($scope["#childScope/0"]);
	$input_v($scope["#childScope/0"], "a");
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $open = _let("open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_w($scope, input.w);
const $input_w = /*@__PURE__*/ _const("input_w", $if_content__input_w);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
