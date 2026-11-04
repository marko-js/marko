// template.marko
_shells({ a: "a !;b%;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_selected = _filled_guard($scope0_reason, 1), $fg__input_selectedChange = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let rows = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 }
	];
	let selected = input.selected;
	_if(() => {
		if (rows.length) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_for_of(rows, (row) => {
				const $scope2_id = _scope_id();
				_html(`<li${selected === row.id ? " class=sel" : ""}>${_escape(row.id)}</li>${_el_mark($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				_scope($scope2_id, {
					M: row?.id,
					_: _scope_with_id($scope1_id)
				});
			}, "id", $scope1_id, "a", 1, 1, 1, "</ul>", 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_patch_render($scope0_id, "a1", [$fg__input_selected && "d", $fg__input_selectedChange && "e"], $scope0_reason, 0);
	const $selectedChange = input.selectedChange || void 0;
	_patch_let_change($scope0_id, "va2", selected, "wj", $selectedChange, $scope0_reason, 0);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.selected,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.selectedChange,
		i: selected,
		j: $selectedChange
	}) || ($fg__input_selected && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.selected, !_server_guard($scope0_reason, 1)), $fg__input_selectedChange && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.selectedChange, !_server_guard($scope0_reason, 2)));
}, 1);
