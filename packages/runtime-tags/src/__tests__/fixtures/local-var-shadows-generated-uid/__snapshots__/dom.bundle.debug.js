// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $count2 = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	const $count = 1;
	$count2($scope, $scope.count + $count);
}));
function $setup($scope) {
	$count2($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
