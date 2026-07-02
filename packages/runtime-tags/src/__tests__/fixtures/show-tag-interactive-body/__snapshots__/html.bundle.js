// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let visible = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_show_start(visible, 1);
	let count = 0;
	_html(`<button id=inc>count <!>${_escape(count)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}`);
	_show_end($scope0_id, "e", visible);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		f: visible,
		g: count
	});
	_resume_branch($scope0_id);
}, 1);
