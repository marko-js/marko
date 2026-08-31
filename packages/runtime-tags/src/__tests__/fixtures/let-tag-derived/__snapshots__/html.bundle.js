// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { a } = input;
	let b = a * 2;
	_html(`<button>Increment</button>${_el_resume($scope0_id, "a")}${_text_resume($scope0_id, "b", a, _serialize_guard($scope0_reason, 0))} ${_text_resume($scope0_id, "c", b, 2)}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { g: b });
	_resume_branch($scope0_id);
}, 1);
