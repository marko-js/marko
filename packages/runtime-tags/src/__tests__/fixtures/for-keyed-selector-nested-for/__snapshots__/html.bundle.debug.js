// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = 1;
	let groups = [{
		id: "x",
		rows: [{ id: 1 }, { id: 2 }]
	}, {
		id: "y",
		rows: [{ id: 3 }, { id: 4 }]
	}];
	_for_of(groups, (group) => {
		const $scope1_id = _scope_id();
		_html("<ul>");
		_for_of(group.rows, (row) => {
			const $scope2_id = _scope_id();
			_html(`<li${selected === row.id ? " class=danger" : ""}><button class=select>${_escape(row.id)}</button>${_el_mark($scope2_id, "#button/1")}</li>${_el_mark($scope2_id, "#li/0")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_scope($scope2_id, { "#LoopKey": row?.id }, "__tests__/template.marko", "5:6", { "#LoopKey": ["row.id", "5:10"] });
		}, "id", $scope1_id, "#ul/0", 1, 1, 1, "</ul>", 1);
		_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
	}, "id", $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button class=add>add</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		selected,
		groups
	}, "__tests__/template.marko", 0, {
		selected: "1:6",
		groups: "2:6"
	});
}, 1);
