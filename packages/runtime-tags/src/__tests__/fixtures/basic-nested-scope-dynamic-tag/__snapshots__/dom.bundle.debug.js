// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_content = $dynamicTag$1;
const $input$1 = ($scope, input) => $input_content($scope, input.content);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $inputtagChild_content__count = /*@__PURE__*/ _closure_get("count/5", ($scope) => _text($scope["#text/1"], $scope._.count), 0, "__tests__/template.marko_1_count#0:4/subscribe");
const $inputtagChild_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope._, +$scope._.count + 1);
}));
const $inputtagChild_content__setup = ($scope) => {
	$inputtagChild_content__count($scope);
	$inputtagChild_content__setup__script($scope);
};
const $inputtagChild_content = _content_resume("__tests__/template.marko_1*content", "<button> </button>", " D ", $inputtagChild_content__setup);
const $count__closure = /*@__PURE__*/ _closure($inputtagChild_content__count);
const $count = /*@__PURE__*/ _let("count/4", $count__closure);
function $setup($scope) {
	$count($scope, 0);
}
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputtagChild_content);
const $input_tag = ($scope, input_tag) => $dynamicTag($scope, input_tag || child_default);
const $input = ($scope, input) => $input_tag($scope, input.tag);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
