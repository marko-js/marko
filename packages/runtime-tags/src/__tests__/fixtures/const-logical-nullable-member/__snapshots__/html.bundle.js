// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	const viaAnd = { label: "and" };
	const viaTernary = { label: "ternary" };
	const box = { inner: { label: "assign" } };
	const viaAndAssign = box.inner &&= { label: "andassign" };
	_html(`<ul><li>${_escape(viaAnd.label ?? "none")}${_el_resume($scope0_id, "a")}</li><li>${_escape(viaTernary.label ?? "none")}${_el_resume($scope0_id, "b")}</li><li>${_escape(viaAndAssign.label ?? "none")}${_el_resume($scope0_id, "c")}</li></ul><button>toggle</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { e: on });
	_resume_branch($scope0_id);
}, 1);
