// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html("<!--M_*note pending--><span>visible</span>");
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { d: count });
	_resume_branch($scope0_id);
}, 1);
