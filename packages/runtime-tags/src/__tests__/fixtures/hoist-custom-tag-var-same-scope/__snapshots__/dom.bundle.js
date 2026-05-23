// total: 2024 (min) 1054 (brotli)
// tags/thing.marko: 21 (min) 25 (brotli)
const $input_value__script = _script("c0", ($scope) => $scope.c);

// tags/child.marko: 59 (min) 63 (brotli)
function $_return($scope) {
	return () => (html) => $scope.a.innerHTML = html;
}
_resume("b0", $_return);

// template.marko: 50 (min) 52 (brotli)
const $setHtml_getter = _hoist_resume("a0", 3);
const $setHtml = _var_resume("a1", /* @__PURE__ */ _const(3));
