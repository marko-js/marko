// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const apply = _action(_resume((act) => act, "__tests__/template.marko_0/value", $scope0_id));
	let status = "idle";
	_html(`<button>go</button>${_el_resume($scope0_id, "#button/0")}<p id=status>${_escape(status)}${_el_resume($scope0_id, "#text/1")}</p><p id=pending>${_escape(String(apply.pending))}${_el_resume($scope0_id, "#text/2")}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { apply }, "__tests__/template.marko", 0, { apply: "4:9" });
	_resume_branch($scope0_id);
}, 1);
