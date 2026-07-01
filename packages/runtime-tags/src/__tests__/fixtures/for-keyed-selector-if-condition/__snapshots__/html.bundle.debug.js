// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
		}
	];
	_html("<ul>");
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html("<li>");
		_if(() => {
			if (selected === row.id) {
				const $scope2_id = _scope_id();
				_html("<strong>*</strong>");
				writeScope($scope2_id, {}, "__tests__/template.marko", "6:8");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, 1, 1, 0, 1);
		_html(`<button class=select>${_escape(row.label)}</button>${_el_resume($scope1_id, "#button/1")}</li>`);
		_script($scope1_id, "__tests__/template.marko_1_row_id");
		writeScope($scope1_id, {
			row_id: row?.id,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "4:4", { row_id: ["row.id", "4:8"] });
	}, "id", $scope0_id, "#ul/0", 1, 0, 0, 0, 1);
	_html("</ul>");
	_resume_branch($scope0_id);
}, 1);
