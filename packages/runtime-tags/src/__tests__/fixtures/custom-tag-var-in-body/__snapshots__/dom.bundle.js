// total: 1724 (min) 935 (brotli)
// tags/child.marko: 59 (min) 63 (brotli)
function $_return($scope) {
	return () => (html) => $scope.b.innerHTML = html;
}
_resume("b0", $_return);

// template.marko: 82 (min) 74 (brotli)
const $child_content__setHtml__script = _script("a0", ($scope) => _assert_init($scope._, "c")("Hello world"));
const $setHtml = _var_resume("a2", /* @__PURE__ */ _const(2));
