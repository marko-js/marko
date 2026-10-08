// template.marko
const $template = "<form><textarea name=msg></textarea><select name=s><option value=a>A</option><option value=b selected>B</option></select><input type=radio name=r checked value=a><input name=q value=default><p> </p><button type=button> </button></form>";
const $walks = "DeD l D m";
const $count = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_note = ($scope, input_note) => _text($scope["#text/0"], input_note);
const $input = ($scope, input) => $input_note($scope, input.note);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
