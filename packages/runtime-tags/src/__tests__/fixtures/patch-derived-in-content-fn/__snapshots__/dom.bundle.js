// tags/reader.marko
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$scope.c.onRead($scope.c.read());
}));

// template.marko
const $shown = /*@__PURE__*/ _let(5, ($scope) => _text($scope.b, $scope.f));
const $onRead = ($scope) => function(value) {
	$shown($scope._, value);
};
const $read = ($scope) => () => $scope.b;
_resumed.a1 = $onRead;
_bind_resume("a0 b", $read);
