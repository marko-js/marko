// tags/reader.marko
const $template = "<output></output>";
const $get__script = _script("b0", ($scope) => $scope.a.textContent = $scope.d());
const $get$1 = /*@__PURE__*/ _const(3, $get__script);

// template.marko
const $wrap_content__x = /*@__PURE__*/ _const(3, ($scope) => $get$1($scope.a, $get($scope)));
const $wrap_content__$params = ($scope, $params2) => $wrap_content__x($scope, $params2[0].x);
const $wrap_content = _content$1("a1", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b"), 0, $wrap_content__$params);
const $get = ($scope) => function() {
	return $scope.d;
};
_bind_resume("a0 d", $get);
