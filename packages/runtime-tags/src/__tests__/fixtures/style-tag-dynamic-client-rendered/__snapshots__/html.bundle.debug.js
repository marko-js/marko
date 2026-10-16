// v:template.marko.css
var v_template_marko_default = "\n    .content {\n      color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19client-19rendered-1btemplate-1amarko_0);\n    }\n  ";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_color = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>show</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19client-19rendered-1btemplate-1amarko_0:${_escape_style_value(input.color)};`)}${_el_resume($scope1_id, "#style/0", $wg__input_color)}<div class=content>Hello</div>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { input_color: input.color }, "__tests__/template.marko", 0, { input_color: ["input.color"] });
}, 1);
