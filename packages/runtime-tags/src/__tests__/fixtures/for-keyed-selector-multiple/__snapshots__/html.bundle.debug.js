// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
	_html(`<button class=select>select</button>${_el_resume($scope0_id, "#button/0")}<button class=hover>hover</button>${_el_resume($scope0_id, "#button/1")}<ul>`);
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<li${_attr_class([selected === row.id && "sel", hovered === row.id && "hov"])}>${_escape(row.label)}</li>${_el_resume($scope1_id, "#li/0")}`);
		writeScope($scope1_id, {
			row_id: row?.id,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "7:4", { row_id: ["row.id", "7:8"] });
	}, "id", $scope0_id, "#ul/2", 1, 0, 0, 0, 1);
	_html("</ul>");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		selected,
		hovered
	}, "__tests__/template.marko", 0, {
		selected: "1:6",
		hovered: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
