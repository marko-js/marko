// template.marko
const $passon_content__input_b = /*@__PURE__*/ _closure_get_patch("a0", 6, ($scope) => _text($scope.a, $scope._.e), 0, "a5", 0);
const $passon_content__setup = ($scope) => {
	$passon_content__input_b($scope);
	$passon_content__input_a($scope);
};
const $passon_content__input_a__OR__x = /*@__PURE__*/ _or_patch("a1", 4, ($scope) => _text($scope.b, $scope._.f + $scope.d));
const $passon_content__input_a = /*@__PURE__*/ _closure_get_patch("a2", 7, $passon_content__input_a__OR__x, 0, "a6", 0);
const $passon_content__x = /*@__PURE__*/ _const(3, $passon_content__input_a__OR__x);
const $passon_content__$params = ($scope, $params2) => $passon_content__x($scope, $params2[0]);
const $passon_content = _content$1("a3", "<i> </i><p> </p>", "D lD ", $passon_content__setup, $passon_content__$params);
const $setup__script = _script("a4", ($scope) => document.body.dataset.ready = "1");
