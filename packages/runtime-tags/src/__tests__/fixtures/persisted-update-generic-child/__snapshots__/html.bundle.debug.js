// tags/badge.marko
var badge_default = _template("__tests__/tags/badge.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span${_attr_class(["badge", input.tone])}${_attr("title", `tone: ${input.tone}`)}>${_escape(input.label)}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 2))}</span>${_el_resume($scope0_id, "#span/0", _serialize_guard($scope0_reason, 1))}`);
	_serialize_guard($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/badge.marko", 0);
});
_renderer_shells({ "__tests__/tags/badge.marko_0_update": ["<span> </span>", " D l"] });

// tags/panel.marko
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<details${_attr_details_or_dialog_open($scope0_id, "#details/0", _hole_value($scope0_id, "PatchAttr:open:#details/0", input.expanded, _persisted_reason()))}><summary>${_escape(_hole_value($scope0_id, "PatchHole:#text/1", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 2))}</summary><p>${_escape(_hole_value($scope0_id, "PatchHole:#text/2", input.body, _persisted_reason()))}${_el_resume($scope0_id, "#text/2", _serialize_guard($scope0_reason, 3))}</p></details>${_el_resume($scope0_id, "#details/0", _serialize_guard($scope0_reason, 1))}`);
	_serialize_guard($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/panel.marko", 0);
});
_renderer_shells({
	"__tests__/tags/panel.marko_0_update": ["<details><summary> </summary><p> </p></details>", " E lD m"],
	"__tests__/tags/panel.marko": ["<details><summary> </summary><p> </p></details>", " E lD m"]
});

// tags/toggle.marko
var toggle_default = _template("__tests__/tags/toggle.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let on = false;
	_html(`<button class=toggle>${on ? "on" : "off"}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<em>${_escape(_hole_value($scope0_id, "PatchHole:#text/2", input.name, _persisted_reason()))}${_el_resume($scope0_id, "#text/2", _serialize_guard($scope0_reason, 0))}</em>`);
	_script($scope0_id, "__tests__/tags/toggle.marko_0");
	writeScope($scope0_id, { on: _state_reason() && on }, "__tests__/tags/toggle.marko", 0, { on: "1:6" });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"__tests__/tags/toggle.marko_0_update": ["<button class=toggle> </button><em> </em>", " D lD l"],
	"__tests__/tags/toggle.marko": ["<button class=toggle> </button><em> </em>", " D lD l"]
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label__OR__input_tone = _serialize_guard($scope0_reason, 0), $sg__input_panel_title__OR__input_panel_body__OR__input_panel_expanded = _serialize_guard($scope0_reason, 1), $sg__input_name = _serialize_guard($scope0_reason, 7);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: $sg__input_label__OR__input_tone,
		1: _serialize_guard($scope0_reason, 3),
		2: _serialize_guard($scope0_reason, 2)
	});
	_region(() => {
		badge_default({
			label: input.label,
			tone: input.tone
		});
	}, $scope0_id, "#childScope/2");
	const $childScope2 = _peek_scope_id();
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
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"#childScope/2": $sg__input_label__OR__input_tone | _persisted_reason() && _existing_scope($childScope),
		"#childScope/3": $sg__input_panel_title__OR__input_panel_body__OR__input_panel_expanded | _persisted_reason() && _existing_scope($childScope2),
		"#childScope/4": $sg__input_name | _persisted_reason() && _existing_scope($childScope3)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": [[
		"<button>clicked <!></button>",
		["__tests__/tags/badge.marko_0_update"],
		["__tests__/tags/panel.marko"],
		["__tests__/tags/toggle.marko"]
	], [
		" Db%l/",
		["__tests__/tags/badge.marko_0_update"],
		"&/",
		["__tests__/tags/panel.marko"],
		"&/",
		["__tests__/tags/toggle.marko"],
		"&"
	]],
	"__tests__/template.marko": [[
		"<button>clicked <!></button>",
		["__tests__/tags/badge.marko_0_update"],
		["__tests__/tags/panel.marko"],
		["__tests__/tags/toggle.marko"]
	], [
		" Db%l/",
		["__tests__/tags/badge.marko_0_update"],
		"&/",
		["__tests__/tags/panel.marko"],
		"&/",
		["__tests__/tags/toggle.marko"],
		"&"
	]]
});
