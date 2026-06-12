// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	const getCount = _resume(() => count, "a0", $scope0_id);
	const promise = Promise.resolve(getCount);
	_html(`<button>inc:<!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<div id=ref>0</div>`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		c: count,
		e: promise
	});
	_resume_branch($scope0_id);
}, 1);
