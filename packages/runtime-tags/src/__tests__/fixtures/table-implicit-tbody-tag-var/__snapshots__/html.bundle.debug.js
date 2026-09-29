// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = ["a"];
	const total = rows.join("+");
	_html("<table><tbody><tr><th>rows</th></tr></tbody><tbody>");
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<tr><td>${_text_resume($scope1_id, "#text/0", row)}</td></tr>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "5:4");
	}, 0, $scope0_id, "#tbody/0", 1, 1, 1, "</tbody>", 1);
	_html(`<tfoot><tr><td>${_text_resume($scope0_id, "#text/1", total)}</td></tr></tfoot></table><button>add</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { rows }, "__tests__/template.marko", 0, { rows: "1:6" });
}, 1);
