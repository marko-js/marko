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
const $Panel_content__walks = "D l";
const $Panel_content__template = "<em> </em>";
_shells({ a: /*@__PURE__*/ (() => `a !a2;${((_w0) => `b/${_w0}&%b b`)($Panel_content__walks)};${((_w0) => `<!>${_w0}<!><button class=toggle>toggle</button>`)($Panel_content__template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("a0", ({ fmt, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $cg__fmt = _client_guard($scope2_reason, 1);
		_html(`<em>${_text_resume($scope2_id, "a", fmt(label), void 0, $scope2_reason, 0)}</em>`);
		_filled_guard($scope2_reason, 1) && _client_guard($scope2_reason, 2) && _patch_write($scope2_id, "xd", fmt);
		$cg__fmt && _patch_write($scope2_id, "xe", label, !(_filled_guard($scope2_reason, 2) && $cg__fmt));
		_patch_join_init($scope2_id, "a1", $scope2_reason, 0, _filled_guard($scope2_reason, 1) && "d", _filled_guard($scope2_reason, 2) && "e");
		_scope($scope2_id, {
			d: (_unfilled_if($scope2_reason, 2, 1) || _unfilled_if($scope2_reason, 0, 1)) && fmt,
			e: (_unfilled_if($scope2_reason, 1) || _unfilled_if($scope2_reason, 0)) && label
		});
	}, $scope0_id) };
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	Panel.content({
		fmt: lib.format,
		label: input.label
	});
	_patch_child_end();
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 1);
			Panel.content({
				fmt: lib.format,
				label: input.label
			});
			_patch_child_end();
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope2) });
			return 0;
		}
	}, $scope0_id, "b");
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		f: input.label,
		g: open,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 0));
}, 1);
