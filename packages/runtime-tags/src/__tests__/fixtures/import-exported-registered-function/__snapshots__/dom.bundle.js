// tags/greeting.marko
function shout(message) {
	return message.toUpperCase() + "!";
}
const $input_message = ($scope, input_message) => _text($scope, "a", input_message);

// tags/v:greeting.marko.register-shout.js
_resume("b0", shout);

// template.marko
const $message = /*@__PURE__*/ _let(3, ($scope) => $input_message($scope.b, $scope.d));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$message($scope, $scope.c($scope.d));
}));
