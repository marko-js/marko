// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = undefined;
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
		_html(`<tr${_attr_class(selected === row.user.id && "danger")}><td><button class=select>${_escape(row.label)}</button>${_el_resume($scope1_id, "#button/1")}</td></tr>${_el_resume($scope1_id, "#tr/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_row_user_id");
		writeScope($scope1_id, {
			row_user_id: row?.user?.id,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "9:4", { row_user_id: ["row.user.id", "9:8"] });
	}, (item) => item.user.id, $scope0_id, "#tbody/0", 1, 0, 0, 0, 1);
	_html("</tbody></table>");
	_resume_branch($scope0_id);
}, 1);
