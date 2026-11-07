// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = [
		{ id: 1 },
		{ id: 2 },
		{ id: 3 },
		{ id: 4 },
		{ id: 5 }
	];
	_html("<ul>");
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(row.id)}</li>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
	}, "id", $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	_html(`<button class=reorder>stable prefix, drop tail, swap</button>${_el_mark($scope0_id, "#button/1")}<button class=front>reorder from front and shrink</button>${_el_mark($scope0_id, "#button/2")}<button class=append>append</button>${_el_mark($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { rows }, "__tests__/template.marko", 0, { rows: "1:6" });
}, 1);
