// template.marko
const $template = "<svg><title><if=editing>editing</if><else>viewing</else></title><foreignObject class=host width=100 height=100><div></div></foreignObject></svg><button class=edit>edit</button>";
const $walks = "DbD m b";
const $if = /*@__PURE__*/ _if("#div/0", "<input value=name>");
const $editing = /*@__PURE__*/ _let("editing/2", ($scope) => $if($scope, $scope.editing ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$editing($scope, !$scope.editing);
}));
function $setup($scope) {
	$editing($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
