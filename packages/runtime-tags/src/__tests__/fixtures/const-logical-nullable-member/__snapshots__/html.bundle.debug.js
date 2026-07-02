// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	const viaAnd = on && { label: "and" };
	const viaTernary = on ? { label: "ternary" } : null;
	const box = { inner: on ? { label: "assign" } : null };
	const viaAndAssign = box.inner &&= { label: "andassign" };
	_html(`<ul><li>${_escape(viaAnd.label ?? "none")}${_el_resume($scope0_id, "#text/0")}</li><li>${_escape(viaTernary.label ?? "none")}${_el_resume($scope0_id, "#text/1")}</li><li>${_escape(viaAndAssign.label ?? "none")}${_el_resume($scope0_id, "#text/2")}</li></ul><button>toggle</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { on }, "__tests__/template.marko", 0, { on: "3:6" });
	_resume_branch($scope0_id);
}, 1);
