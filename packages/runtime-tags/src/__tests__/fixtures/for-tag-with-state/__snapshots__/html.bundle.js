// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	forOf([
		1,
		2,
		3
	], (val, i) => {
		_scope_id();
		_html(`<div>${_escape(i)}: ${_escape(val)}</div>`);
	});
	_for_of([
		1,
		2,
		3
	], (val, i) => {
		const $scope2_id = _scope_id();
		_html(`<div>${_escape(i)}: <!>${_escape(val)}${_el_resume($scope2_id, "b")}</div>`);
		writeScope($scope2_id, {});
	}, 0, $scope0_id, "b", 1, 1, 1, 0, 1);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
