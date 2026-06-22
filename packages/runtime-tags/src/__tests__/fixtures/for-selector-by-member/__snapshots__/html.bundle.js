// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = void 0;
	let rows = [
		{
			user: { id: 1 },
			label: "a"
		},
		{
			user: { id: 2 },
			label: "b"
		},
		{
			user: { id: 3 },
			label: "c"
		}
	];
	_html("<table><tbody>");
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<tr${selected === row.user.id ? " class=danger" : ""}><td><button class=select>${_escape(row.label)}</button>${_el_resume($scope1_id, "b")}</td></tr>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		writeScope($scope1_id, {
			g: row?.user?.id,
			_: _scope_with_id($scope0_id)
		});
	}, (item) => item.user.id, $scope0_id, "a", 1, 0, 0, 0, 1);
	_html("</tbody></table>");
	_resume_branch($scope0_id);
}, 1);
