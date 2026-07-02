// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_show_start(show);
	_html("<div>Hello!</div>");
	_show_end($scope0_id, "#text/2", show, 1, 1, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { show }, "__tests__/template.marko", 0, { show: "1:6" });
	_resume_branch($scope0_id);
}, 1);
