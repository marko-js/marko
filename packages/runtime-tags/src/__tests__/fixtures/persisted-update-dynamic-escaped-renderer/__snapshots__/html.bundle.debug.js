// tags/lineup.marko
var lineup_default = _template("__tests__/tags/lineup.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_performers = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ol class=lineup>");
	_for_of(input.performers, (name) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(name)}${_el_resume($scope1_id, "#text/0", $sg__input_performers)}</li>`);
		$sg__input_performers && writeScope($scope1_id, {}, "__tests__/tags/lineup.marko", "2:4");
	}, function(name) {
		return name;
	}, $scope0_id, "#ol/0", $sg__input_performers, $sg__input_performers, $sg__input_performers, "</ol>", 1);
	$sg__input_performers && writeScope($scope0_id, {}, "__tests__/tags/lineup.marko", 0);
});
_renderer_shells({ "__tests__/tags/lineup.marko_0_update": ["<ol class=lineup></ol>", " b"] });

// tags/stage.marko
var stage_default = _template("__tests__/tags/stage.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_performers__OR__input_view = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<section class=stage><h2 class=headline>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.performers.length, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 2))} on stage</h2>`);
	_dynamic_tag($scope0_id, "#text/1", input.view, { performers: input.performers }, 0, 0, $sg__input_performers__OR__input_view | _persisted_reason(), "__tests__/tags/stage.marko_0/update_dynamic_#text/1");
	_html("</section>");
	$sg__input_performers__OR__input_view && writeScope($scope0_id, {
		input_performers: (_serialize_if($scope0_reason, 3) || _patch_reason()) && input.performers,
		input_view: (_serialize_if($scope0_reason, 1) || _patch_reason()) && input.view
	}, "__tests__/tags/stage.marko", 0, {
		input_performers: ["input.performers"],
		input_view: ["input.view"]
	});
});
_renderer_shells({
	"__tests__/tags/stage.marko_0_update": ["<section class=stage><h2 class=headline><!> on stage</h2><!></section>", "E%l%l"],
	"__tests__/tags/stage.marko": ["<section class=stage><h2 class=headline><!> on stage</h2><!></section>", "E%l%l"]
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_performers = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_serialize_reason({
		0: $sg__input_performers,
		1: $sg__input_performers,
		2: $sg__input_performers
	});
	const $childScope = _peek_scope_id();
	stage_default({
		view: lineup_default,
		performers: input.performers
	});
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _seed_fill(_state_reason() && count),
		"#childScope/2": $sg__input_performers | _persisted_reason() && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": [[
		"<button class=count>clicked <!></button>",
		["__tests__/tags/stage.marko"],
		"<!>"
	], [
		" Db%l/",
		["__tests__/tags/stage.marko"],
		"&%b"
	]],
	"__tests__/template.marko": [[
		"<button class=count>clicked <!></button>",
		["__tests__/tags/stage.marko"],
		"<!>"
	], [
		" Db%l/",
		["__tests__/tags/stage.marko"],
		"&%b"
	]]
});
