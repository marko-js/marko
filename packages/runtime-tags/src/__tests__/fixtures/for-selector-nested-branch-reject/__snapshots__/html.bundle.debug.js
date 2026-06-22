// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0), $si__input_show = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $selected__closures = new Set();
	let selected = 1;
	let rows = [{
		id: 1,
		label: "a"
	}, {
		id: 2,
		label: "b"
	}];
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			forOf(rows, (row) => {
				const $scope2_id = _scope_id();
				_html(`<li${selected === row.id ? " class=danger" : ""}><button class=select>${_escape(row.label)}</button>${_el_resume($scope2_id, "#button/1")}</li>${_el_resume($scope2_id, "#li/0")}`);
				_script($scope2_id, "__tests__/template.marko_2_row_id");
				_subscribe($selected__closures, writeScope($scope2_id, {
					row_id: row?.id,
					_: _scope_with_id($scope1_id)
				}, "__tests__/template.marko", "5:6", { row_id: ["row.id", "5:10"] }));
			});
			_html("</ul>");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $sg__input_show, $sg__input_show, $sg__input_show, 0, 1);
	writeScope($scope0_id, {
		selected: $si__input_show && selected,
		rows: $si__input_show && rows,
		"ClosureScopes:selected": $selected__closures
	}, "__tests__/template.marko", 0, {
		selected: "1:6",
		rows: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
