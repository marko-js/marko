// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 0;
	_html(`<div id=ref></div><button id=increment>Increment</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { b: x });
	_resume_branch($scope0_id);
}, 1);
