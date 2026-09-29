// tags/static-child.marko
const $template = "<span>static</span>";
_shells({ b: "b,<span>static</span>" });
var static_child_default = _template_patch("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>static</span>");
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `/${_w0}&D l`)("b"), ((_w0) => `${_w0}<p> </p>`)($template)) });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	static_child_default({});
	_html(`<p>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1, () => [static_child_default]);
