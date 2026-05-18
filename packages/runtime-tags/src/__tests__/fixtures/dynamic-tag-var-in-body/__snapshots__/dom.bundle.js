// total: 3965 (min) 1852 (brotli)
// tags/child.marko: 59 (min) 63 (brotli)
function $_return($scope) {
	return () => (html) => $scope.b.innerHTML = html;
}
_resume("b0", $_return);

// template.marko: 164 (min) 117 (brotli)
const $Child_content__setHtml__script = _script("a1", ($scope) => _assert_init($scope._, "c")("Hello World"));
const $Child_content__setHtml = /* @__PURE__ */ _closure_get(2, $Child_content__setHtml__script);
const $Child_content__setup = $Child_content__setHtml;
const $Child_content = _content_resume("a0", 0, 0, $Child_content__setup);
const $setHtml__closure = /* @__PURE__ */ _closure($Child_content__setHtml);
const $setHtml = _var_resume("a2", /* @__PURE__ */ _const(2, $setHtml__closure));
