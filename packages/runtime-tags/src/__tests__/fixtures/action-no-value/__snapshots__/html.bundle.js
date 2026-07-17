// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const apply = _action(_resume((act) => act, "a0", $scope0_id));
	_html(`<button>go</button>${_el_resume($scope0_id, "a")}<p id=status>${_escape("idle")}${_el_resume($scope0_id, "b")}</p><p id=pending>${_escape(String(apply.pending))}${_el_resume($scope0_id, "c")}</p>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { d: apply });
	_resume_branch($scope0_id);
}, 1);
