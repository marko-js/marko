// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
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
			_html(`<span>${_escape(row.id)}${_el_resume($scope2_id, "a")}<!>${_escape(cell)}${_el_resume($scope2_id, "b")}.<!>${_escape(count)}${_el_resume($scope2_id, "c")}</span>`);
			_subscribe($count__closures, writeScope($scope2_id, {}));
		}, (cell) => cell, $scope1_id, "a", 1, 1, 1, "</div>", 1);
		writeScope($scope1_id, { e: row?.id });
	}, "id", $scope0_id, "a", 1, 1, 1, "</div>", 1);
	_html(`<button id=both>both</button>${_el_resume($scope0_id, "b")}<button id=count>count</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		d: count,
		Bd: $count__closures
	});
	_resume_branch($scope0_id);
}, 1);
