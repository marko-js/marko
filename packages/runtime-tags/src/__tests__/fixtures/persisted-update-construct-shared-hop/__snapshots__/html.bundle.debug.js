// tags/layout.marko
var layout_default = _template("__tests__/tags/layout.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<aside class=rail>rail</aside><main class=page>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $sg__input_content | _persisted_reason(), "__tests__/tags/layout.marko_0/update_dynamic_#text/0");
	_html("</main>");
	$sg__input_content && writeScope($scope0_id, {}, "__tests__/tags/layout.marko", 0);
});
_renderer_shells({
	"__tests__/tags/layout.marko_0_update": ["<aside class=rail>rail</aside><main class=page><!></main>", "bD%l"],
	"__tests__/tags/layout.marko": ["<aside class=rail>rail</aside><main class=page><!></main>", "bD%l"]
});

// tags/frame.marko
var frame_default = _template("__tests__/tags/frame.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section class=frame>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $sg__input_content | _persisted_reason(), "__tests__/tags/frame.marko_0/update_dynamic_#text/0");
	_html("</section>");
	$sg__input_content && writeScope($scope0_id, {}, "__tests__/tags/frame.marko", 0);
});
_renderer_shells({
	"__tests__/tags/frame.marko_0_update": ["<section class=frame><!></section>", "D%l"],
	"__tests__/tags/frame.marko": ["<section class=frame><!></section>", "D%l"]
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Home = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<p class=home>welcome home</p>");
	}) };
	const Dashboard = { content: _content("__tests__/template.marko_3_content", () => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		let tally = 0;
		_html(`<button class=bump>tally <!>${_escape(tally)}${_el_resume($scope3_id, "#text/1")}</button>${_el_resume($scope3_id, "#button/0")}<p class=greeting>hello ${_sep(_persisted_reason())}${_escape(_hole_value($scope3_id, "PatchHole:#text/2", $global().user, _persisted_reason()))}${_el_resume($scope3_id, "#text/2", _persisted_reason())}</p>`);
		_script($scope3_id, "__tests__/template.marko_3");
		writeScope($scope3_id, { tally: _state_reason() && tally }, "__tests__/template.marko", "6:2", { tally: "7:8" });
		_resume_branch($scope3_id);
	}) };
	const $childScope2 = _peek_scope_id();
	frame_default({ content: _content("__tests__/template.marko_2_content", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		let count = 0;
		_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope2_id, "#text/1")}</button>${_el_resume($scope2_id, "#button/0")}`);
		const $childScope = _peek_scope_id();
		_set_serialize_reason(_persisted_reason());
		layout_default({ content: $global().view === "dashboard" ? Dashboard : Home });
		_script($scope2_id, "__tests__/template.marko_2");
		writeScope($scope2_id, {
			count: _state_reason() && count,
			"#childScope/2": _persisted_reason() && _existing_scope($childScope)
		}, "__tests__/template.marko", "12:2", { count: "13:8" });
		_resume_branch($scope2_id);
	}) });
	_persisted_reason() && writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", 0);
}, 1);
_renderer_shells({
	"__tests__/template.marko_3_update": ["<button class=bump>tally <!></button><p class=greeting>hello <!></p>", " Db%lDb%l"],
	"__tests__/template.marko_3_content": ["<button class=bump>tally <!></button><p class=greeting>hello <!></p>", " Db%lDb%l"],
	"__tests__/template.marko_2_update": [[
		"<button class=count>clicked <!></button>",
		["__tests__/tags/layout.marko"],
		"<!>"
	], [
		" Db%l/",
		["__tests__/tags/layout.marko"],
		"&%b"
	]],
	"__tests__/template.marko_2_content": [[
		"<button class=count>clicked <!></button>",
		["__tests__/tags/layout.marko"],
		"<!>"
	], [
		" Db%l/",
		["__tests__/tags/layout.marko"],
		"&%b"
	]],
	"__tests__/template.marko_0_update": [[["__tests__/tags/frame.marko"], "<!>"], [
		"/",
		["__tests__/tags/frame.marko"],
		"&%b"
	]],
	"__tests__/template.marko": [[["__tests__/tags/frame.marko"], "<!>"], [
		"/",
		["__tests__/tags/frame.marko"],
		"&%b"
	]]
});
