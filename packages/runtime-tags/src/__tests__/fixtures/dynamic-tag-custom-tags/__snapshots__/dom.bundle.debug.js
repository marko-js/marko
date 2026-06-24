// tags/child1.marko
const $template$2 = "<div>Child 1 has <!></div>";
const $walks$2 = "Db%l";
const $setup$2 = () => {};
const $value$1 = ($scope, value) => _text($scope["#text/0"], value);
const $input$1 = ($scope, input) => $value$1($scope, input.value);
var child1_default = /*@__PURE__*/ _template("__tests__/tags/child1.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/child2.marko
const $template$1 = "<div>Child 2 has <!></div>";
const $walks$1 = "Db%l";
const $setup$1 = () => {};
const $value = ($scope, value) => _text($scope["#text/0"], value);
const $input = ($scope, input) => $value($scope, input.value);
var child2_default = /*@__PURE__*/ _template("__tests__/tags/child2.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<!><!><button></button>";
const $walks = "b%b b";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $tagName__OR__val = /*@__PURE__*/ _or(4, ($scope) => $dynamicTag($scope, $scope.tagName, () => ({ value: $scope.val })));
const $tagName__script = _script("__tests__/template.marko_0_tagName", ($scope) => _on($scope["#button/1"], "click", function() {
	$tagName($scope, $scope.tagName === child1_default ? child2_default : child1_default);
}));
const $tagName = /*@__PURE__*/ _let("tagName/2", ($scope) => {
	$tagName__OR__val($scope);
	$tagName__script($scope);
});
const $val = /*@__PURE__*/ _let("val/3", $tagName__OR__val);
function $setup($scope) {
	$tagName($scope, child1_default);
	$val($scope, 3);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
