// chunk-guard.js
const assertChunkLoadable = () => {
	if (typeof window !== "undefined" && window.__MARKO_LAZY_CHUNK_GONE__) throw new Error("lazy chunk unavailable");
};

// tags/gadget.marko
assertChunkLoadable();
var gadget_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let taps = 0;
	_html(`<div class=gadget><span class=gadget__label>${_escape(_hole_value($scope0_id, "Qa", input.label, _persisted_reason()))}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</span><button class=gadget__tap>taps <!>${_escape(taps)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}</div>`);
	_script($scope0_id, "b1");
	writeScope($scope0_id, { g: _seed_fill(_state_reason() && taps) });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"b0": ["<div class=gadget><span class=gadget__label> </span><button class=gadget__tap>taps <!></button></div>", "E l Db%m"],
	"b": ["<div class=gadget><span class=gadget__label> </span><button class=gadget__tap>taps <!></button></div>", "E l Db%m"]
});

// template.marko
const $Gadget_withLoadAssets = withLoadAssets(gadget_default, "_b", [{ type: "idle" }]);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Home = { content: _content("a2", () => {
		_scope_id();
		_scope_reason();
		_html("<p class=home>welcome home</p>");
	}) };
	const Detail = { content: _content("a3", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<h2 class=title>${_escape(_hole_value($scope2_id, "Qa", $global().title, _persisted_reason()))}${_el_resume($scope2_id, "a", _persisted_reason())}</h2>`);
		_set_serialize_reason(_persisted_reason());
		const $childScope = _peek_scope_id();
		$Gadget_withLoadAssets({ label: $global().label });
		_persisted_reason() && writeScope($scope2_id, { c: _existing_scope($childScope) });
	}) };
	_dynamic_tag($scope0_id, "c", $global().view === "detail" ? Detail : Home, {}, 0, 0, _persisted_reason() | _persisted_reason(), "a0");
	_script($scope0_id, "a4");
	writeScope($scope0_id, { d: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a5": ["<h2 class=title> </h2><!><!><!>", "D l%/&c"],
	"a3": ["<h2 class=title> </h2><!><!><!>", "D l%/&c"],
	"a1": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"a": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
