// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let on = true;
	const viaAnd = { label: "and" };
	const viaTernary = { label: "ternary" };
	const box = { inner: { label: "assign" } };
	const viaAndAssign = box.inner &&= { label: "andassign" };
	_html(`<ul><li>${_text_resume($scope0_id, "a", viaAnd.label ?? "none")}</li><li>${_text_resume($scope0_id, "b", viaTernary.label ?? "none")}</li><li>${_text_resume($scope0_id, "c", viaAndAssign.label ?? "none")}</li></ul><button>toggle</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { e: on });
}, 1);
