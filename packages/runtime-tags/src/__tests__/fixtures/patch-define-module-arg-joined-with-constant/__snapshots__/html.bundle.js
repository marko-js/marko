// lib.ts
const lib = {
	sep: "!",
	format(value, sep) {
		return value.toUpperCase() + sep;
	}
};

// template.marko
_shells({ a: "a !a3;b%b ;<!><!><button class=toggle>toggle</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	const Panel = { content: _content("a0", ({ fmt, sep, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $fg__fmt = _filled_guard($scope2_reason, 4), $fg__sep = _filled_guard($scope2_reason, 5), $fg__label = _filled_guard($scope2_reason, 6);
		_html(`<em>${_text_mark($scope2_id, "a", fmt(label, sep), 1, $scope2_reason, 3)}</em>`);
		_patch_render($scope2_id, "a1", [
			$fg__fmt && "d",
			$fg__sep && "e",
			$fg__label && "f"
		], $scope2_reason, 3);
		_scope($scope2_id, {
			d: (_unfilled_if($scope2_reason, 2, 4) || _unfilled_if($scope2_reason, 3, 4)) && fmt,
			e: (_unfilled_if($scope2_reason, 1, 5) || _unfilled_if($scope2_reason, 3, 5)) && sep,
			f: (_unfilled_if($scope2_reason, 0) || _unfilled_if($scope2_reason, 3)) && label
		}) || ($fg__fmt && _client_guard($scope2_reason, 2) && _patch_write($scope2_id, "xd", fmt, !_server_guard($scope2_reason, 4)), $fg__sep && _client_guard($scope2_reason, 1) && _patch_write($scope2_id, "xe", sep, !_server_guard($scope2_reason, 5)), $fg__label && _client_guard($scope2_reason, 0) && _patch_write($scope2_id, "xf", label, !_server_guard($scope2_reason, 6)));
	}, $scope0_id) };
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 3 | _updates_from($scope0_reason, 0) << 5 | _updates_from($scope0_reason, 0) << 7 | _updates_from($scope0_reason, 0) << 13);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			Panel.content({
				fmt: lib.format,
				sep: lib.sep,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a2");
			_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	$fg__input_label && _patch_render($scope0_id, "a2", "e");
	_scope($scope0_id, {
		e: input.label,
		f: open
	}) || $fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0));
}, 1);
