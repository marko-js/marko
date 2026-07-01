// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let enabled = true;
	let selected = 2;
	let rows = [
		{
			id: 1,
			label: "a"
		},
		{
			id: 2,
			label: "b"
		},
		{
			id: 3,
			label: "c"
		}
	];
	_html(`<button class=flip>flip</button>${_el_resume($scope0_id, "a")}<ul>`);
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<li${selected === row.id ? " class=danger" : ""}>${_escape(row.label)}</li>${_el_resume($scope1_id, "a")}`);
		writeScope($scope1_id, {
			e: row?.id,
			_: _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "b", 1, 0, 0, 0, 1);
	_html("</ul>");
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		c: enabled,
		d: selected
	});
	_resume_branch($scope0_id);
}, 1);
