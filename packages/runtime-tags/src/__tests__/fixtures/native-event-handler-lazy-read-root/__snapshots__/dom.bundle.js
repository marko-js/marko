// template.marko
const $todo = /*@__PURE__*/ _let(4, ($scope) => $meta($scope, $scope.e.meta));
const $meta = /*@__PURE__*/ _const(5, ($scope) => $meta_label($scope, $scope.f?.label));
const $meta_label = /*@__PURE__*/ _const(6, ($scope) => _text($scope.c, $scope.g));
const $log = /*@__PURE__*/ _let(7, ($scope) => _text($scope.d, $scope.h));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$todo($scope, {
			...$scope.e,
			id: $scope.e.id + 1,
			info: { tag: $scope.e.info.tag + "!" }
		});
	});
	_on($scope.b, "click", function() {
		$log($scope, `${$scope.h}[${$scope.e.id}:${$scope.e.info.tag}:${$scope.e.title}:${JSON.stringify($scope.e.meta)}]`);
	});
});
