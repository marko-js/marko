// data.js
const getLabel = typeof window === "undefined" ? (topic) => `${topic} report` : void 0;

// tags/shell.marko
var shell_default = _template("b", (input) => {
	const $sg__input_content = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html("<div class=shell>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content | _persisted_reason(), "b0");
	_html("</div>");
	$sg__input_content && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const PanelA = { content: _content("a5", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p class=a>Panel A: ${_sep(_persisted_reason())}${_escape(_hole_value($scope1_id, "Qa", getLabel?.($global().topic), _persisted_reason()))}${_el_resume($scope1_id, "a", _persisted_reason())}</p>`);
		_persisted_reason() && writeScope($scope1_id, {});
	}) };
	const PanelB = { content: _content("a3", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html(`<section class=b>Panel B: ${_sep(_persisted_reason())}${_escape(_hole_value($scope3_id, "Qa", getLabel?.($global().topic), _persisted_reason()))}${_el_resume($scope3_id, "a", _persisted_reason())}</section>`);
		_persisted_reason() && writeScope($scope3_id, {});
	}) };
	const Page = { content: _content("a4", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("<h3 class=page-heading>Page</h3>");
		_dynamic_tag($scope2_id, "a", $global().view === "b" ? PanelB : PanelA, {}, 0, 0, _persisted_reason() | _persisted_reason(), "a0");
		_persisted_reason() && writeScope($scope2_id, {});
		_resume_branch($scope2_id);
	}) };
	const $childScope = _peek_scope_id();
	shell_default({ content: Page });
	_script($scope0_id, "a6");
	writeScope($scope0_id, {
		d: _state_reason() && count,
		c: _persisted_reason() && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
