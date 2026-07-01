// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_show_start(show);
	_html("<div>Hello!</div>");
	_show_end($scope0_id, "c", show, 1, 1, 0, 1);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { d: show });
	_resume_branch($scope0_id);
}, 1);
