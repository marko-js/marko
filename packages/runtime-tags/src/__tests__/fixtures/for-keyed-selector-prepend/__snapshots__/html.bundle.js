// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = [{
		id: 1,
		label: "a"
	}, {
		id: 2,
		label: "b"
	}];
	let selected = 1;
	let nextId = 3;
	_html(`<button class=add>add</button>${_el_resume($scope0_id, "a")}<ul>`);
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<li${selected === row.id ? " class=danger" : ""}>${_escape(row.label)}${_el_resume($scope1_id, "b")}</li>${_el_resume($scope1_id, "a")}`);
		writeScope($scope1_id, {
			e: row?.id,
			_: _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "b", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		c: rows,
		d: selected,
		e: nextId
	});
	_resume_branch($scope0_id);
}, 1);
