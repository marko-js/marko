// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let multiplier = 1;
	const multipliedCount = count * multiplier;
	_html(`<button id=multiplier>increase multiplier (${_text_resume($scope0_id, "b", multiplier, 2)})</button>${_el_resume($scope0_id, "a")}<button id=count>increase count</button>${_el_resume($scope0_id, "c")}<div>${_text_resume($scope0_id, "d", multipliedCount)}</div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		e: count,
		f: multiplier
	});
	_resume_branch($scope0_id);
}, 1);
