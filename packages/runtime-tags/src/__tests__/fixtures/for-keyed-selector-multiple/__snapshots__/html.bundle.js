// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = 1;
	let hovered = 2;
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
	_html(`<button class=select>select</button>${_el_resume($scope0_id, "a")}<button class=hover>hover</button>${_el_resume($scope0_id, "b")}<ul>`);
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<li${_attr_class([selected === row.id && "sel", hovered === row.id && "hov"])}>${_escape(row.label)}</li>${_el_resume($scope1_id, "a")}`);
		writeScope($scope1_id, {
			e: row?.id,
			_: _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "c", 1, 0, 0, 0, 1);
	_html("</ul>");
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		d: selected,
		e: hovered
	});
	_resume_branch($scope0_id);
}, 1);
