// tags/roster.marko
var roster_default = _template("__tests__/tags/roster.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_crew = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul class=crew>");
	_for_of(input.crew, (name) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(_hole_value($scope1_id, "PatchHole:#text/0", name, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", $sg__input_crew)}</li>`);
		$sg__input_crew && writeScope($scope1_id, {}, "__tests__/tags/roster.marko", "2:4");
	}, function(name) {
		return name;
	}, $scope0_id, "#ul/0", $sg__input_crew, $sg__input_crew, $sg__input_crew, "</ul>", 1, "__tests__/tags/roster.marko_1_update");
	$sg__input_crew && writeScope($scope0_id, {}, "__tests__/tags/roster.marko", 0);
});
_renderer_shells({
	"__tests__/tags/roster.marko_1_update": ["<li> </li>", "D l"],
	"__tests__/tags/roster.marko_1_content": ["<li> </li>", "D l"],
	"__tests__/tags/roster.marko_0_update": ["<ul class=crew></ul>", " b"],
	"__tests__/tags/roster.marko": ["<ul class=crew></ul>", " b"]
});

// tags/board.marko
var board_default = _template("__tests__/tags/board.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_crew__OR__input_view = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<section class=board><h2 class=tally>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.crew.length, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 2))} aboard</h2>`);
	_dynamic_tag($scope0_id, "#text/1", input.view, { crew: input.crew }, 0, 0, $sg__input_crew__OR__input_view | _persisted_reason(), "__tests__/tags/board.marko_0/update_dynamic_#text/1");
	_html("</section>");
	$sg__input_crew__OR__input_view && writeScope($scope0_id, {
		input_crew: (_serialize_if($scope0_reason, 3) || _patch_reason()) && input.crew,
		input_view: (_serialize_if($scope0_reason, 1) || _patch_reason()) && input.view
	}, "__tests__/tags/board.marko", 0, {
		input_crew: ["input.crew"],
		input_view: ["input.view"]
	});
});
_renderer_shells({
	"__tests__/tags/board.marko_0_update": ["<section class=board><h2 class=tally><!> aboard</h2><!></section>", "E%l%l"],
	"__tests__/tags/board.marko": ["<section class=board><h2 class=tally><!> aboard</h2><!></section>", "E%l%l"]
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_crew = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
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
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"#childScope/2": $sg__input_crew | _persisted_reason() && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": [["<button class=count>clicked <!></button>", ["__tests__/tags/board.marko"]], [
		" Db%l/",
		["__tests__/tags/board.marko"],
		"&"
	]],
	"__tests__/template.marko": [["<button class=count>clicked <!></button>", ["__tests__/tags/board.marko"]], [
		" Db%l/",
		["__tests__/tags/board.marko"],
		"&"
	]]
});
