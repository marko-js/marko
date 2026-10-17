// tags/v:swatch.marko.css
var v_swatch_marko_default = "\n  .swatch { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19template-19input-1btags-1bswatch-1amarko_0); }\n";

// tags/swatch.marko
var swatch_default = _template("__tests__/tags/swatch.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_color = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19template-19input-1btags-1bswatch-1amarko_0:${_escape_style_value(input.color)};`)}${_el_resume($scope0_id, "#style/0", $wg__input_color)}<div class=swatch></div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/swatch.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_colors = _write_guard($scope0_reason, 2), $wg__input_show__OR__input_color = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.colors, (color) => {
		const $scope1_id = _scope_id();
		_set_scope_reason($wg__input_colors << 1);
		const $childScope = _peek_scope_id();
		swatch_default({ color });
		_write_if($scope0_reason, 2) && _scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:2");
	}, 0, $scope0_id, "#text/0", $wg__input_colors, $wg__input_colors);
	_dynamic_tag($scope0_id, "#text/1", input.show ? swatch_default : null, { color: input.color }, 0, 0, $wg__input_show__OR__input_color);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		input_show: _write_if($scope0_reason, 4) && input.show,
		input_color: _write_if($scope0_reason, 3) && input.color
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_color: ["input.color"]
	});
}, 1);
