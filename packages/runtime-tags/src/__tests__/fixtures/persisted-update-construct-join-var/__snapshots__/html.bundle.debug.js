// data.js
const getUnit = typeof window === "undefined" ? () => "widgets" : undefined;

// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = input.start;
	_html(`<button class=tap>tap <!>${_escape(n)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $return = n * 2;
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	writeScope($scope0_id, { n: _seed_fill(_state_reason() && n) }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
	return $return;
});
_renderer_shells({
	"__tests__/tags/counter.marko_0_update": ["<button class=tap>tap <!></button>", " Db%l"],
	"__tests__/tags/counter.marko": ["<button class=tap>tap <!></button>", " Db%l"]
});

// tags/layout.marko
var layout_default = _template("__tests__/tags/layout.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section class=shell>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $sg__input_content | _persisted_reason(), "__tests__/tags/layout.marko_0/update_dynamic_#text/0");
	_html("</section>");
	$sg__input_content && writeScope($scope0_id, {}, "__tests__/tags/layout.marko", 0);
});
_renderer_shells({
	"__tests__/tags/layout.marko_0_update": ["<section class=shell><!></section>", "D%l"],
	"__tests__/tags/layout.marko": ["<section class=shell><!></section>", "D%l"]
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Tools = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let limit = 10;
		const $childScope = _peek_scope_id();
		let tally = counter_default({ start: $global().start });
		_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_tally/var");
		_html(`<p class=readout>${_escape(_hole_value($scope1_id, "PatchHole:#text/3", tally, _state_reason()))}${_el_resume($scope1_id, "#text/3")} of <!>${_escape(limit)}${_el_resume($scope1_id, "#text/4")}</p><span class=unit>${_escape(_hole_value($scope1_id, "PatchHole:#text/5", getUnit?.(), _persisted_reason()))}${_el_resume($scope1_id, "#text/5")}</span><button class=raise>raise</button>${_el_resume($scope1_id, "#button/6")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {
			limit: _seed_fill(_state_reason() && limit),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "6:2", { limit: "7:8" });
		_resume_branch($scope1_id);
	}) };
	const About = { content: _content("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("<p class=about>elsewhere</p>");
	}) };
	_set_serialize_reason(_persisted_reason());
	const $childScope2 = _peek_scope_id();
	layout_default({ content: $global().view === "tools" ? Tools : About });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _seed_fill(_state_reason() && count),
		"#childScope/2": _persisted_reason() && _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_1_update": [[["__tests__/tags/counter.marko"], "<!><p class=readout><!> of <!></p><span class=unit> </span><button class=raise>raise</button>"], [
		"0",
		["__tests__/tags/counter.marko"],
		"&%bD%c%lD l b"
	]],
	"__tests__/template.marko_1_content": [[["__tests__/tags/counter.marko"], "<!><p class=readout><!> of <!></p><span class=unit> </span><button class=raise>raise</button>"], [
		"0",
		["__tests__/tags/counter.marko"],
		"&%bD%c%lD l b"
	]],
	"__tests__/template.marko_0_update": [[
		"<button class=count>clicked <!></button>",
		["__tests__/tags/layout.marko"],
		"<!>"
	], [
		" Db%l/",
		["__tests__/tags/layout.marko"],
		"&%b"
	]],
	"__tests__/template.marko": [[
		"<button class=count>clicked <!></button>",
		["__tests__/tags/layout.marko"],
		"<!>"
	], [
		" Db%l/",
		["__tests__/tags/layout.marko"],
		"&%b"
	]]
});
