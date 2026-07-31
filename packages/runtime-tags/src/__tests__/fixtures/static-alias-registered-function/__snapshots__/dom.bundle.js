// template.marko
const $message = /*@__PURE__*/ _let(3, ($scope) => _text($scope, "b", $scope.d));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$message($scope, $scope.c($scope.d));
}));
function $base(message) {
	return message.toUpperCase() + "!";
}
_resume("a0", $base);
