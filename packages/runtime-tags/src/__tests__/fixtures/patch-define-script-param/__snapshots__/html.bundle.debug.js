// template.marko
const $Box_content__walks = " b";
const $Box_content__template = "<div>box</div>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Box_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Box_content__walks);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko;${((_w0) => `b/${_w0}&b`)($Box_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Box_content__template)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Box = { content: _content("__tests__/template.marko_1*content", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_html(`<div>box</div>${_el_resume($scope1_id, "#div/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_label#3", 1, 1);
		_filled_guard($scope1_reason, 0) && _patch_effect($scope1_id, "PatchEffect:__tests__/template.marko_1_label#3", "label");
		$scope1_page ? _scope($scope1_id, { label }, "__tests__/template.marko", "1:2", { label: "1:15" }) : _filled_guard($scope1_reason, 0) && _patch_write($scope1_id, "PatchWrite:label", label, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	Box.content({ label: input.label });
	$scope0_page && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
