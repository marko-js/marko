// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $selected__closures = new Set();
	let selected = 1;
	_await($scope0_id, "#text/0", resolveAfter([
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
	]), (rows) => {
		const $scope1_id = _scope_id();
		_html("<ul>");
		_for_of(rows, (row) => {
			const $scope2_id = _scope_id();
			_html(`<li${selected === row.id ? " class=danger" : ""}><button class=select>${_escape(row.label)}</button>${_el_mark($scope2_id, "#button/1")}</li>${_el_mark($scope2_id, "#li/0")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_scope($scope2_id, {
				"#LoopKey": row?.id,
				_: _scope_with_id($scope1_id)
			}, "__tests__/template.marko", "5:6", { "#LoopKey": ["row.id", "5:10"] });
		}, "id", $scope1_id, "#ul/0", 1, 0, 0, 0, 1);
		_html("</ul>");
		_subscribe($selected__closures, _scope($scope1_id, {}, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_selected#0:1/subscribe", 0);
		_resume_branch($scope1_id);
	});
	_scope($scope0_id, { "ClosureScopes:selected/2": $selected__closures }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
