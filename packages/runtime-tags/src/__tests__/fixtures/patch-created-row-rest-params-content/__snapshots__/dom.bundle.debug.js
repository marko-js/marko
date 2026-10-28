// tags/my-for.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, 0, 1);
const $for_content__input_content__OR__args = /*@__PURE__*/ _fill_signal("input_content __tests__/tags/my-for.marko_fill0/unpatched", /*@__PURE__*/ _or_resume("__tests__/tags/my-for.marko_1_input_content#0:4_args#1/init", 2, ($scope) => $for_content__dynamicTag($scope, $scope._.input_content, ($_) => [...$scope.args])), _for_closure, "#text/0");
const $for_content__input_content = /*@__PURE__*/ _for_closure("#text/0", $for_content__input_content__OR__args);
const $for_content__setup = $for_content__input_content;
const $for_content__args = /*@__PURE__*/ _const("args", $for_content__input_content__OR__args);
const $for = /*@__PURE__*/ _for_to_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup, $for_content__args);
const $input_to = ($scope, input_to) => $for($scope, [
	input_to,
	0,
	1
]);
const $input$1 = ($scope, input) => {
	$input_to($scope, input.to);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _const("input_content", $for_content__input_content);
var my_for_default = /*@__PURE__*/ _template("__tests__/tags/my-for.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $myfor_content__count = /*@__PURE__*/ _init_resume("__tests__/template.marko_2_count#0:4/init", /*@__PURE__*/ _closure_get("count/5", ($scope) => _text($scope["#text/1"], $scope._._.count), ($scope) => $scope._._));
const $myfor_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._._, $scope._._.count + ($scope.i + 1));
}));
const $myfor_content__setup = ($scope) => {
	$myfor_content__count($scope);
	$myfor_content__setup__script($scope);
};
const $myfor_content__$params = ($scope, $params2) => $myfor_content__i($scope, $params2[0]);
const $myfor_content__i = /*@__PURE__*/ _const("i");
const $myfor_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<button class=r> </button>", " D ", $myfor_content__setup, $myfor_content__$params);
const $if_content__setup = ($scope) => {
	$input_content($scope["#childScope/0"], $myfor_content($scope));
	$input_to($scope["#childScope/0"], 2);
};
const $count__closure = /*@__PURE__*/ _closure($myfor_content__count);
const $count = /*@__PURE__*/ _let("count/4", $count__closure);
function $setup($scope) {
	$count($scope, 0);
}
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
