// template.marko
function rendered(id) {
	console.log(`row ${id}`);
	return true;
}
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = 1;
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
	_if(() => {
		if (rows.length) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			_for_of(rows, (row) => {
				const $scope2_id = _scope_id();
				_html(`<li${rendered(row.id) && selected === row.id ? " class=danger" : ""}><button class=select>${_text_mark($scope2_id, "c", row.label)}</button>${_el_mark($scope2_id, "b")}</li>${_el_mark($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				_scope($scope2_id, { M: row?.id });
			}, "id", $scope1_id, "a", 1, 1, 1, "</ul>", 1);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button class=add>add</button>${_el_mark($scope0_id, "b")}<button class=clear>clear</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: selected,
		e: rows
	});
}, 1);
