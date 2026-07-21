// tags/layout.marko
var layout_default = _template("c", (input) => {
	const $sg__input_content = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html("<aside class=rail>rail</aside><main class=page>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content | _persisted_reason(), "c0");
	_html("</main>");
	$sg__input_content && writeScope($scope0_id, {});
});
_renderer_shells({
	"c1": ["<aside class=rail>rail</aside><main class=page><!></main>", "bD%l"],
	"c": ["<aside class=rail>rail</aside><main class=page><!></main>", "bD%l"]
});

// tags/frame.marko
var frame_default = _template("b", (input) => {
	const $sg__input_content = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html("<section class=frame>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content | _persisted_reason(), "b0");
	_html("</section>");
	$sg__input_content && writeScope($scope0_id, {});
});
_renderer_shells({
	"b1": ["<section class=frame><!></section>", "D%l"],
	"b": ["<section class=frame><!></section>", "D%l"]
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Home = { content: _content("a1", () => {
		_scope_id();
		_scope_reason();
		_html("<p class=home>welcome home</p>");
	}) };
	const Dashboard = { content: _content("a2", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		let tally = 0;
		_html(`<button class=bump>tally <!>${_escape(tally)}${_el_resume($scope3_id, "b")}</button>${_el_resume($scope3_id, "a")}<p class=greeting>hello ${_sep(_persisted_reason())}${_escape(_hole_value($scope3_id, "Qc", $global().user, _persisted_reason()))}${_el_resume($scope3_id, "c", _persisted_reason())}</p>`);
		_script($scope3_id, "a3");
		writeScope($scope3_id, { d: _state_reason() && tally });
		_resume_branch($scope3_id);
	}) };
	const $childScope2 = _peek_scope_id();
	frame_default({ content: _content("a5", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		let count = 0;
		_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope2_id, "b")}</button>${_el_resume($scope2_id, "a")}`);
		const $childScope = _peek_scope_id();
		_set_serialize_reason(_persisted_reason());
		layout_default({ content: $global().view === "dashboard" ? Dashboard : Home });
		_script($scope2_id, "a4");
		writeScope($scope2_id, {
			d: _state_reason() && count,
			c: _persisted_reason() && _existing_scope($childScope)
		});
		_resume_branch($scope2_id);
	}) });
	_persisted_reason() && writeScope($scope0_id, { a: _existing_scope($childScope2) });
}, 1);
_renderer_shells({
	"a6": ["<button class=bump>tally <!></button><p class=greeting>hello <!></p>", " Db%lDb%l"],
	"a2": ["<button class=bump>tally <!></button><p class=greeting>hello <!></p>", " Db%lDb%l"],
	"a7": [["<button class=count>clicked <!></button>", ["c"]], [
		" Db%l/",
		["c"],
		"&"
	]],
	"a5": [["<button class=count>clicked <!></button>", ["c"]], [
		" Db%l/",
		["c"],
		"&"
	]],
	"a8": ["<p class=home>welcome home</p>", "b"],
	"a1": ["<p class=home>welcome home</p>", "b"],
	"a0": [[["b"]], [
		"/",
		["b"],
		"&"
	]],
	"a": [[["b"]], [
		"/",
		["b"],
		"&"
	]]
});
