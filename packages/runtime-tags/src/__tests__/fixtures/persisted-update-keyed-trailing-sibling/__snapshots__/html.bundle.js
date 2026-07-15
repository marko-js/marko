// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<ul>`);
	_for_of($global().items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(_hole_value($scope1_id, "Qa", item.id, _persisted_reason()))}${_el_resume($scope1_id, "a", _persisted_reason())}:${_sep(_persisted_reason())}${_escape(_hole_value($scope1_id, "Qb", item.label, _persisted_reason()))}${_el_resume($scope1_id, "b", _persisted_reason())}</li>`);
		_persisted_reason() && writeScope($scope1_id, {});
	}, "id", $scope0_id, "c", _persisted_reason(), _persisted_reason(), _persisted_reason(), 0, 1, "a1");
	_html("<li class=trailing>end</li></ul>");
	_script($scope0_id, "a0");
	writeScope($scope0_id, { d: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
