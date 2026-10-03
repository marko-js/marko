// template.marko
const $placeholder_content = _content("c0", "loading");

// child.marko
const $count = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
const $input_id__script = _script("a0", ($scope) => document.getElementById("log").textContent += "[" + $scope.f + "]");

// reordered.marko
const $count = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
const $input_id__script = _script("b0", ($scope) => document.getElementById("log").textContent += "[" + $scope.f + "]");
