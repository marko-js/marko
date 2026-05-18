// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = 0;
	_html("<select>");
	_for_until(3, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<option${_attr("selected", selected === i)}>${_escape(i)}</option>${_el_resume($scope1_id, "#option/0")}`);
		writeScope($scope1_id, {
			"#LoopKey": i,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "3:3", { "#LoopKey": "3:7" });
	}, 0, $scope0_id, "#select/0", 1, 1, 0, "</select>", 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
