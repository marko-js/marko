// data.js
const getLabel = typeof window === "undefined" ? (topic) => `${topic} report` : void 0;

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
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const WidgetX = { content: _content("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<span class=x>Widget X: ${_sep(_persisted_reason())}${_escape(getLabel?.($global().topic))}${_el_resume($scope1_id, "a", _persisted_reason())}</span>`);
		_persisted_reason() && writeScope($scope1_id, {});
	}) };
	const WidgetY = { content: _content("a3", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html(`<section class=y>Widget Y: ${_sep(_persisted_reason())}${_escape(getLabel?.($global().topic))}${_el_resume($scope3_id, "a", _persisted_reason())}</section>`);
		_persisted_reason() && writeScope($scope3_id, {});
	}) };
	const Widget = { content: _content("a4", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_dynamic_tag($scope2_id, "a", $global().widget === "y" ? WidgetY : WidgetX, {}, 0, 0, _persisted_reason() | _persisted_reason(), "a0");
		_persisted_reason() && writeScope($scope2_id, {});
		_resume_branch($scope2_id);
	}) };
	const Home = { content: _content("a5", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_html("<p class=home>welcome home</p>");
		const $childScope = _peek_scope_id();
		Widget.content({});
		_persisted_reason() && writeScope($scope4_id, { a: _existing_scope($childScope) });
	}) };
	const Dashboard = { content: _content("a6", () => {
		const $scope5_id = _scope_id();
		_scope_reason();
		_html("<h2 class=dash>Dashboard</h2>");
		const $childScope2 = _peek_scope_id();
		Widget.content({});
		_persisted_reason() && writeScope($scope5_id, { a: _existing_scope($childScope2) });
	}) };
	const $childScope3 = _peek_scope_id();
	_set_serialize_reason(_persisted_reason());
	layout_default({ content: $global().view === "dashboard" ? Dashboard : Home });
	_script($scope0_id, "a7");
	writeScope($scope0_id, {
		e: _state_reason() && count,
		c: _persisted_reason() && _existing_scope($childScope3)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a8": ["<h2 class=dash>Dashboard</h2><!><!><!><!>", "b/b%c&b"],
	"a6": ["<h2 class=dash>Dashboard</h2><!><!><!><!>", "b/b%c&b"],
	"a9": ["<p class=home>welcome home</p><!><!><!><!>", "b/b%c&b"],
	"a5": ["<p class=home>welcome home</p><!><!><!><!>", "b/b%c&b"],
	"a10": ["<!><!><!>", "b%c"],
	"a4": ["<!><!><!>", "b%c"],
	"a1": [[
		"<button class=count>clicked <!></button>",
		["b"],
		"<!>"
	], [
		" Db%l/",
		["b"],
		"&%b"
	]],
	"a": [[
		"<button class=count>clicked <!></button>",
		["b"],
		"<!>"
	], [
		" Db%l/",
		["b"],
		"&%b"
	]]
});
