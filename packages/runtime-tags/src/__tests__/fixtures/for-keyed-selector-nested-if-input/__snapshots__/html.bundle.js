// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_show__OR__input_rows = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let selected = 1;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_for_of(input.rows, (row) => {
				const $scope2_id = _scope_id();
				_html(`<li${selected === row.id ? " class=danger" : ""}><button class=select>${_text_mark($scope2_id, "c", row.label, $wg__input_rows)}</button>${_el_mark($scope2_id, "b")}</li>${_el_mark($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				_scope($scope2_id, {
					M: row?.id,
					_: _scope_with_id($scope1_id)
				});
			}, "id", $scope1_id, "a", 1, $wg__input_rows, $wg__input_rows, "</ul>", 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 0, 0, 1);
	$wi__input_show__OR__input_rows && _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.rows,
		f: selected
	});
	$wg__input_show || $wi__input_show__OR__input_rows && _resume_branch($scope0_id);
}, 1);
