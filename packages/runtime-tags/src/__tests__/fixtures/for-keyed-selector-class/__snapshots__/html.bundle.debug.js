// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = undefined;
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
		_html(`<tr${_attr_class(selected === row.id && "danger")}><td><button class=select>${_escape(row.label)}${_el_resume($scope1_id, "#text/2")}</button>${_el_resume($scope1_id, "#button/1")}</td></tr>${_el_resume($scope1_id, "#tr/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_row_id");
		writeScope($scope1_id, {
			row_id: row?.id,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "5:4", { row_id: ["row.id", "5:8"] });
	}, "id", $scope0_id, "#tbody/0", 1, 1, 1, "</tbody>", 1);
	_html(`</table><button class=remove>remove selected</button>${_el_resume($scope0_id, "#button/1")}<button class=rotate>rotate</button>${_el_resume($scope0_id, "#button/2")}<button class=clear>clear</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_rows");
	_script($scope0_id, "__tests__/template.marko_0_selected_rows");
	writeScope($scope0_id, {
		selected,
		rows
	}, "__tests__/template.marko", 0, {
		selected: "1:6",
		rows: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
