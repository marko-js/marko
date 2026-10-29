// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fmt;
	_html(`<button>plain</button>${_el_resume($scope0_id, "#button/0")}<p>${_text_resume($scope0_id, "#text/1", f(input.label))}</p><div>${_html_resume($scope0_id, "#text/2", f(input.label))}</div><i${_attr("title", f(input.label))}${_attr_class(f(input.label))}${_attr_style({ color: f(input.label).length > 3 ? "red" : "blue" })}></i>${_el_resume($scope0_id, "#i/3")}<section><!--${_escape_comment(f(input.label)) || " "}-->${_el_resume($scope0_id, "#comment/4")}</section>`);
	const $show = f(input.label) !== "w-c";
	_show_start($show, 0);
	_html("<em>shown</em>");
	_show_end($scope0_id, "#text/6", $show, 1, 0, 0, 1);
	_html(`<title>${_escape(f(input.label))}</title>${_el_resume($scope0_id, "#title/7")}`);
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		f: _write_if($scope0_reason, 0) && f
	}, "__tests__/tags/outer.marko", 0, {
		input_label: ["input.label"],
		f: "1:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const wrap = _resume((v) => "w-" + v, "__tests__/template.marko_0/wrap");
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
