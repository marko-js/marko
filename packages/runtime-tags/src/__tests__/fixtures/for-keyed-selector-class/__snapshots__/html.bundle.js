// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = void 0;
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
	_html("<table><tbody>");
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<tr${_attr_class(selected === row.id && "danger")}><td><button class=select>${_escape(row.label)}${_el_resume($scope1_id, "c")}</button>${_el_resume($scope1_id, "b")}</td></tr>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		writeScope($scope1_id, {
			f: row?.id,
			_: _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "a", 1, 1, 1, "</tbody>", 1);
	_html(`</table><button class=remove>remove selected</button>${_el_resume($scope0_id, "b")}<button class=rotate>rotate</button>${_el_resume($scope0_id, "c")}<button class=clear>clear</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		e: selected,
		f: rows
	});
	_resume_branch($scope0_id);
}, 1);
