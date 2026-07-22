// template.marko
var template_default = _template("a", (input) => {
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
		_html(`<li>${_escape(row.id)}${_el_resume($scope1_id, "a")}</li>`);
		writeScope($scope1_id, {});
	}, "id", $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	_html(`<button class=reorder>stable prefix, drop tail, swap</button>${_el_resume($scope0_id, "b")}<button class=front>reorder from front and shrink</button>${_el_resume($scope0_id, "c")}<button class=append>append</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		e: rows,
		f: rows?.[0],
		g: rows?.[1],
		h: rows?.[3],
		i: rows?.[2]
	});
	_resume_branch($scope0_id);
}, 1);
