// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	const shared = count * 2;
	const once = count * 3;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}<div>${_escape(shared)}${_el_resume($scope0_id, "b")} | <!>${_escape(shared + once)}${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { d: count });
	_resume_branch($scope0_id);
}, 1);
