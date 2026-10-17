// v:template.marko.css
var v_template_marko_default = "\n    .box { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19define-19dynamic-19tag-1btemplate-1amarko_0); }\n  ";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_color = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Box = { content: _content_resume("__tests__/template.marko_1*content", ({ color }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__color = _write_guard($scope1_reason, 0);
		_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19define-19dynamic-19tag-1btemplate-1amarko_0:${_escape_style_value(color)};`)}${_el_resume($scope1_id, "#style/0", $wg__color)}<div class=box>Hi</div>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", input.show ? Box : null, { color: input.color }, 0, 0, $wg__input_show__OR__input_color);
	_html("<span>after</span>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_show: _write_if($scope0_reason, 2) && input.show,
		input_color: _write_if($scope0_reason, 1) && input.color,
		Box
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_color: ["input.color"],
		Box: "1:9"
	});
}, 1);
