// tags/child.marko
function $_return($scope) {
	return () => (html) => $scope.b.innerHTML = html;
}
_resume("b0", $_return);

// template.marko
const $Child_content__setHtml = /*@__PURE__*/ _closure_get(2, _script("a1", ($scope) => _assert_init($scope._, "c")("Hello World")));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, _content_resume("a0", 0, 0, $Child_content__setHtml), () => $setHtml);
const $setHtml = _var_resume("a2", /*@__PURE__*/ _const(2, /* @__PURE__ */ _closure($Child_content__setHtml)));
