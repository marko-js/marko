// tags/badge/index.marko
_shells({ b: "b;D ;<em> </em>" });
var badge_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			_patch_child($scope1_id, "a", 0);
			badge_default("x");
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "b", 1);
			badge_default(input.tag);
			_patch_child_end();
			_scope($scope1_id, { b: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.tag,
		f: show
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", input.tag, !_server_guard($scope0_reason, 0));
}, 1);
