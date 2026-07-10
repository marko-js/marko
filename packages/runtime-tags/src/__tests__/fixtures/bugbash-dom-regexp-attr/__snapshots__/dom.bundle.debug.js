// template.marko
const $template = "<input><button>Update</button>";
const $walks = " b b";
const $i = /*@__PURE__*/ _let("i/2", ($scope) => _attr($scope["#input/0"], "pattern", $scope.i % 2 ? /^b+$/ : /^a+$/));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$i($scope, $scope.i + 1);
}));
function $setup($scope) {
	$i($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
