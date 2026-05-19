// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<div></div>${_el_resume($scope0_id, "a")}<button>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_script($scope1_id, "a0");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "d");
	_script($scope0_id, "a1");
	writeScope($scope0_id, { e: count });
	_resume_branch($scope0_id);
}, 1);
