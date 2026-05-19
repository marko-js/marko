// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let liveCount = 0;
	let count = 0;
	_html(`<button>Before</button>${_el_resume($scope0_id, "#button/0")}<div>${_escape(liveCount)}${_el_resume($scope0_id, "#text/1")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { "TagVariableChange:count": _resume(function(v) {
		liveCount = v;
	}, "__tests__/template.marko_0/valueChange", $scope0_id) || void 0 }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
