// tags/static-child.marko
const $template$1 = "<span>static</span>";
const $walks$1 = "b";
_shells({ "__tests__/tags/static-child.marko": "__tests__/tags/static-child.marko,<span>static</span>" });
var static_child_default = _template_patch("__tests__/tags/static-child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>static</span>");
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)("b");
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0) => `/${_w0}&D l`)("b")};${((_w0) => `${_w0}<p> </p>`)($template$1)}`)() });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	static_child_default({});
	_html(`<p>${_patch_text($scope0_id, "#text/1", input.label, void 0, $scope0_reason, 0)}</p>`);
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
