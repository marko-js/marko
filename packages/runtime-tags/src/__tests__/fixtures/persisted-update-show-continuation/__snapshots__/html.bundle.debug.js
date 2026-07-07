// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_expanded = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "UpdateHole:#text/0", input.title, _persisted_reason()))}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</h1><button class=inc>count <!>${_escape(n)}${_el_resume($scope0_id, "#text/2")}</button>${_el_resume($scope0_id, "#button/1")}`);
	const $show = input.expanded;
	_show_start($show, $sg__input_expanded);
	_html(`<p class=detail>${_escape(_hole_value($scope0_id, "UpdateHole:#text/4", input.detail, _persisted_reason()))}${_el_resume($scope0_id, "#text/4", _serialize_guard($scope0_reason, 2))}</p><span class=extra>${_escape(_hole_value($scope0_id, "UpdateHole:#text/5", input.extra, _persisted_reason()))}${_el_resume($scope0_id, "#text/5", _serialize_guard($scope0_reason, 3))}</span>`);
	_show_end($scope0_id, "#text/6", $show, $sg__input_expanded, $sg__input_expanded);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { n: _state_reason() && n }, "__tests__/template.marko", 0, { n: "1:6" });
	_resume_branch($scope0_id);
}, 1);
