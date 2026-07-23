// tags/gadget.marko
var gadget_default = _template("__tests__/tags/gadget.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let taps = 0;
	_html(`<div class=gadget><span class=gadget__label>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.label, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</span><button class=gadget__tap>taps <!>${_escape(taps)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}</div>`);
	_script($scope0_id, "__tests__/tags/gadget.marko_0");
	writeScope($scope0_id, { taps: _state_reason() && taps }, "__tests__/tags/gadget.marko", 0, { taps: "3:6" });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"__tests__/tags/gadget.marko_0_update": ["<div class=gadget><span class=gadget__label> </span><button class=gadget__tap>taps <!></button></div>", "E l Db%m"],
	"__tests__/tags/gadget.marko": ["<div class=gadget><span class=gadget__label> </span><button class=gadget__tap>taps <!></button></div>", "E l Db%m"]
});

// tags/layout.marko
var layout_default = _template("__tests__/tags/layout.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<aside><button class=toggle>${_escape(_hole_value($scope0_id, "PatchHole:#text/1", open ? "collapse" : "expand", _state_reason()))}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}</aside><section>`);
	_dynamic_tag($scope0_id, "#text/2", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0) | _persisted_reason(), "__tests__/tags/layout.marko_0/update_dynamic_#text/2");
	_html("</section>");
	_script($scope0_id, "__tests__/tags/layout.marko_0");
	writeScope($scope0_id, { open: _state_reason() && open }, "__tests__/tags/layout.marko", 0, { open: "1:6" });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"__tests__/tags/layout.marko_0_update": ["<aside><button class=toggle> </button></aside><section><!></section>", "D D mD%l"],
	"__tests__/tags/layout.marko": ["<aside><button class=toggle> </button></aside><section><!></section>", "D D mD%l"]
});

// template.marko
const $Gadget_withLoadAssets = withLoadAssets(gadget_default, "ready:__tests__/tags/gadget.marko", [{ type: "idle" }]);
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Home = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<p class=home>welcome home</p>");
	}) };
	const Detail = { content: _content("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<h2 class=title>${_escape(_hole_value($scope2_id, "PatchHole:#text/0", $global().title, _persisted_reason()))}${_el_resume($scope2_id, "#text/0", _persisted_reason())}</h2>`);
		const $childScope = _peek_scope_id();
		_set_serialize_reason(_persisted_reason());
		$Gadget_withLoadAssets({ label: $global().label });
		_persisted_reason() && writeScope($scope2_id, { "#childScope/2": _existing_scope($childScope) }, "__tests__/template.marko", "9:2");
	}) };
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason(_persisted_reason());
	layout_default({ content: $global().view === "detail" ? Detail : Home });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"#childScope/2": _persisted_reason() && _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_2_update": ["<h2 class=title> </h2><!><!><!>", "D l%/&c"],
	"__tests__/template.marko_2_content": ["<h2 class=title> </h2><!><!><!>", "D l%/&c"],
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
