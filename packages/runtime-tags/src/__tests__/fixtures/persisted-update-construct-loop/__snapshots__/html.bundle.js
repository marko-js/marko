// data.js
const getLabel = typeof window === "undefined" ? (topic) => `${topic}` : void 0;
const serverLoopSentinel = typeof window === "undefined" ? () => "server-only loop sentinel" : void 0;

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const PanelA = { content: _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<span class=a>A: ${_sep(_persisted_reason())}${_escape(getLabel?.($global().topic))}${_el_resume($scope1_id, "a", _persisted_reason())}</span>`);
		_persisted_reason() && writeScope($scope1_id, {});
	}, $scope0_id) };
	const PanelB = { content: _content_resume("a3", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html(`<section class=b>B: ${_sep(_persisted_reason())}${_escape(getLabel?.($global().topic))}${_el_resume($scope3_id, "a", _persisted_reason())}</section>`);
		_persisted_reason() && writeScope($scope3_id, {});
	}, $scope0_id) };
	_html("<ul>");
	_for_of($global().items, (item) => {
		const $scope2_id = _scope_id();
		_html(`<em>LOOP_ONLY_MARKUP</em>${_escape(_hole_value($scope2_id, "Qa", serverLoopSentinel?.(), _persisted_reason()))}${_el_resume($scope2_id, "a")}`);
		_dynamic_tag($scope2_id, "b", item.view === "b" ? PanelB : PanelA, {}, 0, 0, _persisted_reason() | _persisted_reason(), "a0");
		_persisted_reason() && writeScope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, function(item) {
		return item.id;
	}, $scope0_id, "c", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</ul>", 0, "a4");
	_script($scope0_id, "a5");
	writeScope($scope0_id, { d: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a4": ["<em>LOOP_ONLY_MARKUP</em><!><!><!>", "b%b%c"],
	"a6": ["<em>LOOP_ONLY_MARKUP</em><!><!><!>", "b%b%c"],
	"a1": ["<button class=count>clicked <!></button><ul></ul>", " Db%l b"],
	"a": ["<button class=count>clicked <!></button><ul></ul>", " Db%l b"]
});
