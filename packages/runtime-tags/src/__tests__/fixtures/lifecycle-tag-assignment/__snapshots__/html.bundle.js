// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 0;
	_html(`<div>x=<span>${_escape(x)}${_el_resume($scope0_id, "a")}</span>, was=<!>${_escape(false)}${_el_resume($scope0_id, "b")}</div><button id=increment>Increment</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, { d: x });
	_resume_branch($scope0_id);
}, 1);
