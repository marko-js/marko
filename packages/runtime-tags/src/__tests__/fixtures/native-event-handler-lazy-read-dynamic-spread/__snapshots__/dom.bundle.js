// template.marko
const $enabled__script = _script("a2", ($scope) => {
	_attrs_script($scope, "c");
	_attrs_script($scope, "d");
});
const $enabled = /* @__PURE__ */ _let(7, ($scope) => {
	_attrs_partial($scope, "c", { onClick: $scope.h && $anonymous($scope) }, { class: 1 });
	_attrs_partial($scope, "d", $scope.h && { onClick: $onClick($scope) }, { class: 1 });
	_text($scope.e, $scope.h);
	$enabled__script($scope);
});
const $count = /* @__PURE__ */ _let(8, ($scope) => _text($scope.f, $scope.i));
const $log = /* @__PURE__ */ _let(9, ($scope) => _text($scope.g, $scope.j));
const $setup__script = _script("a3", ($scope) => {
	_on($scope.a, "click", function() {
		$enabled($scope, !$scope.h);
	});
	_on($scope.b, "click", function() {
		$count($scope, $scope.i + 1);
	});
});
function $onClick($scope) {
	return function() {
		$log($scope, `${$scope.j}b(${$scope.i})`);
	};
}
function $anonymous($scope) {
	return () => {
		$log($scope, `${$scope.j}a(${$scope.i})`);
	};
}
_resume("a1", $onClick);
_resume("a0", $anonymous);
