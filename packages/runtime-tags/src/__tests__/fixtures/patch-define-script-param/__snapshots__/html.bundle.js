// template.marko
const $Box_content__walks = " b";
const $Box_content__template = "<div>box</div>";
_shells({ a: `a;${((_w0) => `b/${_w0}&b`)($Box_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Box_content__template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Box = { content: _content("a0", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__label = _filled_guard($scope1_reason, 0);
		_html(`<div>box</div>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "a1", 1, $fg__label, "d");
		_scope($scope1_id, { d: label }) || $fg__label && _patch_write($scope1_id, "xd", label, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Box.content({ label: input.label });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
