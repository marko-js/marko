// data.js
const getNote = typeof window === "undefined" ? () => "fresh" : undefined;

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
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let veto = false;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Panel = { content: _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<div class=box>panel</div>${_el_resume($scope1_id, "#div/0")}<span class=note>${_escape(_hole_value($scope1_id, "PatchHole:#text/1", getNote?.(), _persisted_reason()))}${_el_resume($scope1_id, "#text/1")}</span>`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, {}, "__tests__/template.marko", "10:2");
	}, $scope0_id) };
	const About = { content: _content_resume("__tests__/template.marko_3_content", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html("<p class=about>about</p>");
	}, $scope0_id) };
	_if(() => {
		if (!veto) {
			_group_site("__tests__/template.marko_2_update");
			const $scope2_id = _scope_id();
			_set_serialize_reason(_persisted_reason());
			const $childScope = _peek_scope_id();
			layout_default({ content: $global().view === "panel" ? Panel : About });
			writeScope($scope2_id, { "#childScope/0": _persisted_reason() && _existing_scope($childScope) }, "__tests__/template.marko", "24:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1 | _persisted_reason(), 1 | _persisted_reason(), 1, 0, 1, void 0, void 0, ["__tests__/template.marko_2_update"]);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _seed_fill(_state_reason() && count),
		veto: _seed_fill(_state_reason() && veto),
		Panel: _state_reason() && Panel,
		About: _state_reason() && About
	}, "__tests__/template.marko", 0, {
		count: "3:6",
		veto: "4:6",
		Panel: "10:9",
		About: "20:9"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_2_update": [[["__tests__/tags/layout.marko"], "<!>"], [
		"/",
		["__tests__/tags/layout.marko"],
		"&%b"
	]],
	"__tests__/template.marko_2_content": [[["__tests__/tags/layout.marko"], "<!>"], [
		"/",
		["__tests__/tags/layout.marko"],
		"&%b"
	]],
	"__tests__/template.marko_1_update": ["<div class=box>panel</div><span class=note> </span>", " bD l"],
	"__tests__/template.marko_1_content": ["<div class=box>panel</div><span class=note> </span>", " bD l"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
