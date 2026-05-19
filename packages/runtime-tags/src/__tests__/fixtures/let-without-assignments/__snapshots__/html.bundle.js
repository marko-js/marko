// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html("<ul>");
	forUntil(count, 0, 1, (i) => {
		_scope_id();
		_html(`<li>${_escape(i)}</li>`);
	});
	_html(`</ul>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
