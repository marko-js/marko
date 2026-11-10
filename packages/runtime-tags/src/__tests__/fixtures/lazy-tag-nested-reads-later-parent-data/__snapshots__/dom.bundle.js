// child.marko
const $item = /*@__PURE__*/ _let(5, ($scope) => $item_name($scope, $scope.f?.name));
const $item_name = /*@__PURE__*/ _const(6, ($scope) => _text($scope.b, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$item($scope, { ...$scope.f });
	console.log("child", $scope.f.name);
}));

// parent.marko
const $placeholder_content = _content("b0", "loading");
const $await_content__setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	console.log("later", JSON.stringify($scope.g));
}));
const $setup__script = _script("b2", ($scope) => _on($scope.a, "click", function() {
	console.log("parent", JSON.stringify($scope.e));
}));
