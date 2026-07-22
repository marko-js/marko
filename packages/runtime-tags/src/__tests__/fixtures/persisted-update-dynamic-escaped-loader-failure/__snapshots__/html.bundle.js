// tags/roster.marko
var roster_default = _template("c", (input) => {
	const $sg__input_crew = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let pinned = 0;
	_html(`<button class=pin>pin <!>${_escape(pinned)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<ul class=crew>`);
	_region(() => {
		forOf(input.crew, (name) => {
			const $scope1_id = _scope_id();
			_html(`<li>${_escape(name)}${_el_resume($scope1_id, "a", $sg__input_crew)}</li>`);
			$sg__input_crew && writeScope($scope1_id, {});
		});
	}, $scope0_id, "c");
	_html(`</ul>${_el_resume($scope0_id, "c", $sg__input_crew)}`);
	_script($scope0_id, "c1");
	writeScope($scope0_id, { g: _state_reason() && pinned });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"c0": ["<button class=pin>pin <!></button><ul class=crew></ul>", " Db%l b"],
	"c": ["<button class=pin>pin <!></button><ul class=crew></ul>", " Db%l b"]
});

// tags/board.marko
var board_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_crew__OR__input_view = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<section class=board><h2 class=tally>${_escape(_hole_value($scope0_id, "Qa", input.crew.length, _persisted_reason()))}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 2))} aboard</h2>`);
	_dynamic_tag($scope0_id, "b", input.view, { crew: input.crew }, 0, 0, $sg__input_crew__OR__input_view | _persisted_reason(), "b0");
	_html("</section>");
	$sg__input_crew__OR__input_view && writeScope($scope0_id, {
		e: (_serialize_if($scope0_reason, 3) || _patch_reason()) && input.crew,
		g: (_serialize_if($scope0_reason, 1) || _patch_reason()) && input.view
	});
});
_renderer_shells({
	"b1": ["<section class=board><h2 class=tally><!> aboard</h2><!></section>", "E%l%l"],
	"b": ["<section class=board><h2 class=tally><!> aboard</h2><!></section>", "E%l%l"]
});

// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_crew = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: $sg__input_crew,
		1: $sg__input_crew,
		2: $sg__input_crew
	});
	board_default({
		view: roster_default,
		crew: input.crew
	});
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		g: _state_reason() && count,
		c: $sg__input_crew | _persisted_reason() && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a0": [["<button class=count>clicked <!></button>", ["b"]], [
		" Db%l/",
		["b"],
		"&"
	]],
	"a": [["<button class=count>clicked <!></button>", ["b"]], [
		" Db%l/",
		["b"],
		"&"
	]]
});
