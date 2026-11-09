// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $selected__closures = new Set();
	let selected = 1;
	let groups = [{
		id: 1,
		rows: [{ id: 1 }, { id: 2 }]
	}, {
		id: 2,
		rows: [{ id: 3 }, { id: 4 }]
	}];
	_for_of(groups, (group) => {
		const $scope1_id = _scope_id();
		_html(`<ul${selected === group.id ? " class=group" : ""}>`);
		forOf(group.rows, (row) => {
			const $scope2_id = _scope_id();
			_html(`<li${selected === row.id ? " class=danger" : ""}><button class=select>${_escape(row.id)}</button>${_el_mark($scope2_id, "#button/1")}</li>${_el_mark($scope2_id, "#li/0")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_subscribe($selected__closures, _scope($scope2_id, {
				"#LoopKey": row?.id,
				_: _scope_with_id($scope1_id)
			}, "__tests__/template.marko", "5:6", { "#LoopKey": ["row.id", "5:10"] }), "__tests__/template.marko_2_selected#0:1/subscribe");
		});
		_html(`</ul>${_el_mark($scope1_id, "#ul/0")}`);
		_scope($scope1_id, {
			"#LoopKey": group?.id,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:2", { "#LoopKey": ["group.id", "3:6"] });
	}, "id", $scope0_id, "#text/0", 1, 0, 0, 0, 1);
	_scope($scope0_id, { "ClosureScopes:selected/3": $selected__closures }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
