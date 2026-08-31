// template.marko
function createWrapper(a) {
	return { a };
}
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const { a, a: b } = createWrapper(count);
	_html(`<button>${_text_resume($scope0_id, "b", a)} ${_text_resume($scope0_id, "c", b, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: count });
	_resume_branch($scope0_id);
}, 1);
