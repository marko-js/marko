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
	const $scope0_reason = _scope_reason(), $uf__input_label = _updates_from($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("a0", ({ fmt, label, title }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $fg__fmt = _filled_guard($scope2_reason, 1), $fg__label = _filled_guard($scope2_reason, 2);
		_html(`<em>${_text_mark($scope2_id, "a", fmt(label), 1, $scope2_reason, 0)}</em><b>${_text_mark($scope2_id, "b", title, 1, $scope2_reason, 3)}</b>`);
		_patch_render($scope2_id, "a1", [$fg__fmt && "e", $fg__label && "f"], $scope2_reason, 0);
		_scope($scope2_id, {
			e: (_unfilled_if($scope2_reason, 2, 1) || _unfilled_if($scope2_reason, 0, 1)) && fmt,
			f: _unfilled_if($scope2_reason, 0) && label
		}) || $fg__fmt && _unfilled_if($scope2_reason, 2) && _patch_write($scope2_id, "xe", fmt, 1);
	}, $scope0_id) };
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason($uf__input_label << 1 | $uf__input_label << 5 | _updates_from($scope0_reason, 2) << 7);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Panel.content({
				fmt: lib.format,
				label: input.label,
				title: input.title
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a2");
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a3");
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a4");
	$fg__input_label && _patch_render($scope0_id, "a2", "e");
	$fg__input_title && _patch_render($scope0_id, "a3", "f");
	_scope($scope0_id, {
		e: input.label,
		f: input.title,
		g: open
	}) || ($fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1)), $fg__input_title && _patch_write($scope0_id, "xf", input.title, !_server_guard($scope0_reason, 2)));
}, 1);
