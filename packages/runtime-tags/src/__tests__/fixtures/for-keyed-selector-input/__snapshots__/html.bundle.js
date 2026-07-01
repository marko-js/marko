// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_rows = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let enabled = true;
	_html(`<button class=flip>flip</button>${_el_resume($scope0_id, "a")}<ul>`);
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<li${input.selected === row.id ? " class=sel" : ""}>${_escape(row.label)}${_el_resume($scope1_id, "b", $sg__input_rows)}</li>${_el_resume($scope1_id, "a")}`);
		writeScope($scope1_id, {
			e: row?.id,
			_: _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "b", 1, $sg__input_rows, $sg__input_rows, "</ul>", 1);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		f: input.selected,
		g: enabled
	});
	_resume_branch($scope0_id);
}, 1);
