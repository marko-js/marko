// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $selected__closures = /* @__PURE__ */ new Set();
	let selected = 1;
	_await($scope0_id, "a", resolveAfter([
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
			_html(`<li${selected === row.id ? " class=danger" : ""}><button class=select>${_escape(row.label)}</button>${_el_mark($scope2_id, "b")}</li>${_el_mark($scope2_id, "a")}`);
			_script($scope2_id, "a0");
			_scope($scope2_id, {
				M: row?.id,
				_: _scope_with_id($scope1_id)
			});
		}, "id", $scope1_id, "a", 1, 0, 0, 0, 1);
		_html("</ul>");
		_subscribe($selected__closures, _scope($scope1_id, {}), "a1", 0);
		_resume_branch($scope1_id);
	});
	_scope($scope0_id, { c: $selected__closures });
	_resume_branch($scope0_id);
}, 1);
