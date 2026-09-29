// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = ["a", "b"];
	_html("<table><tbody>");
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<tr><td>${_text_resume($scope1_id, "#text/0", row)}</td></tr>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "2:9");
	}, 0, $scope0_id, "#tbody/0", 1, 1, 1, "</tbody>", 1);
	_html(`</table><button>toggle</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0_rows_length#3");
	_scope($scope0_id, { rows_length: rows?.length }, "__tests__/template.marko", 0, { rows_length: ["rows.length", "1:6"] });
}, 1);
