// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = 1;
	let rows = [{
		id: 1,
		label: "a"
	}, {
		id: 2,
		label: "b"
	}];
	_html("<ul>");
	_for_of(rows, (row) => {
		const $scope1_id = _scope_id();
		_html(`<li${selected === row.id ? " class=danger" : ""}><button class=select>${_escape(row.label)}</button>${_el_mark($scope1_id, "b")}</li>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, {
			M: row?.id,
			_: _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "a", 1, 0, 0, 0, 1);
	_html("</ul><ol>");
	_for_of(rows, (row) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_escape(row.label)}: ${_text_mark($scope2_id, "b", selected, 2)}</li>`);
		_scope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, "id", $scope0_id, "b", 1, 0, 0, 0, 1);
	_html("</ol>");
}, 1);
