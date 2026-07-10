// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = 1;
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
		},
		{
			id: 4,
			label: "d"
		}
	];
	_html("<ul id=list>");
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<li${selected === row.id ? " class=sel" : ""}>${_escape(row.label)}${_el_resume($scope1_id, "#text/1")}</li>${_el_resume($scope1_id, "#li/0")}`);
		writeScope($scope1_id, { row_id: row?.id }, "__tests__/template.marko", "4:4", { row_id: ["row.id", "4:8"] });
	}, "id", $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	_html(`<button id=sel2>sel2</button>${_el_resume($scope0_id, "#button/1")}<button id=batch>batch</button>${_el_resume($scope0_id, "#button/2")}<button id=swap>swap</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0_rows_3_rows_2_rows_0");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		selected,
		rows,
		rows_3: rows?.[3],
		rows_2: rows?.[2],
		rows_0: rows?.[0]
	}, "__tests__/template.marko", 0, {
		selected: "1:6",
		rows: "2:6",
		rows_3: ["rows[3]", "2:6"],
		rows_2: ["rows[2]", "2:6"],
		rows_0: ["rows[0]", "2:6"]
	});
	_resume_branch($scope0_id);
}, 1);
