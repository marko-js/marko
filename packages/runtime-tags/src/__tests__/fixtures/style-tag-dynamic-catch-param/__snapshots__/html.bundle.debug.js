// v:template.marko.css
var v_template_marko_default = "\n        .caught { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19catch-19param-1btemplate-1amarko_0); }\n      ";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(_escape((() => {
					throw new Error("red");
				})()));
			}, void 0, (err) => {
				const $scope3_reason = _scope_reason(), $wg__err_message = _write_guard($scope3_reason, 0);
				const $scope3_id = _scope_id();
				_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19catch-19param-1btemplate-1amarko_0:${_escape_style_value(err.message)};`)}${_el_resume($scope3_id, "#style/0", $wg__err_message)}<div class=caught></div>`);
				_write_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "4:6");
			}, void 0, "__tests__/template.marko_3*content");
			$wi__input_show && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_show, $wg__input_show);
	$wi__input_show && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
