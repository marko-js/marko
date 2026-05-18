// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	({ content: _content("a0", ({ name }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__name = _serialize_guard($scope1_reason, 0);
		let y = 1;
		_html(`<div>Hello ${_sep($sg__name)}${_escape(name)}${_el_resume($scope1_id, "a", $sg__name)} <!>${_escape(y)}${_el_resume($scope1_id, "b")}</div><button>${_escape(y)}${_el_resume($scope1_id, "d")}</button>${_el_resume($scope1_id, "c")}`);
		_script($scope1_id, "a1");
		writeScope($scope1_id, { h: y });
		_resume_branch($scope1_id);
	}) }).content({ name: "Ryan" });
}, 1);
