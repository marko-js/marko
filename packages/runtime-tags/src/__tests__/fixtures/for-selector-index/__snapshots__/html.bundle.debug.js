// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = undefined;
	let rows = [
		"a",
		"b",
		"c"
	];
	_html("<table><tbody>");
	_for_of(rows, (label, i) => {
		const $scope1_id = _scope_id();
		_html(`<tr${_attr_class(selected === i && "danger")}><td><button class=select>${_escape(label)}</button>${_el_resume($scope1_id, "#button/1")}</td></tr>${_el_resume($scope1_id, "#tr/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {
			"#LoopKey": i,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "5:4", { "#LoopKey": "5:15" });
	}, 0, $scope0_id, "#tbody/0", 1, 0, 0, 0, 1);
	_html("</tbody></table>");
	_resume_branch($scope0_id);
}, 1);
