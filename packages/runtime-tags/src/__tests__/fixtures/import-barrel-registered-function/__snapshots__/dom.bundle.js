// tags/extras.marko
function gamma(message) {
	return message + "-g";
}

// tags/handlers.marko
function beta(message) {
	return message + "-b";
}

// tags/v:handlers.marko.register-beta.js
_resume("d1", beta);

// tags/v:extras.marko.register-gamma.js
_resume("c0", gamma);

// template.marko
const $message = /*@__PURE__*/ _let(4, ($scope) => _text($scope, "b", $scope.e));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$message($scope, $scope.d($scope.c($scope.e)));
}));
