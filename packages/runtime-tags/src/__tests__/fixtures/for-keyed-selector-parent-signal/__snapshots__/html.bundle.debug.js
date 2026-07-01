// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = undefined;
	let enabled = true;
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
	_html("<table><tbody>");
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<tr${enabled && selected === row.id ? " class=danger" : ""}><td><button class=select>${_escape(row.label)}</button>${_el_resume($scope1_id, "#button/1")}</td></tr>${_el_resume($scope1_id, "#tr/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_row_id");
		writeScope($scope1_id, {
			row_id: row?.id,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "6:4", { row_id: ["row.id", "6:8"] });
	}, "id", $scope0_id, "#tbody/0", 1, 0, 0, 0, 1);
	_html(`</tbody></table><button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_enabled");
	writeScope($scope0_id, {
		selected,
		enabled
	}, "__tests__/template.marko", 0, {
		selected: "1:6",
		enabled: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
