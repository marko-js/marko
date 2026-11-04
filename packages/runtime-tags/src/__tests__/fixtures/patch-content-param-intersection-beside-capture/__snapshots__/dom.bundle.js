// tags/reader.marko
const $template = "<output></output>";
const $get__script = _script("c0", ($scope) => $scope.a.textContent = $scope.d());
const $get$1 = /*@__PURE__*/ _const(3, $get__script);

// template.marko
const $passon_content__input_a__OR__x = /*@__PURE__*/ _or_patch("a1", 4, ($scope) => _text($scope.a, $scope._.e + $scope.d));
const $passon_content__input_a = /*@__PURE__*/ _closure_get_patch("a2", 5, $passon_content__input_a__OR__x, 0, "a4", 0);
const $passon_content__setup = $passon_content__input_a;
const $passon_content__x = /*@__PURE__*/ _const(3, ($scope) => {
	$get$1($scope.b, $get($scope));
	$passon_content__input_a__OR__x($scope);
});
const $passon_content__$params = ($scope, $params2) => $passon_content__x($scope, $params2[0]);
const $passon_content = _content$1("a3", /*@__PURE__*/ ((_w0) => `<p> </p>${_w0}`)($template), /*@__PURE__*/ ((_w0) => `D l/${_w0}&`)(" b"), $passon_content__setup, $passon_content__$params);
const $get = ($scope) => function() {
	return $scope.d;
};
_bind_resume("a0 d", $get);
