// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>Hello</span>");
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<section>");
	child_default({});
	_html(`</section><div>${_escape(count)}</div>`);
	_resume_branch($scope0_id);
}, 1);
