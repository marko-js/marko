// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const [cfg] = $global().cfg;
	let count = 0;
	_html(`<button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<select name=sort>`);
	_for_of(cfg.options, (opt) => {
		const $scope1_id = _scope_id();
		_html(`<option${_attr_option_value(_hole_value($scope1_id, "Nvalue:a", opt.id, _persisted_reason()))}>${_escape(_hole_value($scope1_id, "Qb", opt.label, _persisted_reason()))}${_el_resume($scope1_id, "b", _persisted_reason())}</option>${_el_resume($scope1_id, "a", _persisted_reason())}`);
		_persisted_reason() && writeScope($scope1_id, {});
	}, function(opt) {
		return opt.key;
	}, $scope0_id, "c", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</select>", 1, "a0");
	_script($scope0_id, "a3");
	writeScope($scope0_id, { g: _state_reason() && count });
	_resume_branch($scope0_id);
}, 1);
