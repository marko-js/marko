// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let highlight = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}<div${_attr_class(highlight && input.label)}>${_escape(input.label)}${_el_resume($scope0_id, "#text/2", _serialize_guard($scope0_reason, 0))}</div>${_el_resume($scope0_id, "#div/1", 1 | _persisted_reason())}<span>${_escape(_hole_value($scope0_id, "#text/3", input.count, _persisted_reason()))}${_el_resume($scope0_id, "#text/3", _serialize_guard($scope0_reason, 1))} items</span>`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_label: input.label,
		highlight: _state_reason() && highlight
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		highlight: "1:6"
	});
	_resume_branch($scope0_id);
}, 1);
