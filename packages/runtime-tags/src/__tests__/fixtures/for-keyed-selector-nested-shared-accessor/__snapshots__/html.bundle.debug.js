// template.marko
const $class = [
	"",
	" class=sel",
	" class=hov",
	" class=\"sel hov\""
];
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
	_if(() => {
		if (rows.length) {
			const $scope1_id = _scope_id();
			let hovered = 2;
			_html("<ul>");
			_for_of(rows, (row) => {
				const $scope2_id = _scope_id();
				_html(`<li${$class[(selected === row.id ? 1 : 0) + (hovered === row.id ? 2 : 0)]}><button class=select>${_escape(row.label)}</button>${_el_mark($scope2_id, "#button/1")}<button class=hover>h</button>${_el_mark($scope2_id, "#button/3")}</li>${_el_mark($scope2_id, "#li/0")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_scope($scope2_id, {
					"#LoopKey": row?.id,
					_: _scope_with_id($scope1_id)
				}, "__tests__/template.marko", "6:6", { "#LoopKey": ["row.id", "6:10"] });
			}, "id", $scope1_id, "#ul/0", 1, 0, 0, 0, 1);
			_html("</ul>");
			_scope($scope1_id, {
				hovered,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "3:2", { hovered: "4:8" });
			_resume_branch($scope1_id);
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 0, 0, 0, 1);
	_scope($scope0_id, { selected }, "__tests__/template.marko", 0, { selected: "1:6" });
	_resume_branch($scope0_id);
}, 1);
