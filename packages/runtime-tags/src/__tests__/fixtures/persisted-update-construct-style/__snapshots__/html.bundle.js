// data.js
const getTint = typeof window === "undefined" ? () => "teal" : void 0;

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
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Panel = { content: _content("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let n = 0;
		let pad = "4px";
		_html(`<button class=tap>tap <!>${_escape(n)}${_el_resume($scope1_id, "b")}</button>${_el_resume($scope1_id, "a")}<button class=grow>grow</button>${_el_resume($scope1_id, "c")}${_style_html(`--M_a0:${_escape_style_value(_hole_value($scope1_id, "Nstyle0:d", getTint?.(), _persisted_reason()))};--M_a1:${_escape_style_value(pad)};`)}${_el_resume($scope1_id, "d")}<div class=tinted>styled</div>`);
		_script($scope1_id, "a1");
		writeScope($scope1_id, {
			e: _seed_fill(_state_reason() && n),
			f: _seed_fill(_state_reason() && pad)
		});
		_resume_branch($scope1_id);
	}) };
	const About = { content: _content("a4", () => {
		_scope_id();
		_scope_reason();
		_html("<p class=about>about</p>");
	}) };
	_set_serialize_reason(_persisted_reason());
	const $childScope = _peek_scope_id();
	layout_default({ content: $global().view === "panel" ? Panel : About });
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		e: _seed_fill(_state_reason() && count),
		c: _persisted_reason() && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a5": ["<button class=tap>tap <!></button><button class=grow>grow</button><style></style><div class=tinted>styled</div>", " Db%l b b"],
	"a3": ["<button class=tap>tap <!></button><button class=grow>grow</button><style></style><div class=tinted>styled</div>", " Db%l b b"],
	"a2": [[
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
