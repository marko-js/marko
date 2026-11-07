// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
		_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
	}, "id", $scope0_id, "#dl/0", 1, 1, 1, "</dl>");
	_html(`<button class=reverse>reverse</button>${_el_mark($scope0_id, "#button/1")}<button class=swap>swap middle</button>${_el_mark($scope0_id, "#button/2")}<button class=mixed>add and move</button>${_el_mark($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { rows }, "__tests__/template.marko", 0, { rows: "1:6" });
}, 1);
