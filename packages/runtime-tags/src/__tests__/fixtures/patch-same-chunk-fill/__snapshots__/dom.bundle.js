// tags/probe.marko
const $settled = /*@__PURE__*/ _fill_let("b0", 5, ($scope) => _text($scope.b, $scope.f ? "settled" : "pending"));
const $input_promise__script = _script("b0", ($scope) => {
	$scope.a;
	$scope.e.then(() => {
		$settled($scope, true);
	});
});

// template.marko
const $placeholder_content = _content_resume("a1", "<span class=loading>...</span>");
const $count = /*@__PURE__*/ _let(7, ($scope) => _text($scope.b, $scope.h));
const $setup__script = _script("a5", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.h + 1);
}));
