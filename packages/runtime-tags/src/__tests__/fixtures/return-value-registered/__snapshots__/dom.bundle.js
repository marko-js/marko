// total: 1676 (min) 915 (brotli)
// tags/getter.marko: 43 (min) 47 (brotli)
function $getter() {
	return "hello";
}
_resume("b0", $getter);

// template.marko: 77 (min) 76 (brotli)
const $get__script = _script("a0", ($scope) => $scope.c.textContent = $scope.d());
const $get = _var_resume("a1", /* @__PURE__ */ _const(3, $get__script));
