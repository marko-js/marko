// total: 2025 (min) 1058 (brotli)
// tags/child.marko: 39 (min) 43 (brotli)
const $input__script = _script("b0", ($scope) => $scope.a.innerHTML = $scope.c.y());

// tags/source.marko: 38 (min) 38 (brotli)
function $_return() {
	return 1;
}
_resume("c0", $_return);

// template.marko: 50 (min) 52 (brotli)
const $x_getter = _hoist_resume("a0", 3);
const $x = _var_resume("a1", /* @__PURE__ */ _const(3));
