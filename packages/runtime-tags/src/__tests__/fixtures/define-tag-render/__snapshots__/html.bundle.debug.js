// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const MyTag = { content: _content("__tests__/template.marko_1_content", ({ name }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__name = _serialize_guard($scope1_reason, 0);
		let y = 1;
		_html(`<div>Hello ${_sep($sg__name)}${_escape(name)}${_el_resume($scope1_id, "#text/0", $sg__name)} <!>${_escape(y)}${_el_resume($scope1_id, "#text/1")}</div><button>${_escape(y)}${_el_resume($scope1_id, "#text/3")}</button>${_el_resume($scope1_id, "#button/2")}`);
		_script($scope1_id, "__tests__/template.marko_1_y");
		writeScope($scope1_id, { y }, "__tests__/template.marko", "1:2", { y: "2:8" });
		_resume_branch($scope1_id);
	}) };
	MyTag.content({ name: "Ryan" });
}, 1);
