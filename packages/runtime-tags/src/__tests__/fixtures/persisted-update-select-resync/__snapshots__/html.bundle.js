// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_options = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_attr_select_value($scope0_id, "c", _hole_value($scope0_id, "Nvalue:c", input.sort, _persisted_reason()), void 0, () => {
		_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<select class=sort>`);
		_for_of(input.options, (opt) => {
			const $scope1_id = _scope_id();
			_html(`<option${_attr_option_value(_hole_value($scope1_id, "Nvalue:a", opt.id, _persisted_reason()))}>${_escape(_hole_value($scope1_id, "Qb", opt.label, _persisted_reason()))}${_el_resume($scope1_id, "b", $sg__input_options)}</option>${_el_resume($scope1_id, "a", $sg__input_options)}`);
			$sg__input_options && writeScope($scope1_id, {});
		}, function(opt) {
			return opt.key;
		}, $scope0_id, "c", $sg__input_options, _serialize_guard($scope0_reason, 0), $sg__input_options, "</select>", 1, "a0");
	});
	_script($scope0_id, "a3");
	writeScope($scope0_id, { h: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
