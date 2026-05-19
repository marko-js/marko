// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	let y = 2;
	_html("<span>child</span>");
	const $return = x + y;
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	let data = child_default({});
	_html(`<div>${_escape(data)}</div>`);
}, 1);
