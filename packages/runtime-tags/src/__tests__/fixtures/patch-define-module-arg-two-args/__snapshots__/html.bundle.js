// lib.ts
const units = [
	"",
	"K",
	"M"
];
const lib = { format(value) {
	return value.toUpperCase() + units[value.length % units.length];
} };

// template.marko
_shells({ a: "a !a3;b%b ;<!><!><button class=toggle>toggle</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("a0", ({ fmt, a, b }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $cg__fmt = _client_guard($scope2_reason, 3);
		_html(`<em>${_text_resume($scope2_id, "a", fmt(a), 1, $scope2_reason, 0)} ${_text_resume($scope2_id, "b", fmt(b), 2, $scope2_reason, 1)}</em>`);
		_filled_guard($scope2_reason, 3) && (_client_guard($scope2_reason, 4) || _client_guard($scope2_reason, 5)) && _patch_write($scope2_id, "xe", fmt);
		$cg__fmt && _patch_write($scope2_id, "xf", a, !(_filled_guard($scope2_reason, 4) && $cg__fmt));
		$cg__fmt && _patch_write($scope2_id, "xh", b, !(_filled_guard($scope2_reason, 5) && $cg__fmt));
		_patch_init_entry($scope2_id, "a1", [_filled_guard($scope2_reason, 3) && "e", _filled_guard($scope2_reason, 4) && "f"], $scope2_reason, 0);
		_patch_init_entry($scope2_id, "a2", [_filled_guard($scope2_reason, 3) && "e", _filled_guard($scope2_reason, 5) && "h"], $scope2_reason, 1);
		_scope($scope2_id, {
			e: (_unfilled_if($scope2_reason, 2, 3) || _unfilled_if($scope2_reason, 0, 3) || _unfilled_if($scope2_reason, 1, 3)) && fmt,
			f: (_unfilled_if($scope2_reason, 3) || _unfilled_if($scope2_reason, 0)) && a,
			h: (_unfilled_if($scope2_reason, 3) || _unfilled_if($scope2_reason, 1)) && b
		});
	}, $scope0_id) };
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 0) << 9 | _mask_group($scope0_reason, 0) << 11);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Panel.content({
				fmt: lib.format,
				a: input.label,
				b: input.label + "!"
			});
			_patch_child_end();
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		e: input.label,
		f: open
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 0));
}, 1);
