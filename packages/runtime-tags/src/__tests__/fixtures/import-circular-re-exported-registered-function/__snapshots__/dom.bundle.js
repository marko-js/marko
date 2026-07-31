// tags/chain-b.marko
function bFn(message) {
	return message + "-b";
}

// tags/chain-a.marko
function aFn(message) {
	return message + "-a";
}

// tags/v:chain-b.marko.register-bFn.js
_resume("c0", bFn);

// tags/v:chain-a.marko.register-aFn.js
_resume("b0", aFn);

// template.marko
const $message = /*@__PURE__*/ _let(4, ($scope) => _text($scope, "b", $scope.e));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$message($scope, $scope.d($scope.c($scope.e)));
}));
