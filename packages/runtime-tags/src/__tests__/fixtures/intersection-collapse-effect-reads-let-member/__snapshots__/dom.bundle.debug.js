// template.marko
const $template = "<button>set</button>";
const $walks = " b";
const $y = /*@__PURE__*/ _const("y");
const $z = /*@__PURE__*/ _const("z");
const $y__OR__z__script = _script("__tests__/template.marko_0_y#2_z#3", ($scope) => console.log($scope.y + $scope.z));
const $y__OR__z = $y__OR__z__script;
const $count = /*@__PURE__*/ _let("count/1", ($scope) => {
	$y($scope, $scope.count + 1);
	$z($scope, $scope.count + 2);
	$y__OR__z($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, 5);
}));
function $setup($scope) {
	$count($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup);
