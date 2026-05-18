// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div></div>${_el_resume($scope0_id, "a")}`);
	{
		const $scope1_id = _scope_id();
		_script($scope1_id, "a0");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}
	writeScope($scope0_id, {});
}, 1);
