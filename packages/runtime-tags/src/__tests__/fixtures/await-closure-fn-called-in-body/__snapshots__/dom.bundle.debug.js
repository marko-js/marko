// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $placeholder_content = _content_resume("__tests__/template.marko_3*content", "loading");
const $await_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/2"], $scope._._.count), ($scope) => $scope._._, "__tests__/template.marko_2_count#1/pending");
const $await_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope._._, +$scope._._.count + 1);
}));
const $await_content__setup = ($scope) => {
	$await_content__count($scope);
	$await_content__view($scope);
	$await_content__setup__script($scope);
};
const $await_content__view = /*@__PURE__*/ _closure_get("view", ($scope) => _text($scope["#text/0"], $scope._._.view()), ($scope) => $scope._._, "__tests__/template.marko_2_view#2/pending");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<p> </p><button> </button>", "D l D ", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter(0, 1));
};
const $view2__closure = /*@__PURE__*/ _closure($await_content__view);
const $view2 = /*@__PURE__*/ _const("view", $view2__closure);
const $count__closure = /*@__PURE__*/ _closure($await_content__count);
const $count = /*@__PURE__*/ _let("count/1", ($scope) => {
	$view2($scope, $view($scope));
	$count__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$count($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
const $view = ($scope) => () => $scope.count;
_resume("__tests__/template.marko_0/view", $view);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
