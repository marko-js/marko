// tags/panel.marko
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let hits = 0;
	_html(`<button class=panel>${_escape(_hole_value($scope0_id, "PatchHole:#text/1", input.label, _persisted_reason()))}${_el_resume($scope0_id, "#text/1", _serialize_guard($scope0_reason, 0))} hit <!>${_escape(hits)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/panel.marko_0");
	writeScope($scope0_id, { hits: _state_reason() && hits }, "__tests__/tags/panel.marko", 0, { hits: "1:6" });
	_resume_branch($scope0_id);
});

// template.marko
const $Panel_withLoadAssets = withLoadAssets(panel_default, "ready:__tests__/tags/panel.marko", [{ type: "idle" }]);
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 1))}</h1><button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}`);
	_dynamic_tag($scope0_id, "#text/3", input.show ? $Panel_withLoadAssets : null, { label: input.label }, 0, 0, _serialize_guard($scope0_reason, 0) | _persisted_reason(), "__tests__/template.marko_0/update_dynamic_#text/3");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_show: (_serialize_if($scope0_reason, 3) || _patch_reason()) && input.show,
		input_label: (_serialize_if($scope0_reason, 2) || _patch_reason()) && input.label,
		count: _state_reason() && count
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_label: ["input.label"],
		count: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
