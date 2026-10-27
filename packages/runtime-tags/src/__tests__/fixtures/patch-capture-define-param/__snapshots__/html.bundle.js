// tags/label.marko
const $template = "<output></output>";
_shells({ b: "b; ;<output></output>" });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "hb0" : "eb0", "d");
	$scope0_page ? _scope($scope0_id, { d: input.get }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.get, !_server_guard($scope0_reason, 0));
});

// template.marko
const $Row_content__walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $Row_content__template = $template;
_shells({ a: /*@__PURE__*/ (() => `a;${((_w0) => `b/${_w0}&b`)($Row_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Row_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const Row = { content: _content("a1", ({ text }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_filled_guard($scope1_reason, 0) && _patch_write($scope1_id, "xd", text, !_server_guard($scope1_reason, 0));
		_set_scope_reason(_mask_group($scope1_reason, 0) << 1);
		const $childScope = _patch_child($scope1_id, "a", 0);
		label_default({ get: _bind_resume(function() {
			return text;
		}, "a0", $scope1_id) });
		_patch_child_end();
		$scope1_page && _scope($scope1_id, {
			d: text,
			a: _existing_scope($childScope)
		});
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope2 = _patch_child($scope0_id, "a", 1);
	Row.content({ text: input.v });
	_patch_child_end();
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope2) });
}, 1);
