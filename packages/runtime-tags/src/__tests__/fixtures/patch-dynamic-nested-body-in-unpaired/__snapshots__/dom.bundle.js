// card.marko
const $input_meta = ($scope, input_meta) => _text($scope.a, input_meta ? input_meta.n : "-");

// template.marko
const $Box_content__count = _shell_closure_get("c7", 7, ($scope) => _text($scope.b, $scope._._.f), ($scope) => $scope._._, "c11");
const $count__closure = /*@__PURE__*/ _closure($Box_content__count);
const $count = /*@__PURE__*/ _fill_let("c5", 5, ($scope) => {
	$input_meta($scope.a, attrTag({ n: $scope.f }));
	$count__closure($scope);
});
const $setup__script = _script("c4", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
