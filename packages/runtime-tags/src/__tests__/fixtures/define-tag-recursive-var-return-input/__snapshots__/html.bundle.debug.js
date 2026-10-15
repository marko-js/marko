// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Rec = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__input_label = _write_guard($scope1_reason, 2), $wg__input_depth__OR__input_label = _write_guard($scope1_reason, 0), $wg__input_depth = _write_guard($scope1_reason, 1);
		_if(() => {
			if (input.depth) {
				const $scope2_id = _scope_id();
				_set_scope_reason($wg__input_depth__OR__input_label << 1 | $wg__input_depth << 3 | $wg__input_label << 5);
				const $childScope = _peek_scope_id();
				let child = Rec.content({
					depth: input.depth - 1,
					label: input.label
				});
				_var($scope2_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_2_child#3/var");
				_html(`<span>${_text_resume($scope2_id, "#text/2", child, $wg__input_label)}</span>`);
				_write_if($scope1_reason, 0) && _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "2:4");
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__input_depth__OR__input_label, $wg__input_depth);
		const $return = input.label;
		_write_if($scope1_reason, 1) && _scope($scope1_id, { input_label: input.label }, "__tests__/template.marko", "1:2", { input_label: ["input.label", "1:13"] });
		return $return;
	}, $scope0_id) };
	let label = "a";
	Rec.content({
		depth: 1,
		label: "x"
	});
	_set_scope_reason(34);
	const $childScope2 = _peek_scope_id();
	Rec.content({
		depth: 1,
		label
	});
	_html(`<button>${_text_resume($scope0_id, "#text/3", label)}</button>${_el_resume($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		label,
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { label: "8:6" });
}, 1);
