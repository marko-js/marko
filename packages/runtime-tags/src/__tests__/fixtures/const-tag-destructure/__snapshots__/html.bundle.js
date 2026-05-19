// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { x, y } = {
		x: 1,
		y: 2
	};
	_html(`<div>${_escape(x)}</div>${_escape(y)}`);
	_resume_branch($scope0_id);
}, 1);
