// data.js
const getBadge = typeof window === "undefined" ? () => "beta" : void 0;

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
	const Panel = { content: _content("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let on = $global().on;
		_html(`<button class=flip>flip</button>${_el_resume($scope1_id, "a")}`);
		_if(() => {
			if (on) {
				_group_site("a2");
				const $scope2_id = _scope_id();
				_html(`<p class=msg>msg <!>${_escape(count)}${_el_resume($scope2_id, "a")}</p>`);
				_subscribe($count__closures, writeScope($scope2_id, {}));
				return 0;
			} else {
				_group_site("a1");
				writeScope(_scope_id(), {});
				return 1;
			}
		}, $scope1_id, "b", void 0, void 0, void 0, void 0, void 0, void 0, void 0, ["a2", "a1"]);
		_html(`<span class=badge>${_escape(_hole_value($scope1_id, "Qc", getBadge?.(), _persisted_reason()))}${_el_resume($scope1_id, "c")}</span>`);
		_script($scope1_id, "a4");
		writeScope($scope1_id, {
			d: _seed_fill(_state_reason() && on),
			_: _scope_with_id($scope0_id)
		});
		_resume_branch($scope1_id);
	}) };
	const About = { content: _content("a5", () => {
		_scope_id();
		_scope_reason();
		_html("<p class=about>about</p>");
	}) };
	_set_serialize_reason(_persisted_reason());
	const $childScope = _peek_scope_id();
	layout_default({ content: $global().view === "panel" ? Panel : About });
	_script($scope0_id, "a6");
	writeScope($scope0_id, {
		e: _seed_fill(_state_reason() && count),
		i: $count__closures,
		c: _persisted_reason() && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a1": ["", ""],
	"a7": ["", ""],
	"a2": ["<p class=msg>msg <!></p>", "Db%l"],
	"a8": ["<p class=msg>msg <!></p>", "Db%l"],
	"a9": ["<button class=flip>flip</button><!><span class=badge> </span>", " b%bD l"],
	"a3": ["<button class=flip>flip</button><!><span class=badge> </span>", " b%bD l"],
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
