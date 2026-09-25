// tags/boundary.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $placeholder_content = _content("__tests__/tags/boundary.marko_2*content", "loading...");
const $try_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $try_content__input_content = /*@__PURE__*/ _closure_get("input_content", ($scope) => $try_content__dynamicTag($scope, $scope._.input_content), 0, "__tests__/tags/boundary.marko_1_input_content#3/subscribe");
const $try_content__setup = $try_content__input_content;
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
function $setup$1($scope) {
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
const $input = ($scope, input) => $input_content($scope, input.content);
const $input_content__closure = /*@__PURE__*/ _closure($try_content__input_content);
const $input_content = /*@__PURE__*/ _const("input_content", $input_content__closure);
var boundary_default = /*@__PURE__*/ _template("__tests__/tags/boundary.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button>inc</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $await_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._._.count), ($scope) => $scope._._, "__tests__/template.marko_2_count#2/subscribe");
const $await_content__setup = $await_content__count;
const $boundary_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => _text($scope["#text/0"], $scope._.count), 0, "__tests__/template.marko_1_count#2/subscribe");
const $await_content = /*@__PURE__*/ _await_content("#text/1", "<b> </b>", "D ", $await_content__setup);
const $boundary_content__await_promise = /*@__PURE__*/ _await_promise("#text/1");
const $boundary_content__setup = ($scope) => {
	$boundary_content__count($scope);
	$await_content($scope);
	$boundary_content__await_promise($scope, resolveAfter(0, 1));
};
const $boundary_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<span> </span><!><!>", "D l%", $boundary_content__setup);
const $count__closure = /*@__PURE__*/ _closure($boundary_content__count, $await_content__count);
const $count = /*@__PURE__*/ _let("count/2", $count__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
	$input_content($scope["#childScope/1"], $boundary_content($scope));
	$count($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
