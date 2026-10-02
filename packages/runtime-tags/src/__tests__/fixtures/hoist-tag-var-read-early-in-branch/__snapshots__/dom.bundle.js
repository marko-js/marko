// template.marko
const $if_content__out = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.b, $scope._.f));
const $if_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$out($scope._, String($read_getter($scope._)()));
}));
const $read_getter = /*@__PURE__*/ _hoist(6);
const $out = /*@__PURE__*/ _let(5, $if_content__out);
const $read = ($scope) => () => $scope.e;
_resumed.a0 = $read;
