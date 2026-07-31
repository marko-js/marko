// tags/greeting.marko
function shout(message) {
	return message.toUpperCase() + "!";
}
const $input_message = ($scope, input_message) => _text($scope, "a", input_message);

// tags/v:greeting.marko.register-shout.js
_resume("b0", shout);

// tags/panel.marko
const $message$1 = /*@__PURE__*/ _let(3, ($scope) => $input_message($scope.b, $scope.d));
const $setup__script$1 = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$message$1($scope, $scope.c($scope.d));
}));

// template.marko
const $message = /*@__PURE__*/ _let(4, ($scope) => $input_message($scope.b, $scope.e));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$message($scope, $scope.d($scope.e));
}));
