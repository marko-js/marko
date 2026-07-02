// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clickCount = 0;
	_html(`<div><button id=button>0</button>${_el_resume($scope0_id, "a")}</div>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, { b: clickCount });
	_resume_branch($scope0_id);
}, 1);
