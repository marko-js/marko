// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = ["a", "b"];
	_html("<table><tbody>");
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<tr><td>${_text_resume($scope1_id, "a", row)}</td></tr>`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 1, "</tbody>", 1);
	_html(`</table><button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: rows?.length });
}, 1);
