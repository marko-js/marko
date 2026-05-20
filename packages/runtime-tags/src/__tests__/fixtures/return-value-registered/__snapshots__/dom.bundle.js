// total: 1670 (min) 911 (brotli)
// tags/getter.marko: 43 (min) 47 (brotli)
function $getter() {
	return "hello";
}
_resume("b0", $getter);

// template.marko: 67 (min) 66 (brotli)
const $get = _var_resume("a1", /* @__PURE__ */ _const(3, _script("a0", ($scope) => $scope.c.textContent = $scope.d())));
