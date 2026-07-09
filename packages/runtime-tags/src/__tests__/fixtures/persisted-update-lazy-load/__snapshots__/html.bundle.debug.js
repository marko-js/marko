// tags/panel.marko
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let hits = 0;
	_html(`<button class=panel>${_escape(_hole_value($scope0_id, "UpdateHole:#text/1", input.label, _persisted_reason()))}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 0))} hit <!>${_escape(hits)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/panel.marko_0");
	writeScope($scope0_id, { hits: _state_reason() && hits }, "__tests__/tags/panel.marko", 0, { hits: "1:6" });
	_resume_branch($scope0_id);
});

// template.marko
const $Panel_withLoadAssets = withLoadAssets(panel_default, "ready:__tests__/tags/panel.marko", [{ type: "idle" }]);
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "UpdateHole:#text/0", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</h1><button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason($sg__input_label);
	$Panel_withLoadAssets({ label: input.label });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"#childScope/4": ($sg__input_label || _persisted_reason()) && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
