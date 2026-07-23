// data.js
const getLabel = typeof window === "undefined" ? (topic) => `${topic} report` : void 0;
const getMotto = typeof window === "undefined" ? () => "always in stock" : void 0;

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
	const PanelA = { content: _content("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p class=a>Panel A: ${_sep(_persisted_reason())}${_escape(getLabel?.($global().topic))}${_el_resume($scope1_id, "a", _persisted_reason())}</p><span class=a2>alpha detail</span><em class=a3>${_escape(getMotto?.())}</em>`);
		_persisted_reason() && writeScope($scope1_id, {});
	}) };
	const PanelB = { content: _content("a2", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<section class=b>Panel B: ${_sep(_persisted_reason())}${_escape(getLabel?.($global().topic))}${_el_resume($scope2_id, "a", _persisted_reason())}</section><span class=b2>beta detail</span>`);
		_persisted_reason() && writeScope($scope2_id, {});
	}) };
	const $childScope = _peek_scope_id();
	_set_serialize_reason(_persisted_reason());
	layout_default({ content: $global().view === "b" ? PanelB : PanelA });
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		e: _state_reason() && count,
		c: _persisted_reason() && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a0": [[
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
