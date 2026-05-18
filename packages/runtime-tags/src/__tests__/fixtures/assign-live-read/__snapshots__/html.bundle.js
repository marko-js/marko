// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const resetCount = _resume(function() {
		if (count > 0) count = 0;
	}, "a0", $scope0_id);
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<button></button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		d: count,
		e: resetCount
	});
	_resume_branch($scope0_id);
}, 1);
