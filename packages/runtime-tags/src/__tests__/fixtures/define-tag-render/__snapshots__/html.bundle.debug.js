// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const MyTag = { content: _content("__tests__/template.marko_1*content", ({ name }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		let y = 1;
		_html(`<div>Hello ${_text_resume($scope1_id, "#text/0", name, _serialize_guard($scope1_reason, 0) * 2)} ${_text_resume($scope1_id, "#text/1", y, 2)}</div><button>${_text_resume($scope1_id, "#text/3", y)}</button>${_el_resume($scope1_id, "#button/2")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, { y }, "__tests__/template.marko", "1:2", { y: "2:8" });
	}, $scope0_id) };
	MyTag.content({ name: "Ryan" });
}, 1);
