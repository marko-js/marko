// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_options = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	_attr_select_value($scope0_id, "c", _hole_value($scope0_id, "Nvalue:c", input.sort, _persisted_reason()), void 0, () => {
		_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}<select class=sort>`);
		_region(() => {
			forOf(input.options, (opt) => {
				const $scope1_id = _scope_id();
				_html(`<option${_attr_option_value(opt.id)}>${_escape(opt.label)}${_el_resume($scope1_id, "b", $sg__input_options)}</option>${_el_resume($scope1_id, "a", $sg__input_options)}`);
				$sg__input_options && writeScope($scope1_id, {});
			});
		}, $scope0_id, "c", "a1");
		_html("</select>");
	});
	_html(_el_resume($scope0_id, "c", _serialize_guard($scope0_reason, 0)));
	_script($scope0_id, "a2");
	writeScope($scope0_id, { h: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a0": ["<button class=count>clicked <!></button><select class=sort></select>", " Db%l b"],
	"a": ["<button class=count>clicked <!></button><select class=sort></select>", " Db%l b"]
});
