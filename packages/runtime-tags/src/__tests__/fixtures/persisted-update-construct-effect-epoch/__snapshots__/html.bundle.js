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
	let count = 0;
	let veto = false;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Panel = { content: _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<div class=box>panel</div>${_el_resume($scope1_id, "a")}<span class=note>${_escape(_hole_value($scope1_id, "Qb", getNote?.(), _persisted_reason()))}${_el_resume($scope1_id, "b")}</span>`);
		_script($scope1_id, "a2");
		writeScope($scope1_id, {});
	}, $scope0_id) };
	const About = { content: _content_resume("a3", () => {
		_scope_id();
		_scope_reason();
		_html("<p class=about>about</p>");
	}, $scope0_id) };
	_if(() => {
		{
			_group_site("a4");
			const $scope2_id = _scope_id();
			_set_serialize_reason(_persisted_reason());
			const $childScope = _peek_scope_id();
			layout_default({ content: $global().view === "panel" ? Panel : About });
			writeScope($scope2_id, { a: _persisted_reason() && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "c", 1 | _persisted_reason(), 1 | _persisted_reason(), 1, 0, 1, void 0, void 0, ["a4"]);
	_script($scope0_id, "a5");
	writeScope($scope0_id, {
		d: _seed_fill(_state_reason() && count),
		e: _seed_fill(_state_reason() && veto),
		f: _state_reason() && Panel,
		g: _state_reason() && About
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a4": [[["b"], "<!>"], [
		"/",
		["b"],
		"&%b"
	]],
	"a6": [[["b"], "<!>"], [
		"/",
		["b"],
		"&%b"
	]],
	"a7": ["<div class=box>panel</div><span class=note> </span>", " bD l"],
	"a1": ["<div class=box>panel</div><span class=note> </span>", " bD l"],
	"a0": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"a": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
