// v:template.marko.css
var v_template_marko_default = "\n      .later { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19await-19param-1btemplate-1amarko_0); }\n    ";

// v:template.marko.1.css
var v_template_marko_1_default = "\n      .now { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19await-19param-1btemplate-1amarko_1); }\n    ";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_color = _write_guard($scope0_reason, 2), $wi__input_color = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", resolveAfter(input.color, 1), (color) => {
				const $scope2_id = _scope_id();
				_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19await-19param-1btemplate-1amarko_0:${_escape_style_value(color)};`)}${_el_resume($scope2_id, "#style/0", $wg__input_color)}<div class=later></div>`);
				$wi__input_color && _scope($scope2_id, {}, "__tests__/template.marko", "4:4");
			}, $wg__input_color);
			_await($scope1_id, "#text/1", input.color, (color) => {
				const $scope3_id = _scope_id();
				_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19await-19param-1btemplate-1amarko_1:${_escape_style_value(color)};`)}${_el_resume($scope3_id, "#style/0", $wg__input_color)}<div class=now></div>`);
				$wi__input_color && _scope($scope3_id, {}, "__tests__/template.marko", "10:4");
			}, $wg__input_color);
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: $wi__input_color && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_color: input.color }, "__tests__/template.marko", 0, { input_color: ["input.color"] });
}, 1);
