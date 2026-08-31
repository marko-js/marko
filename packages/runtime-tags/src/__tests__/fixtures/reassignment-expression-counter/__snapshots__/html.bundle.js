// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=addTwo>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}<button id=triple>${_text_resume($scope0_id, "d", count)}</button>${_el_resume($scope0_id, "c")}<button id=cube>${_text_resume($scope0_id, "f", count)}</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { g: count });
	_resume_branch($scope0_id);
}, 1);
