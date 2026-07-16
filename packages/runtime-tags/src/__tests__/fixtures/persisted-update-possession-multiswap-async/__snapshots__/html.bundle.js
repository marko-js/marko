// data.js
const getLabel = typeof window === "undefined" ? (topic) => `${topic}` : void 0;
function getReport(topic) {
	if (typeof window !== "undefined") throw new Error("getReport is server-only");
	return resolveAfter(`report for ${topic}`, 1);
}

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const PanelA = { content: _content_resume("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<span class=a>A: ${_sep(_persisted_reason())}${_escape(_hole_value($scope1_id, "Qa", getLabel?.($global().topic), _persisted_reason()))}${_el_resume($scope1_id, "a", _persisted_reason())}</span>`);
		_persisted_reason() && writeScope($scope1_id, {});
	}, $scope0_id) };
	const PanelB = { content: _content_resume("a5", () => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html(`<section class=b>B: ${_sep(_persisted_reason())}${_escape(_hole_value($scope3_id, "Qa", getLabel?.($global().topic), _persisted_reason()))}${_el_resume($scope3_id, "a", _persisted_reason())}</section>`);
		_persisted_reason() && writeScope($scope3_id, {});
	}, $scope0_id) };
	const PanelAsync = { content: _content_resume("a6", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_try($scope4_id, "a", _content_resume("a7", () => {
			const $scope5_id = _scope_id();
			_scope_reason();
			_await($scope5_id, "a", getReport($global().topic), (data) => {
				const $scope7_id = _scope_id();
				_html(`<p class=report>${_escape(_hole_value($scope7_id, "Qa", data, _persisted_reason()))}${_el_resume($scope7_id, "a", _persisted_reason())}</p>`);
				_persisted_reason() && writeScope($scope7_id, {});
			}, _persisted_reason());
		}, $scope4_id), { placeholder: attrTag({ content: _content_resume("a8", () => {
			_scope_reason();
			_scope_id();
			_html("<p class=loading>loading…</p>");
		}, $scope4_id) }) }, "a0");
	}, $scope0_id) };
	_html("<ul>");
	_for_of($global().items, (item) => {
		const $scope2_id = _scope_id();
		_dynamic_tag($scope2_id, "a", item.view === "b" ? PanelB : item.view === "c" ? PanelAsync : PanelA, {}, 0, 0, _persisted_reason() | _persisted_reason(), "a2");
		_persisted_reason() && writeScope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, function(item) {
		return item.id;
	}, $scope0_id, "c", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</ul>", 0, "a1");
	_script($scope0_id, "a11");
	writeScope($scope0_id, { d: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
