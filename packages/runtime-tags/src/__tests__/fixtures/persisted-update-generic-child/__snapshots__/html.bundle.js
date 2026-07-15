// tags/badge.marko
var badge_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span${_attr_class(_hole_value($scope0_id, "Nclass:a", ["badge", input.tone], _persisted_reason()))}${_attr("title", _hole_value($scope0_id, "Ntitle:a", `tone: ${input.tone}`, _persisted_reason()))}>${_escape(_hole_value($scope0_id, "Qb", input.label, _persisted_reason()))}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 2))}</span>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}`);
	_serialize_guard($scope0_reason, 0) && writeScope($scope0_id, {});
});

// tags/panel.marko
var panel_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<details${_attr_details_or_dialog_open($scope0_id, "a", _hole_value($scope0_id, "Nopen:a", input.expanded, _persisted_reason()))}><summary>${_escape(_hole_value($scope0_id, "Qb", input.title, _persisted_reason()))}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 2))}</summary><p>${_escape(_hole_value($scope0_id, "Qc", input.body, _persisted_reason()))}${_el_resume($scope0_id, "c", _serialize_guard($scope0_reason, 3))}</p></details>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}`);
	_serialize_guard($scope0_reason, 0) && writeScope($scope0_id, {});
});

// tags/toggle.marko
var toggle_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let on = false;
	_html(`<button class=toggle>off${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<em>${_escape(_hole_value($scope0_id, "Qc", input.name, _persisted_reason()))}${_el_resume($scope0_id, "c", _serialize_guard($scope0_reason, 0))}</em>`);
	_script($scope0_id, "d0");
	writeScope($scope0_id, { g: _state_reason() && on });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label__OR__input_tone = _serialize_guard($scope0_reason, 0), $sg__input_panel_title__OR__input_panel_body__OR__input_panel_expanded = _serialize_guard($scope0_reason, 1), $sg__input_name = _serialize_guard($scope0_reason, 7);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	_update_child($scope0_id, "Sc", $childScope);
	_set_serialize_reason({
		0: $sg__input_label__OR__input_tone,
		1: _serialize_guard($scope0_reason, 3),
		2: _serialize_guard($scope0_reason, 2)
	});
	badge_default({
		label: input.label,
		tone: input.tone
	});
	const $childScope2 = _peek_scope_id();
	_update_child($scope0_id, "Sd", $childScope2);
	_set_serialize_reason({
		0: $sg__input_panel_title__OR__input_panel_body__OR__input_panel_expanded,
		1: _serialize_guard($scope0_reason, 6),
		2: _serialize_guard($scope0_reason, 4),
		3: _serialize_guard($scope0_reason, 5)
	});
	panel_default({
		title: input.panel.title,
		body: input.panel.body,
		expanded: input.panel.expanded
	});
	const $childScope3 = _peek_scope_id();
	_set_serialize_reason($sg__input_name);
	toggle_default({ name: input.name });
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		o: _state_reason() && count,
		c: $sg__input_label__OR__input_tone | _persisted_reason() && _existing_scope($childScope),
		d: $sg__input_panel_title__OR__input_panel_body__OR__input_panel_expanded | _persisted_reason() && _existing_scope($childScope2),
		e: $sg__input_name | _persisted_reason() && _existing_scope($childScope3)
	});
	_resume_branch($scope0_id);
}, 1);
