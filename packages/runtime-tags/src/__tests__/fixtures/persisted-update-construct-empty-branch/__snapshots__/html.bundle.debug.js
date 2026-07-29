// data.js
const getBadge = typeof window === "undefined" ? () => "beta" : undefined;

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
	const $count__closures = new Set();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Panel = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let on = $global().on;
		_html(`<button class=flip>flip</button>${_el_resume($scope1_id, "#button/0")}`);
		_if(() => {
			if (on) {
				_group_site("__tests__/template.marko_2_update");
				const $scope2_id = _scope_id();
				_html(`<p class=msg>msg <!>${_escape(count)}${_el_resume($scope2_id, "#text/0")}</p>`);
				_subscribe($count__closures, writeScope($scope2_id, {}, "__tests__/template.marko", "9:4"));
				return 0;
			} else {
				_group_site("__tests__/template.marko_3_update");
				const $scope3_id = _scope_id();
				writeScope($scope3_id, {}, "__tests__/template.marko", "12:4");
				return 1;
			}
		}, $scope1_id, "#text/1", void 0, void 0, void 0, void 0, void 0, void 0, void 0, ["__tests__/template.marko_2_update", "__tests__/template.marko_3_update"]);
		_html(`<span class=badge>${_escape(_hole_value($scope1_id, "PatchHole:#text/2", getBadge?.(), _persisted_reason()))}${_el_resume($scope1_id, "#text/2")}</span>`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {
			on: _seed_fill(_state_reason() && on),
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "6:2", { on: "7:8" });
		_resume_branch($scope1_id);
	}) };
	const About = { content: _content("__tests__/template.marko_4_content", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_html("<p class=about>about</p>");
	}) };
	_set_serialize_reason(_persisted_reason());
	const $childScope = _peek_scope_id();
	layout_default({ content: $global().view === "panel" ? Panel : About });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _seed_fill(_state_reason() && count),
		"ClosureScopes:count": $count__closures,
		"#childScope/2": _persisted_reason() && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_3_update": ["", ""],
	"__tests__/template.marko_3_content": ["", ""],
	"__tests__/template.marko_2_update": ["<p class=msg>msg <!></p>", "Db%l"],
	"__tests__/template.marko_2_content": ["<p class=msg>msg <!></p>", "Db%l"],
	"__tests__/template.marko_1_update": ["<button class=flip>flip</button><!><span class=badge> </span>", " b%bD l"],
	"__tests__/template.marko_1_content": ["<button class=flip>flip</button><!><span class=badge> </span>", " b%bD l"],
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
