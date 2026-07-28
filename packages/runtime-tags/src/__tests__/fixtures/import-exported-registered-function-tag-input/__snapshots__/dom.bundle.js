// tags/handlers.marko
function shout(message) {
	return message.toUpperCase() + "!";
}

// tags/press.marko
const $label = /*@__PURE__*/ _let(4, ($scope) => _text($scope.b, $scope.e));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$label($scope, $scope.d.format($scope.e));
}));

// tags/v:handlers.marko.register-shout.js
_resume("b0", shout);
