// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	let rows = [{
		id: "a",
		cells: [
			1,
			2,
			3
		]
	}, {
		id: "b",
		cells: [4, 5]
	}];
	_html("<div id=grid>");
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html("<div>");
		_for_of(row.cells, (cell) => {
			const $scope2_id = _scope_id();
			_html(`<span>${_escape(row.id)}${_el_resume($scope2_id, "#text/0")}<!>${_escape(cell)}${_el_resume($scope2_id, "#text/1")}.<!>${_escape(count)}${_el_resume($scope2_id, "#text/2")}</span>`);
			_subscribe($count__closures, writeScope($scope2_id, {}, "__tests__/template.marko", "6:8"));
		}, (cell) => cell, $scope1_id, "#div/0", 1, 1, 1, "</div>", 1);
		writeScope($scope1_id, { row_id: row?.id }, "__tests__/template.marko", "4:4", { row_id: ["row.id", "4:8"] });
	}, "id", $scope0_id, "#div/0", 1, 1, 1, "</div>", 1);
	_html(`<button id=both>both</button>${_el_resume($scope0_id, "#button/1")}<button id=count>count</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
