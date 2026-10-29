// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let f = input.fmt;
	const o = { f };
	_html(`<button>plain</button>${_el_resume($scope0_id, "#button/0")}<p>${_text_resume($scope0_id, "#text/1", [input.label].map(f).join())}</p><p>${_text_resume($scope0_id, "#text/2", f(input.label))}</p><p>${_text_resume($scope0_id, "#text/3", o.f(input.label))}</p>`);
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		f: $wi__input_label && f,
		o: $wi__input_label && o
	}, "__tests__/tags/outer.marko", 0, {
		input_label: ["input.label"],
		f: "1:6",
		o: "4:8"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const wrap = _resume((v) => "[" + v + "]", "__tests__/template.marko_0/wrap");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_label << 1);
			const $childScope = _peek_scope_id();
			outer_default({
				fmt: wrap,
				label: input.label
			});
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: $wi__input_label && _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_label && _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, {
		input_label: input.label,
		wrap
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		wrap: "1:8"
	});
}, 1);
