// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
		_html(`<li${selected === row.id ? " class=danger" : ""}><button class=select>${_escape(row.label)}</button>${_el_mark($scope1_id, "#button/1")}</li>${_el_mark($scope1_id, "#li/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			"#LoopKey": row?.id,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "4:4", { "#LoopKey": ["row.id", "4:8"] });
	}, "id", $scope0_id, "#ul/0", 1, 0, 0, 0, 1);
	_html("</ul><ol>");
	_for_of(rows, (row) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_escape(row.label)}: ${_text_mark($scope2_id, "#text/1", selected, 2)}</li>`);
		_scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "11:4");
	}, "id", $scope0_id, "#ol/1", 1, 0, 0, 0, 1);
	_html("</ol>");
}, 1);
