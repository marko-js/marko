// template.marko
const $todo = /*@__PURE__*/ _let(4, ($scope) => $meta($scope, $scope.e.meta));
const $meta = /*@__PURE__*/ _const(8, ($scope) => $meta_label($scope, $scope.i?.label));
const $meta_label = /*@__PURE__*/ _const(9, ($scope) => _text($scope.c, $scope.j));
const $log = /*@__PURE__*/ _let(11, ($scope) => _text($scope.d, $scope.l));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$todo($scope, {
			...$scope.e,
			id: $scope.e.id + 1,
			info: { tag: $scope.e.info.tag + "!" }
		});
	});
	_on($scope.b, "click", function() {
		$log($scope, `${$scope.l}[${$scope.e.id}:${$scope.e.info.tag}:${$scope.e.title}:${JSON.stringify($scope.i)}]`);
	});
});
