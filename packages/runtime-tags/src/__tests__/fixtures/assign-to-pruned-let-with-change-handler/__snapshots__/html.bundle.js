// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let liveCount = 0;
	_html(`<button>Before</button>${_el_resume($scope0_id, "a")}<div>${_escape(liveCount)}${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { Md: _resume(function(v) {
		liveCount = v;
	}, "a0", $scope0_id) || void 0 });
	_resume_branch($scope0_id);
}, 1);
