// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let hide = false;
	_html("<div id=a>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html("<span>static content</span>");
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, "</div>", 1);
	_html("<div id=b>");
	_if(() => {}, $scope0_id, "b", 1, 1, 1, "</div>", 1);
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		d: show,
		e: hide
	});
	_resume_branch($scope0_id);
}, 1);
