// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_options = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_attr_select_value($scope0_id, "#select/2", _hole_value($scope0_id, "PatchAttr:value:#select/2", input.sort, _persisted_reason()), void 0, () => {
		_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}<select class=sort>`);
		_region(() => {
			forOf(input.options, (opt) => {
				const $scope1_id = _scope_id();
				_html(`<option${_attr_option_value(opt.id)}>${_escape(opt.label)}${_el_resume($scope1_id, "#text/1", $sg__input_options)}</option>${_el_resume($scope1_id, "#option/0", $sg__input_options)}`);
				$sg__input_options && writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
			});
		}, $scope0_id, "#select/2");
		_html("</select>");
	});
	_html(_el_resume($scope0_id, "#select/2", _serialize_guard($scope0_reason, 0)));
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _state_reason() && count }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><select class=sort></select>", " Db%l b"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><select class=sort></select>", " Db%l b"]
});
