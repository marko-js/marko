// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 0;
	_html(`<button>${_text_resume($scope0_id, "b", x)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html("<b>outer</b>");
			_dynamic_tag($scope1_id, "a", null, {});
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c");
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: x });
	_resume_branch($scope0_id);
}, 1);
