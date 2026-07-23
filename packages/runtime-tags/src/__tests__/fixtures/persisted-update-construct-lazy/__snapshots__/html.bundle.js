// tags/gadget.marko
var gadget_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let taps = 0;
	_html(`<div class=gadget><span class=gadget__label>${_escape(_hole_value($scope0_id, "Qa", input.label, _persisted_reason()))}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</span><button class=gadget__tap>taps <!>${_escape(taps)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "b1");
	writeScope($scope0_id, { g: _state_reason() && taps });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"b0": ["<div class=gadget><span class=gadget__label> </span><button class=gadget__tap>taps <!></button></div>", "E l Db%m"],
	"b": ["<div class=gadget><span class=gadget__label> </span><button class=gadget__tap>taps <!></button></div>", "E l Db%m"]
});

// tags/layout.marko
var layout_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<aside><button class=toggle>${_escape(_hole_value($scope0_id, "Qb", "expand", _state_reason()))}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}</aside><section>`);
	_dynamic_tag($scope0_id, "c", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0) | _persisted_reason(), "c0");
	_html("</section>");
	_script($scope0_id, "c2");
	writeScope($scope0_id, { g: _state_reason() && open });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"c1": ["<aside><button class=toggle> </button></aside><section><!></section>", "D D mD%l"],
	"c": ["<aside><button class=toggle> </button></aside><section><!></section>", "D D mD%l"]
});

// template.marko
const $Gadget_withLoadAssets = withLoadAssets(gadget_default, "_b", [{ type: "idle" }]);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Home = { content: _content("a1", () => {
		_scope_id();
		_scope_reason();
		_html("<p class=home>welcome home</p>");
	}) };
	const Detail = { content: _content("a2", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<h2 class=title>${_escape(_hole_value($scope2_id, "Qa", $global().title, _persisted_reason()))}${_el_resume($scope2_id, "a", _persisted_reason())}</h2>`);
		const $childScope = _peek_scope_id();
		_set_serialize_reason(_persisted_reason());
		$Gadget_withLoadAssets({ label: $global().label });
		_persisted_reason() && writeScope($scope2_id, { c: _existing_scope($childScope) });
	}) };
	const $childScope2 = _peek_scope_id();
	_set_serialize_reason(_persisted_reason());
	layout_default({ content: $global().view === "detail" ? Detail : Home });
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		e: _state_reason() && count,
		c: _persisted_reason() && _existing_scope($childScope2)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a4": ["<h2 class=title> </h2><!><!><!>", "D l%/&c"],
	"a2": ["<h2 class=title> </h2><!><!><!>", "D l%/&c"],
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
