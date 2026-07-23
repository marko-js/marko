// data.js
const getSession = typeof window === "undefined" ? (user) => ({
	greeting: `hello ${user}`,
	plan: user === "ada" ? "pro" : "free"
}) : undefined;
const getMetrics = typeof window === "undefined" ? (range) => [
	{
		name: "views",
		value: range === "week" ? 70 : 10
	},
	{
		name: "clicks",
		value: range === "week" ? 21 : 3
	},
	range === "week" && {
		name: "sales",
		value: 7
	}
].filter(Boolean) : undefined;

// tags/store.marko
var store_default = _template("__tests__/tags/store.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 0;
	const $return = value;
	_script($scope0_id, "__tests__/tags/store.marko_0");
	writeScope($scope0_id, {
		value: _state_reason() && value,
		"#TagVariableChange": _state_reason() && (_resume(function(next) {
			value = next + $global().step;
		}, "__tests__/tags/store.marko_0/valueChange", $scope0_id) || void 0)
	}, "__tests__/tags/store.marko", 0, { value: "3:6" });
	_resume_branch($scope0_id);
	return $return;
});
_renderer_shells({
	"__tests__/tags/store.marko_0_update": ["", ""],
	"__tests__/tags/store.marko": ["", ""]
});

// tags/widget.marko
var widget_default = _template("__tests__/tags/widget.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button class=widget>${_escape(_hole_value($scope0_id, "PatchHole:#text/1", input.label, _persisted_reason()))}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 0))} clicked <!>${_escape(clicks)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/widget.marko_0");
	writeScope($scope0_id, { clicks: _state_reason() && clicks }, "__tests__/tags/widget.marko", 0, { clicks: "1:6" });
	_resume_branch($scope0_id);
});
_renderer_shells({
	"__tests__/tags/widget.marko_0_update": ["<button class=widget><!> clicked <!></button>", " D%c%l"],
	"__tests__/tags/widget.marko": ["<button class=widget><!> clicked <!></button>", " D%c%l"]
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
	const Dashboard = { content: _content("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		const session = getSession?.($global().user);
		_html(`<h2 class=greeting>${_escape(_hole_value($scope2_id, "PatchHole:#text/0", session.greeting, _persisted_reason()))}${_el_resume($scope2_id, "#text/0", _persisted_reason())}</h2>`);
		const $childScope = _peek_scope_id();
		let tally = store_default({});
		_var($scope2_id, "#scopeOffset/2", $childScope, "__tests__/template.marko_2_tally/var");
		_html(`<button class=bump>tally <!>${_escape(tally)}${_el_resume($scope2_id, "#text/5")}</button>${_el_resume($scope2_id, "#button/4")}`);
		const $childScope2 = _peek_scope_id();
		_set_serialize_reason(_persisted_reason());
		widget_default({ label: session.plan });
		_html("<ul class=metrics>");
		_region(() => {
			forOf(getMetrics?.($global().range), (metric) => {
				const $scope3_id = _scope_id();
				_html(`<li${metric.name === $global().focus ? " class=focus" : ""}>${_escape(metric.name)}${_el_resume($scope3_id, "#text/1", _persisted_reason())}: ${_sep(_persisted_reason())}${_escape(metric.value)}${_el_resume($scope3_id, "#text/2", _persisted_reason())}</li>${_el_resume($scope3_id, "#li/0", _persisted_reason())}`);
				_persisted_reason() && writeScope($scope3_id, {}, "__tests__/template.marko", "16:6");
			});
		}, $scope2_id, "#ul/8");
		_html(`</ul>${_el_resume($scope2_id, "#ul/8", _persisted_reason())}`);
		_if(() => $global().admin ? 0 : undefined, $scope2_id, "#text/9", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "__tests__/template.marko_2/update_if_#text/9", [() => {
			const $scope4_id = _scope_id();
			_html("<p class=admin>admin tools enabled</p>");
			_persisted_reason() && writeScope($scope4_id, {}, "__tests__/template.marko", "20:4");
		}], [0]);
		_script($scope2_id, "__tests__/template.marko_2");
		writeScope($scope2_id, {
			tally: _state_reason() && tally,
			"#childScope/1": _existing_scope($childScope),
			"#childScope/6": _persisted_reason() && _existing_scope($childScope2)
		}, "__tests__/template.marko", "9:2", { tally: "12:10" });
	}) };
	const $childScope3 = _peek_scope_id();
	_set_serialize_reason(_persisted_reason());
	layout_default({ content: $global().view === "dashboard" ? Dashboard : Home });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"#childScope/2": _persisted_reason() && _existing_scope($childScope3)
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_2_update": [[
		"<h2 class=greeting> </h2>",
		["__tests__/tags/store.marko"],
		"<!><button class=bump>tally <!></button>",
		["__tests__/tags/widget.marko"],
		"<!><ul class=metrics></ul><!><!>"
	], [
		"D l0",
		["__tests__/tags/store.marko"],
		"&%b Db%l/",
		["__tests__/tags/widget.marko"],
		"&%b b%c"
	]],
	"__tests__/template.marko_2_content": [[
		"<h2 class=greeting> </h2>",
		["__tests__/tags/store.marko"],
		"<!><button class=bump>tally <!></button>",
		["__tests__/tags/widget.marko"],
		"<!><ul class=metrics></ul><!><!>"
	], [
		"D l0",
		["__tests__/tags/store.marko"],
		"&%b Db%l/",
		["__tests__/tags/widget.marko"],
		"&%b b%c"
	]],
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
