// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $return = input.x + "!";
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.x, $wg__input_x)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
	return $return;
});

// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_label << 1);
			const $childScope = _peek_scope_id();
			let v = card_default({ x: input.label });
			$wi__input_label && _var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/tags/wrap.marko_1_v#4/var");
			_html(`<p>${_text_resume($scope1_id, "#text/2", v, $wg__input_label)}</p><button class=log>log</button>${_el_resume($scope1_id, "#button/3")}`);
			_script($scope1_id, "__tests__/tags/wrap.marko_1");
			_scope($scope1_id, {
				v,
				_: $wi__input_label && _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_label && _existing_scope($childScope)
			}, "__tests__/tags/wrap.marko", "1:2", { v: "2:9" });
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_label: input.label }, "__tests__/tags/wrap.marko", 0, { input_label: ["input.label"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let label = input.label;
	_html(`<button class=edit>edit</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(34 | _write_guard($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id();
	wrap_default({
		label,
		show: input.show
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		label,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { label: "1:6" });
}, 1);
