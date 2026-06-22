// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_await($scope0_id, "a", `v${n}`, (value) => {
		const $scope1_id = _scope_id();
		_html(`Got: <!>${_escape(value)}${_el_resume($scope1_id, "a")}`);
		writeScope($scope1_id, {});
	});
	_html(`<button>inc</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: n });
	_resume_branch($scope0_id);
}, 1);
