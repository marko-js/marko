// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<title>${_escape(_hole_value($scope0_id, "NtextContent:c", `App — ${_to_text($global().docTitle)}`, _persisted_reason()))}</title>${_el_resume($scope0_id, "c", _persisted_reason())}<meta name=description${_attr("content", _hole_value($scope0_id, "Ncontent:d", `${$global().docTitle} overview`, _persisted_reason()))}>${_el_resume($scope0_id, "d", _persisted_reason())}<link rel=canonical${_attr("href", _hole_value($scope0_id, "Nhref:e", `https://example.test${$global().docPath}`, _persisted_reason()))}>${_el_resume($scope0_id, "e", _persisted_reason())}<p>${_escape(_hole_value($scope0_id, "Qf", $global().docTitle, _persisted_reason()))}${_el_resume($scope0_id, "f", _persisted_reason())}</p><output></output>`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { g: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
