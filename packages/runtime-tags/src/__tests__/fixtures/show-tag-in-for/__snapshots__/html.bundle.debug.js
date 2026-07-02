// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let compact = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}<ul>`);
	_for_of([
		"read",
		"write",
		"admin"
	], (label) => {
		const $scope1_id = _scope_id();
		const $show = !compact;
		_show_start($show);
		_html(`<li>${_escape(label)}</li>`);
		_show_end($scope1_id, "#text/2", $show, 1, 1, 0, 1);
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:4");
	}, 0, $scope0_id, "#ul/1", 1, 0, 0);
	_html("</ul>");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { compact }, "__tests__/template.marko", 0, { compact: "1:6" });
	_resume_branch($scope0_id);
}, 1);
