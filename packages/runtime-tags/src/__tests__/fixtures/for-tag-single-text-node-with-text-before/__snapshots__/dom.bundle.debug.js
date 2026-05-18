// template.marko
const $template = "<div>Before <!></div>";
const $walks = " Db%l";
const $for = /* @__PURE__ */ _for_of("#text/1", "Child", "b");
const $children__script = _script("__tests__/template.marko_0_children", ($scope) => {
	if ($scope.children?.length === 1) {
		$children($scope, [...$scope.children, 2]);
	}
});
const $children = /* @__PURE__ */ _let("children/2", ($scope) => {
	$children_length($scope, $scope.children?.length);
	$for($scope, [$scope.children]);
	$children__script($scope);
});
const $children_length = /* @__PURE__ */ _const("children_length", ($scope) => _attr($scope["#div/0"], "data-children", $scope.children_length));
function $setup($scope) {
	$children($scope, [1]);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
