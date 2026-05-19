// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<div>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html("Hello!");
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: show });
	_resume_branch($scope0_id);
}, 1);
