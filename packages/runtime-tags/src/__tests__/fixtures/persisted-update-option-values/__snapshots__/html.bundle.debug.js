// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const [cfg] = $global().cfg;
	let count = 0;
	_html(`<button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<select name=sort>`);
	_for_of(cfg.options, (opt) => {
		const $scope1_id = _scope_id();
		_html(`<option${_attr_option_value(_hole_value($scope1_id, "UpdateAttr:value:#option/0", opt.id, _persisted_reason()))}>${_escape(_hole_value($scope1_id, "UpdateHole:#text/1", opt.label, _persisted_reason()))}${_el_resume($scope1_id, "#text/1", _persisted_reason())}</option>${_el_resume($scope1_id, "#option/0", _persisted_reason())}`);
		_persisted_reason() && writeScope($scope1_id, {}, "__tests__/template.marko", "5:4");
	}, function(opt) {
		return opt.key;
	}, $scope0_id, "#select/2", _persisted_reason(), _persisted_reason(), _persisted_reason(), "</select>", 1, "__tests__/template.marko_0/update_for_#select/2");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "2:6" });
	_resume_branch($scope0_id);
}, 1);
