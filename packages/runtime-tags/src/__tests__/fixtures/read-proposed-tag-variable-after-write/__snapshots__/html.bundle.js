// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clickCount = 0;
	_html(`<div><button>${_escape(clickCount)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<div></div>${_el_resume($scope0_id, "c")}<div></div>${_el_resume($scope0_id, "d")}</div>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { e: clickCount });
	_resume_branch($scope0_id);
}, 1);
