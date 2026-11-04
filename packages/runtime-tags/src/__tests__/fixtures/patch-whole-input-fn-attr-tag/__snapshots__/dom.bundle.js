// tags/reader.marko
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$scope.c.onRead($scope.c.read() + ":" + $scope.c.opt.v);
}));

// template.marko
const $shown = _let(5, ($scope) => _text($scope.b, $scope.f));
const $onRead = ($scope) => function(v) {
	$shown($scope, v);
};
const $read = ($scope) => () => $scope.e;
_resumed.a1 = $onRead;
_bind_resume("a0 e", $read);
