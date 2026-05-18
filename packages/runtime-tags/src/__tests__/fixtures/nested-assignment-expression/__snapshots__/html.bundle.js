// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clickCount = 0;
	_html(`<button>${_escape(clickCount)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}used to be <span>${_escape(0)}${_el_resume($scope0_id, "c")}</span> which should be the same as <span>${_escape(0)}${_el_resume($scope0_id, "d")}</span>`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { e: clickCount });
	_resume_branch($scope0_id);
}, 1);
