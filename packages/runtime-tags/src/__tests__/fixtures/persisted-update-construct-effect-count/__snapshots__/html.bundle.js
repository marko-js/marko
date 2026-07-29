// data.js
const getNote = typeof window === "undefined" ? () => "fresh" : void 0;

// tags/layout.marko
var layout_default = _template("b", (input) => {
	const $sg__input_content = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html("<section class=shell>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content | _persisted_reason(), "b0");
	_html("</section>");
	$sg__input_content && writeScope($scope0_id, {});
});
_renderer_shells({
	"b1": ["<section class=shell><!></section>", "D%l"],
	"b": ["<section class=shell><!></section>", "D%l"]
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Panel = { content: _content("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<div class=box>panel <!>${_escape(count)}${_el_resume($scope1_id, "b")}</div>${_el_resume($scope1_id, "a")}<span class=note>${_escape(_hole_value($scope1_id, "Qc", getNote?.(), _persisted_reason()))}${_el_resume($scope1_id, "c")}</span>`);
		_script($scope1_id, "a2");
		_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}) };
	const About = { content: _content("a3", () => {
		_scope_id();
		_scope_reason();
		_html("<p class=about>about</p>");
	}) };
	_set_serialize_reason(_persisted_reason());
	const $childScope = _peek_scope_id();
	layout_default({ content: $global().view === "panel" ? Panel : About });
	_script($scope0_id, "a4");
	writeScope($scope0_id, {
		e: _seed_fill(_state_reason() && count),
		i: $count__closures,
		c: _persisted_reason() && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a5": ["<div class=box>panel <!></div><span class=note> </span>", " Db%lD l"],
	"a1": ["<div class=box>panel <!></div><span class=note> </span>", " Db%lD l"],
	"a0": [[
		"<button class=count>clicked <!></button>",
		["b"],
		"<!>"
	], [
		" Db%l/",
		["b"],
		"&%b"
	]],
	"a": [[
		"<button class=count>clicked <!></button>",
		["b"],
		"<!>"
	], [
		" Db%l/",
		["b"],
		"&%b"
	]]
});
