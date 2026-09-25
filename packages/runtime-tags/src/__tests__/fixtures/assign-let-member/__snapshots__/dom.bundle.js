// template.marko
const $settings = /*@__PURE__*/ _let(14, ($scope) => {
	_text($scope.a, $scope.o?.theme);
	_text($scope.b, $scope.o?.count);
	_text($scope.c, $scope.o?.removed ?? "deleted");
	_text($scope.d, $scope.o?.kind);
	_text($scope.e, $scope.o?.first);
	_text($scope.f, $scope.o?.width);
	_text($scope.g, $scope.o?.picked);
	_text($scope.h, $scope.o?.rest);
	_text($scope.i, $scope.o?.fallback);
	_text($scope.j, $scope.o?.lastKey);
	_text($scope.k, $scope.o?.lastTag);
	_text($scope.l, $scope.o?.copy?.w);
});
const $setup__script = _script("a0", ($scope) => {
	_on($scope.m, "click", function() {
		$scope.o.theme = "light";
		$scope.o.count += $scope.o?.step;
		$scope.o.count++;
		delete $scope.o.removed;
		$scope.o.kind = typeof $scope.o?.step;
		[$scope.o.first] = $scope.o?.tags;
		({w: $scope.o.width} = $scope.o?.size);
		({[$scope.o?.key]: $scope.o.picked} = $scope.o?.size);
		[, ...$scope.o.rest] = $scope.o?.tags;
		[$scope.o.fallback = $scope.o?.step] = [];
		for ($scope.o.lastKey in $scope.o?.size);
		for ($scope.o.lastTag of $scope.o?.tags);
		$scope.o.copy = { w: ($scope.o?.size).w };
	});
	_on($scope.n, "click", function() {
		$settings($scope, { ...$scope.o });
	});
});
