// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<span>${_escape(x)}${_el_resume($scope0_id, "a")}</span><span>${_escape(0)}${_el_resume($scope0_id, "b")}</span>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: x });
	_resume_branch($scope0_id);
}, 1);
