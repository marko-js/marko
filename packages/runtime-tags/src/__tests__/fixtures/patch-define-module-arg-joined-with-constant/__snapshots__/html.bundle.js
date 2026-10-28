// lib.ts
const lib = {
	sep: "!",
	format(value, sep) {
		return value.toUpperCase() + sep;
	}
};

// template.marko
_shells({ a: "a !a2;b%b ;<!><!><button class=toggle>toggle</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("a0", ({ fmt, sep, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $cg__fmt__OR__sep = _client_guard($scope2_reason, 0);
		_html(`<em>${_text_resume($scope2_id, "a", fmt(label, sep), 1, $scope2_reason, 3)}</em>`);
		_filled_guard($scope2_reason, 4) && _client_guard($scope2_reason, 2) && _patch_write($scope2_id, "xd", fmt);
		_filled_guard($scope2_reason, 5) && _client_guard($scope2_reason, 1) && _patch_write($scope2_id, "xe", sep);
		$cg__fmt__OR__sep && _patch_write($scope2_id, "xf", label, !(_filled_guard($scope2_reason, 6) && $cg__fmt__OR__sep));
		_patch_join_init($scope2_id, "a1", $scope2_reason, 3, _filled_guard($scope2_reason, 4) && "d", _filled_guard($scope2_reason, 5) && "e", _filled_guard($scope2_reason, 6) && "f");
		_scope($scope2_id, {
			d: (_unfilled_if($scope2_reason, 2, 4) || _unfilled_if($scope2_reason, 3, 4)) && fmt,
			e: (_unfilled_if($scope2_reason, 1, 5) || _unfilled_if($scope2_reason, 3, 5)) && sep,
			f: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 3)) && label
		});
	}, $scope0_id) };
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 0) << 7 | _mask_group($scope0_reason, 0) << 13);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Panel.content({
				fmt: lib.format,
				sep: lib.sep,
				label: input.label
			});
			_patch_child_end();
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: input.label,
		f: open
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 0));
}, 1);
