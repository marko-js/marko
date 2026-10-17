// v:template.marko.css
var v_template_marko_default = "\n    .box { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bcustom-19tag-19var-19return-19before-19sibling-19setup-1btemplate-1amarko_0); }\n  ";

// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = "blue";
	return $return;
});

// tags/v:swatch.marko.css
var v_swatch_marko_default = "\n  .swatch { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bcustom-19tag-19var-19return-19before-19sibling-19setup-1btags-1bswatch-1amarko_0); }\n";

// tags/swatch.marko
var swatch_default = _template("__tests__/tags/swatch.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_color = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bcustom-19tag-19var-19return-19before-19sibling-19setup-1btags-1bswatch-1amarko_0:${_escape_style_value(input.color)};`)}${_el_resume($scope0_id, "#style/0", $wg__input_color)}<div class=swatch></div>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/swatch.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Box = { content: _content("__tests__/template.marko_1*content", ({ color }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__color = _write_guard($scope1_reason, 0);
		_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bcustom-19tag-19var-19return-19before-19sibling-19setup-1btemplate-1amarko_0:${_escape_style_value(color)};`)}${_el_resume($scope1_id, "#style/0", $wg__color)}<div class=box></div>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	const Later = { content: _content("__tests__/template.marko_3*content", ({ value }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__value = _write_guard($scope3_reason, 0);
		_await($scope3_id, "#text/0", value, (v) => {
			const $scope4_id = _scope_id();
			_html(`<span>${_text_resume($scope4_id, "#text/0", v, $wg__value)}</span>`);
			_write_if($scope3_reason, 0) && _scope($scope4_id, {}, "__tests__/template.marko", "9:4");
		}, $wg__value);
	}, $scope0_id) };
	let top = child_default({});
	swatch_default({ color: top });
	let open = false;
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "#button/3")}`);
	_if(() => {
		if (open) {
			const $scope2_id = _scope_id();
			let color = child_default({});
			Box.content({ color });
			swatch_default({ color });
			Later.content({ value: color });
			_scope($scope2_id, {}, "__tests__/template.marko", "19:2");
			return 0;
		}
	}, $scope0_id, "#text/4");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "17:6" });
}, 1);
