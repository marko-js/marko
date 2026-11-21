// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag$1;
const $input = ($scope, input) => $input_content($scope, input.content);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!><!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b%b/${_w0}&b`)("b%c");
const $Wrap_content = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "<em>wrapped</em>");
const $section_content__count = /*@__PURE__*/ _closure_get("count/4", ($scope) => _text($scope["#text/0"], $scope._.count), 0, "__tests__/template.marko_2_count#0:3/subscribe");
const $section_content__setup = $section_content__count;
const $section_content = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<span> </span>", "D ", $section_content__setup);
const $falseChild_content__count = /*@__PURE__*/ _closure_get("count/4", ($scope) => _text($scope["#text/1"], $scope._.count), 0, "__tests__/template.marko_1_count#0:3/subscribe");
const $falseChild_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, +$scope._.count + 1);
}));
const $falseChild_content__setup = ($scope) => {
	$falseChild_content__count($scope);
	$falseChild_content__setup__script($scope);
};
const $falseChild_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<button> </button>", " D ", $falseChild_content__setup);
const $count__closure = /*@__PURE__*/ _closure($falseChild_content__count, $section_content__count);
const $count = /*@__PURE__*/ _let("count/3", $count__closure);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $falseChild_content);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/1", $section_content);
function $setup($scope) {
	$input_content_direct($scope["#childScope/2"], $Wrap_content($scope));
	$count($scope, 0);
	$dynamicTag($scope, false || child_default);
	$dynamicTag2($scope, 0 || "section");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
