// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	let n = 0;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}<div>`);
	_show_start(open);
	_html(`<button id=inc>count <!>${_escape(n)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}`);
	_show_end($scope0_id, "b", open, 1, 1, "</div>", 1);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		e: open,
		f: n
	});
	_resume_branch($scope0_id);
}, 1);
