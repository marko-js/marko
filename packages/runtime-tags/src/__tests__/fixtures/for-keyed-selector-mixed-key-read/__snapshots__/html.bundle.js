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
		_html(`<li${selected === row.id ? " class=danger" : ""}><span>${_escape(selected === row.id && row.label)}${_el_resume($scope1_id, "b")}</span><button class=select>x</button>${_el_resume($scope1_id, "c")}</li>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		writeScope($scope1_id, {
			f: row?.id,
			h: row?.label
		});
	}, "id", $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	_html(`<button class=relabel>relabel</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		c: selected,
		d: rows
	});
	_resume_branch($scope0_id);
}, 1);
