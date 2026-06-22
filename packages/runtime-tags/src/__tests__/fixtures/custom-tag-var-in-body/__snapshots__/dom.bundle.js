// tags/child.marko
function $_return($scope) {
	return () => (html) => $scope.b.innerHTML = html;
}
_resume("b0", $_return);

// template.marko
const $child_content = /* @__PURE__ */ _content("a1", 0, 0, /* @__PURE__ */ _closure_get(2, _script("a0", ($scope) => _assert_init($scope._, "c")("Hello world"))));
