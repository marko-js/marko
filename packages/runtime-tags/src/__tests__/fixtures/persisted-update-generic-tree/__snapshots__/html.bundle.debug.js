// tags/badge.marko
var badge_default = _template("__tests__/tags/badge.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span${_attr_class(_hole_value($scope0_id, "PatchAttr:class:#span/0", ["badge", input.tone], _persisted_reason()))}>${_escape(_hole_value($scope0_id, "PatchHole:#text/1", input.label, _persisted_reason()))}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 2))}</span>${_el_resume($scope0_id, "#span/0", _serialize_guard($scope0_reason, 1))}`);
	_serialize_guard($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/badge.marko", 0);
});

// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_heading = _serialize_guard($scope0_reason, 2), $sg__input_heading__OR__input_tone = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section class=card>");
	const $childScope = _peek_scope_id();
	_update_child($scope0_id, "PatchChild:#childScope/0", $childScope);
	_set_serialize_reason({
		0: $sg__input_heading__OR__input_tone,
		1: _serialize_guard($scope0_reason, 3),
		2: $sg__input_heading
	});
	badge_default({
		label: input.heading,
		tone: input.tone
	});
	_html(`<h2>${_escape(_hole_value($scope0_id, "PatchHole:#text/1", input.heading, _persisted_reason()))}${_el_resume($scope0_id, "#text/1", $sg__input_heading)}</h2><p${_attr_class(_hole_value($scope0_id, "PatchAttr:class:#p/2", ["meta", input.flagged && "flagged"], _persisted_reason()))}>${_escape(_hole_value($scope0_id, "PatchHole:#text/3", input.meta, _persisted_reason()))}${_el_resume($scope0_id, "#text/3", _serialize_guard($scope0_reason, 5))}</p>${_el_resume($scope0_id, "#p/2", _serialize_guard($scope0_reason, 4))}</section>`);
	_serialize_guard($scope0_reason, 1) | _persisted_reason() && writeScope($scope0_id, { "#childScope/0": $sg__input_heading__OR__input_tone | _persisted_reason() && _existing_scope($childScope) }, "__tests__/tags/card.marko", 0);
});

// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=counter>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	writeScope($scope0_id, { n: _state_reason() && n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
});

// tags/widget.marko
var widget_default = _template("__tests__/tags/widget.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div class=widget><em>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.label, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", $sg__input_label)}</em>`);
	const $childScope = _peek_scope_id();
	counter_default({});
	_html("</div>");
	$sg__input_label | _persisted_reason() && writeScope($scope0_id, { "#childScope/1": _persisted_reason() && _existing_scope($childScope) }, "__tests__/tags/widget.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_heading__OR__input_tone__OR__input_meta__OR__input_flagged = _serialize_guard($scope0_reason, 1), $sg__input_widget = _serialize_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=bump>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_update_child($scope0_id, "PatchChild:#childScope/2", $childScope);
	_set_serialize_reason({
		0: _serialize_guard($scope0_reason, 0),
		1: $sg__input_heading__OR__input_tone__OR__input_meta__OR__input_flagged,
		2: _serialize_guard($scope0_reason, 2),
		3: _serialize_guard($scope0_reason, 3),
		4: _serialize_guard($scope0_reason, 5),
		5: _serialize_guard($scope0_reason, 4)
	});
	card_default({
		heading: input.heading,
		tone: input.tone,
		meta: input.meta,
		flagged: input.flagged
	});
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason($sg__input_widget);
	widget_default({ label: input.widget });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"#childScope/2": $sg__input_heading__OR__input_tone__OR__input_meta__OR__input_flagged | _persisted_reason() && _existing_scope($childScope),
		"#childScope/3": $sg__input_widget | _persisted_reason() && _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
