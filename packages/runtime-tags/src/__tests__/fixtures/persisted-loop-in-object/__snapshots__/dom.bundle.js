// template.marko
const $for_content__input_note = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _for_closure(0, ($scope) => _text($scope.c, $scope._.e)));
const $for_content__setup = ($scope) => {
	$for_content__input_note._($scope);
	_text($scope.a, $scope.M);
};
const $for_content__v = ($scope, v) => _text($scope.b, v);
const $for_content__$params = ($scope, $params2) => $for_content__v($scope, $params2[1]);
const $for = /*@__PURE__*/ _for_in(0, "<li><!>=<!> (<!>)</li>", "D%c%c%", $for_content__setup, $for_content__$params);
const $pairs = /*@__PURE__*/ _let(5, ($scope) => $for($scope, [$scope.f]));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$pairs($scope, {
		...$scope.f,
		["k" + Object.keys($scope.f).length]: 2
	});
}));
