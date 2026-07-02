// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 1;
	const MyTag = { content: _content("__tests__/template.marko_1_content", ({ number }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<div>${_escape(number)}${_el_resume($scope1_id, "#text/0", _serialize_guard($scope1_reason, 0))}</div>`);
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {}, "__tests__/template.marko", "2:2");
	}) };
	const $childScope = _peek_scope_id();
	_set_serialize_reason(1);
	MyTag.content({ number: x });
	_html(`<button>${_escape(x)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		x,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { x: "1:6" });
	_resume_branch($scope0_id);
}, 1);
