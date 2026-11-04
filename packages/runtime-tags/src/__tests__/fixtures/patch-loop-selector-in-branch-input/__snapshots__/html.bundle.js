// template.marko
_shells({ a: "a !a1;b%b ;<!><!><button>+</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_selected = _write_guard($scope0_reason, 0), $fg__input_selected = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let rows = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 }
	];
	_if(() => {
		if (rows.length) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_for_of(rows, (row) => {
				const $scope2_id = _scope_id();
				_html(`<li>${_escape(row.id)}${_text_mark($scope2_id, "b", input.selected === row.id ? "*" : "", $wg__input_selected * 2)}</li>`);
				_client_guard($scope0_reason, 0) && _patch_render($scope2_id, "a0");
				_scope($scope2_id, { M: _write_if($scope0_reason, 0) && row?.id });
			}, "id", $scope1_id, "a", 1, 1, 1, "</ul>", 1);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	$fg__input_selected && _patch_render($scope0_id, "a2", "e");
	_scope($scope0_id, {
		e: input.selected,
		f: rows
	}) || $fg__input_selected && _patch_write($scope0_id, "xe", input.selected, !_server_guard($scope0_reason, 0));
}, 1);
