// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html("<div>");
	_if(() => {}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_html(`<span class=hidden>${_escape($global().x)}</span>`);
			writeScope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { d: show });
	_resume_branch($scope0_id);
}, 1);
