// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
	_html(`<button class=flip>flip</button>${_el_resume($scope0_id, "#button/0")}<ul>`);
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<li${enabled && selected === row.id ? " class=danger" : ""}>${_escape(row.label)}</li>${_el_resume($scope1_id, "#li/0")}`);
		writeScope($scope1_id, {
			row_id: row?.id,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "6:4", { row_id: ["row.id", "6:8"] });
	}, "id", $scope0_id, "#ul/1", 1, 0, 0, 0, 1);
	_html("</ul>");
	_script($scope0_id, "__tests__/template.marko_0_enabled");
	writeScope($scope0_id, {
		enabled,
		selected
	}, "__tests__/template.marko", 0, {
		enabled: "1:6",
		selected: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
