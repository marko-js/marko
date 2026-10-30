// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = ($scope, input_content) => $dynamicTag($scope, input_content, ($_) => ({ a: attrTag({}) }));
const $input = ($scope, input) => $input_content($scope, input.content);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&b`)("b%c");
const $child_content__n = /*@__PURE__*/ _closure_get("n/4", ($scope) => _text($scope["#text/0"], $scope._.n), 0, "__tests__/template.marko_1_n#0:3/subscribe");
const $child_content__setup = $child_content__n;
const $child_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<em>hi <!></em>", "Db%", $child_content__setup);
const $n__closure = /*@__PURE__*/ _closure($child_content__n);
const $n = /*@__PURE__*/ _let("n/3", ($scope) => {
	_text($scope["#text/1"], $scope.n);
	$n__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$input_content($scope["#childScope/2"], $child_content($scope));
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
