// v:template.marko.css
var v_template_marko_default = "\n    .box { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19loop-19param-1btemplate-1amarko_0); }\n  ";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_colors = _write_guard($scope0_reason, 0), $wi__input_colors = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.colors, (color) => {
		const $scope1_id = _scope_id();
		_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19loop-19param-1btemplate-1amarko_0:${_escape_style_value(color)};`)}${_el_resume($scope1_id, "#style/0", $wg__input_colors)}<div class=box>${_text_resume($scope1_id, "#text/1", color, $wg__input_colors)}</div>`);
		$wi__input_colors && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, 0, $scope0_id, "#text/0", $wg__input_colors, $wg__input_colors);
	_html("<span>after</span>");
	$wi__input_colors && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
