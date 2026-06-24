// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag$1;
const $input = ($scope, input) => $input_content($scope, input.content);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $falseChild_content__count__script = _script("__tests__/template.marko_1_count", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, $scope._.count + 1);
}));
const $falseChild_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => {
	_text($scope["#text/1"], $scope._.count);
	$falseChild_content__count__script($scope);
});
const $falseChild_content__setup = $falseChild_content__count;
const $falseChild_content = _content_resume("__tests__/template.marko_1_content", "<button> </button>", " D l", $falseChild_content__setup);
const $count__closure = /*@__PURE__*/ _closure($falseChild_content__count);
const $count = /*@__PURE__*/ _let("count/1", $count__closure);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $falseChild_content);
function $setup($scope) {
	$count($scope, 0);
	$dynamicTag($scope, false || child_default);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
