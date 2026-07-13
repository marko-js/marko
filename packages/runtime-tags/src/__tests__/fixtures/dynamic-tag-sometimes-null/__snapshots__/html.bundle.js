// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = null;
	_dynamic_tag($scope0_id, "a", x, {}, _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("Body Content");
	}, $scope0_id));
	_html(`<button></button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { c: x });
	_resume_branch($scope0_id);
}, 1);
