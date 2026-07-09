// tags/counter.marko
const $context_count = _context_closure("a", ($scope2, $provider) => $count$1($scope2, $provider["I"]), "b0");
const $count$1 = /*@__PURE__*/ _const(2, ($scope) => _text($scope.b, $scope.c));
const $setup2__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	_context_write($scope, "a", $scope.c + 1);
}));

// template.marko
const $count = /*@__PURE__*/ _let(2, ($scope) => _context_value($scope, $scope.c, "a"));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	console.log($scope.$.settings.message);
}));
function $valueChange($scope) {
	return (_new_count) => {
		$count($scope, _new_count);
	};
}
_resume("a0", $valueChange);
