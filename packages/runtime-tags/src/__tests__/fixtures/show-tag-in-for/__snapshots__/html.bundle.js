// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let compact = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}<ul>`);
	_for_of([
		"read",
		"write",
		"admin"
	], (label) => {
		const $scope1_id = _scope_id();
		const $show = true;
		_show_start($show);
		_html(`<li>${_escape(label)}</li>`);
		_show_end($scope1_id, "c", $show, 1, 1, 0, 1);
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "b", 1, 0, 0);
	_html("</ul>");
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: compact });
	_resume_branch($scope0_id);
}, 1);
