// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 },
		{ id: 5 }
	];
	_html("<ul>");
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(row.id)}${_el_resume($scope1_id, "#text/0")}</li>`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
	}, "id", $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	_html(`<button class=reorder>stable prefix, drop tail, swap</button>${_el_resume($scope0_id, "#button/1")}<button class=front>reorder from front and shrink</button>${_el_resume($scope0_id, "#button/2")}<button class=append>append</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_rows_0_rows_1");
	_script($scope0_id, "__tests__/template.marko_0_rows_0_rows_1_rows_3_rows_2");
	writeScope($scope0_id, {
		rows,
		rows_0: rows?.[0],
		rows_1: rows?.[1],
		rows_3: rows?.[3],
		rows_2: rows?.[2]
	}, "__tests__/template.marko", 0, {
		rows: "1:6",
		rows_0: ["rows[0]", "1:6"],
		rows_1: ["rows[1]", "1:6"],
		rows_3: ["rows[3]", "1:6"],
		rows_2: ["rows[2]", "1:6"]
	});
	_resume_branch($scope0_id);
}, 1);
