// data.js
const getNote = typeof window === "undefined" ? (topic) => `${topic} brief` : void 0;

// tags/panel.marko
var panel_default = _template("b", (input) => {
	const $sg__input_note = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html(`<p class=note>${_escape(_hole_value($scope0_id, "Qa", input.note, _persisted_reason()))}${_el_resume($scope0_id, "a", $sg__input_note)}</p>`);
	$sg__input_note && writeScope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	_update_child($scope0_id, "Sc", $childScope);
	_set_serialize_reason(_persisted_reason());
	panel_default({ note: getNote?.($global().topic) });
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		d: _state_reason() && count,
		c: _persisted_reason() && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
