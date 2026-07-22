// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = 1;
	let rows = [{
		id: 1,
		label: "a"
	}, {
		id: 2,
		label: "b"
	}];
	_html("<ul>");
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<li${selected === row.id ? " class=danger" : ""}><span>${_escape(selected === row.id && row.label)}${_el_resume($scope1_id, "#text/1")}</span><button class=select>x</button>${_el_resume($scope1_id, "#button/2")}</li>${_el_resume($scope1_id, "#li/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_row_id");
		writeScope($scope1_id, {
			row_id: row?.id,
			row_label: row?.label
		}, "__tests__/template.marko", "4:4", {
			row_id: ["row.id", "4:8"],
			row_label: ["row.label", "4:8"]
		});
	}, "id", $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	_html(`<button class=relabel>relabel</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		selected,
		rows
	}, "__tests__/template.marko", 0, {
		selected: "1:6",
		rows: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
