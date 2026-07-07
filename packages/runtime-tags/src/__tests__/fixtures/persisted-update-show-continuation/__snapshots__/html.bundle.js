// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_expanded = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</h1><button class=inc>count <!>${_escape(n)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	const $show = input.expanded;
	_show_start($show, $sg__input_expanded);
	_html(`<p class=detail>${_escape(_hole_value($scope0_id, "Qe", input.detail, _persisted_reason()))}${_el_resume($scope0_id, "e", _serialize_guard($scope0_reason, 2))}</p><span class=extra>${_escape(_hole_value($scope0_id, "Qf", input.extra, _persisted_reason()))}${_el_resume($scope0_id, "f", _serialize_guard($scope0_reason, 3))}</span>`);
	_show_end($scope0_id, "g", $show, $sg__input_expanded, $sg__input_expanded);
	_script($scope0_id, "a2");
	writeScope($scope0_id, { n: _state_reason() && n });
	_resume_branch($scope0_id);
}, 1);
