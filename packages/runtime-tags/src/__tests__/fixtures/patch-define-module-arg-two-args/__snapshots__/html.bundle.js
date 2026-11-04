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
_shells({ a: "a !a4;b%b ;<!><!><button class=toggle>toggle</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("a0", ({ fmt, a, b }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $fg__fmt = _filled_guard($scope2_reason, 3);
		_html(`<em>${_text_mark($scope2_id, "a", fmt(a), 1, $scope2_reason, 0)} ${_text_mark($scope2_id, "b", fmt(b), 2, $scope2_reason, 1)}</em>`);
		_patch_render($scope2_id, "a1", [$fg__fmt && "e", _filled_guard($scope2_reason, 4) && "f"], $scope2_reason, 0);
		_patch_render($scope2_id, "a2", [$fg__fmt && "e", _filled_guard($scope2_reason, 5) && "h"], $scope2_reason, 1);
		_scope($scope2_id, {
			e: (_unfilled_if($scope2_reason, 2, 3) || _unfilled_if($scope2_reason, 0, 3) || _unfilled_if($scope2_reason, 1, 3)) && fmt,
			f: _unfilled_if($scope2_reason, 0) && a,
			h: _unfilled_if($scope2_reason, 1) && b
		}) || $fg__fmt && _unfilled_if($scope2_reason, 2) && _patch_write($scope2_id, "xe", fmt, 1);
	}, $scope0_id) };
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason($uf__input_label << 1 | $uf__input_label << 3 | $uf__input_label << 5 | $uf__input_label << 9 | $uf__input_label << 11);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Panel.content({
				fmt: lib.format,
				a: input.label,
				b: input.label + "!"
			});
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a3");
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a4");
	$fg__input_label && _patch_render($scope0_id, "a3", "e");
	_scope($scope0_id, {
		e: input.label,
		f: open
	}) || $fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0));
}, 1);
