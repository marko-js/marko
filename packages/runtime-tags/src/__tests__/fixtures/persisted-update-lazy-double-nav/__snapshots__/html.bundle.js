// tags/panel.marko
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_warn = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let hits = 0;
	_html(`<button class=panel>${_escape(_hole_value($scope0_id, "Qb", input.label, _persisted_reason()))}${_el_resume($scope0_id, "b", _serialize_guard($scope0_reason, 0))} hit <!>${_escape(hits)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => input.warn ? 0 : void 0, $scope0_id, "d", $sg__input_warn, $sg__input_warn, $sg__input_warn, 0, 1, "b1", [() => {
		const $scope1_id = _scope_id();
		_html("<p class=warn>heads up</p>");
		$sg__input_warn && writeScope($scope1_id, {});
	}]);
	_script($scope0_id, "b0");
	writeScope($scope0_id, { i: _state_reason() && hits });
	_resume_branch($scope0_id);
});

// template.marko
const $Panel_withLoadAssets = withLoadAssets(panel_default, "_b", [{ type: "idle" }]);
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<h1>${_escape(_hole_value($scope0_id, "Qa", input.title, _persisted_reason()))}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 1))}</h1><button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "c")}</button>${_el_resume($scope0_id, "b")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: _serialize_guard($scope0_reason, 2),
		1: _serialize_guard($scope0_reason, 3)
	});
	$Panel_withLoadAssets({
		label: input.label,
		warn: input.warn
	});
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		k: _state_reason() && count,
		e: _serialize_guard($scope0_reason, 0) | _persisted_reason() && _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
