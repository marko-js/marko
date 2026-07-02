// v:template.marko.css
var v_template_marko_default = "\n    .box { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19conditional-1btemplate-1amarko_0); }\n  ";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19conditional-1btemplate-1amarko_0:${_escape_style_value(input.color)};`)}${_el_resume($scope1_id, "#style/0", _serialize_guard($scope0_reason, 2))}<div class=box>Hi</div>`);
			_serialize_if($scope0_reason, 0) && writeScope($scope1_id, { _: _serialize_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _serialize_guard($scope0_reason, 0), $sg__input_show, $sg__input_show);
	_html("<span>after</span>");
	_serialize_if($scope0_reason, 1) && writeScope($scope0_id, { input_color: input.color }, "__tests__/template.marko", 0, { input_color: ["input.color"] });
}, 1);
