// template.marko
const $template = "<main><div></div><button> </button></main>";
const $walks = "D b D m";
const $count = /*@__PURE__*/ _let("count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_html = ($scope, input_html) => _attr_content($scope, "#div/0", input_html === "a" ? frag_a_default : frag_b_default);
const $input = ($scope, input) => $input_html($scope, input.html);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
