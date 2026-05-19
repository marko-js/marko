// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<div>`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`${_escape(count)}${_el_resume($scope1_id, "a")}`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, 1, 0, "</div>", 1);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, { d: count });
	_resume_branch($scope0_id);
}, 1);
