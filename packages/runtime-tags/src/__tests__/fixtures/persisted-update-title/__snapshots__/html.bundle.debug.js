// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<title>${_escape(_hole_value($scope0_id, "PatchAttr:textContent:#title/2", `App — ${_to_text($global().docTitle)}`, _persisted_reason()))}</title>${_el_resume($scope0_id, "#title/2", _persisted_reason())}<p>${_escape(_hole_value($scope0_id, "PatchHole:#text/3", $global().docTitle, _persisted_reason()))}${_el_resume($scope0_id, "#text/3", _persisted_reason())}</p><output></output>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
