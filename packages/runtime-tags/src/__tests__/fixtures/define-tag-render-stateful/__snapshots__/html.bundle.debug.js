// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const MyTag = { content: _content("__tests__/template.marko_1_content", ({ name, count }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__name = _serialize_guard($scope1_reason, 1), $sg__count = _serialize_guard($scope1_reason, 2);
		_html(`<div>Hello ${_sep($sg__name)}${_escape(name)}${_el_resume($scope1_id, "#text/0", $sg__name)} ${_sep($sg__count)}${_escape(count)}${_el_resume($scope1_id, "#text/1", $sg__count)}</div>`);
		_serialize_if($scope1_reason, 0) && writeScope($scope1_id, {}, "__tests__/template.marko", "6:2");
	}) };
	const $childScope = _peek_scope_id();
	_set_serialize_reason(10);
	MyTag.content({
		name: "Ryan",
		count
	});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
