// template.marko
const $template = "<!><p>paragraph</p><button></button>";
const $walks = "b b b";
const $className__script = _script("__tests__/template.marko_0_className", ($scope) => _on($scope["#button/1"], "click", function() {
	$className($scope, $scope.className === "A" ? "B" : "A");
}));
const $className = /*@__PURE__*/ _let("className/2", ($scope) => {
	_attr_class($scope["#p/0"], $scope.className);
	$className__script($scope);
});
function $setup($scope) {
	$className($scope, "A");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
