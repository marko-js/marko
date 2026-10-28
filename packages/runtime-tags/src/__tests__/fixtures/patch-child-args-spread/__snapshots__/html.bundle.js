// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	const badge = { content: _content("a0", (a, b) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<em>${_text_resume($scope2_id, "a", a, 1, $scope2_reason, 0)}${_text_resume($scope2_id, "b", b, 2, $scope2_reason, 1)}</em>`);
		_scope($scope2_id, {});
	}, $scope0_id) };
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			badge.content(...input.parts);
			_patch_child_end();
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: input.parts,
		f: show
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.parts, !_server_guard($scope0_reason, 0));
}, 1);
