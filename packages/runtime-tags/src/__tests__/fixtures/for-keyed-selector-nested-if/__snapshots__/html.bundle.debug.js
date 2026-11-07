// template.marko
function rendered(id) {
	console.log(`row ${id}`);
	return true;
}
var template_default = _template("__tests__/template.marko", (input) => {
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
				_html(`<li${rendered(row.id) && selected === row.id ? " class=danger" : ""}><button class=select>${_text_mark($scope2_id, "#text/2", row.label)}</button>${_el_mark($scope2_id, "#button/1")}</li>${_el_mark($scope2_id, "#li/0")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_scope($scope2_id, { "#LoopKey": row?.id }, "__tests__/template.marko", "9:6", { "#LoopKey": ["row.id", "9:10"] });
			}, "id", $scope1_id, "#ul/0", 1, 1, 1, "</ul>", 1);
			_scope($scope1_id, {}, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button class=add>add</button>${_el_mark($scope0_id, "#button/1")}<button class=clear>clear</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		selected,
		rows
	}, "__tests__/template.marko", 0, {
		selected: "5:6",
		rows: "6:6"
	});
}, 1);
