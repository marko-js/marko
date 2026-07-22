// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const [cfg] = $global().cfg;
	let count = 0;
	_html(`<button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<select name=sort>`);
	_region(() => {
		forOf(cfg.options, (opt) => {
			const $scope1_id = _scope_id();
			_html(`<option${_attr_option_value(opt.id)}>${_escape(opt.label)}${_el_resume($scope1_id, "#text/1", _persisted_reason())}</option>${_el_resume($scope1_id, "#option/0", _persisted_reason())}`);
			_persisted_reason() && writeScope($scope1_id, {}, "__tests__/template.marko", "5:4");
		});
	}, $scope0_id, "#select/2");
	_html(`</select>${_el_resume($scope0_id, "#select/2", _persisted_reason())}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "2:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button>clicked <!></button><select name=sort></select>", " Db%l b"],
	"__tests__/template.marko": ["<button>clicked <!></button><select name=sort></select>", " Db%l b"]
});
