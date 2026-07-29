// data.js
function getData(range) {
	if (typeof window !== "undefined") {
		throw new Error("getData is server-only");
	}
	return resolveAfter({ total: range === "week" ? 50 : 10 }, 1);
}

// tags/mounter.marko
var mounter_default = _template("__tests__/tags/mounter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_script($scope0_id, "__tests__/tags/mounter.marko_0_input_onReady");
	writeScope($scope0_id, { input_onReady: input.onReady }, "__tests__/tags/mounter.marko", 0, { input_onReady: ["input.onReady"] });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"__tests__/tags/mounter.marko_0_update": ["", ""],
	"__tests__/tags/mounter.marko": ["", ""]
});

// tags/layout.marko
var layout_default = _template("__tests__/tags/layout.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $sg__input_content | _persisted_reason(), "__tests__/tags/layout.marko_0/update_dynamic_#text/0");
	_html("</section>");
	$sg__input_content && writeScope($scope0_id, {}, "__tests__/tags/layout.marko", 0);
});
_renderer_shells({
	"__tests__/tags/layout.marko_0_update": ["<section><!></section>", "D%l"],
	"__tests__/tags/layout.marko": ["<section><!></section>", "D%l"]
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Home = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<p class=home>home</p>");
	}) };
	const Reports = { content: _content("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_try($scope2_id, "#text/0", _content_resume("__tests__/template.marko_3_content", () => {
			const $scope3_id = _scope_id();
			_scope_reason();
			_await($scope3_id, "#text/0", getData($global().range), (data) => {
				const $scope5_id = _scope_id();
				let ready = false;
				const $childScope = _peek_scope_id();
				mounter_default({ onReady: _resume(function() {
					ready = true;
				}, "__tests__/template.marko_5/onReady", $scope5_id) });
				_html(`<p class=status>${_escape(_hole_value($scope5_id, "PatchHole:#text/2", ready ? "ready" : "waiting", _state_reason()))}${_el_resume($scope5_id, "#text/2")} of ${_sep(_persisted_reason())}${_escape(_hole_value($scope5_id, "PatchHole:#text/3", data.total, _persisted_reason()))}${_el_resume($scope5_id, "#text/3", _persisted_reason())}</p>`);
				writeScope($scope5_id, {
					ready: _seed_fill(_state_reason() && ready),
					"#childScope/0": _persisted_reason() && _existing_scope($childScope)
				}, "__tests__/template.marko", "14:6", { ready: "15:12" });
				_resume_branch($scope5_id);
			}, 0, "__tests__/template.marko_5_update");
		}, $scope2_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_4_content", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html("<p class=loading>loading…</p>");
		}, $scope2_id) }) }, "__tests__/template.marko_2/update_boundary_#text/0", "__tests__/template.marko_3_update");
	}) };
	_set_serialize_reason(_persisted_reason());
	const $childScope2 = _peek_scope_id();
	layout_default({ content: $global().view === "reports" ? Reports : Home });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _seed_fill(_state_reason() && count),
		"#childScope/2": _persisted_reason() && _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_5_update": [[["__tests__/tags/mounter.marko"], "<!><p class=status><!> of <!></p>"], [
		"/",
		["__tests__/tags/mounter.marko"],
		"&%bD%c%l"
	]],
	"__tests__/template.marko_5_content": [[["__tests__/tags/mounter.marko"], "<!><p class=status><!> of <!></p>"], [
		"/",
		["__tests__/tags/mounter.marko"],
		"&%bD%c%l"
	]],
	"__tests__/template.marko_3_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_3_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_2_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_2_content": ["<!><!><!>", "b%c"],
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
