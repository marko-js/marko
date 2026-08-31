// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	({ content: _content("a0", ({ name }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		let y = 1;
		_html(`<div>Hello ${_text_resume($scope1_id, "a", name, _serialize_guard($scope1_reason, 0) * 2)} ${_text_resume($scope1_id, "b", y, 2)}</div><button>${_text_resume($scope1_id, "d", y)}</button>${_el_resume($scope1_id, "c")}`);
		_script($scope1_id, "a1");
		writeScope($scope1_id, { h: y });
		_resume_branch($scope1_id);
	}, _scope_id()) }).content({ name: "Ryan" });
}, 1);
