// tags/owner.marko
const $passon_content__input_a__OR__x = /*@__PURE__*/ _or_patch("b1", 3, ($scope) => _text($scope.a, $scope._.e + $scope.c));
const $passon_content__input_a = /*@__PURE__*/ _closure_get_patch("b0", 5, $passon_content__input_a__OR__x, 0, "b4", 0);
const $passon_content__setup = $passon_content__input_a;
const $passon_content__x = /*@__PURE__*/ _const(2, $passon_content__input_a__OR__x);
const $passon_content__$params = ($scope, $params2) => $passon_content__x($scope, $params2[0]);
const $passon_content = _content$1("b2", "<p> </p>", "D ", $passon_content__setup, $passon_content__$params);
const $setup__script$1 = _script("b3", ($scope) => document.body.dataset.owner = "1");
const $input_a__closure = /*@__PURE__*/ _closure($passon_content__input_a);
const $input_a = /*@__PURE__*/ _const(4, $input_a__closure);

// template.marko
const $a = _let(7, ($scope) => $input_a($scope.a, $scope.h));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$a($scope, "c2");
}));
