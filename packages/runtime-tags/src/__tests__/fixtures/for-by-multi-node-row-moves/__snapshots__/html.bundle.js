// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 }
	];
	_html("<dl>");
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<dt>${_escape(row.id)}</dt><dd>${_escape(row.id)}</dd>`);
		_scope($scope1_id, {});
	}, "id", $scope0_id, "a", 1, 1, 1, "</dl>");
	_html(`<button class=reverse>reverse</button>${_el_mark($scope0_id, "b")}<button class=swap>swap middle</button>${_el_mark($scope0_id, "c")}<button class=mixed>add and move</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { e: rows });
}, 1);
