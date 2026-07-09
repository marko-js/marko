// data.js
const getNote = typeof window === "undefined" ? (topic) => `${topic} notes` : void 0;

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const Widget = { content: _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<p class=widget>widget: ${_sep(_persisted_reason())}${_escape(_hole_value($scope1_id, "Qa", getNote?.($global().topic), _persisted_reason()))}${_el_resume($scope1_id, "a", _persisted_reason())}</p>`);
		_persisted_reason() && writeScope($scope1_id, {});
	}) };
	_html("<section class=shell>");
	_dynamic_tag($scope0_id, "c", $global().view === "plain" ? "blockquote" : Widget, { class: "hop" }, _content_resume("a1", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`plain: ${_sep(_persisted_reason())}${_escape(_hole_value($scope2_id, "Qa", getNote?.($global().topic), _persisted_reason()))}${_el_resume($scope2_id, "a", _persisted_reason())}`);
		_persisted_reason() && writeScope($scope2_id, {});
	}, $scope0_id), 0, _persisted_reason() | _persisted_reason(), "a2");
	_html("</section>");
	_script($scope0_id, "a3");
	writeScope($scope0_id, { d: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
