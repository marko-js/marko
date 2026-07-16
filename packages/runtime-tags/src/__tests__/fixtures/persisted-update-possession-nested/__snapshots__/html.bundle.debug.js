// data.js
const getLabel = typeof window === "undefined" ? (topic) => `${topic} report` : undefined;

// tags/shell.marko
var shell_default = _template("__tests__/tags/shell.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div class=shell>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $sg__input_content | _persisted_reason(), "__tests__/tags/shell.marko_0/update_dynamic_#text/0");
	_html("</div>");
	$sg__input_content && writeScope($scope0_id, {}, "__tests__/tags/shell.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const PanelA = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p class=a>Panel A: ${_sep(_persisted_reason())}${_escape(_hole_value($scope1_id, "PatchHole:#text/0", getLabel?.($global().topic), _persisted_reason()))}${_el_resume($scope1_id, "#text/0", _persisted_reason())}</p>`);
		_persisted_reason() && writeScope($scope1_id, {}, "__tests__/template.marko", "6:2");
	}) };
	const PanelB = { content: _content("__tests__/template.marko_3_content", () => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html(`<section class=b>Panel B: ${_sep(_persisted_reason())}${_escape(_hole_value($scope3_id, "PatchHole:#text/0", getLabel?.($global().topic), _persisted_reason()))}${_el_resume($scope3_id, "#text/0", _persisted_reason())}</section>`);
		_persisted_reason() && writeScope($scope3_id, {}, "__tests__/template.marko", "9:2");
	}) };
	const Page = { content: _content("__tests__/template.marko_2_content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html("<h3 class=page-heading>Page</h3>");
		_dynamic_tag($scope2_id, "#text/0", $global().view === "b" ? PanelB : PanelA, {}, 0, 0, _persisted_reason() | _persisted_reason(), "__tests__/template.marko_2/update_dynamic_#text/0");
		_persisted_reason() && writeScope($scope2_id, {}, "__tests__/template.marko", "13:2");
		_resume_branch($scope2_id);
	}) };
	const $childScope = _peek_scope_id();
	shell_default({ content: Page });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"#childScope/2": _persisted_reason() && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
