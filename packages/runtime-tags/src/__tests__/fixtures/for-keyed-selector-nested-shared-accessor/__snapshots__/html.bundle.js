// template.marko
const $class = [
	"",
	" class=sel",
	" class=hov",
	" class=\"sel hov\""
];
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
		}
	];
	_if(() => {
		if (rows.length) {
			const $scope1_id = _scope_id();
			let hovered = 2;
			_html("<ul>");
			_for_of(rows, (row) => {
				const $scope2_id = _scope_id();
				_html(`<li${$class[(selected === row.id ? 1 : 0) + (hovered === row.id ? 2 : 0)]}><button class=select>${_escape(row.label)}</button>${_el_mark($scope2_id, "b")}<button class=hover>h</button>${_el_mark($scope2_id, "d")}</li>${_el_mark($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				_scope($scope2_id, {
					M: row?.id,
					_: _scope_with_id($scope1_id)
				});
			}, "id", $scope1_id, "a", 1, 0, 0, 0, 1);
			_html("</ul>");
			_scope($scope1_id, {
				b: hovered,
				_: _scope_with_id($scope0_id)
			});
			_resume_branch($scope1_id);
			return 0;
		}
	}, $scope0_id, "a", 1, 0, 0, 0, 1);
	_scope($scope0_id, { b: selected });
	_resume_branch($scope0_id);
}, 1);
