// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = [{
		id: 1,
		label: "a"
	}, {
		id: 2,
		label: "b"
	}];
	let selected = 1;
	let nextId = 3;
	_html(`<button class=add>add</button>${_el_resume($scope0_id, "#button/0")}<ul>`);
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<li${selected === row.id ? " class=danger" : ""}>${_escape(row.label)}${_el_resume($scope1_id, "#text/1")}</li>${_el_resume($scope1_id, "#li/0")}`);
		writeScope($scope1_id, {
			row_id: row?.id,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "10:4", { row_id: ["row.id", "10:8"] });
	}, "id", $scope0_id, "#ul/1", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		rows,
		selected,
		nextId
	}, "__tests__/template.marko", 0, {
		rows: "1:6",
		selected: "2:6",
		nextId: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
