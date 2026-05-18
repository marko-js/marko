// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let multiplier = 1;
	const multipliedCount = count * multiplier;
	_html(`<button id=multiplier>increase multiplier (<!>${_escape(multiplier)}${_el_resume($scope0_id, "b")})</button>${_el_resume($scope0_id, "a")}<button id=count>increase count</button>${_el_resume($scope0_id, "c")}<div>${_escape(multipliedCount)}${_el_resume($scope0_id, "d")}</div>`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		e: count,
		f: multiplier
	});
	_resume_branch($scope0_id);
}, 1);
