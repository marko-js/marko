// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let highlight = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}<div${_attr_class(highlight)}>${_escape(input.label)}${_el_resume($scope0_id, "c", _serialize_guard($scope0_reason, 0))}</div>${_el_resume($scope0_id, "b", 1 | _persisted_reason())}<span>${_escape(_hole_value($scope0_id, "Qd", input.count, _persisted_reason()))}${_el_resume($scope0_id, "d", _serialize_guard($scope0_reason, 1))} items</span>`);
	_script($scope0_id, "a3");
	writeScope($scope0_id, {
		g: input.label,
		i: _state_reason() && highlight
	});
	_resume_branch($scope0_id);
}, 1);
