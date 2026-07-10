// template.marko
function createWrapper(a) {
	return { a };
}
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { a, a: b } = createWrapper(0);
	_html(`<button>${_escape(a)}${_el_resume($scope0_id, "b")} <!>${_escape(b)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { d: void 0 });
	_resume_branch($scope0_id);
}, 1);
