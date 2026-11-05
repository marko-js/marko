// template.marko
const $enabled__script = _script("a1", ($scope) => {
	_on($scope.c, "click", $scope.h && (() => {
		$log($scope, `${$scope.j}a(${$scope.i})`);
	}));
	_attrs_script($scope, "d");
});
const $enabled = /*@__PURE__*/ _let(7, ($scope) => {
	_attrs_partial($scope, "d", $scope.h && { onClick: $onClick($scope) }, { class: 1 });
	_text($scope.e, $scope.h);
	$enabled__script($scope);
});
const $count = /*@__PURE__*/ _let(8, ($scope) => _text($scope.f, $scope.i));
const $log = /*@__PURE__*/ _let(9, ($scope) => _text($scope.g, $scope.j));
const $setup__script = _script("a2", ($scope) => {
	_on($scope.a, "click", function() {
		$enabled($scope, !$scope.h);
	});
	_on($scope.b, "click", function() {
		$count($scope, +$scope.i + 1);
	});
});
const $onClick = ($scope) => function() {
	$log($scope, `${$scope.j}b(${$scope.i})`);
};
_resumed.a0 = $onClick;
