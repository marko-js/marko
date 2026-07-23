// tags/badge.marko
var badge_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span${_attr_class(["badge", input.tone])}>${_escape(input.label)}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 2))}</span>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}`);
	_serialize_guard($scope0_reason, 0) && writeScope($scope0_id, {});
});
_renderer_shells({ "b0": ["<span> </span>", " D l"] });

// tags/card.marko
var card_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_heading = _serialize_guard($scope0_reason, 2), $sg__input_heading__OR__input_tone = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section class=card>");
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: $sg__input_heading__OR__input_tone,
		1: _serialize_guard($scope0_reason, 3),
		2: $sg__input_heading
	});
	badge_default({
		label: input.heading,
		tone: input.tone
	});
	_html(`<h2>${_escape(input.heading)}${_el_resume($scope0_id, "c", $sg__input_heading)}</h2><p${_attr_class(["meta", input.flagged && "flagged"])}>${_escape(input.meta)}${_el_resume($scope0_id, "e", _serialize_guard($scope0_reason, 5))}</p>${_el_resume($scope0_id, "d", _serialize_guard($scope0_reason, 4))}</section>`);
	_serialize_guard($scope0_reason, 1) && writeScope($scope0_id, { a: $sg__input_heading__OR__input_tone && _existing_scope($childScope) });
});
_renderer_shells({ "c0": ["<section class=card><!><h2> </h2><p> </p></section>", "D/&%bD l D m"] });

// tags/counter.marko
var counter_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=counter>${_escape(n)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "d1");
	writeScope($scope0_id, { c: _state_reason() && n });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"d0": ["<button class=counter> </button>", " D l"],
	"d": ["<button class=counter> </button>", " D l"]
});

// tags/widget.marko
var widget_default = _template("e", (input) => {
	const $sg__input_label = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html(`<div class=widget><em>${_escape(_hole_value($scope0_id, "Qa", input.label, _persisted_reason()))}${_el_resume($scope0_id, "a", $sg__input_label)}</em>`);
	const $childScope = _peek_scope_id();
	counter_default({});
	_html("</div>");
	$sg__input_label | _persisted_reason() && writeScope($scope0_id, { b: _persisted_reason() && _existing_scope($childScope) });
});
_renderer_shells({
	"e0": [[
		"<div class=widget><em> </em>",
		["d"],
		"<!></div>"
	], [
		"E l/",
		["d"],
		"&%l"
	]],
	"e": [[
		"<div class=widget><em> </em>",
		["d"],
		"<!></div>"
	], [
		"E l/",
		["d"],
		"&%l"
	]]
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_heading__OR__input_tone__OR__input_meta__OR__input_flagged = _serialize_guard($scope0_reason, 1), $sg__input_widget = _serialize_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=bump>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: _serialize_guard($scope0_reason, 0),
		1: $sg__input_heading__OR__input_tone__OR__input_meta__OR__input_flagged,
		2: _serialize_guard($scope0_reason, 2),
		3: _serialize_guard($scope0_reason, 3),
		4: _serialize_guard($scope0_reason, 5),
		5: _serialize_guard($scope0_reason, 4)
	});
	_region(() => {
		card_default({
			heading: input.heading,
			tone: input.tone,
			meta: input.meta,
			flagged: input.flagged
		});
	}, $scope0_id, "d");
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason($sg__input_widget);
	widget_default({ label: input.widget });
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		n: _state_reason() && count,
		c: $sg__input_heading__OR__input_tone__OR__input_meta__OR__input_flagged | _persisted_reason() && _existing_scope($childScope),
		e: $sg__input_widget | _persisted_reason() && _existing_scope($childScope2)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a0": [[
		"<button class=bump>clicked <!></button><!>",
		["e"],
		"<!>"
	], [
		" Db%l/&%b/",
		["e"],
		"&%b"
	]],
	"a": [[
		"<button class=bump>clicked <!></button><!>",
		["e"],
		"<!>"
	], [
		" Db%l/&%b/",
		["e"],
		"&%b"
	]]
});
