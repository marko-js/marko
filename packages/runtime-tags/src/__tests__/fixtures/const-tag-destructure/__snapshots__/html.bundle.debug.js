// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let z = {
		x: 1,
		y: 2
	};
	const { x, y } = z;
	_html(`<div>${_escape(x)}</div>${_escape(y)}`);
	_resume_branch($scope0_id);
}, 1);
