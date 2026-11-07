// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $selected__closures = /* @__PURE__ */ new Set();
	let selected = 1;
	_for_of([{
		id: 1,
		rows: [{ id: 1 }, { id: 2 }]
	}, {
		id: 2,
		rows: [{ id: 3 }, { id: 4 }]
	}], (group) => {
		const $scope1_id = _scope_id();
		_html(`<ul${selected === group.id ? " class=group" : ""}>`);
		forOf(group.rows, (row) => {
			const $scope2_id = _scope_id();
			_html(`<li${selected === row.id ? " class=danger" : ""}><button class=select>${_escape(row.id)}</button>${_el_mark($scope2_id, "b")}</li>${_el_mark($scope2_id, "a")}`);
			_script($scope2_id, "a0");
			_subscribe($selected__closures, _scope($scope2_id, {
				M: row?.id,
				_: _scope_with_id($scope1_id)
			}), "a1");
		});
		_html(`</ul>${_el_mark($scope1_id, "a")}`);
		_scope($scope1_id, {
			M: group?.id,
			_: _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "a", 1, 0, 0, 0, 1);
	_scope($scope0_id, { d: $selected__closures });
	_resume_branch($scope0_id);
}, 1);
