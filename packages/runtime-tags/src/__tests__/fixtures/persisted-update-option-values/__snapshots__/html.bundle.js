// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const [cfg] = $global().cfg;
	let count = 0;
	_html(`<button>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<select name=sort>`);
	_region(() => {
		forOf(cfg.options, (opt) => {
			const $scope1_id = _scope_id();
			_html(`<option${_attr_option_value(opt.id)}>${_escape(opt.label)}${_el_resume($scope1_id, "b", _persisted_reason())}</option>${_el_resume($scope1_id, "a", _persisted_reason())}`);
			_persisted_reason() && writeScope($scope1_id, {});
		});
	}, $scope0_id, "c", "a1");
	_html(`</select>${_el_resume($scope0_id, "c", _persisted_reason())}`);
	_script($scope0_id, "a2");
	writeScope($scope0_id, { g: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a0": ["<button>clicked <!></button><select name=sort></select>", " Db%l b"],
	"a": ["<button>clicked <!></button><select name=sort></select>", " Db%l b"]
});
