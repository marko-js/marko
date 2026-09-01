// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const MyTag = { content: _content("__tests__/template.marko_1*content", ({ name, count }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<div>Hello ${_text_resume($scope1_id, "#text/0", name, _serialize_guard($scope1_reason, 1) * 2)} ${_text_resume($scope1_id, "#text/1", count, _serialize_guard($scope1_reason, 2) * 2)}</div>`);
		_serialize_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "6:2");
	}, $scope0_id) };
	_set_serialize_reason(10);
	const $childScope = _peek_scope_id();
	MyTag.content({
		name: "Ryan",
		count
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
