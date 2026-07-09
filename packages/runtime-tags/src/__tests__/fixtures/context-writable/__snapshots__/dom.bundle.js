// tags/add-button.marko
const $context_count$1 = _context_closure("d", ($scope2, $provider) => $count$2($scope2, $provider["I"]), "b0");
const $count$2 = /*@__PURE__*/ _const(1);
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	_context_write($scope, "d", $scope.b + 1);
}));

// tags/count-display.marko
const $context_count = _context_closure("d", ($scope2, $provider) => $count$1($scope2, $provider["I"]), "c0");
const $count$1 = /*@__PURE__*/ _const(1, ($scope) => _text($scope.a, $scope.b));

// tags/count-provider.marko
const $count = /*@__PURE__*/ _let(5, ($scope) => {
	_context_value($scope, $scope.f, "d");
	_text($scope.b, $scope.f);
});
function $valueChange($scope) {
	return (_new_count) => {
		$count($scope, _new_count);
	};
}
_resume("d0", $valueChange);
