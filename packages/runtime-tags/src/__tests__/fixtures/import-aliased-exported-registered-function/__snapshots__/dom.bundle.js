// tags/greeting.marko
const whisper = (message) => message.toLowerCase();
function shout(message) {
	return message.toUpperCase() + "!";
}
const $input_message = ($scope, input_message) => _text($scope.a, input_message);

// tags/v:greeting.marko.register-shout.js
_resume("b1", shout);

// tags/v:greeting.marko.register-whisper.js
_resume("b0", whisper);

// template.marko
const $message = /*@__PURE__*/ _let(5, ($scope) => $input_message($scope.c, $scope.f));
const $setup__script = _script("a0", ($scope) => {
	_on($scope.a, "click", function() {
		$message($scope, $scope.d($scope.f));
	});
	_on($scope.b, "click", function() {
		$message($scope, $scope.e($scope.f));
	});
});
