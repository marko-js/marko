// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $format_getter = _hoist($scope0_id, "__tests__/template.marko_0_format#1/hoist");
	const show = _resume(() => {
		console.log("show", typeof $format_getter);
	}, "__tests__/template.marko_0/show", $scope0_id);
	const format = _resume(() => "formatted", "__tests__/template.marko_0/format");
	_html("<div>ready</div>");
	_script($scope0_id, "__tests__/template.marko_0_show#0", 0);
	_scope($scope0_id, {
		show,
		format
	}, "__tests__/template.marko", 0, {
		show: "1:8",
		format: "2:8"
	});
	_resume_branch($scope0_id);
	_assert_hoist(format);
}, 1);
