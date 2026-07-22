// data.js
const getLabel = typeof window === "undefined" ? (topic) => `${topic} report` : undefined;

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
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const WidgetX = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<span class=x>Widget X: ${_sep(_persisted_reason())}${_escape(getLabel?.($global().topic))}${_el_resume($scope1_id, "#text/0", _persisted_reason())}</span>`);
		_persisted_reason() && writeScope($scope1_id, {}, "__tests__/template.marko", "6:2");
	}) };
	const WidgetY = { content: _content("__tests__/template.marko_3_content", () => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html(`<section class=y>Widget Y: ${_sep(_persisted_reason())}${_escape(getLabel?.($global().topic))}${_el_resume($scope3_id, "#text/0", _persisted_reason())}</section>`);
		_persisted_reason() && writeScope($scope3_id, {}, "__tests__/template.marko", "9:2");
	}) };
	const Widget = { content: _content("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_dynamic_tag($scope2_id, "#text/0", $global().widget === "y" ? WidgetY : WidgetX, {}, 0, 0, _persisted_reason() | _persisted_reason(), "__tests__/template.marko_2/update_dynamic_#text/0");
		_persisted_reason() && writeScope($scope2_id, {}, "__tests__/template.marko", "12:2");
		_resume_branch($scope2_id);
	}) };
	const Home = { content: _content("__tests__/template.marko_4_content", () => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason();
		_html("<p class=home>welcome home</p>");
		const $childScope = _peek_scope_id();
		Widget.content({});
		_persisted_reason() && writeScope($scope4_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "16:2");
	}) };
	const Dashboard = { content: _content("__tests__/template.marko_5_content", () => {
		const $scope5_id = _scope_id();
		const $scope5_reason = _scope_reason();
		_html("<h2 class=dash>Dashboard</h2>");
		const $childScope2 = _peek_scope_id();
		Widget.content({});
		_persisted_reason() && writeScope($scope5_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", "20:2");
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
	"__tests__/template.marko_5_update": ["<h2 class=dash>Dashboard</h2><!><!><!><!>", "b/b%c&b"],
	"__tests__/template.marko_5_content": ["<h2 class=dash>Dashboard</h2><!><!><!><!>", "b/b%c&b"],
	"__tests__/template.marko_4_update": ["<p class=home>welcome home</p><!><!><!><!>", "b/b%c&b"],
	"__tests__/template.marko_4_content": ["<p class=home>welcome home</p><!><!><!><!>", "b/b%c&b"],
	"__tests__/template.marko_2_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_2_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_0_update": [["<button class=count>clicked <!></button>", ["__tests__/tags/layout.marko"]], [
		" Db%l/",
		["__tests__/tags/layout.marko"],
		"&"
	]],
	"__tests__/template.marko": [["<button class=count>clicked <!></button>", ["__tests__/tags/layout.marko"]], [
		" Db%l/",
		["__tests__/tags/layout.marko"],
		"&"
	]]
});
