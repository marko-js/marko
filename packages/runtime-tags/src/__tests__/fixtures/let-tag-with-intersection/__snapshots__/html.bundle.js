// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	_html(`<button>${_escape(x)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}${_escape(2)}${_el_resume($scope0_id, "c")} <!>${_escape(3)}${_el_resume($scope0_id, "d")} <!>${_escape(5)}${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { f: x });
	_resume_branch($scope0_id);
}, 1);
