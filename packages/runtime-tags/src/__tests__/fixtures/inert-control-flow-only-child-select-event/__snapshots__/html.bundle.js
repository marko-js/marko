// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let selected = 0;
	_html("<select>");
	_for_until(3, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_html(`<option${_attr("selected", selected === i)}>${_escape(i)}</option>${_el_resume($scope1_id, "a")}`);
		writeScope($scope1_id, {
			M: i,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 1, 0, "</select>", 1, 1);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
