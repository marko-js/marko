// data.js
const getNote = typeof window === "undefined" ? (topic) => `${topic} brief` : undefined;

// tags/panel.marko
var panel_default = _template("__tests__/tags/panel.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_note = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<p class=note>${_escape(_hole_value($scope0_id, "PatchHole:#text/0", input.note, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", $sg__input_note)}</p>`);
	$sg__input_note && writeScope($scope0_id, {}, "__tests__/tags/panel.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_update_child($scope0_id, "PatchChild:#childScope/2", $childScope);
	_set_serialize_reason(_persisted_reason());
	panel_default({ note: getNote?.($global().topic) });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		count: _state_reason() && count,
		"#childScope/2": _persisted_reason() && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
