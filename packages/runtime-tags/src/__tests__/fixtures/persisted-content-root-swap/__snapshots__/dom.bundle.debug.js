// template.marko
const $template = "<main><!><button> </button></main>";
const $walks = "D%b D m";
const $input_content_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $count = /*@__PURE__*/ _let("count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $dynamicTag = /*@__PURE__*/ _fill_dynamic_tag("__tests__/template.marko0", "input_content", /*@__PURE__*/ _dynamic_tag("#text/0"));
const $input_content = $dynamicTag;
const $input = ($scope, input) => $input_content($scope, input.content);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
