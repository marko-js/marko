// tags/badge.marko
var badge_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span${_attr_class(["badge", input.tone])}${_attr("title", `tone: ${input.tone}`)}>${_escape(input.label)}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 2))}</span>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}`);
	_serialize_guard($scope0_reason, 0) && writeScope($scope0_id, {});
});
_renderer_shells({ "b0": ["<span> </span>", " D l"] });

// tags/panel.marko
var panel_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<details${_attr_details_or_dialog_open($scope0_id, "a", _hole_value($scope0_id, "Nopen:a", input.expanded, _persisted_reason()))}><summary>${_escape(_hole_value($scope0_id, "Qb", input.title, _persisted_reason()))}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 2))}</summary><p>${_escape(_hole_value($scope0_id, "Qc", input.body, _persisted_reason()))}${_el_resume($scope0_id, "c", _serialize_guard($scope0_reason, 3))}</p></details>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}`);
	_serialize_guard($scope0_reason, 0) && writeScope($scope0_id, {});
});
_renderer_shells({
	"c0": ["<details><summary> </summary><p> </p></details>", " E lD m"],
	"c": ["<details><summary> </summary><p> </p></details>", " E lD m"]
});

// tags/toggle.marko
var toggle_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let on = false;
	_html(`<button class=toggle>${_escape(_hole_value($scope0_id, "Qb", "off", _state_reason()))}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<em>${_escape(_hole_value($scope0_id, "Qc", input.name, _persisted_reason()))}${_el_resume($scope0_id, "c", _serialize_guard($scope0_reason, 0))}</em>`);
	_script($scope0_id, "d1");
	writeScope($scope0_id, { g: _seed_fill(_state_reason() && on) });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"d0": ["<button class=toggle> </button><em> </em>", " D lD l"],
	"d": ["<button class=toggle> </button><em> </em>", " D lD l"]
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label__OR__input_tone = _serialize_guard($scope0_reason, 0), $sg__input_panel_title__OR__input_panel_body__OR__input_panel_expanded = _serialize_guard($scope0_reason, 1), $sg__input_name = _serialize_guard($scope0_reason, 7);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason({
		0: $sg__input_label__OR__input_tone,
		1: _serialize_guard($scope0_reason, 3),
		2: _serialize_guard($scope0_reason, 2)
	});
	const $childScope = _peek_scope_id();
	_region(() => {
		badge_default({
			label: input.label,
			tone: input.tone
		});
	}, $scope0_id, "d", "a1");
	_set_serialize_reason({
		0: $sg__input_panel_title__OR__input_panel_body__OR__input_panel_expanded,
		1: _serialize_guard($scope0_reason, 6),
		2: _serialize_guard($scope0_reason, 4),
		3: _serialize_guard($scope0_reason, 5)
	});
	const $childScope2 = _peek_scope_id();
	panel_default({
		title: input.panel.title,
		body: input.panel.body,
		expanded: input.panel.expanded
	});
	_set_serialize_reason($sg__input_name);
	const $childScope3 = _peek_scope_id();
	toggle_default({ name: input.name });
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		r: _seed_fill(_state_reason() && count),
		c: $sg__input_label__OR__input_tone | _persisted_reason() && _existing_scope($childScope),
		e: $sg__input_panel_title__OR__input_panel_body__OR__input_panel_expanded | _persisted_reason() && _existing_scope($childScope2),
		g: $sg__input_name | _persisted_reason() && _existing_scope($childScope3)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a0": [[
		"<button>clicked <!></button><!>",
		["c"],
		"<!>",
		["d"],
		"<!>"
	], [
		" Db%l/&%b/",
		["c"],
		"&%b/",
		["d"],
		"&%b"
	]],
	"a": [[
		"<button>clicked <!></button><!>",
		["c"],
		"<!>",
		["d"],
		"<!>"
	], [
		" Db%l/&%b/",
		["c"],
		"&%b/",
		["d"],
		"&%b"
	]]
});
