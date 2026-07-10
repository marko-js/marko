// template.marko
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
		},
		{
			id: 4,
			label: "d"
		}
	];
	_html("<ul id=list>");
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<li${selected === row.id ? " class=sel" : ""}>${_escape(row.label)}${_el_resume($scope1_id, "b")}</li>${_el_resume($scope1_id, "a")}`);
		writeScope($scope1_id, { e: row?.id });
	}, "id", $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	_html(`<button id=sel2>sel2</button>${_el_resume($scope0_id, "b")}<button id=batch>batch</button>${_el_resume($scope0_id, "c")}<button id=swap>swap</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		e: selected,
		f: rows,
		g: rows?.[3],
		h: rows?.[2],
		i: rows?.[0]
	});
	_resume_branch($scope0_id);
}, 1);
