// template.marko
const $template = "<main><textarea></textarea><select><option value=a>A</option><option value=b>B</option></select><p> </p><button> </button></main>";
const $walks = "D b bD l D m";
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/8", ($scope) => _text($scope["#text/4"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	_attr_textarea_value_default($scope, "#textarea/0", "hello");
	_attr_select_value_default($scope, "#select/1", "b");
	$setup__script($scope);
	$count($scope, 0);
}
const $input_note = ($scope, input_note) => _text($scope["#text/2"], input_note);
const $input = ($scope, input) => $input_note($scope, input.note);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
