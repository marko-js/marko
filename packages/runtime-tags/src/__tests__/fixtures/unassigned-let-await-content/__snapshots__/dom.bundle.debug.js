// tags/wrap.marko
const $template$1 = "<button> </button><!><!>";
const $walks$1 = " D l%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup$1 = $if_content__input_content;
const $if$1 = /*@__PURE__*/ _if("#text/2", "<!><!><!>", "b%", $if_content__setup$1);
const $n = /*@__PURE__*/ _let("n/6", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$if$1($scope, $scope.n < 2 ? 0 : 1);
});
const $setup__script = _script("__tests__/tags/wrap.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup$1($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input$1 = ($scope, input) => $input_content($scope, input.content);
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var wrap_default = /*@__PURE__*/ _template("__tests__/tags/wrap.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $await_content__input_w__OR__r = /*@__PURE__*/ _or(3, ($scope) => _text($scope["#text/0"], $scope.r + $scope._._._.input_w));
const $await_content__input_w = /*@__PURE__*/ _closure_get("input_w/8", $await_content__input_w__OR__r, ($scope) => $scope._._._, "__tests__/template.marko_3_input_w#0:5/subscribe");
const $await_content__setup = $await_content__input_w;
const $await_content__r = /*@__PURE__*/ _const("r", $await_content__input_w__OR__r);
const $await_content__$params = ($scope, $params2) => $await_content__r($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p>", "D ", $await_content__setup);
const $wrap_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $wrap_content__input_v = /*@__PURE__*/ _closure_get("input_v/7", ($scope) => $wrap_content__await_promise($scope, Promise.resolve($scope._._.input_v)), ($scope) => $scope._._, "__tests__/template.marko_2_input_v#0:4/subscribe");
const $wrap_content__setup = ($scope) => {
	$wrap_content__input_v($scope);
	$await_content($scope);
};
const $wrap_content = _content("__tests__/template.marko_2*content", "<!><!><!>", "b%", $wrap_content__setup);
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	$input_content($scope["#childScope/0"], $wrap_content($scope));
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/6", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $input_show = $show;
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_v($scope, input.v);
	$input_w($scope, input.w);
};
const $input_v__closure = /*@__PURE__*/ _closure($wrap_content__input_v);
const $input_v = /*@__PURE__*/ _const("input_v", $input_v__closure);
const $input_w__closure = /*@__PURE__*/ _closure($await_content__input_w);
const $input_w = /*@__PURE__*/ _const("input_w", $input_w__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
