// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>child</span>");
	const $return = 4;
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html(`<div>${_escape(child_default({}))}</div>`);
}, 1);
