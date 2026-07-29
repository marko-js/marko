// tags/lineup.marko
var lineup_default = _template("__tests__/tags/lineup.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_performers = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let pinned = 0;
	_html(`<button class=pin>pin <!>${_escape(pinned)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<ol class=lineup>`);
	_region(() => {
		forOf(input.performers, (name) => {
			const $scope1_id = _scope_id();
			_html(`<li>${_escape(name)}${_el_resume($scope1_id, "#text/0", $sg__input_performers)}</li>`);
			$sg__input_performers && writeScope($scope1_id, {}, "__tests__/tags/lineup.marko", "6:4");
		});
	}, $scope0_id, "#ol/2", "__tests__/tags/lineup.marko_r0");
	_html(`</ol>${_el_resume($scope0_id, "#ol/2", $sg__input_performers)}`);
	_script($scope0_id, "__tests__/tags/lineup.marko_0");
	writeScope($scope0_id, { pinned: _seed_fill(_state_reason() && pinned) }, "__tests__/tags/lineup.marko", 0, { pinned: "3:6" });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"__tests__/tags/lineup.marko_0_update": ["<button class=pin>pin <!></button><ol class=lineup></ol>", " Db%l b"],
	"__tests__/tags/lineup.marko": ["<button class=pin>pin <!></button><ol class=lineup></ol>", " Db%l b"]
});

// tags/ticker.marko
var ticker_default = _template("__tests__/tags/ticker.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_entries = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let marks = 0;
	_html(`<button class=mark>mark <!>${_escape(marks)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<ol class=ticker>`);
	_region(() => {
		forOf(input.entries, (entry) => {
			const $scope1_id = _scope_id();
			_html(`<li>${_escape(entry)}${_el_resume($scope1_id, "#text/0", $sg__input_entries)}</li>`);
			$sg__input_entries && writeScope($scope1_id, {}, "__tests__/tags/ticker.marko", "6:4");
		});
	}, $scope0_id, "#ol/2", "__tests__/tags/ticker.marko_r0");
	_html(`</ol>${_el_resume($scope0_id, "#ol/2", $sg__input_entries)}`);
	_script($scope0_id, "__tests__/tags/ticker.marko_0");
	writeScope($scope0_id, { marks: _seed_fill(_state_reason() && marks) }, "__tests__/tags/ticker.marko", 0, { marks: "3:6" });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"__tests__/tags/ticker.marko_0_update": ["<button class=mark>mark <!></button><ol class=ticker></ol>", " Db%l b"],
	"__tests__/tags/ticker.marko": ["<button class=mark>mark <!></button><ol class=ticker></ol>", " Db%l b"]
});

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
	const $scope0_reason = _scope_reason(), $sg__input_performers = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<h1>${_escape(_hole_value($scope0_id, "PatchHole:#text/2", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/2", _serialize_guard($scope0_reason, 1))}</h1>`);
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
	_dynamic_tag($scope0_id, "#text/5", input.view === "ticker" ? ticker_default : "div", { entries: input.entries }, 0, 0, _serialize_guard($scope0_reason, 0) | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/5");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_view: (_serialize_if($scope0_reason, 4) || _patch_reason()) && input.view,
		input_entries: (_serialize_if($scope0_reason, 3) || _patch_reason()) && input.entries,
		count: _seed_fill(_state_reason() && count),
		"#childScope/3": $sg__input_performers | _persisted_reason() && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_view: ["input.view"],
		input_entries: ["input.entries"],
		count: "4:6"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": [[
		"<button class=count>clicked <!></button><h1> </h1>",
		["__tests__/tags/stage.marko"],
		"<!><!><!>"
	], [
		" Db%lD l/",
		["__tests__/tags/stage.marko"],
		"&%b%c"
	]],
	"__tests__/template.marko": [[
		"<button class=count>clicked <!></button><h1> </h1>",
		["__tests__/tags/stage.marko"],
		"<!><!><!>"
	], [
		" Db%lD l/",
		["__tests__/tags/stage.marko"],
		"&%b%c"
	]]
});
