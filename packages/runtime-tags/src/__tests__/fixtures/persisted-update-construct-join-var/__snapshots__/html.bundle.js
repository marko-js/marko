// data.js
const getUnit = typeof window === "undefined" ? () => "widgets" : void 0;

// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = input.start;
	_html(`<button class=tap>tap <!>${_escape(n)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const $return = n * 2;
	_script($scope0_id, "b1");
	writeScope($scope0_id, { f: _seed_fill(_state_reason() && n) });
	_resume_branch($scope0_id);
	return $return;
});
_renderer_shells({
	"b0": ["<button class=tap>tap <!></button>", " Db%l"],
	"b": ["<button class=tap>tap <!></button>", " Db%l"]
});

// tags/layout.marko
var layout_default = _template("c", (input) => {
	const $sg__input_content = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html("<section class=shell>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content | _persisted_reason(), "c0");
	_html("</section>");
	$sg__input_content && writeScope($scope0_id, {});
});
_renderer_shells({
	"c1": ["<section class=shell><!></section>", "D%l"],
	"c": ["<section class=shell><!></section>", "D%l"]
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Tools = { content: _content("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let limit = 10;
		const $childScope = _peek_scope_id();
		let tally = counter_default({ start: $global().start });
		_var($scope1_id, "b", $childScope, "a1");
		_html(`<p class=readout>${_escape(_hole_value($scope1_id, "Qd", tally, _state_reason()))}${_el_resume($scope1_id, "d")} of <!>${_escape(limit)}${_el_resume($scope1_id, "e")}</p><span class=unit>${_escape(_hole_value($scope1_id, "Qf", getUnit?.(), _persisted_reason()))}${_el_resume($scope1_id, "f")}</span><button class=raise>raise</button>${_el_resume($scope1_id, "g")}`);
		_script($scope1_id, "a3");
		writeScope($scope1_id, {
			h: _seed_fill(_state_reason() && limit),
			a: _existing_scope($childScope)
		});
		_resume_branch($scope1_id);
	}) };
	const About = { content: _content("a4", () => {
		_scope_id();
		_scope_reason();
		_html("<p class=about>elsewhere</p>");
	}) };
	_set_serialize_reason(_persisted_reason());
	const $childScope2 = _peek_scope_id();
	layout_default({ content: $global().view === "tools" ? Tools : About });
	_script($scope0_id, "a5");
	writeScope($scope0_id, {
		e: _seed_fill(_state_reason() && count),
		c: _persisted_reason() && _existing_scope($childScope2)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a6": [[["b"], "<!><p class=readout><!> of <!></p><span class=unit> </span><button class=raise>raise</button>"], [
		"0",
		["b"],
		"&%bD%c%lD l b"
	]],
	"a2": [[["b"], "<!><p class=readout><!> of <!></p><span class=unit> </span><button class=raise>raise</button>"], [
		"0",
		["b"],
		"&%bD%c%lD l b"
	]],
	"a0": [[
		"<button class=count>clicked <!></button>",
		["c"],
		"<!>"
	], [
		" Db%l/",
		["c"],
		"&%b"
	]],
	"a": [[
		"<button class=count>clicked <!></button>",
		["c"],
		"<!>"
	], [
		" Db%l/",
		["c"],
		"&%b"
	]]
});
