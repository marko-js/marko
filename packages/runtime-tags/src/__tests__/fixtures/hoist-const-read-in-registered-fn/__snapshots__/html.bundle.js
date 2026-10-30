// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $format_getter = _hoist($scope0_id, "a2");
	const show = _resume(() => {
		console.log("show", typeof $format_getter);
	}, "a0", $scope0_id);
	const format = _resume(() => "formatted", "a1");
	_html("<div>ready</div>");
	_script($scope0_id, "a3", 0);
	_scope($scope0_id, {
		a: show,
		b: format
	});
	_resume_branch($scope0_id);
}, 1);
