// data.js
const getLabel = typeof window === "undefined" ? (topic) => `${topic}` : undefined;

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const PanelA = { content: _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<span class=a>A: ${_sep(_persisted_reason())}${_escape(getLabel?.($global().topic))}${_el_resume($scope1_id, "#text/0", _persisted_reason())}</span>`);
		_persisted_reason() && writeScope($scope1_id, {}, "__tests__/template.marko", "6:2");
	}, $scope0_id) };
	const PanelB = { content: _content_resume("__tests__/template.marko_3_content", () => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html(`<section class=b>B: ${_sep(_persisted_reason())}${_escape(getLabel?.($global().topic))}${_el_resume($scope3_id, "#text/0", _persisted_reason())}</section>`);
		_persisted_reason() && writeScope($scope3_id, {}, "__tests__/template.marko", "9:2");
	}, $scope0_id) };
	_html("<ul>");
	_for_of($global().items, (item) => {
		const $scope2_id = _scope_id();
		_dynamic_tag($scope2_id, "#text/0", item.view === "b" ? PanelB : PanelA, {}, 0, 0, _persisted_reason() | _persisted_reason(), "__tests__/template.marko_2/update_dynamic_#text/0");
		_persisted_reason() && writeScope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "14:4");
	}, function(item) {
		return item.id;
	}, $scope0_id, "#ul/2", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</ul>", 0, "__tests__/template.marko_2_update");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _seed_fill(_state_reason() && count) }, "__tests__/template.marko", 0, {
		count: "3:6",
		PanelA: "6:9",
		PanelB: "9:9"
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_2_update": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_2_content": ["<!><!><!>", "b%c"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><ul></ul>", " Db%l b"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><ul></ul>", " Db%l b"]
});
