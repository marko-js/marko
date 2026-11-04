// template.marko
const $for_content__input_note = /*@__PURE__*/ _for_closure_patch("a0", 0, ($scope) => _text($scope.c, $scope._.e), 6);
const $for_content__setup = ($scope) => {
	$for_content__input_note._($scope);
	_text($scope.a, $scope.M);
};
const $for_content__$params = ($scope, $params2) => _text($scope.b, $params2[1]);
const $for = /*@__PURE__*/ _for_in(0, "<li><!>=<!> (<!>)</li>", "D%c%c%", $for_content__setup, $for_content__$params);
const $pairs = _let(5, ($scope) => $for($scope, [$scope.f]));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$pairs($scope, {
		...$scope.f,
		["k" + Object.keys($scope.f).length]: 2
	});
}));
