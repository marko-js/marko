// tags/kid.marko
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input_open = ($scope, input_open) => _text($scope.b, input_open ? "open" : "closed");

// template.marko
const $live = /*@__PURE__*/ _let(4, ($scope) => {
	$input_label($scope.a, $scope.e?.label);
	$input_open($scope.a, $scope.e?.open);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.b, "click", function() {
		$scope.e.open = true;
	});
	_on($scope.c, "click", function() {
		console.log("read", $scope.e?.open);
	});
	_on($scope.d, "click", function() {
		$live($scope, { ...$scope.e });
	});
});
