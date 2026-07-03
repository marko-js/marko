// tags/layout/layout.marko
var layout_default = _template("__tests__/tags/layout/layout.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<header><button>${open ? "Close" : "Menu"}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}</header><main>`);
	_dynamic_tag($scope0_id, "#text/2", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0) | _persisted_reason());
	_html("</main>");
	_script($scope0_id, "__tests__/tags/layout/layout.marko_0");
	writeScope($scope0_id, { open: _state_reason() && open }, "__tests__/tags/layout/layout.marko", 0, { open: "1:6" });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	const $childScope = _peek_scope_id();
	layout_default({ content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<h1>${_escape(_hole_value($scope1_id, "#text/0", input.title, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", $sg__input_title)}</h1><button class=inc>${_escape(count)}${_el_resume($scope1_id, "#text/2")}</button>${_el_resume($scope1_id, "#button/1")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_subscribe($count__closures, _subscribe($sg__input_title && $input_title__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2")));
		_resume_branch($scope1_id);
	}) });
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"ClosureScopes:input_title": $sg__input_title && $input_title__closures,
		"ClosureScopes:count": $count__closures,
		"#childScope/0": _persisted_reason() && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
