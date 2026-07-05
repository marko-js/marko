// tags/layout/layout.marko
var layout_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<header><button>Menu${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}</header><main>`);
	_dynamic_tag($scope0_id, "c", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0) | _persisted_reason());
	_html("</main>");
	_script($scope0_id, "b0");
	writeScope($scope0_id, { g: _state_reason() && open });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_title = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const $childScope = _peek_scope_id();
	layout_default({ content: _content("a2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<h1>${_escape(_hole_value($scope1_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope1_id, "a", $sg__input_title)}</h1><button class=inc>${_escape(count)}${_el_resume($scope1_id, "c")}</button>${_el_resume($scope1_id, "b")}`);
		_script($scope1_id, "a3");
		_subscribe($count__closures, _subscribe($sg__input_title && $input_title__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) })));
		_resume_branch($scope1_id);
	}) });
	writeScope($scope0_id, {
		e: _state_reason() && count,
		Bd: $sg__input_title && $input_title__closures,
		Be: $count__closures,
		a: _persisted_reason() && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
