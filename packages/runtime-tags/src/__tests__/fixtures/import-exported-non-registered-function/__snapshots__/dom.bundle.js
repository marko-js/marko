// tags/greeting.marko
function shout(message) {
	return message.toUpperCase() + "!";
}
const $input_message = ($scope, input_message) => _text($scope.a, input_message);

// template.marko
const $message = /*@__PURE__*/ _let(2, ($scope) => $input_message($scope.b, shout($scope.c)));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$message($scope, $scope.c + "!");
}));
