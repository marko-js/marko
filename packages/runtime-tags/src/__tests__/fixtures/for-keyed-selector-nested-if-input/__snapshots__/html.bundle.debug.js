// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_show__OR__input_rows = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let selected = 1;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_for_of(input.rows, (row) => {
				const $scope2_id = _scope_id();
				_html(`<li${selected === row.id ? " class=danger" : ""}><button class=select>${_text_mark($scope2_id, "#text/2", row.label, $wg__input_rows)}</button>${_el_mark($scope2_id, "#button/1")}</li>${_el_mark($scope2_id, "#li/0")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_scope($scope2_id, {
					"#LoopKey": row?.id,
					_: _scope_with_id($scope1_id)
				}, "__tests__/template.marko", "4:6", { "#LoopKey": ["row.id", "4:10"] });
			}, "id", $scope1_id, "#ul/0", 1, $wg__input_rows, $wg__input_rows, "</ul>", 1);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 0, 0, 1);
	$wi__input_show__OR__input_rows && _scope($scope0_id, {
		input_rows: _write_if($scope0_reason, 1) && input.rows,
		selected
	}, "__tests__/template.marko", 0, {
		input_rows: ["input.rows"],
		selected: "1:6"
	});
	$wg__input_show || $wi__input_show__OR__input_rows && _resume_branch($scope0_id);
}, 1);
