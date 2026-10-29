// tags/wrap.marko
const $template$1 = "<button> </button><!><!>";
const $walks$1 = " D l%c";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => $if_content__dynamicTag($scope, $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/2", "<!><!><!>", "b%", $if_content__setup);
const $n = /*@__PURE__*/ _let("n/6", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$if($scope, $scope.n < 2 ? 0 : 1);
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
const $view_content__input_w = /*@__PURE__*/ _closure_get("input_w/5", ($scope) => _text($scope["#text/0"], $scope._.input_w), 0, "__tests__/template.marko_1_input_w#0:3/subscribe");
const $view_content__setup = $view_content__input_w;
const $view_content = _content("__tests__/template.marko_1*content", "<p> </p>", "D ", $view_content__setup);
_content_resume($view_content);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $view_content);
const $view = /*@__PURE__*/ _let("view/4", ($scope) => $dynamicTag($scope, $scope.view));
function $setup($scope) {
	$view($scope, wrap_default);
}
const $input = ($scope, input) => $input_w($scope, input.w);
const $input_w__closure = /*@__PURE__*/ _closure($view_content__input_w);
const $input_w = /*@__PURE__*/ _const("input_w", $input_w__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
