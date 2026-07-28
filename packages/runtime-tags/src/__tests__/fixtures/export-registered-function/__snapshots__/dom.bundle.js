// template.marko
function shout(message) {
	return message.toUpperCase() + "!";
}
const whisper = (message) => message.toLowerCase();
const $message = /*@__PURE__*/ _let(5, ($scope) => _text($scope.c, $scope.f));
const $setup__script = _script("a2", ($scope) => {
	_on($scope.a, "click", function() {
		$message($scope, $scope.d($scope.f));
	});
	_on($scope.b, "click", function() {
		$message($scope, $scope.e($scope.f));
	});
});
_resume("a0", shout);
_resume("a1", whisper);
