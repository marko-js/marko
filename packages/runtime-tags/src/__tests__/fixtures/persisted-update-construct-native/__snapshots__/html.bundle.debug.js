// data.js
const getNote = typeof window === "undefined" ? (topic) => `${topic} notes` : undefined;

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Widget = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p class=widget>widget: ${_sep(_persisted_reason())}${_escape(_hole_value($scope1_id, "PatchHole:#text/0", getNote?.($global().topic), _persisted_reason()))}${_el_resume($scope1_id, "#text/0", _persisted_reason())}</p>`);
		_persisted_reason() && writeScope($scope1_id, {}, "__tests__/template.marko", "6:2");
	}) };
	_html("<section class=shell>");
	_dynamic_tag($scope0_id, "#text/2", $global().view === "plain" ? "blockquote" : Widget, { class: "hop" }, _content_resume("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`plain: ${_sep(_persisted_reason())}${_escape(_hole_value($scope2_id, "PatchHole:#text/0", getNote?.($global().topic), _persisted_reason()))}${_el_resume($scope2_id, "#text/0", _persisted_reason())}`);
		_persisted_reason() && writeScope($scope2_id, {}, "__tests__/template.marko", "11:6");
	}, $scope0_id), 0, _persisted_reason() | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/2");
	_html("</section>");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_2_update": ["plain: <!>", "b%b"],
	"__tests__/template.marko_2_content": ["plain: <!>", "b%b"],
	"__tests__/template.marko_1_update": ["<p class=widget>widget: <!></p>", "Db%l"],
	"__tests__/template.marko_1_content": ["<p class=widget>widget: <!></p>", "Db%l"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><section class=shell><!></section>", " Db%lD%l"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><section class=shell><!></section>", " Db%lD%l"]
});
