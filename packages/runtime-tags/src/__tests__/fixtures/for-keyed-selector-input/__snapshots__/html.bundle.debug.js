// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_rows = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let enabled = true;
	_html(`<button class=flip>flip</button>${_el_resume($scope0_id, "#button/0")}<ul>`);
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<li${enabled && input.selected === row.id ? " class=sel" : ""}>${_escape(row.label)}${_el_resume($scope1_id, "#text/1", $sg__input_rows)}</li>${_el_resume($scope1_id, "#li/0")}`);
		writeScope($scope1_id, {
			row_id: row?.id,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "4:4", { row_id: ["row.id", "4:8"] });
	}, "id", $scope0_id, "#ul/1", 1, $sg__input_rows, $sg__input_rows, "</ul>", 1);
	_script($scope0_id, "__tests__/template.marko_0_enabled");
	writeScope($scope0_id, {
		input_selected: input.selected,
		enabled
	}, "__tests__/template.marko", 0, {
		input_selected: ["input.selected"],
		enabled: "1:6"
	});
	_resume_branch($scope0_id);
}, 1);
