// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = 1;
	let rows = [{
		id: 1,
		label: "a"
	}, {
		id: 2,
		label: "b"
	}];
	_html("<ul>");
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<li${selected === row.id ? " class=danger" : ""}><button class=toggle>${_escape(row.label)}</button>${_el_resume($scope1_id, "b")}</li>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		writeScope($scope1_id, {
			f: row?.id,
			_: _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "a", 1, 0, 0, 0, 1);
	_html("</ul>");
	writeScope($scope0_id, { b: selected });
	_resume_branch($scope0_id);
}, 1);
