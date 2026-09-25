// tags/handlers.marko
function shout(message) {
	return message.toUpperCase() + "!";
}
const $input_message = ($scope, input_message) => _text($scope.a, input_message);

// tags/v:handlers.marko.register-shout.js
_resumed.b0 = shout;

// template.marko
const $message = /*@__PURE__*/ _let(5, ($scope) => $input_message($scope.c, $scope.f));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$message($scope, $scope.d($scope.e($scope.f)));
}));
