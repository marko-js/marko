// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<div>${_escape(`${_to_text(count)}`)}${_el_resume($scope0_id, "d")}</div>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { e: count });
	_resume_branch($scope0_id);
}, 1);
