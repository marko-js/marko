// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "a")}<pre></pre>${_el_resume($scope0_id, "b")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html("<div>child</div>");
			_script($scope1_id, "a0");
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c", 1, 1, 1, 0, 1);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { d: void 0 });
	_resume_branch($scope0_id);
}, 1);
